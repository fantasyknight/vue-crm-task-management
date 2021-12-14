<template>
  <div class="nav-section">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="nav-section__item nav-item"
      :class="{ 'nav-item--selected': item.selected }"
      @click="$emit('click', item)"
    >
      <div
        class="nav-item__icon"
        :class="{
          'nav-item__bullet': !item.icon,
          'nav-item__bullet--selected': !item.icon && item.selected,
        }"
      >
        <template v-if="item.icon">
          <div class="nav-item__symbol">
            <bib-icon
              :variant="item.selected ? 'white' : 'secondary'"
              :icon="item.icon"
              :scale="1.5"
            ></bib-icon>
          </div>
          <div class="nav-item__symbol--hover">
            <bib-icon
              variant="secondary-sub2"
              :icon="item.icon"
              :scale="1.5"
            ></bib-icon>
          </div>
        </template>
      </div>
      <div class="nav-item__label">
        <span>{{ item.label }}</span>
      </div>

      <template v-for="(sub, index) in item.sub">
        <div
          v-show="subCollapsed"
          :key="index"
          class="nav-item__icon nav-item__icon--sub"
          :class="{
            'nav-item__bullet': !sub.icon,
            'mb-1': index + 1 == item.sub.length,
          }"
        >
          <template v-if="sub.icon">
            <div class="nav-item__symbol--sub">
              <bib-icon
                :variant="sub.selected ? 'white' : 'secondary'"
                :icon="sub.icon"
                :scale="1.15"
              ></bib-icon>
            </div>
            <div class="nav-item__symbol--sub--hover">
              <bib-icon
                variant="secondary-sub2"
                :icon="sub.icon"
                :scale="1.15"
              ></bib-icon>
            </div>
          </template>
        </div>
        <div
          v-show="subCollapsed"
          :key="index + '-label'"
          class="nav-item__label nav-item__label--sub"
        >
          <span @click="$emit('sub-clicked', sub)">{{ sub.label }}</span>
        </div>
      </template>
    </div>
  </div>
</template>



<script>
/**
 * @module Organisms/BibAppNavigation
 * @author Sharp Eye
 * @desc
 * - Independent navigational section
 * - The application navigation bar can have multiple sections. Use this component for each one of them
 *
 * @vue-prop {Array} - items - to be shown as a list of options
 * @vue-prop {Boolean} - subCollapsed - whether to show sub items or not
 * - item.label - the label to be displayed
 * - item.icon = null - (optional) the icon along the label. If skipped, the item will be presented similar to a bulleted list item
 * - item.selected = false -(optional) whether the item in menu is selected
 *
 * @vue-event {Object} - emits back the selected item
 */

export default {
  name: "BibAppNavigation",
  props: {
    subCollapsed: {
      type: Boolean,
      default() {
        return false;
      },
    },
    items: {
      type: Array,
      default() {
        return [
          {
            label: "Label A",
            icon: "home",
            sub: [{ label: "Label A", icon: "folder-solid" }],
          },
          { label: "Label B" },
          { label: "Label C", selected: true },
        ];
      },
    },
  },
};
</script>



<style lang="scss" scoped>
.nav-item {
  min-height: 2.5rem;
  display: grid;
  grid-template-columns: 2.5rem 1fr;
  padding: 0 1.5rem 0 0.5rem;
  gap: 0.5rem;
  align-items: center;
  cursor: pointer;
  color: var(--secondary);
  transition: 0.2s all ease;
  $self: &;

  &__label {
    display: grid;
    &--sub {
      color: $gray5;
      &:hover {
        color: $white;
      }
      &:last-child {
        padding-bottom: 1rem;
      }
    }
    span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  &__icon {
    align-self: stretch;
    display: grid;
    place-items: center;
    &--sub {
      padding: 0.45rem 0 0.25rem 0.15rem;
      align-content: center;
    }
  }
  &__bullet {
    display: grid;
    place-items: center;
    &::before {
      width: 4px;
      height: 4px;
      border-radius: 50%;
      content: "";
      background-color: var(--secondary);
    }
    &--selected::before {
      background-color: var(--white);
    }
  }
  &__symbol--hover {
    display: none;
  }
  &__symbol--sub--hover {
    display: none;
  }
  &:hover {
    color: var(--secondary-sub2);
    .nav-item__icon::before {
      background-color: var(--secondary-sub2);
    }
    .nav-item__symbol {
      display: none;
    }
    .nav-item__symbol--hover {
      display: block;
    }
  }
  &--selected {
    color: var(--white);
  }
}
</style>