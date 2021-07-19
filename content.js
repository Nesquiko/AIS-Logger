
chrome.storage.sync.get(['uname'], function(result) {
	document.getElementById('credential_0').value = result.uname
//	console.log('Uname = ' + result.uname );
});

chrome.storage.sync.get(['password'], function(result) {
	document.getElementById('credential_1').value = result.password
//	console.log('Password = ' + result.password );
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {	

	chrome.storage.sync.set({'uname': request[0]}, function() {
//		  console.log('Username is set to ' + request[0]);
	});

	chrome.storage.sync.set({'password': request[1]}, function() {
//		  console.log('Password is set to ' + request[1]);
	});
})
