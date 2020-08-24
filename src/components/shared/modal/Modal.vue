<template>
  <transition appear>
    <div v-if="show">
      <div class="modal__wrapper">
        <div class="modal__overlay" @click="$emit('close')"></div>
      </div>
      <div class="modal">
        <h2 class="modal__heading">{{ title }}</h2>
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    title: String,
    show: Boolean
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/_variables';

.modal {
  position: fixed;
  z-index: 3;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100%;
  max-width: 900px;
  padding: 50px;
  background-color: #fffaf0;
  border-radius: 30px;

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.3);
  }

  &__wrapper {
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__heading {
    margin-bottom: 60px;

    font-size: 2.5rem;
    color: $blue;
    font-weight: bold;
  }
}
</style>
