/*Custom JS*/
var width = 0;

var currentUrl = "";
var currentTab = "";
var currentMenu = "";

function loadPage(url, tabName) {
	//if (currentUrl != url) {
	$("main").load(url + ".html", function(response, status, xhr) {
		loadCollapsible();
		
		init();
				
		switch (url) {
			case 'screen04':
				getHighLightMenu("menuRoom", tabName);
				break;
			case 'screen08':
				getHighLightMenu('menuSearch', tabName);
				break;
			default:
				break;
		}
		
		currentUrl = url;
		currentTab = tabName;
	});
	//}
}

function responsiveFn() {
	width = $(window).width();
}

$(window).ready(responsiveFn).resize(responsiveFn); 

function loadCollapsible() {
	$('.collapsible').collapsible({
		accordion : true // A setting that changes the collapsible behavior to expandable instead of the default accordion style
	});
}

function getHighLightMenu(_menuName, tabName) {
	// var _tabName = getUrlParameter('tab');
	
	$('#' + tabName + 'Div').trigger('click');
	$('#' + _menuName + currentTab.charAt(0).toUpperCase() + currentTab.slice(1)).removeClass("active");
	$('#' + _menuName + tabName.charAt(0).toUpperCase() + tabName.slice(1)).addClass("active");
	
	if (currentUrl == "") {
		$('#'+_menuName).trigger('click');
	}
	
	//currentMenu = _menuName
}

function getUrlParameter(sParam) {
	var sPageURL = decodeURIComponent(window.location.search.substring(1)),
		sURLVariables = sPageURL.split('&'),
		sParameterName,
		i;

	for (i = 0; i < sURLVariables.length; i++) {
		sParameterName = sURLVariables[i].split('=');

		if (sParameterName[0] === sParam) {
			return sParameterName[1] === undefined ? true : sParameterName[1];
		}
	}
};