import mjml2html, { registerComponent } from '@ecomailcz/mjml-core'
import { registerDependencies } from '@ecomailcz/mjml-validator'

import { Social, SocialElement } from '@ecomailcz/mjml-social'
import { Navbar, NavbarLink } from '@ecomailcz/mjml-navbar'
import { Carousel, CarouselImage } from '@ecomailcz/mjml-carousel'
import {
  Accordion,
  AccordionElement,
  AccordionText,
  AccordionTitle,
} from '@ecomailcz/mjml-accordion'

registerComponent(require('@ecomailcz/mjml-body'))
registerComponent(require('@ecomailcz/mjml-head'))
registerComponent(require('@ecomailcz/mjml-head-attributes'))
registerComponent(require('@ecomailcz/mjml-head-breakpoint'))
registerComponent(require('@ecomailcz/mjml-head-font'))
registerComponent(require('@ecomailcz/mjml-head-preview'))
registerComponent(require('@ecomailcz/mjml-head-style'))
registerComponent(require('@ecomailcz/mjml-head-title'))
registerComponent(require('@ecomailcz/mjml-hero'))
registerComponent(require('@ecomailcz/mjml-button'))
registerComponent(require('@ecomailcz/mjml-column'))
registerComponent(require('@ecomailcz/mjml-divider'))
registerComponent(require('@ecomailcz/mjml-group'))
registerComponent(require('@ecomailcz/mjml-image'))

registerComponent(require('@ecomailcz/mjml-raw'))
registerComponent(require('@ecomailcz/mjml-section'))
registerComponent(require('@ecomailcz/mjml-spacer'))
registerComponent(require('@ecomailcz/mjml-text'))
registerComponent(require('@ecomailcz/mjml-table'))
registerComponent(require('@ecomailcz/mjml-wrapper'))

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
