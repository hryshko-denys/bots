<template>
  <div class="nav">
    <div class="nav__wrapper">
      <h1 class="nav__heading">Telegram bots</h1>
      <img
        class="nav__image"
        src="@/assets/images/telegram.png"
        alt="Telegram"
      />
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/_variables';

.nav {
  display: grid;
  place-items: center;
  border-bottom: 1px solid #ffa07a;

  width: 100%;
  min-height: 100px;
  margin-bottom: 80px;
  background-color: #f0f8ff;

  &__wrapper {
    display: flex;
    width: 400px;

    font-size: 3rem;
  }

  &__heading {
    color: $blue;
    margin-right: 20px;
  }

  &__image {
    width: 50px;
    height: 50px;
  }
}
</style>
