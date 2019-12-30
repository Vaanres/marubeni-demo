<template>
  <section
    class="section section-2 section-spacing d-flex justify-content-center align-items-center"
  >
    <div class="container">
      <div class="row">
        <div class="col-8 d-flex justify-content-start align-items-sm-center">
          <div class="embed-responsive embed-responsive-16by9 section2-video">
            <video
              class="embed-responsive-item"
              autoplay="autoplay"
              playsinline="playsinline"
              muted="muted"
              loop="loop"
            >
              <source src="media/Videos/2.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div class="col-4 d-flex justify-content-start align-items-sm-center">
          <div class="section-header">
            <h6 class="sub-title mb-4">Our business</h6>
            <h2 class="title mb-0">Sustainable</h2>
            <h2 class="title mb-0">Growth in</h2>
            <h2 class="title mb-0">Asia</h2>
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
  name: 'Section2',
  mounted() {
    this.section2Ready()
  },
  methods: {
    section2Ready() {
      // const roundOff = (progress) => Math.round(progress * 100) / 100
      // const duration = 0

      const timeline = gsap.timeline({
        paused: true
      })

      timeline.fromTo(
        '.section-2 .section2-video',
        { y: 256, opacity: 0 },
        {
          duration: 1,
          opacity: 1,
          y: 0,
          stagger: 0.1,
          ease: 'power2',
          transformOrigin: '0 100%'
        }
      )

      timeline.fromTo(
        '.section-2 .section-header > *',
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

      new ScrollMagic.Scene({
        triggerElement: '.section-2 ',
        triggerHook: 0.5,
        duration: '100%'
      })

        .on('enter', function(e) {
          timeline.play()
        })
        .on('leave', function(e) {
          timeline.reverse()
        })
        // .on('progress', function(event) {
        //   if (duration > 0) {
        //     timeline.progress(roundOff(event.progress))
        //   }
        // })
        .addTo(this.$scrollMagicController)
    }
  }
}
</script>

<style lang="scss" scoped>
.section2-video {
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    transform: translate3d(0px, 0px, 0px);

    height: 100%;
    width: 100%;
    background: transparentize($gray-300, $amount: 0.1);

    backdrop-filter: blur(1rem);
  }
}

.section-2 {
  background: #f1f1f1;
  background-image: linear-gradient(180deg, white 0%, #f1f1f1 100%);
  .container {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: url('/media/asia_map_black.svg');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: right center;
    }
  }

  .section-header {
    position: relative;
    left: -10rem;
    color: var(--primary);
    //color: white;
    //mix-blend-mode: hard-light;
    // text-shadow: 1px 1px 0 transparentize($color: white, $amount: 0.9);
  }
}
</style>
