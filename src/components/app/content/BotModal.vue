<template>
  <modal class="bot-modal" :show="show" @close="closeModal" :title="title">
    <form class="modal__form" ref="form" @submit.prevent="submitForm">
      <div>
        <base-input
          name="name"
          label="Name"
          v-model="name"
          :error="nameError"
          @validate="validateName"
          style="margin-bottom: 2.5rem"
        />

        <base-textarea
          name="description"
          label="Description"
          v-model="description"
          :error="descriptionError"
          @validate="validateDescription"
          style="margin-bottom: 2.5rem"
        />

        <image-dnd :image="image" @file-input="image = $event" />
      </div>

      <modal-actions
        :acceptText="acceptText"
        :acceptValid="isFormValid"
        @accept="$refs.form.submit()"
        dismissText="Close"
        @dismiss="closeModal"
      />
    </form>
  </modal>
</template>

<script>
import Modal from '@/components/shared/modal/Modal'
import ModalActions from '@/components/shared/modal/ModalActions'

import BaseInput from '@/components/shared/inputs/BaseInput'
import BaseTextarea from '@/components/shared/inputs/BaseTextareaInput'
import ImageDnd from '@/components/shared/dnd/ImageDnd'

import { isValueValid, generateRandomId } from '@/services/botService'

export default {
  props: {
    show: Boolean,
    bot: Object
  },

  components: {
    Modal,
    ModalActions,
    BaseInput,
    BaseTextarea,
    ImageDnd
  },

  data() {
    return {
      createBotInfo: {
        title: 'Describe a new bot',
        acceptText: 'Add bot'
      },

      editBotInfo: {
        title: 'Edit bot',
        acceptText: 'Edit bot'
      },

      name: '',
      nameError: false,
      nameInputDirty: false,

      description: '',
      descriptionError: false,
      descriptionInputDirty: false,

      image: null
    }
  },

  watch: {
    name() {
      if (this.nameInputDirty) this.validateName()
    },
    description() {
      if (this.descriptionInputDirty) this.validateDescription()
    },

    bot() {
      if (this.bot) {
        this.name = this.bot.name
        this.description = this.bot.description
        this.image = this.bot.image
      }
    }
  },

  computed: {
    title() {
      return this.bot ? this.editBotInfo.title : this.createBotInfo.title
    },

    acceptText() {
      return this.bot
        ? this.editBotInfo.acceptText
        : this.createBotInfo.acceptText
    },

    isFormValid() {
      return !this.nameError && !this.descriptionError && !!this.image
    }
  },

  methods: {
    submitForm() {
      const bot = this.prepareBot()

      if (this.bot) {
        this.$emit('edit-bot', bot)
      } else {
        this.$emit('add-bot', bot)
      }
      this.clearForm()
    },

    validateName() {
      this.nameError = isValueValid(this.name)
      this.nameInputDirty = true
    },

    validateDescription() {
      this.descriptionError = isValueValid(this.description)
      this.descriptionInputDirty = true
    },

    closeModal() {
      this.clearForm()
      this.$emit('close')
    },

    prepareBot() {
      return {
        id: this.bot ? this.bot.id : generateRandomId(),
        name: this.name,
        description: this.description,
        image: { ...this.image }
      }
    },

    clearForm() {
      this.name = ''
      this.nameError = false

      this.description = ''
      this.descriptionError = false

      this.image = null
    }
  }
}
</script>

<style lang="scss">
.bot-modal {
  .modal__form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 450px;
    padding: 10px;
  }
}
</style>
