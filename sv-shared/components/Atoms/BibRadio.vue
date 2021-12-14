<template>
  <div :class="classNames">
    <input
      type="radio"
      @click="handleClick"
      :value="value"
      :name="name"
      :checked="active"
      :disabled="disabled"
    />
    <label>{{ label }}</label>
  </div>
</template>

<script>
/**
 * @module Atoms/BibRadio
 * @author Sharp Eye
 * @desc Radio component.
 * @vue-prop {String} label=null - label text.
 * @vue-prop {String} value=null - input value.
 * @vue-prop {String} name=null - text value.
 * @vue-prop {Boolean} checked=false - initial checked state.
 * @vue-data {Boolean} active - dynamic checked state.
 * @vue-prop {String} variant=null - variant (success, danger, warning, primary).
 * @vue-prop {String} size=md - size (lg, md, sm).
 * @vue-prop {Boolean} disabled=false - on / off state.
 * @vue-event {} handleClick - emit value.
 */
export default {
  name: "BibRadio",
  props: {
    label: {
      type: String,
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
    name: {
      type: String,
      default() {
        return null;
      },
    },
    checked: {
      type: Boolean,
      default() {
        return false;
      },
    },
    variant: {
      type: String,
      default() {
        return "default";
      },
    },
    size: {
      type: String,
      default() {
        return "md";
      },
    },
    disabled: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  data() {
    return {
      active: this.checked,
    };
  },
  computed: {
    classNames() {
      return `radio radio--${this.variant} radio--${this.size} ${
        this.disabled ? "radio--disabled" : ""
      }`;
    },
  },
  watch: {
    checked(newVal, oldVal) {
      this.active = newVal;
    },
  },
  methods: {
    handleClick() {
      if (!this.disabled) {
        this.active = true;
        this.$emit("change", this.value);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.radio {
  display: flex;
  align-items: center;
  line-height: 1rem;
  width: fit-content;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;

  input {
    display: flex;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    -webkit-appearance: none;
    border: 1px solid $gray5;

    &::before {
      content: "";
      display: block;
      width: 0.625rem;
      height: 0.625rem;
      border-radius: 50%;
      margin: auto;
    }

    &:hover {
      border: 1px solid $gray6;
    }

    &:checked {
      border: 1px solid $dark;

      &::before {
        background: $dark;
      }

      & + label {
        color: $dark;
      }
    }
  }

  label {
    padding-left: 0.625rem;
    font-size: $base-size;
    color: $gray6;
    margin-bottom: 0;

    &:hover {
      color: $dark;
    }
  }

  &--success {
    input {
      border: 1px solid $success-sub2;
      &:hover {
        border: 1px solid $success;
      }
      &:checked {
        border: 1px solid $success;
        &::before {
          background: $success;
        }
        & + label {
          color: $success;
        }
      }
    }

    label {
      color: $success-sub1;
      &:hover {
        color: $success;
      }
    }
  }

  &--primary {
    input {
      border: 1px solid $primary-sub2;
      &:hover {
        border: 1px solid $primary;
      }
      &:checked {
        border: 1px solid $primary;
        &::before {
          background: $primary;
        }
        & + label {
          color: $primary;
        }
      }
    }

    label {
      color: $primary-sub1;
      &:hover {
        color: $primary;
      }
    }
  }

  &--secondary {
    input {
      border: 1px solid $secondary-sub2;
      &:hover {
        border: 1px solid $secondary;
      }
      &:checked {
        border: 1px solid $secondary;
        &::before {
          background: $secondary;
        }
        & + label {
          color: $secondary;
        }
      }
    }

    label {
      color: $secondary-sub1;
      &:hover {
        color: $secondary;
      }
    }
  }

  &--danger {
    input {
      border: 1px solid $danger-sub2;
      &:hover {
        border: 1px solid $danger;
      }
      &:checked {
        border: 1px solid $danger;
        &::before {
          background: $danger;
        }
        & + label {
          color: $danger;
        }
      }
    }

    label {
      color: $danger-sub1;
      &:hover {
        color: $danger;
      }
    }
  }

  &--warning {
    input {
      border: 1px solid $warning-sub2;
      &:hover {
        border: 1px solid $warning;
      }
      &:checked {
        border: 1px solid $warning;
        &::before {
          background: $warning;
        }
        & + label {
          color: $warning;
        }
      }
    }

    label {
      color: $warning-sub1;
      &:hover {
        color: $warning;
      }
    }
  }

  &--lg {
    line-height: 1.2rem;
    input {
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 50%;
      -webkit-appearance: none;

      &::before {
        content: "";
        display: block;
        width: 0.775rem;
        height: 0.775rem;
        border-radius: 50%;
        margin: auto;
      }
    }

    label {
      padding-left: 0.75rem;
      font-size: $font-size-lg;
    }
  }

  &--sm {
    line-height: 1rem;
    input {
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      -webkit-appearance: none;

      &::before {
        content: "";
        display: block;
        width: 0.425rem;
        height: 0.425rem;
        border-radius: 50%;
        margin: auto;
      }
    }

    label {
      padding-left: 0.5rem;
      font-size: $font-size-lg;
    }
  }

  &--disabled {
    input {
      border: 1px solid $secondary-sub2;
      background: $secondary-sub2;
      &:hover {
        border: 1px solid $secondary-sub2;
      }
      &:checked {
        border: 1px solid $secondary-sub1;
        &::before {
          background: $secondary;
        }
        & + label {
          color: $secondary-sub1;
        }
      }
    }

    label {
      color: $secondary-sub1;
      &:hover {
        color: $secondary-sub1;
      }
    }
  }
}
</style>