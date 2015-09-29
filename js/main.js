/*Custom JS*/
$("header").load( "header.html", function( response, status, xhr ) {
	if ( status != "error" ) {
		var url = window.location.href; 
		if (url.indexOf('screen04') != -1) {
			$('.page-title').text('部屋情報');
			getHighLightMenu('menuRoom');
		}
		if (url.indexOf('screen08') != -1) 
			$('.page-title').text('宿泊客検索');
		if (url.indexOf('screen14') != -1) 
			$('.page-title').text('ピーク時間情報');
		if (url.indexOf('screen15') != -1) 
			$('.page-title').text('インジケータ');
	}
});

function getHighLightMenu(_menuName) {
	/*Common*/
	var _tabName = getUrlParameter('tab');
	$('#'+_menuName + _tabName.charAt(0).toUpperCase() + _tabName.slice(1)).addClass("active");
	$('#'+_menuName).trigger('click'); 
}