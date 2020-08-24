<template>
  <div>
    <cta-button text="Create new bot" @click.native="showAddBotModal" />

    <h2 v-if="!bots.length">
      Press button to add new bot
    </h2>

    <bots-list
      v-else
      :bots="bots"
      @show-bot-edit-modal="showEditBotModal"
      @delete-bot="deleteBot"
    />

    <bot-modal
      :show="isModalVisible"
      :bot="bot"
      @add-bot="addBot"
      @edit-bot="editBot"
      @close="closeBotModal"
    />
  </div>
</template>

<script>
import BotModal from './content/BotModal'
import BotsList from './content/BotsList'
import CtaButton from '@/components/shared/buttons/CtaButton'

export default {
  components: {
    BotModal,
    BotsList,
    CtaButton
  },

  data() {
    return {
      bots: [],
      bot: null,

      isModalVisible: false
    }
  },

  created() {
    if (localStorage.bots) {
      this.bots = JSON.parse(localStorage.getItem('bots'))
    }
  },

  methods: {
    showAddBotModal() {
      this.isModalVisible = true
    },

    addBot(bot) {
      this.bots.push(bot)
      this.updateLocalStorage()

      this.isModalVisible = false
    },

    showEditBotModal(bot) {
      this.bot = bot
      this.isModalVisible = true
    },

    editBot(bot) {
      let index = this.bots.findIndex(b => b.id === bot.id)
      this.bots[index] = { ...bot }

      this.updateLocalStorage()
      this.isModalVisible = false
    },

    deleteBot(bot) {
      this.bots = this.bots.filter(b => b.id !== bot.id)
      this.updateLocalStorage()
    },

    closeBotModal() {
      this.bot = null
      this.isModalVisible = false
    },

    updateLocalStorage() {
      try {
        localStorage.setItem('bots', JSON.stringify(this.bots))
      } catch (e) {
        console.log(e.message)
      }
    }
  }
}
</script>
