<template>
  <div class="chat" :class="'chat--' + dir">
    <div class="chat__img">
      <bib-avatar class="shape-circle" :src="img"> </bib-avatar>
    </div>

    <div class="chat__content">
      <div class="chat__content__text">{{ text }}</div>

      <div class="chat__content__action">
        <span>{{ date }}</span>

        <bib-link
          class="text-primary"
          :label="action.label"
          :href="action.href"
          :key="key"
          v-for="(action, key) in actions"
        >
        </bib-link>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * @module Molecules/BibChat
 * @author Sharp Eye
 * @desc Chat component as unit of conversation.
 * @vue-prop {String} dir=direct - direction of chat (direct, reply).
 * @vue-prop {String} img=null - chat's scripter's img.
 * @vue-prop {String} text=null - chat's text.
 * @vue-prop {String} date=null - time when chat was sent.
 * @vue-data {Array<Object>} actions - forward, reply, reply privately actions.
 */
export default {
  name: "BibChat",
  props: {
    dir: {
      type: String,
      default() {
        return "direct";
      },
    },
    img: {
      type: String,
      default() {
        return null;
      },
    },
    text: {
      type: String,
      default() {
        return null;
      },
    },
    date: {
      type: String,
      default() {
        return null;
      },
    },
  },
  data() {
    return {
      actions: [
        {
          label: "Forward",
          href: "#",
        },
        {
          label: "Reply",
          href: "#",
        },
        {
          label: "Reply Privately",
          href: "#",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.chat {
  margin-bottom: 1.5rem;
  display: flex;

  &--direct {
    margin-left: 0rem;
  }

  &--reply {
    margin-left: 4rem;
  }

  &__img {
    margin-right: 1rem;
  }

  &__content {
    &__text {
      margin-bottom: 0.5rem;
      padding: 1rem;
      border-radius: 0 0.5rem 0.5rem 0.5rem;
      font-size: 1rem;
      line-height: 1.5rem;
      letter-spacing: 0;
      background-color: $white;
    }

    &__action {
      display: flex;
      align-items: center;
      gap: 1rem;

      span {
        font-size: 0.8125rem;
        letter-spacing: 0;
        line-height: 1rem;
        color: $gray1;
      }
    }
  }
}
</style>