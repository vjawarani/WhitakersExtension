chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.method === 'getSelection') {
        var word = window.getSelection().toString().trim();
        console.log(word);
        sendResponse({ data: word });
    } else {
        sendResponse({});
    }
});