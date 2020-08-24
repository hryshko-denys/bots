<template>
  <div class="bots">
    <ol class="bots__list">
      <li class="bots__item" v-for="bot in bots" :key="bot.id">
        <BotItem
          :bot="bot"
          @delete-bot="$emit('delete-bot', $event)"
          @show-bot-edit-modal="$emit('bot-click', $event)"
        />
      </li>
    </ol>
  </div>
</template>

<script>
import BotItem from './bots-list/BotItem.vue'

export default {
  props: {
    bots: Array
  },

  components: {
    BotItem
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/_variables';
@import '@/assets/scss/_extends';

.bots {
  max-width: 35%;
  margin: 0 auto;

  &__list {
    margin: 1.75rem 0;
    padding-left: 1rem;

    counter-reset: gradient-counter;
    list-style: none;
  }

  &__item {
    position: relative;
    display: grid;
    place-items: center;

    margin-top: 2rem;
    min-height: 3rem;
    padding: 1rem 1rem 1rem 3rem;

    background: #fafafa;
    border-radius: 0 0.5rem 0.5rem 0.5rem;
    counter-increment: gradient-counter;

    @extend %boxshadow;
  }

  &__item::before,
  &__item::after {
    content: '';
    position: absolute;
    left: -1rem;
    top: -1rem;

    width: 3rem;
    height: 3rem;

    background: linear-gradient(135deg, $blue 0%, $green 100%);
    border-radius: 1rem 1rem 0 1rem;
    overflow: hidden;
  }

  &__item::before {
    content: counter(gradient-counter);
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 0.125em 0.25em;

    color: $black;
    font: 900 1.5em/1 'Montserrat';
    @extend %boxshadow;
  }
}
</style>
