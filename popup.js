document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('checkPage');

  btn.addEventListener('click', getUrlParam, false);
}, false);


const addToClipBoard = () => {
  var copyText = document.getElementById("output");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
};

const getUrlParam = () => {
  chrome.tabs.getSelected(null, function(tab) {
    let { url = '' } = tab;
    const output = document.getElementById('output');
    const btn = document.getElementById('checkPage');

    const parsedUrl = (url.indexOf("?") > 0)
      ? url
      : url.replace('#', '?');
  
    const test_url = new URL(parsedUrl);
    const id = test_url.searchParams.get('id') || '';
    const sub = test_url.searchParams.get('sub') || '';

    output.value=(`${id}&sub=${sub}`);
    btn.innerHTML = 'Copied!!!!'
    addToClipBoard();
  });
}
