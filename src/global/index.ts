import { App } from 'vue'
import registerElement from './register-element'
import registerProperties from './register-properties'

export function registerApp(app: App) {
  registerElement(app)
  // registerProperties(app)
  app.use(registerProperties)
}
