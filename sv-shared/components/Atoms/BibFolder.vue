<template>
  <div class="folder shape-rounded">
    <bib-icon icon="folder-solid" :scale="1.25" variant="gray4"></bib-icon>
    <div class="folder__body">{{ label }}</div>
  </div>
</template>



<script>
/**
 * @module Atoms/BibFolder
 * @author Sharp Eye
 * @desc
 * - size agnostic folder name wrapper with icon
 * - by default the component will be as wide as the parent allows
 * - longer lables will be truncated with ellipsis
 * - should the component need a specific size, wrap the list of folders into a grid and the folder will be contained into its parent
 *
 * @vue-prop {String} label - the label to be displayed as a folder name
 */
export default {
  name: "BibFolder",
  props: {
    label: {
      type: String,
      default: "Folder name",
    },
  },
};
</script>



<style lang="scss" scoped>
.folder {
  user-select: none;
  display: grid;
  gap: 1rem;
  grid-template-columns: auto 1fr;
  padding: 1rem;
  transition: all 0.5s ease;
  background-color: var(--secondary-sub3);
  border: 1px solid transparent;
  &:hover {
    cursor: pointer;
    border-color: var(--gray6);
  }
  &__body {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    font-weight: 600;
  }
}
</style>