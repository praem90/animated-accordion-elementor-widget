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
	const leftControl = timelineContainer.find(".timeline-slider-control-left");
	const rightControl = timelineContainer.find(".timeline-slider-control-right");

	let totalWidth = 0;
	timelineRow.find('.timeline-slider-col').each(function () {
		totalWidth += jQuery(this).width();
	});
	const width = timelineRow.find('.timeline-slider-col:visible').eq(1).width();	

	rightControl.on("click", function(e) {
		e.preventDefault()
		const newWidth = timelineRow.scrollLeft() + width * 2;
		leftControl.removeClass('has-left');
		leftControl.removeAttr('disabled');

		if (totalWidth > newWidth) {
			timelineRow.animate({scrollLeft: newWidth});
			leftControl.addClass('has-left');
		}

		if ((newWidth + timelineRow.width()) > totalWidth ) {
			rightControl.attr('disabled', 'disabled');
		}
	});

	leftControl.on("click", function(e) {
		e.preventDefault()
		const width = timelineRow.find('.timeline-slider-col:visible').eq(1).width();	
		const newWidth = timelineRow.scrollLeft() - width * 2;
		rightControl.removeAttr('disabled');

		if (newWidth <= 0) {
			leftControl.removeClass('has-left');
			leftControl.prop('disabled', true);
		}

		if (timelineRow.scrollLeft() > 0) {
			timelineRow.animate({scrollLeft: newWidth});
		} 
	});
});
