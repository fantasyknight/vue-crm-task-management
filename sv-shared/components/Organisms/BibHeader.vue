<template>
  <div class="header">
    <div class="header__avatar pl-025">
      <bib-avatar
        :src="logo"
        :width="2.5"
        :height="2.5"
        shape="square"
        variant="transparent"
      >
      </bib-avatar>
    </div>

    <div class="header__business">
      <bib-link
        class="text-white"
        label="Business in a Box"
      >
      </bib-link>

      <div
        class="header__business__panel"
        v-click-outside="closePanel"
        v-if="showPanel"
      >
        <div class="header__business__panel__title">
          My Organizations
          <bib-icon class="ml-auto" :scale="1.5" icon="plus"></bib-icon>
        </div>

        <div class="header__business__panel__search">
          <bib-input :value="searchStrOrg" placeholder="Search...."> </bib-input>
        </div>

        <div class="header__business__panel__list">
          <template v-for="(organization, key) in organizations">
            <span :key="key">
              <bib-icon
                class="shape-circle"
                :scale="1.5"
                :icon="organization.icon"
              >
              </bib-icon>
              {{ organization.label }}
            </span>
          </template>
        </div>

        <div class="header__business__panel__control">
          Manage my organization
        </div>
      </div>
    </div>

    <form class="header__search" @submit.prevent="submitSearchTerm">
      <bib-input
        size="sm"
        icon-right="search"
        type="text"
        variant="ghost"
        :placeholder="`${placeholderSearchbox}`"
        :value="searchStr"
        @input="searchStr = $event"
        @change="inputChange"
      >
      </bib-input>
    
      <div
        class="header__search__result"
        v-click-outside="closeResult"
        v-if="showResult"
      >
        <template v-for="(result, key) in results">
          <bib-link :label="result.label" :href="result.href" :key="key">
          </bib-link>
        </template>
      </div>
    </form>

    <div class="header__action">
        <bib-button variant="dark-sub3" class="mr-2 pr-2 height-2 pl-2 ml-2" label="Upgrade" pill size="md"></bib-button>
      <div class="shape-circle bg-white width-2 height-2 d-flex">
        <bib-icon class="m-auto" variant="gray5" :scale="1" icon="notification-solid" indicator>
        </bib-icon>
      </div>

      <div class="shape-circle bg-white width-2 height-2 d-flex">
        <bib-icon class="m-auto" variant="gray5" :scale="0.9" icon="help"> </bib-icon>
      </div>

      <bib-avatar indicator="success" @click.native="()=>{$emit('user-click')}" class="shape-circle" src="https://i.pravatar.cc/300"> </bib-avatar>
      
    </div>
  </div>
</template>

<script>
/**
 * @module Organisms/BibHeader
 * @desc Header component using block recycler with dark background.
 * @vue-data {Array<Object>} organizations - object array of organizations.
 * @vue-data {Array<Object>} results - object array of search results.
 * @vue-data {Boolean} showPanel - determine if organization panel shown or hidden.
 * @vue-data {Boolean} showResult - determine if search result shown or hidden.
 */
import BibButton from "../Atoms/BibButton.vue";
export default {
  name: "BibHeader",
  components: {
    BibButton,
  },
  props: {
    logo:{
      type: String,
      default: 'https://via.placeholder.com/150'
    },
    placeholderSearchbox: {
      type: String,
      default: "Search"
    },
  },
  data() {
    return {
      searchStr: "",
      searchStrOrg: "",
      organizations: [
        {
          icon: "circle",
          label: "My organization one",
        },
        {
          icon: "circle",
          label: "My organization two",
        },
        {
          icon: "circle",
          label: "My organization three",
        },
      ],
      results: [
        {
          label: "Search result",
          href: "#",
        },
        {
          label: "Search result",
          href: "#",
        },
        {
          label: "Search result",
          href: "#",
        },
      ],
      showPanel: false,
      showResult: false,
    };
  },
  methods: {
    inputChange(event) {
      if (event.target.value) this.showResult = true;
      else this.showResult = false;
    },
    togglePanel() {
      this.showPanel = !this.showPanel;
    },
    closePanel() {
      this.showPanel = false;
    },
    closeResult() {
      this.showResult = false;
    },
    submitSearchTerm() {
      this.$emit('searchTerm', this.searchStr)
      this.searchStr = ""
    }
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  padding-left: 0.5rem;
  padding-right: 1.5rem;
  width: 100%;
  height: 4rem;
  min-height: 3.5rem;
  background-color: $dark;

  &__avatar {
    display: flex;
    align-items: center;
  }

  &__business {
    width: -webkit-fill-available;
    display: flex;
    align-items: center;
    margin-left: 1rem;
    font-size: .95rem;
    font-weight: 600;
    letter-spacing: .02rem;
    &__panel {
      min-width: math.div($item-width, 1.5);
      width: max-content;
      height: max-content;
      border: $dark 1px solid;
      background-color: $white;
      overflow-x: hidden;
      position: absolute;
      top: 4rem;
      left: 4.5rem;
      z-index: 10;

      &__title {
        align-items: center;
        display: flex;
        min-width: $item-width - 1rem;
        font-size: $font-size-lg;
        padding: 0.25rem 1rem;
      }

      &__search {
        padding: 0.5rem 1rem;
      }

      &__list {
        span {
          display: flex;
          align-items: center;
          min-height: $item-height;
          color: $dark;
          gap: 0.5rem;
          padding-left: 1rem;
        }
      }

      &__control {
        display: flex;
        align-items: center;
        min-height: $item-height;
        color: $dark;
        margin: 0.25rem 0rem;
        padding: 0rem 1rem;
      }
    }
  }

  &__search {
    margin-left: auto;
    display: flex;
    align-items: center;
    width: -webkit-fill-available;
    max-width: 32.25rem;
    &__result {
      min-width: 12.875rem;
      width: max-content;
      display: grid;
      position: absolute;
      top: 3rem;
      border-radius: 0 0 4px 4px;
      border: 1px solid $dark;
      padding-left: 1rem;
      background-color: $white;
      z-index: 2;
      line-height: 2rem;
    }
  }

  &__action {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
}
</style>