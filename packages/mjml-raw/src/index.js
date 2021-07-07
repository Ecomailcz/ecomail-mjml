import { BodyComponent } from '@ecomailcz/mjml-core'

export default class MjRaw extends BodyComponent {
  static endingTag = true
  static rawElement = true

  render() {
    return this.getContent()
  }
}
