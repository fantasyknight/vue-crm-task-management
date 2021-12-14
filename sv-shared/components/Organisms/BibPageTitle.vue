<template>
  <div
    class="page-title pr-1 border-top-secondary-sub2"
    :class="$slots.icon ? 'pl-1' : 'pl-2'"
  >
    <div class="page-title__icon mr-05">
      <slot name="icon"></slot>
    </div>
    <div class="page-title__label font-heading-md">{{ label }}</div>
    <div
      v-if="favorite != null"
      class="page-title__favorite shape-circle bg-gray3 d-flex"
      @click="$emit('favorite')"
    >
      <bib-icon
        :icon="favorite == true ? 'heart-like-solid' : 'heart-like'"
        :scale="1"
        class="m-auto"
        :variant="favorite == true ? 'danger' : 'secondary-sub1'"
      />
    </div>
    <div class="page-title__actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>



<script>
/**
 * @module Organisms/BibPageTitle
 * @author Sharp Eye
 * @desc
 * Page title including various other elements related to the current URL
 * TODO sharing, team, etc
 *
 * @vue-prop {Boolean} - favorite=null
 * - shows whether the URL (there is one title per URL) is a favorite
 * - a "null" value will make the component to not show the favorite trigger
 *
 * @vue-event - favorite - emits when user interacts with the favorite icon (if rendered)
 */
export default {
  props: {
    label: {
      type: String,
      default: "Page title",
    },
    favorite: {
      type: Boolean,
      default: null,
    },
  },
};
</script>



<style lang="scss" scoped>
.page-title {
  display: flex;
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;
  gap: 0.5rem;
  &__icon {
    display: grid;
  }
  &__label {
    margin-right: auto;
    display: grid;
    padding-top: 2px;
  }
  &__favorite {
    cursor: pointer;
    display: grid;
    place-items: center;
    flex: 0 0 2.5rem;
    width: 2.5rem;
    height: 2.5rem;
  }
  &__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
}
</style>