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
    jQuery(document).on('click', '#submit', function(ev) {
    var url = $('#uq_url').val();
     website_name = $('#nq_name').val();
     ownership = $('#ow_name').val();
     disclose_company= $('#dwc').val();
     disclose_affiliates = $('#dwa').val();
     disclose_third = $('#dwp').val();
     litigate_city = $('#l_city').val();
     litigate_state  = $('#l_state').val();
     litigate_law_state  = $('#ll_state').val();
   console.log(url + website_name+ ownership+ disclose_company+ disclose_company, litigate_city, litigate_state, litigate_law_state);
 });

});