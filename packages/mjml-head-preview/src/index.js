import { HeadComponent } from 'mjml-ecm-core'

export default class MjPreview extends HeadComponent {
  static endingTag = true

  handler() {
    const { add } = this.context

    add('preview', this.getContent())
  }
}
