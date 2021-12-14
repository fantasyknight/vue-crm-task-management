<template>
  <div
    class="file position-relative border-secondary-sub2"
    :class="{ 'file--outline': outline }"
  >
    <div class="file__preview file__handle">
      <img v-if="property.preview" :src="property.preview" id="file-preview" />
      <div class="d-flex flex-d-column" v-else>
        <div
          class="file__placeholder"
          :class="getExtensionColor(property.extension)"
        >
          <p class="file__placeholder__extension text-white text-center">
            .{{ property.extension.toUpperCase() }}
          </p>
        </div>
      </div>

      <div v-if="tags" class="file__preview__tags">
        <div
          v-for="(tag, index) in tags"
          :key="index"
          class="file__preview__tags__tag"
        >
          <bib-button
            variant="primary--light border-secondary-sub2"
            size="sm"
            :label="tag"
            disabled
          ></bib-button>
        </div>
      </div>
    </div>
    <div class="file__icon" :class="isFavorite && 'file__icon--active'">
      <bib-icon
        class="favorite__icon"
        :icon="isFavorite ? 'heart-like-solid' : 'heart-like'"
        :variant="isFavorite ? 'danger' : 'secondary'"
        :scale="1.05"
        @click.native.stop="toggleFavorite"
      ></bib-icon>
      <bib-icon
        class="favorite__icon--hover"
        :icon="isFavorite ? 'heart-like-solid' : 'heart-like'"
        variant="danger"
        :scale="1.05"
        @click.native.stop="toggleFavorite"
      ></bib-icon>
    </div>
    <div class="file__info file__handle">
      <bib-icon icon="awesome-file" :scale="1.5" variant="gray4"></bib-icon>

      <div>
        <p class="file__info__name">{{ property.name }}</p>
        <p v-if="metadata">{{ metadata }}</p>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * @module Molecules/BibFile
 * @author Sharp Eye
 * @rebuild Sharp Eye
 * @desc File component.
 * @vue-prop {Object} propery=null - file propery.
 * @vue-prop {Boolean} outline=null - file outlined state.
 * @vue-prop {Array} tags=null - file tags.
 * @vue-prop {Boolean} favorite=null - file favorite state.
 * @vue-event {Boolean} favorite-file - emit favorite file.
 */
export default {
  name: "BibFile",
  props: {
    property: {
      name: null,
      variant: null,
      preview: null,
      extension: null,
      type: null,
      size: null,
    },
    outline: {
      type: Boolean,
      default() {
        return null;
      },
    },
    tags: {
      type: Array,
      default() {
        return null;
      },
    },
    favorite: {
      type: Boolean,
      default() {
        return null;
      },
    },
  },
  data() {
    return {
      isFavorite: this.favorite,
      showFavorite: false,
    };
  },
  computed: {
    metadata() {
      let metadata = [];
      if (this.property.type)
        metadata.push(
          `${this.property.type[0].toUpperCase()}${this.property.type
            .substring(1)
            .toLowerCase()}`
        );
      if (this.property.size != null)
        metadata.push(this.$formatBytes(this.property.size));
      return metadata.length > 0 ? metadata.join(", ") : null;
    },
  },
  watch: {
    favorite: {
      handler() {
        this.isFavorite = this.favorite;
      },
    },
  },
  methods: {
    getExtensionColor(ext) {
      return "file__placeholder--" + this.$getVariant(ext);
    },
    toggleFavorite() {
      this.isFavorite = !this.isFavorite;
      this.$emit("favorite-file", this.isFavorite);
    },
  },
};
</script>

<style lang="scss">
.file {
  display: grid;
  grid-template-rows: 12rem 3.625rem;
  width: 15.625rem;
  font-weight: 400;
  height: 15.625rem;
  outline: transparent solid 1px;
  border-radius: 4px;
  cursor: pointer;
  $self: &;
  transition: outline 0.3s linear, box-shadow 0.3s linear;

  &__placeholder {
    background: transparent;
    position: relative;
    width: 5.5rem;
    height: 7rem;
    border-radius: 0.5rem;

    &__extension {
      position: absolute;
      z-index: 4;
      font-size: $font-size-lg;
      font-weight: 600;
      top: 42%;
      left: 10%;
    }

    &::before {
      height: 1rem;
      width: 5.5rem;
      content: "";
      position: absolute;
      border-top-left-radius: 0.5rem;
      border-bottom: 1.5rem solid $gray5;
      border-left: 3rem solid $gray5;
      border-right: 1.25rem solid transparent;
    }

    &::after {
      height: 5.5rem;
      width: 5.5rem;
      content: "";
      top: 0.5rem;
      background-color: $gray5;
      position: absolute;
      border-bottom-left-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
      border: 1.875rem solid $gray5;
      margin-top: 1rem;
    }
    @each $color in $colors {
      &--#{$color} {
        &::after {
          background-color: var(#{"--" + $color});
          border-color: var(#{"--" + $color});
        }
        &:before {
          border-bottom-color: var(#{"--" + $color});
          border-left-color: var(#{"--" + $color});
          border-right-color: transparent;
        }
      }
    }
  }

  &--outline {
    outline-color: $dark;
    box-shadow: rgba($color: $dark, $alpha: 0.5) 0px 3px 6px;

    #{ $self }__preview {
      border-color: $dark;
    }
  }
  &:hover {
    outline-color: $gray6;
    #{ $self }__preview {
      border-color: $gray6;
    }
    #{ $self }__icon {
      display: flex;
      border-color: $gray6;
    }
    #{ $self }__placeholder {
      filter: brightness(120%);
    }
  }
  &:active {
    outline-color: $black;
    box-shadow: 0px 4px 8px #1d1d2052;

    #{ $self }__preview {
      border-color: $black;
    }

    #{ $self }__info {
      background: $light;
    }
  }
  &.active {
    outline-color: $black;
    box-shadow: 0px 4px 8px #1d1d2052;

    #{ $self }__preview {
      border-color: $black;
    }

    #{ $self }__info {
      background: $light;
    }
  }

  &__preview {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom: transparent solid 1px;
    transition: border 0.3s linear;
    position: relative;
    background: $secondary-sub3;

    img {
      width: 100%;
      height: 100%;
      border-radius: inherit;
      object-fit: cover;
      object-position: top;
    }

    &__tags {
      position: absolute;
      top: 0.6rem;
      left: 0.6rem;
      &__tag {
        padding: 0.1rem;
        display: inline-flex;
        .button--disabled.button--primary--light {
          color: $primary;
        }
        &:hover {
          cursor: text;
        }
      }
    }
  }
  &__icon {
    float: right;
    position: absolute;
    top: 0.6rem;
    right: 0.6rem;
    border-radius: 50rem;
    padding: 0.28rem;
    transition: border 0.2s linear;
    background-color: $gray4;
    display: flex;
    display: none;
    align-items: center;

    &--active {
      display: flex;
    }

    .favorite__icon--hover {
      display: none;
    }
    &:hover {
      .favorite__icon {
        display: none;
      }
      .favorite__icon--hover {
        display: block;
      }
    }
  }

  &__info {
    display: flex;
    align-items: center;
    padding-left: 1rem;
    padding-right: 1rem;
    gap: 1rem;
    background: $secondary-sub3;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;

    div {
      p {
        &:nth-child(1) {
          color: $dark;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          width: 10.5rem;
        }

        &:nth-child(2) {
          color: $gray6;
          font-size: $font-size-sm;
        }
      }
    }
  }
}
</style>