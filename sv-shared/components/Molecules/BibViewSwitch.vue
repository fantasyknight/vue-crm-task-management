<template>
  <div class="view-switch">
    <div v-if="label" class="view-switch__label text-secondary font-sm">
      {{ label }}
    </div>
    <div class="view-switch__wrapper" :style="switchWidth">
      <div class="view-switch__indicator" :style="indicatorPosition"></div>
      <div class="view-switch__body">
        <div
          class="view-switch__item"
          :class="item == value && 'view-switch__item--selected'"
          v-for="(item, index) in items"
          :key="index"
          @click.stop="select(index)"
        >
          <BibIcon
            :icon="item"
            :scale="0.75"
            :variant="item == value ? 'gray6' : 'gray4'"
          />
        </div>
      </div>
    </div>
  </div>
</template>



<script>
/**
 * @module Molecules/BibViewSwitch
 * @author Sharp Eye
 * @desc
 * - Toggle switcher for different view types
 * - It can accept a dynamic list of options (items)
 *
 * @vue-prop {Array(string)} items - a list of strings representing the icon naming nomenlature to be displayed as clickable options
 * @vue-prop {String} label - optional - the label to be shown before the icons describing the options
 *
 * @vue-model - bind data (pass data and listen for change by using "v-model" — equivalent of passing a prop "value" and listening for event @input)
 *
 * @usage
 * <BibViewSwitch v-model="NameOfADataProperyInTheParentComponent" :items="['icon-A', 'icon-B']" />
 */

export default {
  name: "BibViewSwitch",
  props: {
    items: {
      type: Array,
      default() {
        return ["list", "kanban"];
      },
    },
    label: {
      type: String,
      default: null,
    },
    value: {
      type: String,
      default: "list",
    },
  },
  data() {
    return {
      proxy: this.value,
      switchItemSize: 24,
    };
  },
  computed: {
    indicatorPosition() {
      const index = this.items.findIndex((item) => item == this.proxy);
      return {
        transform: `translateX(${index * 100}%)`,
      };
    },
    switchWidth() {
      return {
        width: this.items.length * this.switchItemSize + "px",
      };
    },
  },
  methods: {
    select(index) {
      this.proxy = this.items[index];
      this.$emit("input", this.proxy);
    },
  },
};
</script>



<style lang="scss" scoped>
.view-switch {
  --switch-size: 24px;
  display: inline-grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 0.5rem;

  &__wrapper {
    position: relative;
  }

  position: relative;
  &__indicator {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: var(--switch-size);
    content: "";
    background-color: white;
    border: 1px solid var(--gray1);
    border-radius: 4px;
    transition: all 0.2s ease;
    transform: translateX(200%);
  }
  &__body {
    display: flex;
  }
  &__item {
    background-color: var(--light);
    border: 1px solid transparent;
    border-top-color: var(--gray4);
    border-bottom-color: var(--gray4);
    width: var(--switch-size);
    height: var(--switch-size);
    display: grid;
    place-items: center;
    &--selected {
      cursor: auto;
    }
    &:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      border-left-color: var(--gray4);
    }
    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      border-right-color: var(--gray4);
    }
  }
}
</style>