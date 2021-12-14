<template>
  <div class="tabs">
    <button
      v-for="(tab, key) in tabs"
      :class="{
        active: tab.value == active && !tab.disabled,
        disabled: tab.disabled,
      }"
      :key="key"
      @click="change(tab)"
    >
      {{ tab.title }}
    </button>
  </div>
</template>

<script>
/**
 * @module Atoms/BibTabs
 * @author Sharp Eye
 * @rebuild Sharp Eye
 * @desc Tabs component.
 * @vue-prop {Array<String>} tabs=null - tabs array.
 * @vue-prop {String} value=null - selected tab value.
 * @vue-data {String} active - selected tab value data.
 * @vue-event {String} change - emit selected tab.
 */
export default {
  name: "BibTabs",
  props: {
    tabs: {
      type: Array,
      default() {
        return null;
      },
    },
    value: {
      type: String,
      default() {
        return null;
      },
    },
  },
  data() {
    return {
      active: this.value,
    };
  },
  methods: {
    change(tab) {
      if (!tab.disabled) {
        this.active = tab.value;
        this.$emit("change", tab);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.tabs {
  height: 2.5rem;
  display: flex;
  border-bottom: 1px solid $secondary-sub2;

  button {
    border: none;
    padding: 0rem 1rem 0rem 1rem;
    background: none;
    color: $gray1;
    font-weight: 600;
    font-size: $base-size;

    &:hover {
      color: $dark;
      cursor: pointer;
    }

    &:focus {
      outline: none;
    }

    &.active {
      color: $dark;
      font-weight: 600;
      border-bottom: 2px solid $dark;
    }
    &.disabled {
      color: $secondary-sub1;
      cursor: auto;
    }
  }
}
</style>