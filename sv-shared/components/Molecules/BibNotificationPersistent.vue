<template>
  <div class="persistent font-lg" :class="`bg-${variant} ${bodyColor}`">
    <div class="persistent__body">{{ label }}</div>
    <div class="persistent__dismiss" @click="$emit('dismiss')">
      <bib-icon icon="close" :variant="dismissColor" :scale="1.5"></bib-icon>
    </div>
  </div>
</template>



<script>
/**
 * @module Organisms/BibNotificationPersistent
 * @author Sharp Eye
 * @desc
 * - Persistent notification on top of the app wrapper
 * - It will be displayed across all the app routes until manually dismissed
 * - Used in general to communicate critical info to the user
 *
 * @vue-prop {String} - variant - the background color will dictate the notifycation type
 * @vue-prop {String} - label - the content to be displayed
 *
 * @vue-event - dismiss - emits when the notification is manually dismissed by the user
 */
export default {
  name: "BibNotificationPersistent",
  props: {
    variant: {
      type: String,
      default: "warning",
    },
    label: {
      type: String,
      default:
        "This is a persistent notification. It lives across the app routes until manually dismissed.",
    },
  },
  computed: {
    bodyColor() {
      if (RegExp(/(danger|primary|success)$/).test(this.variant))
        return "text-white";
      if (RegExp(/(danger|primary|success)-sub1$/).test(this.variant))
        return "text-white";
      return "text--dark";
    },
    dismissColor() {
      if (RegExp(/(danger|primary|success)$/).test(this.variant))
        return "white";
      return "dark";
    },
  },
};
</script>



<style lang="scss" scoped>
.persistent {
  display: grid;
  grid-template-columns: 1fr 3rem;
  align-items: stretch;
  &__body {
    display: grid;
    place-items: center;
    padding: 0.5rem 2vw;
  }
  &__dismiss {
    display: grid;
    place-items: center;
    cursor: pointer;
  }
}
</style>