document.addEventListener(
    "DOMContentLoaded",
    function () {
        // Find save button and add on click listener.
        document
            .getElementById("save-btn")
            .addEventListener("click", onclick, false);

        // On click listener of save button, retrieves username and password
        // and saves them.
        function onclick() {
            var username = document.getElementById("username").value;
            var pswd = document.getElementById("password").value;

            chrome.storage.sync.set({ uname: username });
            chrome.storage.sync.set({ password: pswd });
        }

        // Find toggle switch.
        const toggle = document.querySelector(".switch input");

        // Set toggle.checked to previosly selected value./
        chrome.storage.sync.get(["isOff"], function (result) {
            toggle.checked = result.isOff;
        });

        // Fist time the extension is opened, no isOff value is registered,
        // so this will set it up. In next runs this will not cause any issues,
        // it will only set the value to same one.
        chrome.storage.sync.set({ isOn: toggle.checked });

        // add on change listener to toggle.
        toggle.addEventListener("change", onToggleChange, false);

        // On change listener of toggle, saves current state of toggle.
        function onToggleChange() {
            chrome.storage.sync.set({ isOff: toggle.checked });
        }
    },
    false
);
