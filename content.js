// Upon landing on the https://is.stuba.sk/auth, type username into textfield
chrome.storage.sync.get(["uname"], function (result) {
    document.getElementById("credential_0").value = result.uname;
});

// Type password into textfield
chrome.storage.sync.get(["password"], function (result) {
    document.getElementById("credential_1").value = result.password;
});

// And click login button. (Without timeout the webpage doesn't register
// entered username properly and displays error message.)
setTimeout(function () {
    document.getElementById("login-btn").click();
}, 100);

// When Save button in popup.html is clicked this will execute.
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    chrome.storage.sync.set({ uname: request[0] });
    chrome.storage.sync.set({ password: request[1] });
});
