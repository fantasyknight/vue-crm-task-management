<template>
  <div>
    <div @click="openDetails()" class="detail-collapse__header">
      <bib-icon
        ref="icon"
        :class="open == false ? '' : 'flip'"
        icon="arrow-down"
        :scale="0.5"
        :variant="variant"
      ></bib-icon>
      <div class="detail-collapse__header__title" :class="['text-' + variant]">
        {{ label }}
      </div>
      <div v-if="this.$slots.switcher" class="detail-collapse__switcher">
        <slot name="switcher"></slot>
      </div>
    </div>
    <div
      ref="content"
      class="detail-collapse__content"
      :class="open == false ? 'bib-collapse' : ''"
    >
      <slot name="content"> </slot>
    </div>
  </div>
</template>

<script>
/**
 * @module Molecules/BibDetailCollapse
 * @author Sharp Eye
 * @desc Detail Collapse component.
 * @vue-prop {Array<Object>} label=null - Collapse header label.
 * @vue-prop {String} variant=dark - variant colors system
 */
export default {
  name: "BibDetailCollapse",
  props: {
    label: {
      type: String,
      default() {
        return "Label";
      },
    },
    variant: {
      type: String,
      default() {
        return "dark";
      },
    },
    open: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  data() {
    return {
      id: null,
    };
  },

  methods: {
    openDetails() {
      let collapse = this.$refs.content;
      if (collapse) collapse.classList.toggle("bib-collapse");

      let icon = this.$refs.icon.$vnode.elm;
      if (icon) icon.classList.toggle("flip");
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss">
.detail-collapse {
  &__header {
    padding: 1.1rem 1rem;
    display: flex;
    align-items: center;
    height: 2.5rem;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;

    .icon {
      line-height: 1.5rem;
      transform: rotate(-90deg);
    }
    &__title {
      padding-left: 1.1rem;
    }
  }
  &__content {
    height: 100%;
  }
  &__switcher {
    margin-left: auto;
  }
}

.flip {
  transform: rotate(0deg) !important;
}
</style>
