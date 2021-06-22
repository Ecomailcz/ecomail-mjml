import { HeadComponent } from 'mjml-ecm-core'

export default class MjHead extends HeadComponent {
  handler() {
    return this.handlerChildren()
  }
}
