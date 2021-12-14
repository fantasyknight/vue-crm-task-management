<template>
  <div class="modal__mask">
    <div class="modal__wrapper" :class="`modal-${size}`">
      <div class="modal__wrapper__header">
        <span>{{ title }}</span>
        <div class="ml-auto mr-05 d-flex">
          <slot name="header"></slot>
        </div>
        <bib-icon
          variant="gray4"
          class="cursor-pointer"
          :scale="1.5"
          icon="close"
          @click.native="close"
        ></bib-icon>
      </div>

      <div class="modal__wrapper__content of-scroll-y">
        <slot name="content"> </slot>
      </div>

      <div class="modal__wrapper__footer">
        <slot name="footer"> </slot>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * @module Molecules/BibModalWrapper
 * @author Sharp Eye
 * @desc ModalWrapper component wrapping modal.
 * @vue-prop {String} title=null - title text.
 * @vue-prop {String} size=md - size (lg, md, sm).
 * @vue-event {Void} close - emit close event.
 */
export default {
  name: "BibModalWrapper",
  props: {
    title: {
      type: String,
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
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  &__mask {
    z-index: 9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba($secondary, 0.35);
    position: fixed;
    width: 100%;
    height: 100%;
  }
  &__wrapper {
    max-width: 26rem;
    box-shadow: 2px 3px 7px $gray4;
    height: max-content;
    margin: auto;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: $white;
    border-radius: 0.25rem;
    z-index: 999;

    &.modal-sm {
      max-width: 20rem;
    }
    &.modal-lg {
      max-width: 40rem;
    }

    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.5rem 0.5rem 0 1rem;
      line-height: 1.5rem;
      max-height: 2.5rem;

      span {
        color: $black;
      }
    }
    &__content {
      padding: 1rem 1rem 1rem 1rem;
      max-height: 75vh;
    }
    &__footer {
      padding: 0rem 1rem 1rem 1rem;
    }
  }
}
</style>