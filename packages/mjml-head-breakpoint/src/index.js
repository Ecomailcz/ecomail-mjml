import { HeadComponent } from 'mjml-ecm-core'

export default class MjBreakpoint extends HeadComponent {
  static endingTag = true

  static allowedAttributes = {
    width: 'unit(px)',
  }

  handler() {
    const { add } = this.context

    add('breakpoint', this.getAttribute('width'))
  }
}
