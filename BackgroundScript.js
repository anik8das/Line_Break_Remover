
chrome.commands.onCommand.addListener(function (command) {
    if (command === "copy") {
        chrome.tabs.query({'currentWindow':true,'active':true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id,'copying');
        })
        }
    }
);
