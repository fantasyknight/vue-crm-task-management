<template>
  <div class="form-group">
    <label>{{ label }}</label>
    <span class="text-danger" v-if="required == true">*</span>
    <div class="form-group__content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
/**
 * @module Molecules/BibFormGroup
 * @author Sharp Eye
 * @desc FormGroup component containing label & input element.
 * @vue-prop {String} label=null - form group label.
 */
export default {
  name: "BibFormGroup",
  props: {
    label: {
      type: String,
      default: null,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.form-group {
  margin-bottom: 0.35rem;

  label {
    color: $gray6;
  }

  &__content {
    padding-top: 0.5rem;
  }
}
</style>