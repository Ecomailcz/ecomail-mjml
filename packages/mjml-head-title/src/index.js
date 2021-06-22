import { HeadComponent } from 'mjml-ecm-core'

export default class MjTitle extends HeadComponent {
  static endingTag = true

  handler() {
    const { add } = this.context

    add('title', this.getContent())
  }
}
