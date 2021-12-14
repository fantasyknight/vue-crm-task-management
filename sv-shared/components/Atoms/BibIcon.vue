<template>
  <div
    class="icon"
    :class="'icon--' + variant"
    :style="scaleStyle"
    v-html="rawSVG"
    @click="$emit('click')"
  ></div>
</template>
<script>
/**
 * @module Atoms/BibIcon
 * @author Sharp Eye
 * @rebuild Sharp Eye
 * @desc Icon component.
 */
import { svgs } from "../../js/svgs";
import { pascalCase } from "../../js/utils";
export default {
  name: "BibIcon",
  props: {
    icon: {
      type: String,
      default() {
        return null;
      },
    },
    variant: {
      type: String,
      default() {
        return "secondary";
      },
    },
    scale: {
      type: Number,
      default() {
        return 1;
      },
    },
  },
  computed: {
    scaleStyle() {
      return (
        "width: " + this.scale + "rem" + "; " + "height:" + this.scale + "rem"
      );
    },
    rawSVG() {
      return svgs[`BibIcon${pascalCase(this.icon)}`];
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes h {
  0% {
    transform: translate(6px, 2px);
  }

  25% {
    transform: translate(8px, 2px);
  }

  50% {
    transform: translate(10px, 2px);
  }

  75% {
    transform: translate(8px, 2px);
  }

  100% {
    transform: translate(6px, 2px);
  }
}

::v-deep svg {
  width: 100%;
  height: 100%;
  overflow: visible;

  & > * {
    transition: transform 0.2s ease-out;
  }

  .light-gray {
    fill: #bbbbbb;
  }

  .medium-gray {
    fill: #888888;
  }

  .white-50a {
    fill: $white;
    opacity: 0.5;
  }

  &:hover {
    .light-gray {
      fill: #888888;
    }

    .medium-gray {
      fill: $black;
    }
  }
}

.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-shrink: 0;

  &--gray::v-deep,
  &--gray1::v-deep {
    svg {
      fill: $gray1;
    }
  }

  &--gray2::v-deep {
    svg {
      fill: $gray2;
    }
  }

  &--gray3::v-deep {
    svg {
      fill: $gray3;
    }
  }

  &--gray4::v-deep {
    svg {
      fill: $gray4;
    }
  }

  &--gray5::v-deep {
    svg {
      fill: $gray5;
    }
  }

  &--gray6::v-deep {
    svg {
      fill: $gray6;
    }
  }

  &--primary::v-deep {
    svg {
      fill: $primary;
    }
  }

  &--primary-sub1::v-deep {
    svg {
      fill: $primary-sub1;
    }
  }

  &--primary-sub2::v-deep {
    svg {
      fill: $primary-sub2;
    }
  }

  &--primary-sub3::v-deep {
    svg {
      fill: $primary-sub3;
    }
  }

  &--success::v-deep {
    svg {
      fill: $success;
    }
  }

  &--success-sub1::v-deep {
    svg {
      fill: $success-sub1;
    }
  }

  &--success-sub2::v-deep {
    svg {
      fill: $success-sub2;
    }
  }

  &--success-sub3::v-deep {
    svg {
      fill: $success-sub3;
    }
  }

  &--danger::v-deep {
    svg {
      fill: $danger;
    }
  }

  &--danger-sub1::v-deep {
    svg {
      fill: $danger-sub1;
    }
  }

  &--danger-sub2::v-deep {
    svg {
      fill: $danger-sub2;
    }
  }

  &--danger-sub3::v-deep {
    svg {
      fill: $danger-sub3;
    }
  }

  &--warning::v-deep {
    svg {
      fill: $warning;
    }
  }

  &--warning-sub1::v-deep {
    svg {
      fill: $warning-sub1;
    }
  }

  &--warning-sub2::v-deep {
    svg {
      fill: $warning-sub2;
    }
  }

  &--warning-sub3::v-deep {
    svg {
      fill: $warning-sub3;
    }
  }

  &--secondary::v-deep {
    svg {
      fill: $secondary;
    }
  }

  &--secondary-sub1::v-deep {
    svg {
      fill: $secondary-sub1;
    }
  }

  &--secondary-sub2::v-deep {
    svg {
      fill: $secondary-sub2;
    }
  }

  &--secondary-sub3::v-deep {
    svg {
      fill: $secondary-sub3;
    }
  }

  &--black::v-deep {
    svg {
      fill: $black;
    }
  }

  &--white::v-deep {
    svg {
      fill: $white;
    }
  }

  &--orange::v-deep {
    svg {
      fill: $orange;
    }
  }

  &--purple::v-deep {
    svg {
      fill: $purple;
    }
  }
}

.icon {
  transition: opacity 0.2 ease;

  &:hover {
    opacity: 1;
    color: $dark;

    .rec-1 {
      transform: translate(-9px, 8px);
    }

    .rec-2 {
      transform: translate(9px, -8px);
    }

    .circles-1 {
      transform: translate(3px, 0);
    }

    .circles-2 {
      transform: translate(-4px, 0);
    }

    .arrow-r {
      transform: rotate(180deg);
    }
  }

  .arrows {
    & > * {
      transform-origin: center;
    }
  }
}
</style>