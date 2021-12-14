<template>
  <div class="app-wrapper">
    <div
      class="app-wrapper__notification bg-dark"
      :class="{ 'app-wrapper__notification--off': notificationOff }"
      ref="notification"
    >
      <slot name="notification"></slot>
    </div>

    <div class="app-wrapper__topbar bg-dark">
      <slot name="topbar"></slot>
    </div>

    <div class="app-wrapper__switcher bg-dark-sub2">
      <slot name="switcher"></slot>
    </div>

    <div
      class="app-wrapper__navigation bg-dark"
      :class="{ 'app-wrapper__navigation--collapsed': navigationCollapsed }"
    >
      <div
        class="d-flex flex-d-column align-start position-relative"
        v-if="!navigationCollapsed"
      >
        <div v-if="select" class="position-absolute w-100 height-205">
          <bib-input
            :selected="select.items[0]"
            :options="select"
            size="md"
            transparent
            type="select"
          >
          </bib-input>
        </div>
        <div :class="select ? 'pt-3' : 'pt-1'" class="w-100 pl-1 pr-1">
          <bib-button
            v-if="button"
            @click.native="$emit(button.event, $event)"
            class="w-100 mt-05 font-w-600"
            action
            size="xl"
            :variant="button.variant"
            pill
            :label="button.label"
          ></bib-button>
        </div>
      </div>
      <div
        class="d-flex flex-d-column align-start pl-05"
        v-if="navigationCollapsed"
      >
        <bib-avatar
          v-if="select"
          class="mb-1"
          src="https://i.pravatar.cc/300"
          size="2.5rem"
        ></bib-avatar>
        <div
          v-if="button"
          class="shape-circle bg-success width-205 height-205 d-flex mb-1"
        >
          <bib-icon
            :icon="button.icon"
            @click.native="$emit(button.event, $event)"
            :scale="1.5"
            action
            variant="white"
            class="m-auto cursor-pointer button-action"
          >
          </bib-icon>
        </div>
      </div>
      <div class="app-wrapper__navigation__content position-relative pt-1">
        <div
          class="app-wrapper__collapser"
          :class="{ 'app-wrapper__collapser--collapsed': navigationCollapsed }"
          @click="$emit('collapseNavigation')"
        >
          <bib-icon
            variant="secondary"
            icon="arrowhead-left"
            :scale="2"
          ></bib-icon>
        </div>
      </div>
      <slot name="navigation"></slot>
    </div>

    <div class="app-wrapper__content">
      <slot name="content"></slot>
    </div>
  </div>
</template>


<script>
/**
 * @module Organisms/BibAppWrapper
 * @author Sharp Eye
 * @desc 
 * The main CSS wrapper structure to contain the 4 areas of the layout
 * (Topbar, App Switcher, App Navigation, Content) plus a persistent notification placeholder
 * Also the wrapper initiates the expand/collapse of the app navigation
 * 
 * @vue-prop {Boolean} navigationCollapsed=false - whether the app navigation is expanded or collapsed
 * @vue-prop {Object} headerActions={} - header select and button actions.
 * 
 * @vue-event - collapseNavigation - whether the user initiates expand/collapse actions. 
 * Note that the component does not store the expand/collapse state. It should be sent always back via the prop
 * 
 * @usage
	<BibAppWrapper>
		<template #notification v-if="showNotification">
			<!-- the persitent notification component <BibNotificationPersistent /> -->
			<!-- controls the wrapper layout by controling the slot content
		</template>

		<template #topbar>
			<!-- the topbar component ->
		</template>
		<template #switcher>
			<!-- the app switcher component ->
		</template>
		<template #navigation>
			<!-- app navigation ->
		</template>
		<template #content>
			<!-- scrollable content ->
		</template>
	</BibAppWrapper> 
 */

export default {
  name: "BibAppWrapper",
  data() {
    return {
      notificationOff: false,
      observerNotification: null,
    };
  },
  props: {
    navigationCollapsed: {
      type: Boolean,
      default: false,
    },
    button: {
      type: Object,
      default: () => {
        return null;
      },
    },
    select: {
      type: Object,
      default: () => {
        return null;
      },
    },
  },
  methods: {
    notification() {
      this.notificationOff = !this.notificationOff;
    },
    navigation() {
      this.navigationCollapsed = !this.navigationCollapsed;
      this.$emit("nav-collapsed", this.navigationCollapsed);
    },
  },
  mounted() {
    this.notificationOff =
      typeof this.$slots.notification === "undefined" ? true : false;
    this.observerNotification = new MutationObserver(this.notification); // remove the notification if the slot does not contain any child element
    this.observerNotification.observe(this.$refs.notification, {
      childList: true,
    });
  },
  beforeUnmount() {
    this.observerNotification.disconnect();
  },
};
</script>


<style lang="scss">
.app-wrapper {
  height: 100vh;
  max-height: 100vh;
  display: grid;
  grid-template-columns: 3.5rem auto 1fr;
  grid-template-rows: auto 4rem 1fr; // use "auto" coupled with children height in order to implement animation as grid-template-rows do not support animation
  grid-template-areas:
    "notification notification notification"
    "topbar topbar topbar"
    "switcher navigation content";
  &__notification {
    grid-area: notification;
    display: grid;
    overflow: hidden;
    transition: all 0.2s ease;
    height: 3.5rem;
    &--off {
      height: 0; // animating hide/show notification is done via animating the height insteand of the grid layout
    }
  }
  &__topbar {
    grid-area: topbar;
  }
  &__switcher {
    grid-area: switcher;
  }
  &__navigation {
    grid-area: navigation;
    width: 17rem;
    overflow-y: auto;
    overflow-x: hidden;
    transition: all 0.2s ease;
    display: grid;
    align-content: start;
    padding-top: 0.5rem;
    $self: &;

    &--collapsed {
      width: 3.5rem;
      #{$self}__content {
        padding-top: 2.5rem;
      }
    }
    @include scrollbars(0rem, transparent, transparent);
  }
  &__collapser {
    width: 2.5rem;
    height: 2.5rem;
    display: grid;
    place-items: center;
    position: absolute;
    top: 1rem;
    right: 0.5rem;
    cursor: pointer;
    transition: all 0.2s ease;

    &--collapsed {
      transform: rotate(-180deg) translateX(0.5rem);
      top: 0;
      right: 1.35rem;
    }
  }
  &__content {
    grid-area: content;
    overflow-y: auto;
    overflow-x: hidden;
  }
  > * {
    display: grid;
  }
}
</style>