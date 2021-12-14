<template>
  <a class="link" :href="href">
    {{ label }}
  </a>
</template>

<script>
/**
 * @module Atoms/BibLink
 * @author Sharp Eye
 * @desc Link component.
 * @vue-prop {String} label=null - text.
 * @vue-prop {String} href=null - href link.
 */
export default {
  name: "BibLink",
  props: {
    label: {
      type: String,
      default() {
        return null;
      },
    },
    href: {
      type: String,
      default() {
        return null;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.link {
  text-decoration: none;
  cursor: pointer;
}
</style>
