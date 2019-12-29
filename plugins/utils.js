import Vue from 'vue'
import _ from 'lodash'
import charming from 'charming'

Vue.mixin({
  methods: {
    trim(...selector) {
      if (this.isExisted(selector)) {
        selector.forEach((item) => {
          const element = document.querySelector(`${item}`)
          if (this.isExisted(element)) {
            const newString = element.textContent.replace(/\s\s+/g, ' ').trim()
            element.innerHTML = newString
          }
        })
      }
    },
    isExisted(object) {
      if (object && !_.isNil(object) && !_.isEmpty(object)) {
        return true
      } else {
        return false
      }
    },
    detectDevice(name) {
      const element = document.getElementsByClassName(name)

      let value = false
      if (this.isExisted(element)) {
        const display = window.getComputedStyle(element[0]).display
        if (display === 'block') {
          value = true
        }
      }
      return value
    },
    isTablet() {
      return this.detectDevice('is-tablet')
    },
    isMobile() {
      return this.detectDevice('is-mobile')
    },
    bodyHeightCalculation() {
      const headerHeight = document.querySelector('header.header nav')
        .offsetHeight

      const footerHeight = document.querySelector('footer.footer').offsetHeight
      const totalHeight = headerHeight + footerHeight

      document.querySelector(
        'body .nuxt'
      ).style.cssText = `min-height:calc(100vh - ${totalHeight}px)`
    },
    getScrollPercent() {
      const h = document.documentElement
      const b = document.body
      const st = 'scrollTop'
      const sh = 'scrollHeight'
      return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100
    },
    charmingText(type, cutSpace, ...selector) {
      if (this.isExisted(selector)) {
        this.trim(selector)
        selector.forEach((item) => {
          const el = document.querySelector(item)

          const options = {
            setClassName(index) {
              return `char_${index}`
            },
            split(string) {
              let result = string.split('')

              if (type === 'word') {
                if (cutSpace) {
                  result = string.split(/\s+/)
                } else {
                  result = string.split(/(\s+)/)
                }
              }

              return result
            }
          }

          if (this.isExisted(el)) {
            charming(el, options)
          }
        })
      }
    },
    charmingWord(cutSpace, ...selector) {
      return this.charmingText('word', cutSpace, selector)
    },
    charmingCharacter(cutSpace, ...selector) {
      return this.charmingText('character', cutSpace, selector)
    },
    addWillChange(...selector) {
      this.addClasses('will-change', selector)
    },
    addClasses(newClass, ...selector) {
      if (this.isExisted(selector)) {
        const elements = document.querySelectorAll(selector)

        if (this.isExisted(elements)) {
          elements.forEach((item) => {
            item.classList.add(newClass)
          })
        }
      }
    },
    removeClasses(newClass, ...selector) {
      if (this.isExisted(selector)) {
        const elements = document.querySelectorAll(selector)

        if (this.isExisted(elements)) {
          elements.forEach((item) => {
            item.classList.remove(newClass)
          })
        }
      }
    },
    toggleWillChange(willChangeClass, ...selector) {
      this.addClasses(willChangeClass, ...selector)
      setTimeout(() => {
        this.removeClasses(willChangeClass, ...selector)
      }, 7000)
    },
    getViewPort() {
      let e = window
      let a = 'inner'
      if (!('innerWidth' in window)) {
        a = 'client'
        e = document.documentElement || document.body
      }

      return { width: e[a + 'Width'], height: e[a + 'Height'] }
    }
  }
})
