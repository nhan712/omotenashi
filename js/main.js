/*Custom JS*/
$("header").load( "header.html", function( response, status, xhr ) {
	if ( status != "error" ) {
		var url = window.location.href; 
		if (url.indexOf('screen04') != -1) {
			$('.page-title').text('部屋情報');
			getHighLightMenu('menuRoom', 'screen04');
		}
		if (url.indexOf('screen08') != -1) 
			$('.page-title').text('宿泊客検索');
		if (url.indexOf('screen14') != -1) 
			$('.page-title').text('ピーク時間情報');
		if (url.indexOf('screen15') != -1) 
			$('.page-title').text('インジケータ');
	}
});

function getHighLightMenu(_menuName, _screenName) {
	/*Common*/
	var _tabName = getUrlParameter('tab');
	if (_screenName == 'screen04') {
		$('#'+_tabName+'Div').trigger('click'); 
	}
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