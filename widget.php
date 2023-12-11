<?php

class Elementor_Animated_Accordion_Widget  extends \Elementor\Widget_Base {

	public function get_name() {
		return 'animated_accordion';
	}

	public function get_title() {
		return esc_html__( 'Animated Accordion', 'elementor-addon' );
	}

	public function get_icon() {
		return 'eicon-code';
	}

	public function get_categories() {
		return [ 'basic' ];
	}

	public function get_keywords() {
		return [ 'accordion', 'animated', 'cloudi5' ];
	}

	public function get_script_depends() {
		return [ 'animated-accordion-script' ];
	}

	public function get_style_depends() {
		return [ 'animated-accordion-style' ];
	}

	protected function render() {
		include __DIR__ . '/resources/views/accordion.php';
	}
}

class Elementor_Timeline_Slider_Widget  extends \Elementor\Widget_Base {

	public function get_name() {
		return 'timeline_slider';
	}

	public function get_title() {
		return esc_html__( 'Timeline Slider', 'elementor-addon' );
	}

	public function get_icon() {
		return 'eicon-code';
	}

	public function get_categories() {
		return [ 'basic' ];
	}

	public function get_keywords() {
		return ['timeline', 'slider', 'cloudi5'];
	}

	public function get_script_depends() {
		return [ 'animated-accordion-script' ];
	}

	public function get_style_depends() {
		return [ 'animated-accordion-style' ];
	}

	protected function render() {
		include __DIR__ . '/resources/views/timeline.php';
	}
}
