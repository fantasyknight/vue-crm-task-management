<template>
  <table
    v-click-outside="unselectAll"
    class="table"
    :class="{ table__headless: headless }"
    cellspacing="0"
  >
    <template>
      <tr class="table__hrow">
        <th
          v-for="(field, key) in fields"
          :key="key"
          :style="`width: ${field.width}`"
        >
          {{ field.label }}
        </th>
        <th v-if="$scopedSlots.cell_action" class="cell_action_header">
          <bib-icon icon="horizontal-dots"></bib-icon>
        </th>
      </tr>
    </template>
    <tr :style="{ width: '0rem' }" v-if="collapseObj">
      <td colspan="2">
        <bib-detail-collapse
          :label="collapseObj.label"
          :open="!isCollapsed"
          :variant="collapseObj.variant"
          @click="isCollapsed = !isCollapsed"
        >
        </bib-detail-collapse>
      </td>
    </tr>
    <template v-for="(item, keyI) in sections">
      <tr
        :style="{ visibility: isCollapsed ? 'collapse' : '' }"
        class="table__irow"
        @contextmenu="rightClickItem($event, keyI)"
        @click="selectItem(keyI)"
        :id="keyI"
        :key="'item-' + keyI"
      >
        <td>{{ keyI + 1 }}</td>
        <td v-for="(col, key) in cols" :key="key">
          <slot
            :name="'cell(' + col + ')'"
            v-bind:keyI="keyI"
            v-bind:value="sections[keyI]"
          >
          </slot>
        </td>
        <td v-if="$scopedSlots.cell_action">
          <slot
            name="cell_action"
            v-bind:keyI="keyI"
            v-bind:value="sections[keyI]"
          ></slot>
        </td>
      </tr>
    </template>
  </table>
</template>

<script>
/**
 * @module Orgamisms/BibTable
 * @author Sharp Eye
 * @rebuild Sharp Eye
 * @desc Table component
 * @vue-prop {Boolean} headless=null - table without header.
 * @vue-prop {String} fields=[] - table header names.
 * @vue-prop {String} sections=[] - table data.
 * @vue-prop {Object} collapseObj=null - collapsible table settings.
 */
export default {
  name: "BibTable",
  props: {
    headless: {
      type: Boolean,
      default() {
        return null;
      },
    },
    fields: {
      type: Array,
      default() {
        return [];
      },
    },
    sections: {
      type: Array,
      default() {
        return [];
      },
    },
    collapseObj: {
      type: Object,
      default() {
        return null;
      },
    },
  },
  data() {
    return {
      cols: [],
      item: {},
      isCollapsed: this.collapseObj ? this.collapseObj.collapsed : false,
    };
  },
  created() {
    this.cols = this.fields.map((field) => field.key);
    this.cols.shift();
  },
  methods: {
    selectItem(key) {
      this.$emit("item-clicked", this.sections[key]);
      this.unselectAll();
      document.getElementById(key).classList.toggle("active");
    },
    unselectAll() {
      let rows = document.getElementsByClassName("table__irow");
      for (let row of rows) {
        row.classList.remove("active");
      }
    },
    rightClickItem(event, key) {
      this.$emit("item-right-clicked", event, this.sections[key]);
    },
  },
  computed: {
    activeClass() {
      return (keyI) => (this.sections[keyI].active ? "active" : "");
    },
  },
};
</script>

<style lang="scss" scoped>
.table {
  width: 100%;
  height: max-content;
  margin: 0;

  tr {
    height: 2.5rem;
  }

  th,
  td {
    padding-left: 8px;
    padding-right: 6px;
  }

  &__hrow {
    height: 2.5rem;
    background-color: $light;
    color: $gray5;
    font-size: 13px;
    font-weight: bold;

    th {
      border: $gray4 1px solid;
      border-top: none;

      &:not(:first-child) {
        text-align: left;
      }
      &:not(:last-child) {
        border-right: none;
      }

      &.cell_action_header {
        width: 0rem;
      }
    }

    &.collapsed {
      visibility: collapse;
    }
  }

  &__srow {
    font-weight: bold;
    cursor: pointer;
    user-select: none;
  }

  &__irow {
    color: $gray6;
    font-weight: 400;
    line-height: 2rem;
    font-size: $base-size;
    outline: 1px solid transparent;
    transition: background-color 0.3s linear, outline-color 0.3s linear;
    td {
      border: 1px solid $light;

      &:not(:last-child) {
        border-right: none;
      }
      color: $gray5;
      &:first-child {
        text-align: center;
      }
    }
    &:nth-child(2) td {
      border-top: none;
    }
    &:not(:last-child) td {
      border-bottom: none;
    }
    &:hover {
      cursor: pointer;
      background-color: $light;
      td {
        border-left: $gray4 1px solid;
      }
    }
    &:active {
      cursor: pointer;
      background-color: $light;
      outline: 1px solid $gray4;
    }
    &.active {
      background-color: $light;
      outline: 1px solid $gray4;
    }
  }

  &__headless {
    border-top: 0;
    .table__hrow {
      visibility: collapse;
    }
  }
}
</style>