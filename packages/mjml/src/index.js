import mjml2html, { registerComponent } from 'mjml-ecm-core'
import { registerDependencies } from 'mjml-ecm-validator'

import { Social, SocialElement } from 'mjml-ecm-social'
import { Navbar, NavbarLink } from 'mjml-ecm-navbar'
import { Carousel, CarouselImage } from 'mjml-ecm-carousel'
import {
  Accordion,
  AccordionElement,
  AccordionText,
  AccordionTitle,
} from 'mjml-ecm-accordion'

registerComponent(require('mjml-ecm-body'))
registerComponent(require('mjml-ecm-head'))
registerComponent(require('mjml-ecm-head-attributes'))
registerComponent(require('mjml-ecm-head-breakpoint'))
registerComponent(require('mjml-ecm-head-font'))
registerComponent(require('mjml-ecm-head-preview'))
registerComponent(require('mjml-ecm-head-style'))
registerComponent(require('mjml-ecm-head-title'))
registerComponent(require('mjml-ecm-hero'))
registerComponent(require('mjml-ecm-button'))
registerComponent(require('mjml-ecm-column'))
registerComponent(require('mjml-ecm-divider'))
registerComponent(require('mjml-ecm-group'))
registerComponent(require('mjml-ecm-image'))

registerComponent(require('mjml-ecm-raw'))
registerComponent(require('mjml-ecm-section'))
registerComponent(require('mjml-ecm-spacer'))
registerComponent(require('mjml-ecm-text'))
registerComponent(require('mjml-ecm-table'))
registerComponent(require('mjml-ecm-wrapper'))

registerComponent(Social)
registerComponent(SocialElement)
registerComponent(Navbar)
registerComponent(NavbarLink)
registerComponent(Accordion)
registerComponent(AccordionElement)
registerComponent(AccordionText)
registerComponent(AccordionTitle)
registerComponent(Carousel)
registerComponent(CarouselImage)

registerDependencies(require('./dependencies'))

export default mjml2html
