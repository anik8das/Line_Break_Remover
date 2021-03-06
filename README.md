# Line_Break_Remover
A Chrome extension to leave out line breaks when copying from PDFs. Isn't it annoying when websites have line breaks within paragraphs and the copied text turns out to be ridiculously formatted? This extension provides a simple solution of replacing the line breaks copied string with spaces when Ctrl+Shift+X (Key combination can be modified in Manifest.JSON file) is pressed. 

## Steps to try it out:
1. Clone the repository 
2. Go to Chrome -> Extensions (Jigsaw piece on the toolbar) -> Manage extensions
3. Enable developer mode (Top right toggle)
4. Click on load unpacked and select the cloned folder
5. Restart Chrome and try it out!

## Update as of January 2021
Chrome version 72 and above have added additional security measures for communication between Background and Content scripts, leading to a connection error on widespread extensions for which a concrete solution hasn't been found yet: <br>
[Github link](https://github.com/MetaMask/metamask-extension/issues/9407) <br>
[StackOverflow link](https://stackoverflow.com/questions/54181734/chrome-extension-message-passing-unchecked-runtime-lasterror-could-not-establi)
