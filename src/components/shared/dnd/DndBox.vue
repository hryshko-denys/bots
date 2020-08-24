<template>
  <div
    class="dnd-box"
    @dragenter.prevent="onDragEnter"
    @dragleave.prevent="onDragLeave"
    @dragover.prevent
    @drop.prevent="onDrop"
    :class="{ 'dnd-box--dragging': isDragging }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDragging: false,
      dragCount: 0
    }
  },
  methods: {
    onDragEnter() {
      this.isDragging = true
      this.dragCount += 1
    },

    onDragLeave() {
      this.dragCount -= 1
      if (this.dragCount <= 0) {
        this.isDragging = false
      }
    },

    onDrop(event) {
      event.stopPropagation()
      this.isDragging = false

      this.$emit('file-input', event.dataTransfer.files[0])
    }
  }
}
</script>

<style lang="scss">
.dnd-box {
  position: relative;

  width: 100%;
  padding: 20px;

  border-radius: 10px;
  background-color: #87ceeb;
  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &--dragging {
    background-color: #98fb98;
  }
}
</style>
