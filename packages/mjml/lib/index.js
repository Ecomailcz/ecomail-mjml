'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mjmlEcmCore = require('mjml-ecm-core');

var _mjmlEcmCore2 = _interopRequireDefault(_mjmlEcmCore);

var _mjmlEcmValidator = require('mjml-ecm-validator');

var _mjmlEcmSocial = require('mjml-ecm-social');

var _mjmlEcmNavbar = require('mjml-ecm-navbar');

var _mjmlEcmCarousel = require('mjml-ecm-carousel');

var _mjmlEcmAccordion = require('mjml-ecm-accordion');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _mjmlEcmCore.registerComponent)(require('mjml-ecm-body'));
(0, _mjmlEcmCore.registerComponent)(require('mjml-ecm-head'));
(0, _mjmlEcmCore.registerComponent)(require('mjml-ecm-head-attributes'));
(0, _mjmlEcmCore.registerComponent)(require('mjml-ecm-head-breakpoint'));
(0, _mjmlEcmCore.registerComponent)(require('mjml-ecm-head-font'));
(0, _mjmlEcmCore.registerComponent)(require('mjml-ecm-head-preview'));
(0, _mjmlEcmCore.registerComponent)(require('mjml-ecm-head-style'));
(0, _mjmlEcmCore.registerComponent)(require('mjml-ecm-head-title'));
(0, _mjmlEcmCore.registerComponent)(require('mjml-ecm-hero'));
(0, _mjmlEcmCore.registerComponent)(require('mjml-ecm-button'));
(0, _mjmlEcmCore.registerComponent)(require('mjml-ecm-column'));
(0, _mjmlEcmCore.registerComponent)(require('mjml-ecm-divider'));
(0, _mjmlEcmCore.registerComponent)(require('mjml-ecm-group'));
(0, _mjmlEcmCore.registerComponent)(require('mjml-ecm-image'));

(0, _mjmlEcmCore.registerComponent)(require('mjml-ecm-raw'));
(0, _mjmlEcmCore.registerComponent)(require('mjml-ecm-section'));
(0, _mjmlEcmCore.registerComponent)(require('mjml-ecm-spacer'));
(0, _mjmlEcmCore.registerComponent)(require('mjml-ecm-text'));
(0, _mjmlEcmCore.registerComponent)(require('mjml-ecm-table'));
(0, _mjmlEcmCore.registerComponent)(require('mjml-ecm-wrapper'));

(0, _mjmlEcmCore.registerComponent)(_mjmlEcmSocial.Social);
(0, _mjmlEcmCore.registerComponent)(_mjmlEcmSocial.SocialElement);
(0, _mjmlEcmCore.registerComponent)(_mjmlEcmNavbar.Navbar);
(0, _mjmlEcmCore.registerComponent)(_mjmlEcmNavbar.NavbarLink);
(0, _mjmlEcmCore.registerComponent)(_mjmlEcmAccordion.Accordion);
(0, _mjmlEcmCore.registerComponent)(_mjmlEcmAccordion.AccordionElement);
(0, _mjmlEcmCore.registerComponent)(_mjmlEcmAccordion.AccordionText);
(0, _mjmlEcmCore.registerComponent)(_mjmlEcmAccordion.AccordionTitle);
(0, _mjmlEcmCore.registerComponent)(_mjmlEcmCarousel.Carousel);
(0, _mjmlEcmCore.registerComponent)(_mjmlEcmCarousel.CarouselImage);

(0, _mjmlEcmValidator.registerDependencies)(require('./dependencies'));

exports.default = _mjmlEcmCore2.default;
module.exports = exports['default'];