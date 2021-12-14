<template>
  <div>
    <bib-header></bib-header>
    <bib-sidebar></bib-sidebar>
    <div class="main">
      <div class="bread d-flex">
        <bib-icon icon="previous" class="m-auto" :scale="2.0"></bib-icon>
        <h3 class="bold mt-auto mb-auto d-flex">
          Project Name
          <div class="pl-1 mt-auto mb-auto">
            <bib-icon icon="heart" :scale="1.25"></bib-icon>
          </div>
          <div class="pl-1 mt-auto mb-auto"></div>
        </h3>
      </div>
      <div class="menu">
        <bib-tabs
          :value="activeTab"
          @change="tabChange"
          :tabs="tabs"
        ></bib-tabs>
      </div>
      <div class="">
        <bib-toolbar label="Add Task/Section"></bib-toolbar>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    tabChange(value) {
      this.activeTab = value;
    },
  },
  data() {
    return {
      activeTab: "Overview",
      tabs: [
        "Overview",
        "Tasks",
        "Timeline",
        "Calendar",
        "Team",
        "Conversations",
        "Files",
      ],
    };
  },
};
</script>
<style lang="scss">
@import "~/../bib-shared/css/variables.scss";
@import "~/../bib-shared/css/colors.scss";
@import "~/../bib-shared/css/mixins.scss";
* {
  font-family: "Lato", sans-serif;
}
.main {
  width: calc(100% - (#{$item-height} * 1.8));
  height: 100%;
  display: grid;
  position: absolute;
  top: 4rem;
  overflow: hidden;
  left: $item-height * 1.8;
  background-color: white;
  grid-template-rows: 2.5rem 2.5rem 100%;

  .menu {
    padding: 0 1rem 0 0.25rem;
  }
  .bread {
    padding: 0 0.15rem 0 0.15rem;
    display: grid;
    grid-template-columns: 2rem auto;
    line-height: 1.8rem;
  }
}
details {
  summary::-webkit-details-marker {
    display: none;
  }
}
</style>