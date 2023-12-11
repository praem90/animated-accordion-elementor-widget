jQuery(function() {
	const container = jQuery('.animated-accordion-container');

	const items = container.find('.accordion-item');
	const itemHeight = items.eq(0).height();

	const itemDetail = container.find('.accordion-item.accordion-item-detail');
	const itemDetailHeight = 300;

	const containerHeight = itemHeight * 3 + itemDetailHeight;
	container.height(containerHeight);

	let activeItem = 0;

	container.on('click', '.accordion-item', function () {
		if (jQuery(this).hasClass('accordion-item-detail')) {
			return;
		}
		items.removeClass('active');
		jQuery(this).addClass('active');
		activeItem = jQuery(this).index();
		itemDetail.find('.accordion-description').html(jQuery(this).find('.accordion-description').html());
		rearrangeItems();
	});

	function rearrangeItems() {
		let top = activeItem * itemHeight;

		if (top + itemDetailHeight > containerHeight) {
			top = containerHeight - itemDetailHeight;
		}

		jQuery(itemDetail).css('top', top + 'px');

		jQuery(items).not('.accordion-item-detail').each(function () {
			let itemTop = itemHeight * jQuery(this).index(); 

			if (jQuery(this).index() > activeItem) {
				itemTop += itemDetailHeight - itemHeight;
			} 

			jQuery(this).css('top', itemTop + 'px');
		});
	}

	items.eq(0).click();
});
