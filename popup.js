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
    const { url = '' } = tab;
    const field = document.getElementById('uprParam');
    const output = document.getElementById('output');

    const url_string = "http://www.example.com/t.html?a=1&b=3&c=m2-m3-m4-m5"; //window.location.href

    const test_url = new URL(url_string);
    const c = test_url.searchParams.get("c");

    output.value=(c);
    
    addToClipBoard();
  });
}
