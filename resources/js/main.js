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

// Timeline
jQuery(function() {
	const timelineContainer = jQuery('.timeline-slider-container');
	const timelineRow = timelineContainer.find('.timeline-slider-row');

	let totalWidth = 0;
	timelineRow.find('.timeline-slider-col').each(function () {
		totalWidth += jQuery(this).width();
	});
	const width = timelineRow.find('.timeline-slider-col:visible').eq(1).width();	

	timelineContainer.find(".timeline-slider-control-right").on("click", function() {
		const newWidth = timelineRow.scrollLeft() + width * 2;

		if (totalWidth > newWidth) {
			timelineRow.animate({scrollLeft: newWidth});
		}
	});

	timelineContainer.find(".timeline-slider-control-left").on("click", function() {
		const width = timelineRow.find('.timeline-slider-col:visible').eq(1).width();	
		const newWidth = timelineRow.scrollLeft() - width * 2;

		if (timelineRow.scrollLeft() > 0) {
			timelineRow.animate({scrollLeft: newWidth});
		}
	});
});
