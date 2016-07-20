var SEMESTER = '201608';

var course = [null, null];

chrome.runtime.onMessage.addListener(function (data) {
	course = data.course;

	chrome.contextMenus.removeAll()

	if (course[1] !== null) {		// if there is a course ID
		if (course[0] !== null) {	// if there is a section identifier
			chrome.contextMenus.create({
				'title': 'Show ' + course[0] + ' ' + course[1] + ' in OSCAR',
				'contexts': ['selection'],
				'onclick': function (info) {
					navigate(course);
				}
			});
		} else {
			chrome.contextMenus.create({
				'title': 'Show all ' + course[1] + ' classes in OSCAR',
				'contexts': ['selection'],
				'onclick': function (info) {
					searchCourses(course[1]);
				}
			});
		}
	}
});

var navigate = function (course) {
	var [subject, courseId] = course;

	var location = 'https://oscar.gatech.edu/pls/bprod/bwckctlg.p_disp_course_detail?cat_term_in=' + SEMESTER + '&subj_code_in=' + subject + '&crse_numb_in=' + courseId;
	chrome.tabs.getSelected(function (tab) {
		chrome.tabs.create({
			'url': location,
			'index': tab.index + 1
		});
	});
};

var searchCourses = function (number) {
	chrome.tabs.getSelected(function (tab) {
		chrome.tabs.create({
			'url': 'postableForm.html?term=' + SEMESTER + '&courseNumber=' + number,
			'index': tab.index + 1
		});
	});
};