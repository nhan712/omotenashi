/*Custom JS*/
var width = 0;

$("header").load( "header.html", function( response, status, xhr ) {
	if ( status != "error" ) {
		var url = window.location.href; 
		if (url.indexOf('screen04') != -1) {
			$('.page-title').text('部屋情報');
			getHighLightMenu('menuRoom');
		}
		if (url.indexOf('screen08') != -1) {
			$('.page-title').text('宿泊客検索');
			getHighLightMenu('menuSearch');
		}
		if (url.indexOf('screen14') != -1) {
			$('.page-title').text('ピーク時間情報');
			getHighLightMenu('menuPeak');
		}
		if (url.indexOf('screen15') != -1) {
			$('.page-title').text('インジケータ');
			getHighLightMenu('menuIndicator');
		}
	}
});

function responsiveFn() {
	width = $(window).width();
}

$(window).ready(responsiveFn).resize(responsiveFn); 

function loadCollapsible() {
	$('.collapsible').collapsible({
		accordion : true // A setting that changes the collapsible behavior to expandable instead of the default accordion style
	});
}

function getHighLightMenu(_menuName) {
	/*Common*/
	var _tabName = getUrlParameter('tab');
	$('#'+_tabName+'Div').trigger('click');
	// if (_screenName == 'screen04') {
	// 	$('#'+_tabName+'Div').trigger('click'); 
	// }
	$('#'+_menuName + _tabName.charAt(0).toUpperCase() + _tabName.slice(1)).addClass("active");
	$('#'+_menuName).trigger('click'); 
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