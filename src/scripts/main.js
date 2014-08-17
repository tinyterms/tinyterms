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

var map_req = {
  "#EMAIL_REQUIRED":["email","ic_email"],
  "#REAL_NAME_REQUIRED":["real name","ic_rn"],
  "#USERNAME_REQUIRED":["username","ic_un"],
  "#ADDRESS_REQUIRED":["address","ic_address"],
  "#PHONE_NUMBER_REQUIRED":["phone number","ic_pn"]
}
var map_opt = {
  "#EMAIL_OPTIONAL":["email","ic_email"],
  "#REAL_NAME_OPTIONAL":["real name","ic_rn"],
  "#USERNAME_OPTIONAL":["username","ic_un"],
  "#ADDRESS_OPTIONAL":["address","ic_address"],
  "#PHONE_NUMBER_OPTIONAL":["phone number","ic_pn"]
}
//1,3,5 indexes
//$("input[name='ic_pw']:checked").index()
var fields_req = ["#EMAIL_REQUIRED","#USERNAME_REQUIRED","#REAL_NAME_REQUIRED","#ADDRESS_REQUIRED","#PHONE_NUMBER_REQUIRED"]
var fields_opt = ["#EMAIL_OPTIONAL","#USERNAME_OPTIONAL","#REAL_NAME_OPTIONAL","#ADDRESS_OPTIONAL","#PHONE_NUMBER_OPTIONAL"]


jQuery(function() {
 // Schedule meeting modal window                        
    jQuery(document).on('click', '#submit', function(ev) {
   /* var url = $('#uq_url').val();
     website_name = $('#nq_name').val();
     ownership = $('#ow_name').val();
     disclose_company= $('#dwc').val();
     disclose_affiliates = $('#dwa').val();
     disclose_third = $('#dwp').val();
     litigate_city = $('#l_city').val();
     litigate_state  = $('#l_state').val();
     litigate_law_state  = $('#ll_state').val();
   console.log(url + website_name+ ownership+ disclose_company+ disclose_company, litigate_city, litigate_state, litigate_law_state);*/
   
   var par1="When you create an account, you are required to provide #EMAIL_REQUIRED#USERNAME_REQUIRED#REAL_NAME_REQUIRED#ADDRESS_REQUIRED#PHONE_NUMBER_REQUIREDand may opt to provide #EMAIL_OPTIONAL#USERNAME_OPTIONAL#REAL_NAME_OPTIONAL#ADDRESS_OPTIONAL#PHONE_NUMBER_OPTIONAL(“User Information”).  We may also log, and retain indefinitely, the IP address from which the account is initially created. ";
   var par2="We may share User Content and User Information with any of our employees, officers, insurers, professional advisers, agents, suppliers or subcontractors insofar as reasonably necessary for the purposes set out in this policy.  We will not rent or sell your information to third parties outside #COMPANY_NAME (or the group of companies of which #COMPANY_NAME is a part) without your consent.We may share User Content and User Information with businesses that are legally part of the same group of companies that #COMPANY_NAME is part of, or that become part of that group (\"Affiliates\"). Affiliates may use this information to help provide, understand, and improve our services (including by providing analytics) and Affiliates' own services (including by providing you with better and more relevant experiences)";
   var par3="We may share User Content and User Information with third parties, but contract with third parties to protect your customer information. We make sure the third party only uses the information for the purposes set out in the contract and will make reasonable efforts to destroy the information once the contract is completed.";
   var par4="By using our service you understand and agree that we are providing a platform for you to post content, including photos, comments and other materials (\"User Content\"), to our service and to share User Content publicly. This means that other users may search for, see, use, or share any of your User Content that you make publicly available through our service, consistent with the terms and conditions of this Privacy Policy and our Terms of Use.";
   var par5="Content published and shared publicly is accessible to everyone, including search engines, and you may lose any privacy rights you might have regarding that content. In addition, information shared publicly may be copied and shared throughout the Internet, including through actions or features native to the Services, such as reblogging.";
   var par6="Any claims, legal proceeding or litigation arising in connection with the Service will be brought solely in #CITY, #STATE_FORUM, and you consent to the jurisdiction of such courts.";
   var par7="These Terms of Use will be governed by and construed in accordance with the laws of the State of #STATE_LAW, without giving effect to its conflict of laws provisions or your actual state or country of residence.";
   for(var i = 0; i < fields_req.length; i++) {
     var item = fields_req[i];
     if($("input[name='" + map_req[item][1] + "']:checked").index() == 1) {
       par1=par1.replace(item, map_req[item][0]+", ")
     } else {
       par1=par1.replace(item,'');
     }
   }
   for(var i = 0; i < fields_opt.length; i++) {
     var item = fields_opt[i];
     if($("input[name='" + map_opt[item][1] + "']:checked").index() == 3) {
       par1=par1.replace(item, map_opt[item][0]+", ")
     } else {
       par1=par1.replace(item,'');
     }
   }
   var tos = par1+par2.replace(/#COMPANY_NAME/g,$('#ow_name').val())+par3+par4+par5+par6.replace("#CITY",$("#l_city").val()).replace("#STATE_FORUM",$("#l_state").val())+par7.replace("#STATE_LAW", $('#ll_state').val())
   var fb = new Firebase("https://tinyterms.firebaseio.com")
   fb.push(tos);
 });


});