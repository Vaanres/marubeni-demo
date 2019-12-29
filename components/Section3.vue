<template>
  <section class="section section-3">
    <div class="content-1">
      <div class="container">
        <div class="section-header">
          <h6 class="sub-title mb-4">Our vision</h6>
          <h2 class="title mb-0">Bring happiness</h2>
          <h2 class="title mb-0">to people</h2>
        </div>
      </div>
      <div class="gallery">
        <div class="gallery-container">
          <div class="gallery-item"></div>
          <div class="gallery-item"></div>
          <div class="gallery-item"></div>
          <div class="gallery-item"></div>
          <div class="gallery-item"></div>
          <div class="gallery-item"></div>
        </div>
      </div>
    </div>

    <div class="content-2"></div>
  </section>
</template>

<script>
export default {
  name: 'Section3'
}
</script>

<style lang="scss" scoped>
.gallery {
  //overflow: hidden;

  &-container {
  }

  &-item {
    display: inline-block;
    width: calc(100vw / 4);
    height: calc(100vw / 4);

    background-color: gray;
  }
}
</style>
