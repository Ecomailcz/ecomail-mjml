'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mjmlCore = require('@ecomailcz/mjml-core');

var _mjmlCore2 = _interopRequireDefault(_mjmlCore);

var _mjmlValidator = require('@ecomailcz/mjml-validator');

var _mjmlSocial = require('@ecomailcz/mjml-social');

var _mjmlNavbar = require('@ecomailcz/mjml-navbar');

var _mjmlCarousel = require('@ecomailcz/mjml-carousel');

var _mjmlAccordion = require('@ecomailcz/mjml-accordion');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _mjmlCore.registerComponent)(require('@ecomailcz/mjml-body'));
(0, _mjmlCore.registerComponent)(require('@ecomailcz/mjml-head'));
(0, _mjmlCore.registerComponent)(require('@ecomailcz/mjml-head-attributes'));
(0, _mjmlCore.registerComponent)(require('@ecomailcz/mjml-head-breakpoint'));
(0, _mjmlCore.registerComponent)(require('@ecomailcz/mjml-head-font'));
(0, _mjmlCore.registerComponent)(require('@ecomailcz/mjml-head-preview'));
(0, _mjmlCore.registerComponent)(require('@ecomailcz/mjml-head-style'));
(0, _mjmlCore.registerComponent)(require('@ecomailcz/mjml-head-title'));
(0, _mjmlCore.registerComponent)(require('@ecomailcz/mjml-hero'));
(0, _mjmlCore.registerComponent)(require('@ecomailcz/mjml-button'));
(0, _mjmlCore.registerComponent)(require('@ecomailcz/mjml-column'));
(0, _mjmlCore.registerComponent)(require('@ecomailcz/mjml-divider'));
(0, _mjmlCore.registerComponent)(require('@ecomailcz/mjml-group'));
(0, _mjmlCore.registerComponent)(require('@ecomailcz/mjml-image'));

(0, _mjmlCore.registerComponent)(require('@ecomailcz/mjml-raw'));
(0, _mjmlCore.registerComponent)(require('@ecomailcz/mjml-section'));
(0, _mjmlCore.registerComponent)(require('@ecomailcz/mjml-spacer'));
(0, _mjmlCore.registerComponent)(require('@ecomailcz/mjml-text'));
(0, _mjmlCore.registerComponent)(require('@ecomailcz/mjml-table'));
(0, _mjmlCore.registerComponent)(require('@ecomailcz/mjml-wrapper'));

(0, _mjmlCore.registerComponent)(_mjmlSocial.Social);
(0, _mjmlCore.registerComponent)(_mjmlSocial.SocialElement);
(0, _mjmlCore.registerComponent)(_mjmlNavbar.Navbar);
(0, _mjmlCore.registerComponent)(_mjmlNavbar.NavbarLink);
(0, _mjmlCore.registerComponent)(_mjmlAccordion.Accordion);
(0, _mjmlCore.registerComponent)(_mjmlAccordion.AccordionElement);
(0, _mjmlCore.registerComponent)(_mjmlAccordion.AccordionText);
(0, _mjmlCore.registerComponent)(_mjmlAccordion.AccordionTitle);
(0, _mjmlCore.registerComponent)(_mjmlCarousel.Carousel);
(0, _mjmlCore.registerComponent)(_mjmlCarousel.CarouselImage);

(0, _mjmlValidator.registerDependencies)(require('./dependencies'));

exports.default = _mjmlCore2.default;
module.exports = exports['default'];