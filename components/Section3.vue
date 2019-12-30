<template>
  <section class="section section-3 section-top">
    <div class="content-1">
      <div class="container">
        <div class="section-header">
          <h6 class="sub-title mb-4">Our vision</h6>
          <h2 class="title mb-0">Bring happiness</h2>
          <h2 class="title mb-0">to people</h2>
        </div>
      </div>

      <div class="mt-5">
        <div class="v-container">
          <ul class="flex-container">
            <li
              v-for="i in 5"
              id="i"
              :key="i"
              class="flex-item"
              :style="`background-image:url('media/smile/row1/row_${i}.png')`"
            ></li>
          </ul>
        </div>
        <div class="v-container">
          <ul class="flex-container">
            <li
              v-for="i in 5"
              id="i"
              :key="i"
              class="flex-item"
              :style="`background-image:url('media/smile/row2/row_${i}.png')`"
            ></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="content-2 section-top">
      <div class="container">
        <div class="section-header">
          <h2 class="title mb-0">& the environment</h2>
        </div>
      </div>

      <div class="mt-5">
        <div class="v-container">
          <ul class="flex-container">
            <li
              v-for="i in 5"
              id="i"
              :key="i"
              class="flex-item"
              :style="`background-image:url('media/env/row1/row_${i}.png')`"
            ></li>
          </ul>
        </div>
        <div class="v-container">
          <ul class="flex-container">
            <li
              v-for="i in 10"
              id="i"
              :key="i"
              class="flex-item"
              :style="`background-image:url('media/env/row2/row_${i}.png')`"
            ></li>
          </ul>
        </div>
      </div>
    </div>

    <Footer class="section-top pb-5" />
  </section>
</template>

<script>
import { gsap, CSSRulePlugin } from 'gsap/all'
import ScrollMagic from 'ScrollMagic'

import Footer from '~/components/Footer'

const plugins = [CSSRulePlugin]
gsap.registerPlugin(...plugins)

export default {
  name: 'Section3',
  components: { Footer },
  mounted() {
    this.section3Ready1()
    this.section3Ready2()
  },
  methods: {
    section3Ready1() {
      // const roundOff = (progress) => Math.round(progress * 100) / 100
      // const duration = 0

      const timeline = gsap.timeline({
        paused: true
      })

      timeline.fromTo(
        '.section-3 .content-1 .section-header > *',
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
        '.section-3 .content-1 .v-container ul > li',
        { y: 64, x: 64, rotationX: 90, opacity: 0 },
        {
          duration: 1,
          opacity: 1,
          rotationX: 0,
          y: 0,
          x: 0,
          stagger: 0.075,
          ease: 'power2',
          transformOrigin: '0 100%'
        },
        '>-0.5'
      )

      new ScrollMagic.Scene({
        triggerElement: '.section-3 .content-1 .section-header ',
        triggerHook: 0.5,
        duration: '200%'
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
    },

    section3Ready2() {
      // const roundOff = (progress) => Math.round(progress * 100) / 100
      // const duration = 0

      const timeline = gsap.timeline({
        paused: true
      })

      timeline.fromTo(
        '.section-3 .content-2 .section-header > *',
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
        '.section-3 .content-2 .v-container ul > li',
        { y: 64, x: 64, rotationX: 90, opacity: 0 },
        {
          duration: 1,
          opacity: 1,
          rotationX: 0,
          y: 0,
          x: 0,
          stagger: 0.075,
          ease: 'power2',
          transformOrigin: '0 100%'
        },
        '>-0.5'
      )

      new ScrollMagic.Scene({
        triggerElement: '.section-3 .content-2 .section-header ',
        triggerHook: 0.5,
        duration: '200%'
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
.section-3 {
  background-image: linear-gradient(
    180deg,
    #f4002b 0%,
    #171615 100%,
    #171615 100%
  );

  color: white;
}

.v-container {
  width: 100%;
  height: 100%;
  //overflow-x: auto;
  overflow: hidden;
  height: calc(100vw / 5);
  .flex-container {
    list-style: none;
    padding: 0;
    display: inline-flex;
    margin: 0;

    .flex-item {
      width: calc(100vw / 5);
      height: calc(100vw / 5);
      display: flex;
      justify-content: center;
      align-items: center;

      background-repeat: no-repeat;
      background-size: cover;

      &.flex-item:not(:last-of-type) {
        margin-right: 0px;
      }
    }
  }
}
</style>
