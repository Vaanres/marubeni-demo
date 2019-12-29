import ScrollMagic from 'scrollmagic'
import 'debug.addIndicators' // Debug Tool

export default ({ app }, inject) => {
  const scrollMagicController = new ScrollMagic.Controller()
  inject('scrollMagicController', scrollMagicController)
}
