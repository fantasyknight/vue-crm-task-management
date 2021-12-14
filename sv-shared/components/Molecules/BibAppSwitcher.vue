<template>
  <div class="app-switcher">
    <div
      class="shape-rounded bg-dark-sub1 app-switcher__menuitem d-flex"
      :class="[
        menuitem.active
          ? 'app-switcher__menuitem--active app-switcher__menuitem--active--' +
            menuitem.color
          : '',
        menuitem.color
          ? 'app-switcher__menuitem__hover app-switcher__menuitem__hover--' +
            menuitem.color
          : '',
      ]"
      v-for="(menuitem, key) in menuItems"
      :key="key"
    >
      <a :href="menuitem.href">
        <span class="app-switcher__menuitem__tooltip">{{ menuitem.text }}</span>
        <bib-icon :icon="menuitem.img" :scale="1.4"> </bib-icon>
      </a>
    </div>
  </div>
</template>

<script>
/**
 * @module Molecules/BibAppSwicther
 * @author Sharp Eye
 * @desc App Switcher component.
 * @vue-prop {Array<Object>} menuItems=null - menuItems array.
 */
export default {
  name: "BibAppSwicther",
  props: {
    menuItems: {
      type: Array,
      default() {
        return null;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.app-switcher {
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 3.5rem;
  background-color: transparent;
  flex-direction: column;
  padding: 0rem;

  &__menuitem {
    margin: 0.5rem;
    width: 2.45rem;
    height: 2.45rem;
    background-color: none;
    justify-content: center;
    align-items: center;
    position: relative;

    $self: &;
    &:hover {
      #{ $self }__tooltip {
        display: block;
      }
    }
    &__hover {
      cursor: pointer;

      &--success-sub1:hover {
        background: $success-sub1;
        transition: background-color 0.2s ease;

        .icon::v-deep {
          svg {
            fill: white;
          }
          path {
            stroke: white !important;
          }
        }
      }

      &--orange:hover {
        background: $orange;
        transition: background-color 0.2s ease;

        .icon::v-deep {
          svg {
            fill: white !important;
          }
        }
      }

      &--purple:hover {
        background: $purple;
        transition: background-color 0.2s ease;

        .icon::v-deep {
          svg {
            fill: white !important;
          }
        }
      }

      &--primary:hover {
        background: $primary;
        transition: background-color 0.2s ease;

        .icon::v-deep {
          svg {
            fill: white !important;
          }
        }
      }
    }

    &__tooltip {
      display: none;
      background: $black;
      max-height: 1.5rem;
      width: fit-content;
      font-size: $font-size-sm;
      z-index: 4;
      position: absolute;
      top: -1.25rem;
      left: 0.25rem;
      border-radius: 0.25rem;
      color: white;
      padding: 0.25rem;
      transition: display 0.5s ease-in;

      &::before {
        width: 0.75rem;
        height: 0.5rem;
        position: absolute;
        bottom: -0.5rem;
        left: 1px;
        content: "";
        border-style: solid;
        border-width: 8px 11px 2px 1px;
        border-color: #000 transparent transparent transparent;
      }
    }
    &--active {
      &--success {
        background-color: $success;
        .icon::v-deep {
          svg {
            fill: white !important;
          }
        }
      }
      &--success-sub1 {
        background: $success-sub1;
        transition: background-color 0.2s ease;

        .icon::v-deep {
          svg {
            fill: white;
          }
          path {
            stroke: white !important;
          }
        }
      }
      &--orange {
        background-color: $orange;
        .icon::v-deep {
          svg {
            fill: white !important;
          }
        }
      }
      &--purple {
        background: $purple;

        .icon::v-deep {
          svg {
            fill: white !important;
          }
        }
      }

      &--primary {
        background: $primary;

        .icon::v-deep {
          svg {
            fill: white !important;
          }
        }
      }
    }
  }
}
</style>
