<template>
  <div class="panel-wrapper">
    <div class="panel-wrapper__header">
      <slot name="header"></slot>
    </div>

    <div class="panel-wrapper__menu">
      <slot name="menu"></slot>
    </div>

    <div class="panel-wrapper__content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
/**
 * @module Molecules/BibPanelWrapper
 * @author Sharp Eye
 * @desc PanelWrapper component wrapping side panel.
 */
export default {
  name: "BibPanelWrapper",
};
</script>

<style lang="scss" scoped>
.panel-wrapper {
  background: $white;
  // box-shadow: -1px 5px 15px $gray4;
  position: relative;
  z-index: 3;
  max-width: 30rem;
  height: 100%;
  width: 100%;
}
</style>
