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

      <div class="v-container">
        <ul class="flex-container">
          <li class="flex-item">1</li>
          <li class="flex-item">2</li>
          <li class="flex-item">3</li>
          <li class="flex-item">4</li>
          <li class="flex-item">5</li>
          <li class="flex-item">6</li>
          <li class="flex-item">7</li>
          <li class="flex-item">8</li>
        </ul>
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
.v-container {
  background-color: #e8eaf6;
  width: 100%;
  overflow-x: auto;

  .flex-container {
    list-style: none;
    padding: 0;
    margin: 12px;
    display: inline-flex;

    .flex-item {
      background-color: #c5cae9;
      width: 150px;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;

      &.flex-item:not(:last-of-type) {
        margin-right: 12px;
      }
    }
  }
}
</style>
