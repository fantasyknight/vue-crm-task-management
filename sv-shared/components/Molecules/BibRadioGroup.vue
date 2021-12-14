<template>
  <div class="radio-group">
    <div
      class="radio-group__item"
      :class="
        stacked
          ? 'radio-group__item--vertical'
          : 'radio-group__item--horizontal'
      "
      v-for="(option, key) in options"
      :key="key"
    >
      <bib-radio
        :label="option.label"
        :value="option.value"
        :name="name"
        :variant="option.variant"
        :size="option.size"
        :checked="selected == option.value"
        @change="change"
      >
      </bib-radio>
    </div>
  </div>
</template>

<script>
/**
 * @module Molecules/BibRadioGroup
 * @author Sharp Eye
 * @desc Radio groupping component
 * @vue-prop {String} value="" - v-model 'selected' input prop.
 * @vue-prop {Array} options=[] - text & value array of radios.
 * @vue-prop {String} name=null - text value.
 * @vue-prop {Boolean} stacked=null - flag indicating horizontal.
 * @vue-data {Array} selected - selected value.
 * @vue-event {Array} change - emit selected as v-model 'selected'.
 */
export default {
  name: "BibRadioGroup",
  props: {
    value: {
      type: String,
      default() {
        return null;
      },
    },
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    name: {
      type: String,
      default() {
        return null;
      },
    },
    stacked: {
      type: Boolean,
      default() {
        return null;
      },
    },
  },
  data() {
    return {
      selected: this.value,
    };
  },
  methods: {
    change(value) {
      this.$emit("input", value);
      this.$emit("change", this.selected);
    },
  },
};
</script>

<style lang="scss" scoped>
.radio-group {
  &__item {
    &--vertical {
      display: flex;
      gap: 0.5rem;
    }

    &--horizontal {
      display: inline-flex;
      gap: 0.5rem;
      margin-right: 1.5rem;
    }
  }
}
</style>