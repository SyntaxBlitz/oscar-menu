var seasonInput = document.getElementById('season');
var yearInput = document.getElementById('year');

seasonInput.onchange = yearInput.onchange = function () {
	if (yearInput.value.length === 4) {
		chrome.storage.sync.set({
			term: yearInput.value + seasonInput.value
		});
	}
};

// not DRY: look in menu.js

var currentDate = new Date();
var probableMonthMappings = ['02', '02', '02', '05', '05', '05', '05', '08', '08', '08', '08', '02'];
var probableYear = currentDate.getFullYear();
if (currentDate.getMonth() === 11) {	// december
	probableYear++;
}
var defaultTerm = probableYear + '' + probableMonthMappings[currentDate.getMonth()];

chrome.storage.sync.get({
	term: defaultTerm
}, function (data) {
	seasonInput.value = data.term.substring(4);
	yearInput.value = data.term.substring(0, 4);
});