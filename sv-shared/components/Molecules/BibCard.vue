<template>
  <div
    class="card"
    :class="[outline ? 'card--outline' : '', photo ? 'card--photo' : '']"
  >
    <img :src="photo" class="card__photo" v-if="photo" />

    <div class="card__content">
      <div class="card__content__action">
        <bib-icon
          class="shape-circle"
          :class="active ? 'bg-success' : 'bg-secondary'"
          icon="tick"
          variant="white"
          :scale="1.5"
          @click.native="change"
        >
        </bib-icon>
      </div>

      <div class="card__content__label" v-if="label">
        {{ label }}
      </div>

      <div class="card__content__options">
        <slot name="options"></slot>
      </div>
    </div>

    <div class="card__controls">
      <slot name="controls"></slot>
    </div>
  </div>
</template>

<script>
/**
 * @module Molecules/BibCard
 * @author Sharp Eye
 * @desc Card component.
 * @vue-prop {String} label=null - card label.
 * @vue-prop {Boolean} outline=null - card selected state.
 * @vue-prop {String} photo=null - card photo.
 * @vue-prop {Boolean} checked=null - card checked state.
 * @vue-data {Boolean} active - card checked state data.
 * @vue-event {boolean} change - emit card checked state.
 */
export default {
  name: "BibCard",
  props: {
    label: {
      type: String,
      default() {
        return null;
      },
    },
    outline: {
      type: Boolean,
      default() {
        return null;
      },
    },
    photo: {
      type: String,
      default() {
        return null;
      },
    },
    checked: {
      type: Boolean,
      default() {
        return null;
      },
    },
  },
  data() {
    return {
      active: this.checked,
    };
  },
  methods: {
    change(event) {
      event.preventDefault();
      this.active = !this.active;
      this.$emit("change", this.active);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  border: 1px solid $gray5;
  border-radius: 0.25rem;
  background: $white;
  min-height: 7.5rem;
  max-width: 15.5rem;
  $self: &;

  &:hover {
    border: 1px solid $secondary;
  }

  &--outline {
    border: 1px solid $dark;

    &:hover {
      border-color: $dark !important;
    }
  }

  &--photo {
    height: 13rem;

    #{ $self }__content__label {
      -webkit-line-clamp: 1;
      height: 2rem;
    }

    #{ $self }__photo {
      object-fit: cover;
      height: 7.5rem;
      border-top-right-radius: 3px;
      border-top-left-radius: 3px;
    }
  }

  &__content {
    display: grid;
    text-overflow: unset;
    white-space: normal;
    grid-template-columns: 2.5rem auto 2.5rem;

    &__label {
      display: -webkit-box;
      max-height: $item-height * 1.85;
      padding-top: 0.55rem;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    &__options {
      display: flex;
      justify-content: flex-end;
      text-align: right;
      padding: 0.25rem 0.5rem;
    }

    &__action {
      margin: 0.5rem 0 0 0.5rem;
    }
  }

  &__controls {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0.25rem 0.5rem 0.5rem;

    &__date {
      color: $gray6;
      font-size: 0.812rem;
    }

    &__progress {
      line-height: 1.2;
      padding-bottom: 0.15rem;

      span {
        display: flex;
        justify-content: space-between;
        font-size: $font-size-sm;
      }
    }

    &__comment {
      gap: 0.1rem;
      padding-top: 0.25rem;
    }
  }
}
</style>
