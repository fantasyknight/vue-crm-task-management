<template>
  <div>
    <div
      class="
        position-relative
        d-flex
        justify-end
        min-height-1
        w-85
        m-auto
        font-w-400 font-sm
        text-center text-gray5
      "
    >
      <span class="position-absolute pl-05" :style="{ left: value - 10 + '%' }"
        >{{ indicator }}
      </span>
      <span> {{ max }} </span>
    </div>
    <div class="progress">
      <div class="progress__mask" :style="{ width: 100 - value + '%' }">
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * @module Atoms/BibProgress
 * @author Sharp Eye
 * @desc Progress bar component.
 * @vue-prop {Number} value=0 - progress %.
 */
export default {
  name: "BibProgress",
  props: {
    value: {
      type: Number,
      default() {
        return 0;
      },
    },
    max: {
      type: String,
      default() {
        return "";
      },
    },
    indicator: {
      type: String,
      default() {
        return "";
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.progress {
  height: 8px;
  border-radius: 1em;
  margin: 5px;
  min-width: -webkit-fill-available;
  background: $dark;
  animation: change 1s linear infinite;
  position: relative;
  overflow: hidden;
  width: fit-content;
  background: linear-gradient(
    to right,
    $success 0%,
    $warning 45%,
    $orange 100%
  );
  &__mask {
    overflow: hidden;
    background: $dark;
    float: right;

    div {
      width: -webkit-fill-available;
      height: 8px;
      border-top-left-radius: 1em;
      border-bottom-left-radius: 1em;
    }
  }
}
</style>