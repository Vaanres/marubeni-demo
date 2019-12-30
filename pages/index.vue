<template>
  <div>
    <Header />
    <Section1 />
    <Section2 />
    <Section3 />
  </div>
</template>

<script>
import Header from '~/components/Header'
// import Footer from '~/components/Footer'
import Section1 from '~/components/Section1'
import Section2 from '~/components/Section2'
import Section3 from '~/components/Section3'

export default {
  components: { Header, Section1, Section2, Section3 }
}
</script>

<style lang="scss"></style>
