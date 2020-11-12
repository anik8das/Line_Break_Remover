
chrome.commands.onCommand.addListener(function (command) {
    if (command === "copy") {
        yo = window.getSelection().toString();
        if(yo){
            alert(yo)
        }else{
            alert("hi")
        }
    }
});