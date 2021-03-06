var subjects = ['ACCT', 'AE', 'AS', 'APPH', 'ASE', 'ARBC', 'ARCH', 'BIOL', 'BMEJ', 'BMED', 'BMEM', 'BCP', 'BC', 'CETL', 'CHBE', 'CHEM', 'CHIN', 'CP', 'CEE', 'COA', 'COE', 'COS', 'CX', 'CSE', 'CS', 'COOP', 'UCGA', 'EAS', 'ECON', 'ECEP', 'ECE', 'ENGL', 'FS', 'FREN', 'GT', 'GTL', 'GRMN', 'HP', 'HS', 'HIN', 'HIST', 'HTS', 'ISYE', 'ID', 'IPCO', 'IPIN', 'IPFS', 'IPSA', 'INTA', 'IL', 'INTN', 'IMBA', 'IAC', 'JAPN', 'KOR', 'LATN', 'LS', 'LING', 'LCC', 'LMC', 'MGT', 'MOT', 'MLDR', 'MSE', 'MATH', 'ME', 'MP', 'MSL', 'ML', 'MUSI', 'NS', 'NRE', 'PERS', 'PHIL', 'PHYS', 'POL', 'PTFE', 'DOPP', 'PSY', 'PSYC', 'PUBP', 'PUBJ', 'RUSS', 'SCI', 'SOC', 'SPAN'];
var subjectRegex = new RegExp('(' + subjects.join('|') + ') ?([0-9]{4})', 'i');

document.addEventListener('selectionchange', function () {
	chrome.runtime.sendMessage({
		"course": getCourse(window.getSelection().toString())
	});
});

var getCourse = function (text) {
	text = text.replace(/[ \u00A0\u1680\u180e\u2000-\u2009\u200a\u200b\u202f\u205f\u3000]/g, ' ');
	var matches = text.match(subjectRegex);
	var subject = null;
	var courseId = null;

	if (matches === null) {
		matches = text.match(/([0-9]{4})/);
		if (matches !== null) {
			courseId = matches[1];
		}
	} else {
		subject = matches[1].toUpperCase();
		courseId = matches[2];
	}

	return [subject, courseId];
};
