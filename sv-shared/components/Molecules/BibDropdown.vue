<template>
  <details
    class="dropdown"
    :id="id"
    @click="toggleOpen"
    v-click-outside="closeOpen"
    v-if="items.length"
  >
    <summary class="dropdown__toggle">
      <div class="dropdown__toggle__item">
        <template v-if="selected">
          <bib-avatar
            class="shape-circle"
            :src="selected.img"
            :width="1.5"
            :height="1.5"
            v-if="selected.img"
          >
          </bib-avatar>
          <span>{{ selected.text }}</span>
        </template>
        <template v-else>
          <span class="text-gray6">Please select...</span>
        </template>
      </div>

      <div class="dropdown__toggle__icon">
        <bib-icon
          class="d-flex m-auto"
          icon="arrow-down"
          :scale="0.5"
          :variant="open ? 'dark' : 'gray4'"
        >
        </bib-icon>
      </div>
    </summary>

    <div class="dropdown__menu">
      <div
        class="dropdown__item"
        v-for="(item, key) in items"
        :key="key"
        @click="select(item)"
      >
        <bib-avatar
          class="shape-circle"
          :src="item.img"
          :width="1.5"
          :height="1.5"
          v-if="item.img"
        >
        </bib-avatar>
        <span>{{ item.text }}</span>
      </div>
    </div>
  </details>
</template>

<script>
import BibAvatar from "../Atoms/BibAvatar.vue";
import BibIcon from "../Atoms/BibIcon.vue";
/**
 * @module Molecules/BibDropdown
 * @author Sharp Eye
 * @desc Dropdown component showing data list.
 */
export default {
  components: { BibIcon, BibAvatar },
  name: "BibDropdown",
  props: {
    value: {
      type: Object,
      default() {
        return null;
      },
    },
    items: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      id: this._uid,
      open: false,
      selected: this.value,
    };
  },
  methods: {
    toggleOpen() {
      this.open = !document.getElementById(this.id).open;
    },
    closeOpen() {
      this.open = false;
      document.getElementById(this.id).open = false;
    },
    select(item) {
      this.selected = item;
      this.closeOpen();
      this.$emit("select", item);
    },
  },
};
</script>

<style lang="scss" scoped>
.dropdown {
  position: relative;
  user-select: none;
  cursor: pointer;
  border: $gray4 solid 1px;
  border-radius: 4px;
  background-color: $white;

  &[open] {
    border-color: $dark;
  }

  &:hover {
    border-color: $dark;
  }

  &__toggle {
    display: grid;
    grid-template-columns: auto 2.5rem;
    list-style: none;
    height: 2.5rem;

    &::-webkit-details-marker {
      display: none;
    }

    &__item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding-left: 8px;
      padding-right: 8px;
    }

    &__icon {
      display: flex;
      align-items: center;
    }
  }

  &__menu {
    position: absolute;
    background-color: $white;
    border: $dark solid 1px;
    border-radius: 4px;
    width: 100%;
    overflow-y: auto;
    max-height: 7.5rem;
    z-index: 1;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px;
    height: 2.5rem;

    &:hover {
      font-weight: 600;
    }
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: $gray4;
  }

  ::-webkit-scrollbar-button {
    width: 0;
    height: 0;
    display: none;
  }

  ::-webkit-scrollbar-corner {
    background-color: transparent;
  }
}
</style>
