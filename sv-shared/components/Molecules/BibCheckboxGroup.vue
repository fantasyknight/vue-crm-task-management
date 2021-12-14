<template>
  <div class="checkbox-group">
    <div
      class="checkbox-group__item"
      :class="
        stacked
          ? 'checkbox-group__item--vertical'
          : 'checkbox-group__item--horizontal'
      "
      v-for="(option, key) in options"
      :key="key"
    >
      <bib-checkbox
        :label="option.label"
        :value="option.value"
        :name="name"
        :variant="option.variant"
        :size="option.size"
        :checked="selected.includes(option.value)"
        @change="change"
      >
      </bib-checkbox>
    </div>
  </div>
</template>

<script>
/**
 * @module Molecules/BibCheckboxGroup
 * @author Sharp Eye
 * @desc Checkbox groupping component.
 * @vue-prop {Array} value=[] - v-model 'selected' input prop.
 * @vue-prop {Array} options=[] - text & value array of checkboxs.
 * @vue-prop {String} name=null - text value.
 * @vue-prop {Boolean} stacked=null - flag indicating horizontal.
 * @vue-data {Array} selected - selected value array.
 * @vue-event {Array} change - emit selected array as v-model 'selected'.
 */
export default {
  name: "BibCheckboxGroup",
  props: {
    value: {
      type: Array,
      default() {
        return [];
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
    change(value, checked) {
      if (checked) {
        if (!this.selected.includes(value)) this.selected.push(value);
      } else {
        if (this.selected.includes(value))
          this.selected.splice(this.selected.indexOf(value), 1);
      }

      this.$emit("change", this.selected);
    },
  },
};
</script>

<style lang="scss" scoped>
.checkbox-group {
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