window.onload = function () {
	var subjects = ['ACCT', 'AE', 'AS', 'APPH', 'ASE', 'ARBC', 'ARCH', 'BIOL', 'BMEJ', 'BMED', 'BMEM', 'BCP', 'BC', 'CETL', 'CHBE', 'CHEM', 'CHIN', 'CP', 'CEE', 'COA', 'COE', 'COS', 'CX', 'CSE', 'CS', 'COOP', 'UCGA', 'EAS', 'ECON', 'ECEP', 'ECE', 'ENGL', 'FS', 'FREN', 'GT', 'GTL', 'GRMN', 'HP', 'HS', 'HIN', 'HIST', 'HTS', 'ISYE', 'ID', 'IPCO', 'IPIN', 'IPFS', 'IPSA', 'INTA', 'IL', 'INTN', 'IMBA', 'IAC', 'JAPN', 'KOR', 'LATN', 'LS', 'LING', 'LCC', 'LMC', 'MGT', 'MOT', 'MLDR', 'MSE', 'MATH', 'ME', 'MP', 'MSL', 'ML', 'MUSI', 'NS', 'NRE', 'PERS', 'PHIL', 'PHYS', 'POL', 'PTFE', 'DOPP', 'PSY', 'PSYC', 'PUBP', 'PUBJ', 'RUSS', 'SCI', 'SOC', 'SPAN'];

	for (let subject of subjects) {
		let option = document.createElement('option');
		option.value = subject;
		option.selected = true;
		document.forms[0].sel_subj[0].appendChild(option);
	}

	var matches = location.search.match(/\?term=([0-9]{6})&courseNumber=([0-9]{4})/);

	document.forms[0].term_in.value = matches[1];
	document.forms[0].sel_crse_strt.value = matches[2];

	document.forms[0].submit();
};