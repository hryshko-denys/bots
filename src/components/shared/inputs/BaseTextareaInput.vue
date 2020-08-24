<template>
  <div class="modal__field-wrapper">
    <label for="description" class="modal__label modal__label--text">
      {{ label }}
    </label>
    <div
      class="modal__textarea-wrapper"
      v-bind:class="{ modal__description_error: error }"
    >
      <textarea
        :name="name"
        class="modal__textarea"
        id="description"
        placeholder="Type a description here..."
        :value="value"
        @input="$emit('input', $event.target.value)"
        @blur="$emit('validate')"
      >
      </textarea>
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

  &__textarea-wrapper {
    position: relative;
    width: 40%;
    padding: 10px;

    border: 1px solid $blue;
    border-radius: 15px;
  }

  &__textarea {
    width: 100%;
  }

  &__description_error {
    border: 1px solid $tomatored;
  }

  &__description_error::after {
    content: 'Type correct description';
    position: absolute;
    top: calc(50% - 11px);
    left: -190px;
    display: block;

    color: $tomatored;
  }

  &__textarea::placeholder {
    font-family: 'Raleway', 'Arial', sans-serif;
  }

  &__textarea {
    background-color: #fffaf0;
  }
}
</style>
