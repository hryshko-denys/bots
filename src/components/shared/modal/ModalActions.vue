<template>
  <div class="modal__buttons">
    <button
      type="submit"
      class="modal__button modal__button--add"
      :disabled="!acceptValid"
      @accept="$emit('accept')"
    >
      {{ acceptText }}
    </button>
    <button
      type="button"
      class="modal__button modal__button--close"
      @click="$emit('dismiss')"
    >
      {{ dismissText }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    acceptValid: Boolean,
    acceptText: String,
    dismissText: String
  }
}
</script>
<style lang="scss">
@import '@/assets/scss/_variables';

.modal {
  &__buttons {
    display: flex;
    justify-content: space-evenly;

    width: 100%;
  }

  &__button {
    padding: 20px 25px;

    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;

    border: none;
    border-radius: 20px;

    transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &__button:hover {
    opacity: 0.7;
  }

  &__button:disabled {
    opacity: 0.2;
  }

  &__button--add {
    background: #7decad;
    background: linear-gradient(to bottom right, #7decad, #4ce2e6);
  }

  &__button--close {
    background: #ec7d7d;
    background: linear-gradient(to bottom right, #ec7d7d, #e64ce1);
  }

  &__button--close {
    background-color: red;
  }
}
</style>
