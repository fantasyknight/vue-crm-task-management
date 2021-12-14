<template>
  <div class="container">
    <div class="d-flex">
      <div class="datepicker">
        <div class="datepicker__header">
          <div class="arrow back" @click="backStartMonth"></div>
          <p>{{ months[startMonth] }} {{ startYear }}</p>
          <div class="arrow forward" @click="forwardStartMonth"></div>
        </div>

        <div class="datepicker__days">
          <ul>
            <li class="header" v-for="(day, index) in daysOfWeek" :key="index">
              {{ day }}
            </li>
          </ul>

          <ul v-for="(week, weekIndex) in new Array(6)" :key="weekIndex">
            <li
              class="weekdays"
              v-for="(day, dayIndex) in new Array(7)"
              :key="dayIndex"
              :class="dayStartClass(weekIndex * 7 + dayIndex)"
              @click="selectStartDate(weekIndex * 7 + dayIndex)"
            >
              {{ dateStartArray[weekIndex * 7 + dayIndex].date.getDate() }}
            </li>
          </ul>
        </div>
      </div>

      <div class="datepicker" v-if="double">
        <div class="datepicker__header">
          <div class="arrow back" @click="backDueMonth"></div>
          <p>{{ months[dueMonth] }} {{ dueYear }}</p>
          <div class="arrow forward" @click="forwardDueMonth"></div>
        </div>

        <div class="datepicker__days">
          <ul>
            <li class="header" v-for="(day, key) in daysOfWeek" :key="key">
              {{ day }}
            </li>
          </ul>

          <ul v-for="(week, weekIndex) in new Array(6)" :key="weekIndex">
            <li
              class="weekdays"
              v-for="(day, dayIndex) in new Array(7)"
              :key="dayIndex"
              :class="dayDueClass(weekIndex * 7 + dayIndex)"
              @click="selectDueDate(weekIndex * 7 + dayIndex)"
            >
              {{ dateDueArray[weekIndex * 7 + dayIndex].date.getDate() }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="daterepeater">
      <div
        class="daterepeater__text"
        :class="active ? 'daterepeater__text--active' : ''"
        @click="toggleActive"
      >
        Set to repeat
      </div>

      <template v-if="active">
        <div class="daterepeater__select">
          <div class="arrow back" @click="backOption()"></div>
          {{ options[optionIndex] }}
          <div class="arrow forward" @click="forwardOption()"></div>
        </div>

        <div class="daterepeater__days">
          <ul>
            <li v-for="(day, index) in daysOfWeek" :key="index">
              {{ day }}
            </li>
          </ul>
          <ul>
            <li v-for="(day, index) in daysOfWeek" :key="index">
              <bib-checkbox :value="index.toString()"> </bib-checkbox>
            </li>
          </ul>
        </div>

        <div class="daterepeater__action">
          <bib-link class="text-secondary" label="Cancel"> </bib-link>
          <bib-link class="text-success" label="Save"> </bib-link>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
/**
 * @module Molecules/BibDatepicker
 * @author Sharp Eye
 * @desc Datepicker component to select date or date range.
 * @vue-prop {Boolean} double=null - determine if single or double date picker.
 * @vue-data {Array<String>} months - month names array.
 * @vue-data {Array<String>} daysOfWeek - day of week name array.
 * @vue-data {String} startMonth - month of start picker.
 * @vue-data {String} dueMonth - month of due picker.
 * @vue-data {String} startYear - year of start picker.
 * @vue-data {String} dueYear - year of due picker.
 * @vue-data {String} selectedStartDate - selected date of start picker.
 * @vue-data {String} selectedDueDate - selected date of due picker.
 * @vue-data {Array<Object>} dateStartArray - date values array of start picker.
 * @vue-data {Array<Object>} dateDueArray - date values array of due picker.
 * @vue-data {Boolean} active - hold, unhold state of repeater.
 * @vue-data {Array<String>} options - repeat options array.
 * @vue-data {Number} optionIndex - index of present repeat option.
 * @vue-event {String} date-selected - emit selected date.
 */
export default {
  name: "BibDatepicker",
  props: {
    double: {
      type: Boolean,
      default() {
        return null;
      },
    },
  },
  data() {
    return {
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      daysOfWeek: ["S", "M", "T", "W", "T", "F", "S"],
      startMonth: new Date().getMonth(),
      dueMonth: new Date().getMonth(),
      startYear: new Date().getFullYear(),
      dueYear: new Date().getFullYear(),
      selectedStartDate: new Date(new Date().toDateString()),
      selectedDueDate: new Date(new Date().toDateString()),
      dateStartArray: new Array(),
      dateDueArray: new Array(),
      active: false,
      options: ["Daily", "Weekly", "Monthly", "Quarterly", "Annually"],
      optionIndex: 0,
    };
  },
  created() {
    this.getStartDays();

    if (this.double) this.getDueDays();
  },
  methods: {
    backStartMonth() {
      this.startMonth = this.startMonth - 1;
      if (this.startMonth < 0) {
        this.startMonth = 11;
        this.startYear = this.startYear - 1;
      }

      this.getStartDays();
    },
    backDueMonth() {
      this.dueMonth = this.dueMonth - 1;

      if (this.dueMonth < 0) {
        this.dueMonth = 11;
        this.dueYear = this.dueYear - 1;
      }

      this.getDueDays();
    },
    forwardStartMonth() {
      this.startMonth = this.startMonth + 1;

      if (this.startMonth > 11) {
        this.startMonth = 0;
        this.startYear = this.startYear + 1;
      }

      this.getStartDays();
    },
    forwardDueMonth() {
      this.dueMonth = this.dueMonth + 1;

      if (this.dueMonth > 11) {
        this.dueMonth = 0;
        this.dueYear = this.dueYear + 1;
      }

      this.getDueDays();
    },
    backStartYear() {
      this.startYear = this.startYear - 1;
      this.getStartDays();
    },
    backDueYear() {
      this.dueYear = this.dueYear - 1;
      this.getDueDays();
    },
    forwardStartYear() {
      this.startYear = this.startYear + 1;
      this.getStartDays();
    },
    forwardDueYear() {
      this.dueYear = this.dueYear + 1;
      this.getDueDays();
    },
    getStartDays() {
      this.dateStartArray = [];

      var startFirstDate = this.getFirstDate(this.startMonth, this.startYear);
      var today = new Date(new Date().toDateString());

      for (var i = 0; i < 42; i++) {
        var dateInfo = {};

        if (today.getTime() === this.getDate(startFirstDate, i).getTime()) {
          dateInfo = {
            index: i,
            date: this.getDate(startFirstDate, i),
            day: this.getDay(startFirstDate, i),
            select: true,
            active: true,
          };
        } else if (
          this.startMonth === this.getDate(startFirstDate, i).getMonth() &&
          this.getDate(startFirstDate, i).getDay() !== 0 &&
          this.getDate(startFirstDate, i).getDay() !== 6
        ) {
          dateInfo = {
            index: i,
            date: this.getDate(startFirstDate, i),
            day: this.getDay(startFirstDate, i),
            select: false,
            active: true,
          };
        } else {
          dateInfo = {
            index: i,
            date: this.getDate(startFirstDate, i),
            day: this.getDay(startFirstDate, i),
            select: false,
            active: false,
          };
        }

        this.dateStartArray.push(dateInfo);
      }
    },
    getDueDays() {
      this.dateDueArray = [];

      var dueFirstDate = this.getFirstDate(this.dueMonth, this.dueYear);
      var today = new Date(new Date().toDateString());

      for (var i = 0; i < 42; i++) {
        var dateInfo = {};

        if (today.getTime() === this.getDate(dueFirstDate, i).getTime()) {
          dateInfo = {
            index: i,
            date: this.getDate(dueFirstDate, i),
            day: this.getDay(dueFirstDate, i),
            select: true,
            active: true,
          };
        } else if (
          this.dueMonth === this.getDate(dueFirstDate, i).getMonth() &&
          this.getDate(dueFirstDate, i).getDay() !== 0 &&
          this.getDate(dueFirstDate, i).getDay() !== 6
        ) {
          dateInfo = {
            index: i,
            date: this.getDate(dueFirstDate, i),
            day: this.getDay(dueFirstDate, i),
            select: false,
            active: true,
          };
        } else {
          dateInfo = {
            index: i,
            date: this.getDate(dueFirstDate, i),
            day: this.getDay(dueFirstDate, i),
            select: false,
            active: false,
          };
        }

        this.dateDueArray.push(dateInfo);
      }
    },
    dayStartClass(index) {
      if (this.dateStartArray[index].select)
        return (
          "select " +
          (this.double ? this.paintGray(this.dateStartArray[index].date) : "")
        );

      if (this.dateStartArray[index].active)
        return (
          "active " +
          (this.double ? this.paintGray(this.dateStartArray[index].date) : "")
        );
    },
    dayDueClass(index) {
      if (this.dateDueArray[index].select)
        return "select " + this.paintGray(this.dateDueArray[index].date);

      if (this.dateDueArray[index].active)
        return "active " + this.paintGray(this.dateDueArray[index].date);
    },
    selectStartDate(index) {
      if (!this.double || !this.selectedDueDate) {
        this.dateStartArray[index].select = !this.dateStartArray[index].select;
      } else if (
        !this.dateStartArray[index].select &&
        this.dateStartArray[index].date.getTime() <=
          this.selectedDueDate.getTime()
      ) {
        this.dateStartArray[index].select = !this.dateStartArray[index].select;
      }

      if (this.dateStartArray[index].select) {
        for (let i = 0; i < 42; i++) {
          if (index !== i) this.dateStartArray[i].select = false;
        }

        this.selectedStartDate = this.dateStartArray[index].date;
      }

      this.$nuxt.$emit("date-selected", this.selectedStartDate);
      this.$emit("date-selected", this.selectedStartDate);
      if (this.double) {
        this.$nuxt.$emit("date-rang-selected", {
          start: this.selectedStartDate,
          end: this.selectedDueDate,
        });
        this.$emit("date-rang-selected", {
          start: this.selectedStartDate,
          end: this.selectedDueDate,
        });
      }
    },
    selectDueDate(index) {
      if (!this.selectedStartDate) {
        this.dateDueArray[index].select = !this.dateDueArray[index].select;
      } else if (
        !this.dateDueArray[index].select &&
        this.dateDueArray[index].date.getTime() >=
          this.selectedStartDate.getTime()
      ) {
        this.dateDueArray[index].select = !this.dateDueArray[index].select;
      }

      if (this.dateDueArray[index].select) {
        for (let i = 0; i < 42; i++) {
          if (index !== i) this.dateDueArray[i].select = false;
        }

        this.selectedDueDate = this.dateDueArray[index].date;
      }

      this.$nuxt.$emit("date-rang-selected", {
        start: this.selectedStartDate,
        end: this.selectedDueDate,
      });
      this.$emit("date-rang-selected", {
        start: this.selectedStartDate,
        end: this.selectedDueDate,
      });
    },
    getFirstDate(month, year) {
      var monthFirstDay = new Date(year, month, 1);
      var dayInfo = new Date(year, month, 1).getDay();

      return new Date(monthFirstDay.setDate(monthFirstDay.getDate() - dayInfo));
    },
    getDate(firstDate, day) {
      var first = new Date(firstDate);

      return new Date(first.setDate(first.getDate() + day));
    },
    getDay(firstDate, day) {
      var first = new Date(firstDate);

      return new Date(first.setDate(first.getDate() + day)).getDay();
    },
    paintGray(date) {
      var modifier = "";

      var getDaysInBetweenArray = function (s, e) {
        for (var a = [], d = new Date(s); d <= e; d.setDate(d.getDate() + 1)) {
          a.push(new Date(d));
        }
        return a;
      };

      let range = getDaysInBetweenArray(
        this.selectedStartDate,
        this.selectedDueDate
      );

      range.forEach(function (day) {
        if (new Date(day).getTime() == new Date(date).getTime())
          modifier = "gray";
      });

      return modifier;
    },
    toggleActive() {
      this.active = !this.active;
    },
    backOption() {
      this.optionIndex--;
      if (this.optionIndex < 0) this.optionIndex = this.options.length - 1;
    },
    forwardOption() {
      this.optionIndex++;
      if (this.optionIndex > this.options.length - 1) this.optionIndex = 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  min-width: math.div($item-width, 1.5);
  width: max-content;
  height: max-content;
  border: $dark 1px solid;
  background-color: $white;
  position: relative;
  overflow-x: hidden;
  z-index: 2;
}

p {
  margin: auto;
  color: $dark;
}

.datepicker {
  &__header {
    height: 2.5rem;
    display: flex;
    p {
      color: $gray6;
    }
  }

  &__select {
    height: 2.5rem;
    display: flex;

    &__month,
    &__year {
      width: 50%;
      height: 100%;
      border: 1px solid $secondary;
      display: flex;
    }
  }

  &__days {
    ul:nth-child(2) {
      li {
        border-top: 1px solid $gray4;
      }
    }
    ul {
      padding: 0%;
      display: flex;
      list-style-type: none;

      .header {
        border-right: none !important;
        border-top: 1px solid $gray4;
        font-weight: 600;
        color: $gray6;
      }
      .weekdays:hover {
        background-color: $light;
        color: $dark;
        border: 1px solid $gray4;
      }
      li {
        min-width: 2.5rem;
        height: 2.5rem;
        color: $gray6;
        border-top: 1px solid $gray3;
        border-right: 1px solid $gray3;
        align-items: center;
        justify-content: center;
        display: flex;
        cursor: pointer;

        &.gray {
          background-color: rgba($gray2, 0.7);
        }

        &.select {
          background-color: $light;
          color: $dark;
          border: 1px solid $gray4;
        }
      }
    }
  }
}

.daterepeater {
  height: auto;
  cursor: pointer;
  border-top: 1px solid $gray4;

  &__text {
    height: 2.5rem;
    color: $primary;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;

    &--active {
      color: $dark;
      border-top: 1px solid $dark;
    }
  }

  &__select {
    height: 2.5rem;
    display: flex;
  }

  &__days {
    ul {
      list-style-type: none;
      padding: 0%;
      display: flex;

      li {
        min-width: 2.5rem;
        width: 100%;
        height: 2.5rem;
        color: $secondary;
        border-top: 1px solid $secondary;
        border-right: 1px solid $secondary;
        align-items: center;
        justify-content: center;
        display: flex;
        cursor: pointer;
      }
    }
  }

  &__action {
    padding: 0.5rem;
    justify-content: space-between;
    display: flex;
  }
}
</style>