<template>
  <div class="modal__drag-wrapper">
    <template v-if="imageUploaded">
      <div class="images__wrapper">
        <img
          :src="image.src"
          :alt="`Image ${image.name}`"
          class="images__item"
        />
        <div class="images__details">
          <span class="images__name" v-text="image.name"></span>
        </div>
      </div>
    </template>

    <template v-else>
      <h2
        class="modal__label modal__label--upload"
        v-bind:class="{ modal__image_error: error }"
      >
        Drag your image here
      </h2>
    </template>

    <label
      for="file"
      class="modal__label modal__label--button"
      v-bind:class="{ modal__image_error: error }"
    >
      {{ !image ? 'Select a file' : 'Select another file' }}
    </label>

    <input
      id="file"
      type="file"
      name="image"
      class="modal__download"
      accept="image/png, image/jpeg"
      @input="$emit('input', $event.target.files[0])"
      multiple
    />
  </div>
</template>

<script>
export default {
  props: {
    image: Object,
    error: Boolean
  },

  computed: {
    imageUploaded() {
      return !!this.image
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/_variables';

.modal {
  &__label {
    position: relative;
    font-size: 1.5rem;
    font-weight: bold;

    cursor: pointer;
  }

  &__label--upload {
    position: relative;

    font-size: 1.5rem;
    font-weight: bold;
  }

  &__label--upload {
    cursor: auto;
  }

  &__label--button::after {
    position: absolute;
    content: '';
    top: -40px;
    right: calc(50% - 16px);
    display: block;
    width: 32px;
    height: 32px;

    background-image: url('/assets/images/upload.png');
    background-position: center;
    background-repeat: no-repeat;
  }

  &__drag-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 55px;
  }

  &__download {
    display: none;
  }

  &__image_error {
    color: red;
  }
}

.images {
  display: flex;
  justify-content: space-between;
  width: 100%;

  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  &__wrapper:not(:last-child) {
    margin-right: 10px;
  }

  &__item {
    max-height: 75px;
    max-width: 75px;
    margin-bottom: 10px;
    object-fit: contain;
  }

  &__another {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }

  &__button {
    min-height: 3em;
    padding: 1em;
    margin: 0.5em;

    font-size: 0.5rem;
    background-color: $blue;
    border: none;
    border-radius: 3px;
    text-transform: uppercase;
    letter-spacing: 0.5em;
    transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &__button:hover {
    background-color: $softorange;
  }
}
</style>
