<template>
  <label :class="classNames">
    <input
      type="checkbox"
      :checked="checked"
      @change="change"
      :disabled="disabled"
    />
    <span></span>
    <label><slot></slot></label>
  </label>
</template>

<script>
/**
 * @module Atoms/BibSwitch
 * @author Sharp Eye
 * @desc Switch component.
 * @vue-prop {Boolean} checked=null - on / off state.
 * @vue-prop {String} size=md - size (lg, md, sm).
 * @vue-prop {String} variant=null - variant (success, danger, warning, primary).
 * @vue-prop {Boolean} disabled=false - on / off state.
 * @vue-event {Boolean} change - emit on / off state.
 */
export default {
  name: "BibSwitch",
  props: {
    checked: {
      type: Boolean,
      default() {
        return null;
      },
    },
    size: {
      type: String,
      default() {
        return "md";
      },
    },
    variant: {
      type: String,
      default() {
        return "success";
      },
    },
    disabled: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  computed: {
    classNames() {
      return `switch switch--${this.size} switch--${this.variant} ${
        this.disabled ? "switch--disabled" : ""
      }`;
    },
  },
  methods: {
    change(event) {
      this.$emit("change", event.target.checked);
    },
  },
};
</script>

<style lang="scss" scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 3rem;
  height: 1.4rem;

  input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked {
      & + span {
        border: 1px solid $success;
        &::before {
          background-color: $success;
          -webkit-transform: translateX(1.4rem);
          -ms-transform: translateX(1.4rem);
          transform: translateX(1.4rem);
        }
      }
    }

    &:not(:checked) {
      & + span {
        border: 1px solid $dark;
        &::before {
          background-color: $black;
        }
      }
    }
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: $white;
    box-shadow: 0 0 1px $gray3;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 0.7rem;
    cursor: pointer;

    &:active {
      background-color: $gray4;
    }

    &::before {
      position: absolute;
      content: "";
      top: calc(0rem + 2px);
      left: calc(0rem + 3px);
      width: calc(1.25rem - 4px);
      height: calc(1.25rem - 4px);
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 0.7rem;
    }
  }

  label {
    position: absolute;
    width: max-content;
  }

  &--lg {
    width: 3.6rem;
    height: 1.6rem;
    font-size: $font-size-lg;
    input {
      &:checked {
        & + span {
          &::before {
            -webkit-transform: translateX(1.8rem);
            -ms-transform: translateX(1.8rem);
            transform: translateX(1.8rem);
          }
        }
      }
    }
    span {
      border-radius: 0.8rem;
      &::before {
        top: calc(0rem + 3px);
        left: calc(0rem + 4px);
        width: calc(1.4rem - 4px);
        height: calc(1.4rem - 4px);
        border-radius: 0.7rem;
      }
    }
    label {
      left: 4.1rem;
    }
  }

  &--md {
    width: 3rem;
    height: 1.4rem;
    label {
      left: 3.5rem;
    }
  }

  &--sm {
    width: 2.4rem;
    height: 1.2rem;
    font-size: $font-size-sm;
    input {
      &:checked {
        & + span {
          &::before {
            -webkit-transform: translateX(1.1rem);
            -ms-transform: translateX(1.1rem);
            transform: translateX(1.1rem);
          }
        }
      }
    }
    span {
      border-radius: 0.6rem;
      &::before {
        top: calc(0rem + 3px);
        left: calc(0rem + 3px);
        width: calc(1rem - 4px);
        height: calc(1rem - 4px);
        border-radius: 0.5rem;
      }
    }
    label {
      left: 2.9rem;
    }
  }

  &--danger {
    input {
      &:checked {
        & + span {
          border: 1px solid $danger;
          &::before {
            background-color: $danger;
          }
        }
      }

      &:not(:checked) {
        & + span {
          border: 1px solid #eec2c4;
          &::before {
            background-color: #eec2c4;
          }
        }
      }
    }

    span {
      background-color: $white;
      box-shadow: 0 0 1px $gray3;

      &:active {
        background-color: $gray4;
      }
    }
  }

  &--warning {
    input {
      &:checked {
        & + span {
          border: 1px solid $warning;
          &::before {
            background-color: $warning;
          }
        }
      }

      &:not(:checked) {
        & + span {
          border: 1px solid #d8ce85;
          &::before {
            background-color: #d8ce85;
          }
        }
      }
    }

    span {
      background-color: $white;
      box-shadow: 0 0 1px $gray3;

      &:active {
        background-color: $gray4;
      }
    }
  }

  &--primary {
    input {
      &:checked {
        & + span {
          border: 1px solid $primary;
          &::before {
            background-color: $primary;
          }
        }
      }

      &:not(:checked) {
        & + span {
          border: 1px solid #9faadc;
          &::before {
            background-color: #9faadc;
          }
        }
      }
    }

    span {
      background-color: $white;
      box-shadow: 0 0 1px $gray3;

      &:active {
        background-color: $gray4;
      }
    }
  }

  &--disabled {
    input {
      &:checked {
        & + span {
          border: 1px solid #cae2c9;
          background-color: #cae2c9;
          &::before {
            background-color: #7ac072;
          }
        }
      }

      &:not(:checked) {
        & + span {
          border: 1px solid $gray4;
          &::before {
            background-color: $gray5;
          }
        }
      }
    }

    span {
      background-color: $gray4;
    }
  }
}
</style>
