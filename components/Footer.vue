<template>
  <div class="container">
    <div class="divider">
      <hr />
    </div>
    <div class="mb-3">
      <ul class="nav">
        <li class="nav-item mr-5 ">
          <a href="#" class="animated-link text-white">About us</a>
        </li>
        <li class="nav-item mr-5">
          <a href="#" class="animated-link text-white">Terms & Conditions</a>
        </li>
        <li class="nav-item mr-5">
          <a href="#" class="animated-link text-white">Privacy</a>
        </li>
        <li class="nav-item mr-5">
          <a href="#" class="animated-link text-white">Contact us</a>
        </li>
      </ul>
    </div>
    <div class="d-flex justify-content-between">
      <ul class="nav socials">
        <li class="nav-item mr-4">
          <a href="#" class="animated-link text-white">
            <font-awesome-icon :icon="['fab', 'twitter']"
          /></a>
        </li>
        <li class="nav-item mr-4">
          <a href="#" class="animated-link text-white"
            ><font-awesome-icon :icon="['fab', 'facebook-f']"
          /></a>
        </li>
        <li class="nav-item mr-4">
          <a href="#" class="animated-link text-white"
            ><font-awesome-icon :icon="['fab', 'linkedin-in']"
          /></a>
        </li>
      </ul>
      <div>
        <span class="text-secondary">
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

<style lang="scss" scoped>
hr {
  background-color: transparentize($color: white, $amount: 0.8);
}
</style>
