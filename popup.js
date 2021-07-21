document.addEventListener(
    "DOMContentLoaded",
    function () {
        document
            .getElementById("save-btn")
            .addEventListener("click", onclick, false);

        // This function runs after the save button is clicked.
        function onclick() {
            var username = document.getElementById("username").value;

            var pswd = document.getElementById("password").value;

            chrome.storage.sync.set({ uname: username });

            chrome.storage.sync.set({ password: pswd });
        }
    },
    false
);
