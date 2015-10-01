/*Custom JS*/
var width = 0;

var currentUrl = "";
var currentTab = "";
var currentMenu = "";

function loadPage(url, tabName) {

	$("main").load(url + ".html", function(response, status, xhr) {
		loadCollapsible();
		
		$('.button-collapse').sideNav('hide');
		
		init();

		resizeAngleRight();

        $(window).resize(function() {
            resizeAngleRight();
        });
				
		switch (url) {
			case 'screen04':
				$('.page-title').text('部屋情報');
				getHighLightMenu("menuRoom", tabName);
				$('#Room-' + tabName + '-Div').trigger('click');
				
				break;
				
			case 'screen08':
				$('.page-title').text('宿泊客検索');
				getHighLightMenu('menuSearch', tabName);
				$('#Search-' + tabName + '-Div').trigger('click');
				
				break;
				
			case 'screen14':
				$('.page-title').text('ピーク時間情報');
				getHighLightMenu('menuPeak', tabName);
				$('#Peak-' + tabName + '-Div').trigger('click');
				
				break;
				
			case 'screen15':
				$('.page-title').text('インジケータ');
				getHighLightMenu('menuIndicator', tabName);
				$('#Indicator-' + tabName + '-Div').trigger('click');
				
				break;
				
			default:
				break;
		}
		currentUrl = url;
		currentTab = tabName;
		
		var arr = ($(obj).attr('id')).split('-');
		alert(arr);
		
		
	});
	
}

function resizeAngleRight() {
    if(this.innerWidth > 667) {
        $('.fa').addClass('fa-3x')
        $('.fa').removeClass('fa-2x')
        $('.fa').removeClass('fa-lg')
    } else {
        if(this.innerWidth > 568) {
            $('.fa').addClass('fa-2x')
            $('.fa').removeClass('fa-3x')
        } else {
            $('.fa').removeClass('fa-2x')
            $('.fa').removeClass('fa-3x')
            $('.fa').addClass('fa-lg')
        }
    }
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

function scrollToPos(obj) {
	
	setTimeout(
		function() {
			var headerHeight = $("#fixed-top-nav").height();
				var position = $(obj).offset().top - headerHeight;
				$('html, body').animate({scrollTop : position}, "slow");
				var _menuName = 'menu' + ($(obj).attr('id')).split('-')[0];
				var _tabName = ($(obj).attr('id')).split('-')[1];
				getHighLightMenu(_menuName, _tabName);
				currentTab = _tabName;
		 }, 300);
}

function scrollToPos2(obj) {
	alert(obj.id);
	//if ($(obj).hasClass('active')) {
		var headerHeight = $("#fixed-top-nav").height();
		var position = $(obj).offset().top - headerHeight;
				
		$('html, body').animate({scrollTop : position}, "slow");
		var _menuName = 'menu' + ($(obj).attr('id')).split('-')[0];
		var _tabName = ($(obj).attr('id')).split('-')[1];
		
				
		getHighLightMenu(_menuName, _tabName);
		currentTab = _tabName;
	//}
	
}

function getHighLightMenu(_menuName, tabName) {
	// var _tabName = getUrlParameter('tab');
	
	//$('#' + tabName + 'Div').trigger('click');
	
	$('#' + currentMenu + currentTab.charAt(0).toUpperCase() + currentTab.slice(1)).removeClass("active");
	
	$('#' + _menuName + tabName.charAt(0).toUpperCase() + tabName.slice(1)).addClass("active");
	
	if (currentUrl == "") {
		$('#'+_menuName).trigger('click');
	}
	
	currentMenu = _menuName
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