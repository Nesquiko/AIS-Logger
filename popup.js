document.addEventListener(
    "DOMContentLoaded",
    function () {
        document
            .getElementById("save-btn")
            .addEventListener("click", onclick, false);

        function onclick() {
            var uname = document.getElementById("username").value;

            var password = document.getElementById("password").value;

            chrome.tabs.query(
                { currentWindow: true, active: true },
                function (tabs) {
                    chrome.tabs.sendMessage(tabs[0].id, [uname, password]);
                }
            );
        }
    },
    false
);
