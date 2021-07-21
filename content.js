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
