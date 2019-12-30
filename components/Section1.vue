<template>
  <section
    class="section section-1 d-flex justify-content-center align-items-center"
  >
    <div class="section-wrapper">
      <div class="video-container">
        <video playsinline="playsinline" muted="muted" loop="loop">
          <source src="media/Videos/1.mp4" type="video/mp4" />
        </video>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-12 header-content">
            <h2 class="mb-0">Fairness</h2>
            <h2 class="mb-0">Innovation</h2>
            <h2 class="mb-0">Harmony</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap, CSSRulePlugin } from 'gsap/all'
import ScrollMagic from 'ScrollMagic'

const plugins = [CSSRulePlugin]
gsap.registerPlugin(...plugins)

export default {
  name: 'Section1',
  mounted() {
    this.headerReady()
  },
  methods: {
    headerReady() {
      const roundOff = (progress) => Math.round(progress * 100) / 100
      const duration = 0

      const timeline = gsap.timeline({
        paused: true,
        delay: 0.5
      })

      timeline.fromTo(
        '.header img',
        { y: 64, rotationX: 90, opacity: 0 },
        {
          duration: 1,
          opacity: 1,
          rotationX: 0,
          y: 0,
          stagger: 0.1,
          ease: 'power2',
          transformOrigin: '0 100%'
        }
      )

      timeline.fromTo(
        '.section-1 .header-content > *',
        { y: 64, rotationX: 90, opacity: 0 },
        {
          duration: 1,
          opacity: 1,
          rotationX: 0,
          y: 0,
          stagger: 0.1,
          ease: 'power2',
          transformOrigin: '0 100%'
        },
        '>-0.3'
      )

      new ScrollMagic.Scene({
        triggerElement: '.section-1 .header-content',
        triggerHook: 0.5,
        duration: 300
      })

        .on('enter', function(e) {
          timeline.play()
        })
        .on('leave', function(e) {
          timeline.reverse()
        })
        .on('progress', function(event) {
          if (duration > 0) {
            timeline.progress(roundOff(event.progress))
          }
        })
        .addTo(this.$scrollMagicController)

      new ScrollMagic.Scene({
        triggerElement: '.section-1',
        triggerHook: 0,
        duration: '90%'
      })

        .on('enter', function(e) {
          document.querySelector('.video-container video').play()
        })
        .on('leave', function(e) {
          document.querySelector('.video-container video').pause()
        })

        .addTo(this.$scrollMagicController)
    }
  }
}
</script>

<style lang="scss" scoped>
.section-wrapper {
  height: 100%;
  width: 100%;

  .video-container {
    height: 100vh;
    overflow: hidden;

    video {
      object-fit: cover;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: transparentize($color: #000000, $amount: 0.8);
    }
  }
}

.header-content {
  position: absolute;
  top: calc((100vh - 291px) / 2);
  color: transparentize($color: white, $amount: 0.1);
}
</style>
