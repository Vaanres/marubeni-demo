<template>
  <div class="container mb-5">
    <div class="divider">
      <hr />
    </div>
    <div class="mb-3">
      <ul class="nav">
        <li class="nav-item mr-5">About us</li>
        <li class="nav-item mr-5">Terms & Conditions</li>
        <li class="nav-item mr-5">Privacy</li>
        <li class="nav-item mr-5">Contact us</li>
      </ul>
    </div>
    <div class="d-flex justify-content-between">
      <ul class="nav">
        <li class="nav-item mr-4">
          <font-awesome-icon :icon="['fab', 'twitter']" />
        </li>
        <li class="nav-item mr-4">
          <font-awesome-icon :icon="['fab', 'facebook-f']" />
        </li>
        <li class="nav-item mr-4">
          <font-awesome-icon :icon="['fab', 'linkedin-in']" />
        </li>
      </ul>
      <div>
        <span>
          © 2019 Marubeni. All rights served
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped></style>
