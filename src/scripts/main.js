// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  cube = require('bespoke-theme-cube'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  scale = require('bespoke-scale'),
  hash = require('bespoke-hash'),
  progress = require('bespoke-progress'),
  state = require('bespoke-state'),
  forms = require('bespoke-forms');

// Bespoke.js
bespoke.from('article', [
  cube(),
  keys(),
  touch(),
  bullets('li, .bullet'),
  scale(),
  hash(),
  progress(),
  state(),
  forms()
]);

// Prism syntax highlighting
// This is actually loaded from "bower_components" thanks to
// debowerify: https://github.com/eugeneware/debowerify
require('prism');

jQuery(function() {
	// Schedule meeting modal window                        
    jQuery(document).on('click', '#final_submit', function(ev) {
		var url = $('#url').val();
			website_name = $('#name_question').val();
			ownership = $('#ownership').val();
			disclose_company= $('#disclose_company').val();
			disclose_affiliates = $('#disclose_affiliates').val();
			disclose_third = $('#disclose_third').val();
			litigate_city	= $('#litigate_city').val();
			litigate_state	= $('#litigate_state').val();
			litigate_law_state	= $('#litigate_law_state').val();

		console.log(url + website_name+ ownership+ disclose_company+ disclose_company, litigate_city, litigate_state, litigate_law_state);
		console.log();
		console.log();
		console.log();
		console.log();
		console.log();
		console.log();
	});

});
