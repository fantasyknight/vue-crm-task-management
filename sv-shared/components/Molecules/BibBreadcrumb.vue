<template>
  <div
    class="breadcrumb"
    :class="{
      'breadcrumb--last-active': !lastIsParent,
      'breadcrumb--no-back': hideBack,
    }"
  >
    <div class="breadcrumb__back back">
      <div v-if="!hideBack" class="back__wrapper" @click="$emit('back')">
        <BibIcon icon="home" :scale="1.5" variant="secondary-sub2" />
      </div>
    </div>
    <div class="breadcrumb__body">
      <div
        class="breadcrumb__item"
        v-for="(item, index) in items"
        :key="index"
        @click="navigate(item, index)"
      >
        <span>{{ item.label }}</span>
      </div>
    </div>
  </div>
</template>



<script>
/**
 * @module Molecules/BibBreadcrumb
 * @author Sharp Eye
 * @desc Breadcrumb trail display with the options to
 * - show/hide back button
 * - treat last crumb as a parent or current location
 *
 * @vue-prop {Array <Object>} - items - a set of crumbs with "label" and any other key required back to be passed back to process the click by the parent
 * @vue-prop {Boolean} - hideBack=false - whether the back (chevron) icon should be hidden
 * @vue-prop {Boolean} - lastIsParent=false - whether the last crumb in a list is a parent of a current path—in which case it will make ic clickable (otherwise is just for display purposes)
 */
export default {
  name: "BibBreadcrumb",
  props: {
    items: {
      type: Array,
      default() {
        return [
          { label: "Home" },
          { label: "Level" },
          { label: "Sublevel" },
          { label: "Current active level" },
        ];
      },
    },
    lastIsParent: {
      type: Boolean,
      default: false,
    },
    hideBack: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    navigate(item, index) {
      if (index == this.items.length - 1 && !this.lastIsParent) return;
      this.$emit("navigate", item);
    },
  },
};
</script>


<style lang="scss" scoped>
.breadcrumb {
  display: grid;
  gap: 0.5em;
  grid-auto-flow: column;
  justify-content: start;
  font-size: 17px;
  line-height: 1;
  padding: 0 0.5rem;
  &--last-active {
    .breadcrumb__item:last-child {
      font-weight: 600;
      &:hover span {
        cursor: inherit;
        text-decoration: inherit;
      }
    }
  }
  &--no-back {
    padding-left: 0.5rem;
  }
  &__back {
    display: grid;
  }
  &__body {
    display: flex;
    gap: 0.5em;
    flex-wrap: wrap;
    padding: 0.75rem 0 0.5rem;
  }
  &__item {
    display: grid;
    grid-auto-flow: column;
    gap: 0.5em;
    white-space: nowrap;
    &:not(:first-child)::before {
      content: "/";
    }
    &:hover span {
      cursor: pointer;
      text-decoration: underline;
    }
  }
}
.back {
  min-height: 2.5rem;
  &__wrapper {
    height: 2.5rem;
    display: grid;
    place-items: center;
    cursor: pointer;
  }
}
</style>