<template>
  <span :class="classNames" :style="sizeStyle + borderStyle">
    <img v-if="!isDisplayText" :src="src || defaultImg" />
    <span v-if="isDisplayText" :class="textClassNames">{{ this.text }}</span>
    <div
      v-if="indicator"
      :class="`avatar__indicator shape-circle bg-${indicator}`"
      :style="indicatorPositionStyle + indicatorSizeStyle"
    ></div>
  </span>
</template>

<script>
/**
 * @module Atoms/BibAvatar
 * @author Sharp Eye
 * @rebuild Sharp Eye
 * @desc Avatar component displaying img.
 * @vue-prop {String} src=null - img src.
 * @vue-prop {String} size=2rem - img size.
 * @vue-prop {String} shape=circle - shape of avatar (circle, rounded, square)
 * @vue-prop {String} variant=gray2 - background color.
 * @vue-prop {String} text=null - text avatar.
 * @vue-prop {String} text-variant=gray1 - text color.
 * @vue-prop {String} workload=null - workload color.
 * @vue-prop {String} indicator=null - attach an indicator to the avatar.
 * @vue-prop {String} indicator-offset-top - indicator top position.
 * @vue-prop {String} indicator-offset-right - indicator right position.
 * @vue-prop {String} indicator-size - indicator size.
 */
import { ColorVariants } from "../../js/colors";
import { pascalCase } from "../../js/utils";
export default {
  name: "BibAvatar",
  props: {
    src: {
      type: String,
      default() {
        return null;
      },
    },
    size: {
      type: String,
      default() {
        return "2rem";
      },
    },
    shape: {
      type: String,
      default() {
        return "circle";
      },
    },
    variant: {
      type: String,
      default() {
        return "gray2";
      },
    },
    text: {
      type: String,
      default() {
        return null;
      },
    },
    textVariant: {
      type: String,
      default() {
        return "gray1";
      },
    },
    workload: {
      type: String,
      default() {
        return null;
      },
    },
    indicator: {
      type: String,
      default() {
        return null;
      },
    },
    indicatorOffsetTop: {
      type: String,
      default() {
        return "-0.07rem";
      },
    },
    indicatorOffsetRight: {
      type: String,
      default() {
        return "0.07rem";
      },
    },
    indicatorSize: {
      type: String,
      default() {
        return "0.5rem";
      },
    },
  },
  data() {
    return {
      defaultImg: require("../../img/user-default.png"),
    };
  },
  computed: {
    classNames() {
      return `avatar shape-${this.shape} bg-${this.variant}`;
    },
    sizeStyle() {
      return `width: ${this.size}; height: ${this.size};`;
    },
    borderStyle() {
      return `border: 2px solid ${
        (this.workload && ColorVariants[pascalCase(this.workload)]) || "inherit"
      };`;
    },
    isDisplayText() {
      return this.src == null && this.text;
    },
    textClassNames() {
      return `avatar__text text-${this.textVariant}`;
    },
    indicatorPositionStyle() {
      return `top: ${this.indicatorOffsetTop}; right: ${this.indicatorOffsetRight};`;
    },
    indicatorSizeStyle() {
      return `width: ${this.indicatorSize}; height: ${this.indicatorSize};`;
    },
  },
};
</script>

<style lang="scss" scoped>
.avatar {
  display: inline-flex;
  position: relative;
  width: fit-content;
  object-fit: cover;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  font-size: inherit;
  text-align: center;
  transition: margin 0.2s ease-in;
  img {
    border-radius: inherit;
    width: 100%;
    height: 100%;
  }

  &__text {
    text-transform: uppercase;
    white-space: nowrap;
    display: flex;
  }

  &__indicator {
    position: absolute;
  }
}
</style>
