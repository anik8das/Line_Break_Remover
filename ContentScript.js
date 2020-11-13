
async function copyPageUrl() {
  try {
    yo = window.getSelection().toString();
    yon = yo.replace(/(\r\n|\n|\r)/gm, " ");
    await navigator.clipboard.writeText(yon);
    console.log('Page URL copied to clipboard');
    console.log(yon);
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}

chrome.runtime.onMessage.addListener(function(request){
  alert(request);
  console.log('copy was pressed');
  copyPageUrl()
})

