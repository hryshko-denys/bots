<template>
  <div class="modal__field-wrapper">
    <label for="name" class="modal__label modal__label--text">
      {{ label }}
    </label>
    <div
      class="modal__input-wrapper"
      v-bind:class="{ modal__text_error: error }"
    >
      <input
        :id="name"
        :name="name"
        class="modal__text"
        type="text"
        placeholder="Type a name here..."
        :value="value"
        @input="$emit('input', $event.target.value)"
        @blur="$emit('validate')"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    value: String,
    error: Boolean,
    name: String
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/_variables';

.modal {
  &__field-wrapper {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
  }

  &__label {
    position: relative;
    font-size: 1.5rem;
    font-weight: bold;

    cursor: pointer;
  }

  &__input-wrapper {
    position: relative;
    width: 40%;
    padding: 10px;

    border: 1px solid $blue;
    border-radius: 15px;
  }

  &__text {
    width: 100%;
  }

  &__text_error {
    border: 1px solid $tomatored;
  }

  &__text_error::after {
    content: 'Type correct name';
    position: absolute;
    top: calc(50% - 11px);
    left: -150px;
    display: block;

    color: $tomatored;
  }

  &__text::placeholder {
    font-family: 'Raleway', 'Arial', sans-serif;
  }
}
</style>
