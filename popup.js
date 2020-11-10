document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('checkPage');

  btn.addEventListener('click', getUrlParam, false);
}, false);


const addToClipBoard = () => {
  var copyText = document.getElementById("output");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
};

const getUrlParam = () => {
  chrome.tabs.getSelected(null, function(tab) {
    let { url = '' } = tab;
    const output = document.getElementById('output');

    if(url.indexOf("?") > 0) {
    } else {
      url.replace('#', '?');
    }
  
    const test_url = new URL(url);
    const id = test_url.searchParams.get('id');
    const sub = test_url.searchParams.get('sub');

    console.log(url);
    console.log(test_url);
    console.log(id, sub);

    output.value=(`${id}&sub=${sub}`);
    // addToClipBoard();
  });
}
