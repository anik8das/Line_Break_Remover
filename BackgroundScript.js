// Adding a listener for commands
chrome.commands.onCommand.addListener(function (command) {
    // Sending a message to ContentScripts if the command is activated
    if (command === "copy") {
        chrome.tabs.query({'currentWindow':true,'active':true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id,'copying');
        })
        }
    }
);
