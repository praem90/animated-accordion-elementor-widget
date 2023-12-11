<?php
/**
 * Plugin Name: Animated accordion 
 * Description: Simple animated accordion for Dyooti
 * Version:     1.0.0
 * Author:      Cloudi5
 * Author URI:  https://cloudi5.com/
 * Text Domain: elementor-addon
 */


function register_hello_world_widget( $widgets_manager ) {
	require __DIR__ . '/widget.php';

	$widgets_manager->register( new \Elementor_Animated_Accordion_Widget() );
	$widgets_manager->register( new \Elementor_Timeline_Slider_Widget() );
}

add_action( 'elementor/widgets/register', 'register_hello_world_widget' );

wp_register_script(
	'animated-accordion-script',
	plugins_url('/resources/js/main.js', __FILE__), 
	['jquery'],
	'1.0.0'
);

wp_register_style('animated-accordion-style', plugins_url('/resources/css/style.css', __FILE__), [], '1.0.0');



