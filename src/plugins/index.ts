/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import vuetify from './vuetify'
import 'charts.css';

// Types
import type { App } from 'vue'

export function registerPlugins (app: App) {
  app.use(vuetify)
}
