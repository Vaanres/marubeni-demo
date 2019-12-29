import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebookF,
  faBehance,
  faTwitter,
  faLinkedinIn,
  faDribbble
} from '@fortawesome/free-brands-svg-icons'

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

const icons = [faFacebookF, faBehance, faTwitter, faLinkedinIn, faDribbble]
library.add(icons)

// Register the component globally
Vue.component('font-awesome-icon', FontAwesomeIcon)
