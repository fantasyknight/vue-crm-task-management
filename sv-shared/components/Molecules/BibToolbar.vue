<template>
  <div class="toolbar" :class="transparent ? 'toolbar--transparent' : ''">
    <div class="toolbar__label" v-if="label">
      <bib-button class="toolbar__action" :label="label" plus></bib-button>
      <div id="action__context" class="position-absolute">
        <template v-for="(item, key) in actions.items">
          <span
            @click="$emit(item.event)"
            :key="key"
            class="cursor-pointer list__item"
            >{{ item.label }}</span
          >
        </template>
      </div>
    </div>

    <div class="toolbar__filters">
      <div class="pr-1 pl-1 align-center">
        <span class="view-switch__anchor">
          <bib-icon icon="arrow-down" variant="black" :scale="0.55"></bib-icon>
        </span>
        <h5 class="text-gray5 pr-05">Views</h5>
        <label class="view-switch">
          <input
            class="view__input"
            type="checkbox"
            :checked="viewSwitch"
            @change="viewSwitched"
          />
          <span class="view-slider border-gray4 bg-light">
            <bib-icon
              class="view-slider-list"
              :variant="viewSwitch ? 'gray4' : 'gray6'"
              :scale="0.8"
              icon="list"
            ></bib-icon>
            <bib-icon
              class="view-slider-kanban"
              :variant="viewSwitch ? 'gray6' : 'gray4'"
              :scale="0.8"
              icon="kanban"
            ></bib-icon>
          </span>
        </label>
      </div>
      <!-- <div class="pr-1 pl-05">
        <bib-button pop="elipsis">
          <template v-slot:menu>
            <div class="list">
              <span class="list__item">item 1</span>
              <span class="list__item">item 2</span>
              <span class="list__item">item 3</span>
            </div>
          </template>
        </bib-button>
      </div> -->
    </div>
  </div>
</template>

<script>
/**
 * @module Molecules/BibToolbar
 * @author Sharp Eye
 * @desc Toolbar component controlling, filtering content.
 * @vue-prop {String} label="Action Label" - flag to check if contain label.
 * @vue-prop {Object} actions={item:[]} - action object containing items for menu and their events.
 * @vue-prop {Boolean} transparent=null - flag to check if transparent.
 */
export default {
  name: "BibToolbar",
  props: {
    label: {
      type: String,
      default() {
        return "Action Label";
      },
    },
    actions: {
      type: Object,
      default() {
        return {
          items: [
            {
              label: "Label A",
              event: "label-a-action",
            },
            {
              label: "Label B",
              event: "label-b-action",
            },
            {
              label: "Label C",
              event: "label-c-action",
            },
          ],
        };
      },
    },
    transparent: {
      type: Boolean,
      default() {
        return null;
      },
    },
  },
  data() {
    return {
      viewSwitch: true,
      showActionMenu: false,
    };
  },
  methods: {
    viewSwitched($event) {
      this.viewSwitch = $event.target.checked;
      this.$nuxt.$emit("view-switch", $event.target.checked ? "board" : "list");
      this.$emit("view-switch", $event.target.checked ? "board" : "list");

      if (this.viewSwitch) {
        document.getElementsByClassName("view-switch__anchor")[0].style.right =
          "4.5rem";
      } else {
        document.getElementsByClassName("view-switch__anchor")[0].style.right =
          "6rem";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.toolbar {
  width: 100%;
  max-width: 100%;
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  // border-top: 1px solid $secondary;
  background: $white;
  white-space: nowrap;

  &--transparent {
    background: transparent;
    border-color: transparent;
  }
  &__label {
    display: flex;
    position: relative;
    align-items: center;
    color: $dark;
    max-width: fit-content;

    &:hover {
      #action__context {
        visibility: visible;
        opacity: 1;
      }
    }
  }

  &__controls {
    display: flex;

    .control {
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 0 1rem;
    }
  }

  &__filters {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    padding-right: 0.75rem;
  }
}
#action__context {
  display: flex;
  flex-direction: column;
  width: 12.5rem;
  opacity: 0.5;
  visibility: hidden;
  background: $white;
  box-shadow: 0px 0px 2px 0px $secondary;
  border: 1px solid black;
  transition: 0.2s opacity linear;
  z-index: 9;
  top: 2.5rem;
  left: 0.25rem;
  .list__item {
    font-weight: 400;
    padding-left: 0.5rem;
  }
}
.view {
  $self: &;
  &-switch {
    position: relative;
    display: inline-block;
    width: 3rem;
    height: 1.5rem;

    &__anchor {
      position: absolute;
      top: 0rem;
      right: 5rem;
      display: none;
    }
    &:hover {
      #{ $self }-switch__anchor {
        display: block;
      }
    }
  }
  &input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  &-slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-transition: 0.4s;
    border-radius: 0.25rem;
    transition: 0.4s;

    &:before {
      position: absolute;
      content: "";
      height: 1.5rem;
      width: 1.5rem;
      background-color: white;
      border: 1px solid $gray5;
      top: -1px;
      left: -1px;
      -webkit-transition: 0.4s;
      border-radius: 0.25rem;
      transition: 0.4s;
    }

    &-list {
      position: absolute;
      top: 0.3rem;
      left: 0.25rem;
    }
    &-kanban {
      position: absolute;
      top: 0.3rem;
      right: 0.25rem;
    }
  }
  &__input {
    &:focus + .view-slider {
      box-shadow: 0 0 1px $gray2;
    }

    &:checked + .view-slider:before {
      -webkit-transform: translateX(24px);
      -ms-transform: translateX(24px);
      transform: translateX(24px);
    }

    &:checked + #{ $self }-switch__anchor {
      right: 70px;
      background: red;
    }
  }
}
</style>