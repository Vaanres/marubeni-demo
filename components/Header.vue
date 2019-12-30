<template>
  <header class="header">
    <nav class="navbar container fixed-top navbar-light py-5">
      <img
        class="header-logo mr-1"
        src="media/logo/logo_light.svg"
        alt="logo"
      />
    </nav>
  </header>
</template>

<script>
import { gsap, CSSRulePlugin } from 'gsap/all'
import ScrollMagic from 'ScrollMagic'

const plugins = [CSSRulePlugin]
gsap.registerPlugin(...plugins)

export default {
  name: 'Header',
  mounted() {
    this.headerReady()
  },
  methods: {
    headerReady() {
      const roundOff = (progress) => Math.round(progress * 100) / 100

      const duration = 0

      const timeline = gsap.timeline({
        paused: true
      })

      timeline.fromTo(
        '.header',
        { y: 0 },
        {
          y: -16,
          opacity: 0,
          duration: 1.5,
          ease: 'power4',
          transformOrigin: '0 100%'
        }
      )

      new ScrollMagic.Scene({
        triggerElement: '.section-2',
        triggerHook: 0.95
      })
        .on('enter', function(e) {
          timeline.play()
        })
        .addTo(this.$scrollMagicController)
        .on('progress', function(event) {
          if (duration > 0) {
            timeline.progress(roundOff(event.progress))
          } else if (event.scrollDirection === 'FORWARD') {
            timeline.play()
          } else {
            timeline.reverse()
          }
        })
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  z-index: 1000;
}
</style>
