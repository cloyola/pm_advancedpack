$(document).ready(function() {
	// PS 1.7
	if (typeof(pm_advancedpack) != 'undefined') {
		newTabContent = $('#form_content .form-contenttab:eq(0)').clone().attr('id', 'pm_advancedpack').html('<div class="col-xs-12 col-12"><div class="spinner"></div></div>').removeClass('active');
		newTabContent.insertAfter('#form_content .form-contenttab:eq(0)');
		ap5_getAdminRelatedPackOutput();

		newTabItem = $('#form-loading ul.js-nav-tabs li:eq(0)').clone().attr('id', 'tab_pm_advancedpack');
		$('a', newTabItem).removeClass('active').html(pm_advancedpack.tabName).attr('href', '#pm_advancedpack');
		newTabItem.insertBefore('#form-loading ul.js-nav-tabs li:last');
		// Recalculate width of nav tabs container
		var navWidth = 50;
		$('#form-loading ul.js-nav-tabs li').each((index, item) => {
			navWidth += $(item).width();
		});
		$('#form-loading ul.js-nav-tabs').width(navWidth);
	}
});

function ap5_getAdminRelatedPackOutput() {
	$.ajax({
		type: "POST",
		dataType: "json",
		ajax: 1,
		url: pm_advancedpack.moduleConfigureURL,
		data: {
			action: 'GetAdminRelatedPackOutput',
			idProduct: parseInt($('#form_id_product').val()),
		},
		cache: false,
		success: function (jsonData, textStatus, jqXHR) {
			if (typeof (jsonData.tabContent) !== 'undefined') {
				$('#pm_advancedpack').html(jsonData.tabContent);
			}
		}
	});
}