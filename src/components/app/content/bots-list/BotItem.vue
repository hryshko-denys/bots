<template>
  <div class="bots__content">
    <span class="bots__name" @click="$emit('show-bot-edit-modal', bot)">
      {{ bot.name }}
    </span>
    <div class="bots__container" @click="$emit('delete-bot', bot)">
      <div class="bots__left"></div>
      <div class="bots__right"></div>
      <label class="bots__close">close</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BotItem',
  props: ['bot']
}
</script>

<style lang="scss">
@import '@/assets/scss/_variables';

.bots__content {
  .bots__name {
    font-size: 2rem;
    color: #ffa07a;

    cursor: pointer;
  }

  .bots__container {
    position: absolute;
    top: calc(50% - 30px);
    right: 0;

    width: 50px;
    height: 50px;
    cursor: pointer;
  }

  .bots__left,
  .bots__right {
    position: absolute;
    width: 50px;
    height: 4px;
    margin-top: 24px;

    background-color: $blue;
    border-radius: 2px;
    transition: all 0.3s ease-in;
  }

  .bots__left {
    transform: rotate(45deg);
  }

  .bots__right {
    transform: rotate(-45deg);
  }

  .bots__close {
    position: absolute;
    bottom: -10px;
    right: calc(50% - 21px);

    color: $blue;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: all 0.3s ease-in;
    opacity: 0;
  }

  .bots__container:hover .bots__left,
  .bots__container:hover .bots__right {
    background-color: $tomatored;
  }

  .bots__container:hover .bots__left {
    transform: rotate(-45deg);
  }

  .bots__container:hover .bots__right {
    transform: rotate(45deg);
  }

  .bots__container:hover .bots__close {
    opacity: 1;
  }

  .bots__image {
    position: absolute;
    top: calc(50% - 30px);
    left: 100px;
    max-height: 60px;
    max-width: 60px;
    object-fit: contain;
    background-size: cover;
  }
}
</style>
