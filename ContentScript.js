// function to remove the line break itself
async function copyText() {
  try {
    const text = navigator.clipboard;
    str = window.getSelection().toString();
    str1 = str.replace(/(\r\n|\n|\r)/gm, " ");
    await text.writeText(str1);
    console.log('Text without line breaks copied to clipboard: ',str1);
  } catch (err) {
    // Error logging
    console.error('Failed to copy: ', err);
  }
}

// listener for a message from BackgroundScripts
chrome.runtime.onMessage.addListener(function(request){
  console.log('copy command was pressed');
  copyText()
})

