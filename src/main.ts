import './app.css'
import 'aframe'
import App from './app.svelte'

export default new App({
  target: (window as Window & typeof globalThis & { app: HTMLElement }).app
})
