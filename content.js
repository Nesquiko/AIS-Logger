// Upon landing on the https://is.stuba.sk/auth, this will populate username textfield
chrome.storage.sync.get(["uname"], function (result) {
    document.getElementById("credential_0").value = result.uname;
});

// This will populate password text field
chrome.storage.sync.get(["password"], function (result) {
    document.getElementById("credential_1").value = result.password;
});

/** When Save button in popup.html is clicked this will execute */
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    chrome.storage.sync.set({ uname: request[0] });
    chrome.storage.sync.set({ password: request[1] });
});
