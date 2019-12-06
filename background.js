chrome.contextMenus.create({
    title: "Search Whitaker's Words",
    contexts: ["selection"]
});


chrome.contextMenus.onClicked.addListener((info, tab) => {
    chrome.tabs.sendMessage(tab.id, { method: 'getSelection' }, response => {
        sendToWW(response.data);
    });
});

function sendToWW(selectedText) {
    var serviceCall = 'http://archives.nd.edu/cgi-bin/wordz.pl?keyword=' + selectedText;
    chrome.tabs.create({ url: serviceCall });
}