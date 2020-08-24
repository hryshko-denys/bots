<template>
  <dnd-box @file-input="handleFileInput">
    <image-upload :image="image" :error="imageError" @input="handleFileInput" />
  </dnd-box>
</template>

<script>
import DndBox from './DndBox.vue'
import ImageUpload from './ImageUpload.vue'

export default {
  props: {
    image: Object
  },

  components: {
    DndBox,
    ImageUpload
  },

  data() {
    return {
      imageError: false
    }
  },
  methods: {
    handleFileInput(file) {
      if (!file.type.match('image.*')) {
        return
      }

      const reader = new FileReader()

      reader.onload = event => {
        this.$emit('file-input', { name: file.name, src: event.target.result })
      }

      reader.readAsDataURL(file)
    }
  }
}
</script>
