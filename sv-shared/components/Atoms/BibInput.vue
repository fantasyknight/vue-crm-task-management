<template>
  <div :class="classNames">
    <label v-if="label"> {{ label }} </label>
    <!-- 
   <template v-if="img">
      <div :class="textClass">
        <bib-avatar :size="size == 'md' ? '2rem' : '2.5rem' " class="shape-circle" :src="img"> </bib-avatar>
      </div>
    </template>

    <template v-if="icon">
      <div :class="textClass">
        <bib-icon variant="gray4" :icon="icon"> </bib-icon>
      </div>
    </template> -->

    <template v-if="indicator">
      <div :class="textClass">
        <div :class="'shape-circle bg-' + indicator"></div>
      </div>
    </template>

    <template v-if="task != null">
      <div
        :class="[
          textClass,
          taskValue == true ? 'input__task--success' : 'input__task--light',
        ]"
      >
        <bib-icon
          class="shape-circle m-auto"
          :class="
            taskValue == true
              ? 'bg-success border-success'
              : mouseOverTask == true
              ? 'bg-gray4'
              : 'bg-light border-gray4'
          "
          icon="tick"
          :variant="
            taskValue == true || mouseOverTask == true ? 'white' : 'gray4'
          "
          :scale="1.65"
          @mouseover.native="
            () => {
              mouseOverTask = true;
            }
          "
          @mouseleave.native="
            () => {
              mouseOverTask = false;
            }
          "
          @click.native="taskToggle"
        ></bib-icon>
      </div>
    </template>

    <template v-if="tick != null">
      <div
        :class="[
          textClass,
          tickValue ? 'input__tick--success' : 'input__tick--light',
        ]"
      >
        <bib-icon
          class="shape-circle"
          :class="tickValue == true ? 'bg-success' : 'bg-light'"
          icon="tick"
          :variant="tickValue == true ? 'white' : 'secondary'"
          :scale="1.4"
          @click.native="tickToggle"
        >
        </bib-icon>
      </div>
    </template>

    <template
      v-if="
        type == 'text' ||
        type == 'email' ||
        type == 'password' ||
        type == 'number' ||
        type == 'date' ||
        type == 'time' ||
        type == 'color'
      "
    >
      <div :class="textClass">
        <bib-icon
          v-if="iconLeft"
          :icon="iconLeft"
          class="left-icon"
          :scale="size == 'lg' ? 1.2 : 1"
          :variant="iconVariant"
        ></bib-icon>
        <input
          :type="type"
          :value="value"
          :name="name"
          :placeholder="placeholder"
          :min="min"
          :max="max"
          :step="step"
          :disabled="disabled"
          :required="required"
          @input="inputEvent"
        />
        <bib-icon
          v-if="iconRight"
          :icon="iconRight"
          class="right-icon"
          :scale="size == 'lg' ? 1.2 : 1"
          :variant="iconVariant"
        ></bib-icon>
      </div>
    </template>

    <template v-if="type == 'select'">
      <div
        v-click-outside="
          () => {
            showOptions = false;
          }
        "
        class="input--select"
        :class="!showOptions ? 'input--select--collapsed' : ''"
      >
        <div @click="showOptions = true">
          <div class="input__img">
            <bib-avatar
              :class="showOptions ? 'ml-05 mt-05' : ''"
              :size="size == 'md' ? '2rem' : '2.5rem'"
              class="shape-circle"
              :src="selected.img"
            >
            </bib-avatar>
          </div>
          <div
            class="
              pl-305
              font-w-600 font-md
              cursor-pointer
              d-flex
              justify-between
            "
          >
            <div class="text-wrap of-hidden">{{ selected.label }}</div>
            <bib-icon
              icon="arrow-down"
              class="pull-right mr-1 mt-1"
              variant="gray6"
              :scale="0.5"
            ></bib-icon>
          </div>
        </div>
        <div class="input--select__options" v-show="showOptions">
          <span
            :key="index"
            @click="$emit(option.event, option)"
            v-for="(option, index) in options.items"
            class="input--select__option cursor-pointer"
          >
            <bib-avatar
              size="2rem"
              class="shape-circle mr-05"
              :src="option.img"
            >
            </bib-avatar>
            {{ option.label }}
          </span>
          <span
            @click="$emit(options.footer.event)"
            v-if="options.footer"
            class="input--select__footer"
          >
            <bib-icon
              :scale="1.5"
              class="ml-05"
              :icon="options.footer.icon"
            ></bib-icon>
            {{ options.footer.label }}
          </span>
        </div>
      </div>
    </template>

    <template v-if="type == 'textarea'">
      <textarea
        :value="value"
        :name="name"
        :placeholder="placeholder"
        :required="required"
        @input="inputEvent"
      >
      </textarea>
    </template>

    <template v-if="type == 'file' || type == 'folder'">
      <div class="d-flex flex-d-column" :class="'input--' + type">
        <div v-if="type == 'file'" class="d-flex flex-d-column">
          <div
            :id="'drag-area-' + id"
            @click="openFileExplorer"
            class="
              d-flex
              w-100
              align-center
              pl-05
              pt-025
              pb-025
              cursor-pointer
              border-gray4 border-dashed
              shape-rounded
              height-205
            "
          >
            <bib-icon
              v-if="iconLeft"
              :icon="iconLeft"
              :scale="size == 'lg' ? 1.6 : 1.5"
              :variant="iconVariant"
            ></bib-icon>
            <h5 class="font-w-400 pl-025">{{ placeholder }}</h5>
            <input
              type="file"
              @change="fileSelected($event)"
              id="file-input"
              class="d-none"
              multiple
            />
            <bib-icon
              v-if="iconRight"
              :icon="iconRight"
              class="right-icon"
              :scale="size == 'lg' ? 1.2 : 1"
              :variant="iconVariant"
            ></bib-icon>
          </div>
          <div class="d-block of-scroll-y" v-show="filesUploaded.length > 0">
            <template v-for="(file, key) in filesUploaded">
              <div
                class="
                  shape-rounded
                  mt-05
                  height-205
                  pl-05
                  d-flex
                  justify-between
                  align-center
                  bg-light
                "
                :key="key"
              >
                <div class="d-flex w-75">
                  <bib-icon icon="file" variant="gray5"></bib-icon>

                  <h5
                    class="
                      pl-025
                      font-w-400
                      of-hidden
                      text-of-elipsis text-wrap
                    "
                  >
                    {{ file.name }}
                  </h5>
                </div>
                <div
                  @click="removeFile(file, $event)"
                  class="pr-05 cursor-pointer"
                >
                  <bib-icon
                    icon="trash"
                    :scale="1.5"
                    variant="gray5"
                  ></bib-icon>
                </div>
              </div>
            </template>
          </div>
        </div>
        <div v-if="type == 'folder'" class="d-flex flex-d-column">
          <div
            :id="'folder-drag-area-' + id"
            @click="openFileExplorer"
            class="
              d-flex
              w-100
              align-center
              pl-05
              pt-025
              pb-025
              cursor-pointer
              border-gray4 border-dashed
              shape-rounded
              height-205
            "
          >
            <bib-icon
              v-if="iconLeft"
              :icon="iconLeft"
              :scale="size == 'lg' ? 1.6 : 1.5"
              :variant="iconVariant"
            ></bib-icon>
            <h5 class="font-w-400 pl-025">{{ placeholder }}</h5>
            <input
              type="file"
              id="folder-input"
              class="d-none"
              webkitdirectory
              directory
              mozdirectory
              msdirectory
              odirectory
              multiple
              @change="foldersSelected($event)"
            />
            <bib-icon
              v-if="iconRight"
              :icon="iconRight"
              class="right-icon"
              :scale="size == 'lg' ? 1.2 : 1"
              :variant="iconVariant"
            ></bib-icon>
          </div>
          <div
            :key="folderInputKey"
            class="of-scroll-y"
            v-show="foldersUploaded.length > 0"
          >
            <template v-for="(item, key) in foldersUploaded">
              <div
                class="
                  shape-rounded
                  mt-05
                  height-205
                  pl-05
                  d-flex
                  justify-between
                  align-center
                  bg-light
                "
                v-if="item.id >= 0"
                :key="key"
              >
                <div class="d-flex w-75">
                  <bib-icon
                    :icon="item.isFile ? 'file' : 'folder'"
                    variant="gray5"
                  ></bib-icon>

                  <h5
                    class="
                      pl-025
                      font-w-400
                      of-hidden
                      text-of-elipsis text-wrap
                    "
                  >
                    {{ item.name }}
                  </h5>
                </div>
                <div
                  @click="removeFolder(item, $event)"
                  class="pr-05 cursor-pointer"
                >
                  <bib-icon
                    icon="trash"
                    :scale="1.5"
                    variant="gray5"
                  ></bib-icon>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </template>

    <template v-if="type == 'currency'">
      <div class="input__currency">
        <span>{{ currencyFormat }}</span>
        <input
          type="number"
          :value="value"
          placeholder="0"
          min="0"
          @input="inputEvent"
        />
        <div class="position-absolute pr-05">
          <bib-button pop="elipsis">
            <template v-slot:menu>
              <div class="list">
                <bib-link
                  class="list__item"
                  :label="format"
                  v-for="(format, key) in currencyFormats"
                  :key="key"
                  @click.native="currencyFormat = format"
                >
                </bib-link>
              </div>
            </template>
          </bib-button>
        </div>
      </div>
    </template>

    <!-- <template v-if="type == 'time'">
      <div class="input__time">
        <input
          type="number"
          :value="value"
          placeholder="0"
          min="0"
          @input="inputEvent"
        />
        <span id="timeSuffix" class="position-absolute">{{ timeFormat }}</span>
        <div class="position-absolute pr-05">
          <bib-button pop="elipsis">
            <template v-slot:menu>
              <div class="list">
                <bib-link
                  class="list__item"
                  :label="format"
                  v-for="(format, key) in timeFormats"
                  :key="key"
                  @click.native="timeFormat = format"
                >
                </bib-link>
              </div>
            </template>
          </bib-button>
        </div>
      </div>
    </template> -->

    <span v-if="instructionText" class="input-instruction">
      {{ instructionText }}
    </span>
  </div>
</template>

<script>
/**
 * @module Atoms/BibInput
 * @author Sharp Eye
 * @rebuild Sharp Eye
 * @desc Input component.
 * @vue-prop {String} type=text - input flag (text, password, email, number, date, color, textarea, select, currency, time).
 * @vue-prop {String} size=md - size (md, sm, lg).
 * @vue-prop {String} variant=null - variant (alert, warning, accepted).
 * @vue-prop {String} value v-model.
 * @vue-prop {String} name=null - text value.
 * @vue-prop {String} placeholder=null - placeholder value.
 * @vue-prop {Number} min=null - min value when type=number.
 * @vue-prop {Number} max=null - max value when type=number.
 * @vue-prop {Number} step=null - step value when type=number.
 * @vue-prop {Boolean} required=false - on / off state.
 * @vue-prop {String} label=null - label text at top.
 * @vue-prop {String} instruction=null - instructional text at bottom.
 * @vue-prop {Array} options=[] - text & value array of type=select.
 * @vue-prop {String} icon-right=null - input with right icon
 * @vue-prop {String} icon-left=null - input with left icon
 * @vue-prop {String} img=null - input with img.
 * @vue-prop {String} icon=null - input with icon.
 * @vue-prop {String} indicator=null - input with indicator.
 * @vue-prop {Boolean} task=null - default task value.
 * @vue-prop {Boolean} tick=null - default tick value.
 * @vue-data {Boolean} taskValue - task selected state.
 * @vue-data {Boolean} tickValue - tick selected state.
 * @vue-data {String} timeFormat - time element unit.
 * @vue-data {String} currencyFormat - currecny element unit.
 * @vue-data {Array<String>} timeFormats - time units array.
 * @vue-data {Array<String>} currencyFormats - currency units array.
 * @vue-computed {String} textClass - generate dynamic class based on props input.
 * @vue-event {Object} change - emit event.
 * @vue-event {Boolean} task-val-change - emit task value.
 * @vue-event {Boolean} tick-val-change - emit tick value.
 * @vue-prop {Boolean} disabled=false - on / off state.
 */
export default {
  name: "BibInput",
  props: {
    type: {
      type: String,
      default() {
        return "text";
      },
    },
    selected: {
      type: Object,
      default() {
        return {
          label: "Selected Item",
          img: "https://i.pravatar.cc/300",
        };
      },
    },
    size: {
      type: String,
      default() {
        return "md";
      },
    },
    variant: {
      type: String,
      default() {
        return null;
      },
    },
    value: [String, Number],
    name: {
      type: String,
      default() {
        return null;
      },
    },
    placeholder: {
      type: String,
      default() {
        return null;
      },
    },
    min: {
      type: Number,
      default() {
        return null;
      },
    },
    max: {
      type: Number,
      default() {
        return null;
      },
    },
    step: {
      type: Number,
      default() {
        return 1;
      },
    },
    required: {
      type: Boolean,
      default() {
        return false;
      },
    },
    label: {
      type: String,
      default() {
        return null;
      },
    },
    options: {
      type: Object,
      default() {
        return {
          items: [
            {
              label: "Item #01",
              event: "item-click",
              img: "https://i.pravatar.cc/300",
            },
            {
              label: "Item #02",
              event: "item-click",
              img: "https://i.pravatar.cc/300",
            },
            {
              label: "Item #03",
              event: "item-click",
              img: "https://i.pravatar.cc/300",
            },
          ],
          footer: {
            label: "Footer Action",
            icon: "add",
            event: "footer-action",
          },
        };
      },
    },
    iconRight: {
      type: String,
      default() {
        return null;
      },
    },
    iconLeft: {
      type: String,
      default() {
        return null;
      },
    },
    img: {
      type: String,
      default() {
        return null;
      },
    },
    icon: {
      type: String,
      default() {
        return null;
      },
    },
    indicator: {
      type: String,
      default() {
        return null;
      },
    },
    task: {
      type: Boolean,
      default() {
        return null;
      },
    },
    tick: {
      type: Boolean,
      default() {
        return null;
      },
    },
    instruction: {
      type: String,
      default() {
        return null;
      },
    },
    disabled: {
      type: Boolean,
      default() {
        return false;
      },
    },
    transparent: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  data() {
    return {
      folderInputKey: 0,
      taskValue: this.task || false,
      showOptions: false,
      tickValue: this.tick || false,
      id: this._uid,
      highlightDrag: false,
      filesUploaded: new Array(),
      foldersUploaded: new Array(),
      timeFormat: "hours",
      currencyFormat: "$",
      mouseOverTask: false,
      timeFormats: ["hours", "days", "mins"],
      currencyFormats: ["$", "€", "¥", "£"],
      instructionText: this.instruction,
    };
  },
  computed: {
    classNames() {
      return `input input--${this.variant} input--${this.size} ${
        this.disabled ? "input--disabled" : ""
      }`;
    },
    textClass() {
      return {
        wrapper: true,
        "with-right-icon": this.iconRight,
        "with-left-icon": this.iconLeft,
        "input--transparent": this.transparent,
        input__img: this.img,
        input__icon: this.icon,
        input__indicator: this.indicator,
        input__task: this.task != null,
        input__tick: this.tick != null,
      };
    },
    iconVariant() {
      let iconV = "";
      switch (this.variant) {
        case "accepted":
          iconV = "success";
          break;
        case "alert":
          iconV = "danger";
          break;
        case "warning":
          iconV = "warning";
          break;
        case "secondary":
          iconV = "white";
          break;
        case "ghost":
          iconV = "gray4";
          break;
      }
      return iconV;
    },
  },
  methods: {
    inputEvent(event) {
      this.$emit("input", event.target.value);
    },
    taskToggle(event) {
      event.preventDefault();
      console.log(!this.taskValue);
      this.taskValue = !this.taskValue;
      this.$emit("task-val-change", this.taskValue);
    },
    tickToggle(event) {
      event.preventDefault();
      this.tickValue = !this.tickValue;
      this.$emit("tick-val-change", this.tickValue);
    },
    openFileExplorer() {
      if (this.type == "file") {
        document.getElementById("file-input").click();
      } else {
        document.getElementById("folder-input").click();
      }
    },
    fileSelected(event) {
      event.target.files.forEach((file) => {
        this.filesUploaded.push(file);
      });
      this.$emit("files-dropped", this.filesUploaded, event);
    },
    foldersSelected(e) {
      if (e) {
        // IF DIRECTORY SUPPORT IS AVAILABLE
        if (e.dataTransfer && e.dataTransfer.items) {
          //FOLDER UPLOAD TRIGGERED BY DRAG&DROP
          var items = e.dataTransfer.items;
          for (var i = 0; i < items.length; i++) {
            var item = items[i].webkitGetAsEntry();
            item.id = i;
            //PUSH ITEM WITH KEY INFO ARRAY
            this.foldersUploaded.push(item);

            //SCAN DIRECTORY CONTENT
            this.addDirectory(item);
          }
          this.$emit("folders-dropped", this.foldersUploaded);
          // IF DIRECTORY SUPPORT IS NOT AVAILABLE
        } else {
          if (e.target.files.length > 0) {
            //FOLDER UPLOAD TRIGGERED BY CLICK
            var items = e.target.files;
            let parent = {
              id: 0,
              fullPath: "/" + items[0].webkitRelativePath.split("/")[0],
              isDirectory: true,
              parent: "/",
              isFile: false,
              name: items[0].webkitRelativePath.split("/")[0],
            };

            this.foldersUploaded[parent.id + this.foldersUploaded.length] =
              parent;
            for (var i = 0; i < items.length; i++) {
              let subDirectory = items[i].webkitRelativePath
                .split("/")
                .filter(function (val) {
                  return val;
                });
              if (subDirectory.length > 2) {
                let dir = subDirectory;
                let ptSubDirectory = subDirectory;
                this.foldersUploaded[i + this.foldersUploaded.length] = {
                  pt_fullPath: "/" + ptSubDirectory.slice(0, -2).join("/"),
                  fullPath: "/" + subDirectory.slice(0, -1).join("/"),
                  isDirectory: true,
                  isFile: false,
                  name: dir[dir.length - 2],
                };
              }

              //CONSTRUCTING PARENT ELEMENTS
              var item = items[i];
              item.id = i + this.foldersUploaded.length;
              item.fullPath = "/" + item.webkitRelativePath;
              item.isFile = true;
              item.parent = parent;

              //PUSH ITEM WITH KEY INFO ARRAY
              this.foldersUploaded[item.id] = item;
              this.foldersUploaded = this.foldersUploaded.filter(function (
                val
              ) {
                return val;
              });
            }
            this.$emit(
              "folders-dropped",
              this.foldersUploaded.sort(function (a, b) {
                if (a.fullPath < b.fullPath) {
                  return -1;
                }
                if (a.fullPath > b.fullPath) {
                  return 1;
                }
                return 0;
              })
            );
          }
        }
      }
      this.folderInputKey += 1;
    },
    addDirectory(item) {
      var _this = this;

      if (item.isDirectory && typeof item.createReader === "function") {
        var directoryReader = item.createReader();

        directoryReader.readEntries(function (entries) {
          entries.sort(function (a, b) {
            if (a.fullPath < b.fullPath) {
              return -1;
            }
            if (a.fullPath > b.fullPath) {
              return 1;
            }
            return 0;
          });
          Object.entries(entries).forEach(function ([key, entry]) {
            _this.foldersUploaded[_this.foldersUploaded.length] = entries[key];

            _this.foldersUploaded[
              _this.foldersUploaded.length - 1
            ].pt_fullPath = new String();

            _this.foldersUploaded[
              _this.foldersUploaded.length - 1
            ].pt_fullPath = item.fullPath;
            _this.addDirectory(entry);
          });
        });
      } else {
        _this.foldersUploaded[item.id] = item;
      }
    },
    removeFile(file, e) {
      this.filesUploaded = this.filesUploaded.filter(function (fl) {
        return fl.name != file.name;
      });
      this.$emit("files-dropped", this.filesUploaded, e);
    },
    removeFolder(folder, e) {
      this.foldersUploaded = this.foldersUploaded.filter(function (fl) {
        return fl.fullPath != folder.fullPath;
      });
      this.foldersUploaded = this.foldersUploaded.filter(function (fl) {
        if (fl.pt_fullPath) {
          return !fl.pt_fullPath.toString().includes(folder.fullPath);
        } else {
          return fl;
        }
      });
      this.$emit("folders-removed", this.foldersUploaded, e);
      this.folderInputKey += 1;
    },
  },
  mounted() {
    let dropAreas = document.querySelectorAll('[id^="drag-area-"]');
    let dropAreasFolder = document.querySelectorAll(
      '[id^="folder-drag-area-"]'
    );
    if (dropAreas) {
      dropAreas.forEach((dropArea) => {
        ["dragenter", "dragover"].forEach((eventName) => {
          dropArea.addEventListener(eventName, (event) => {
            event.preventDefault();
            dropArea.classList.remove("border-gray4");
            dropArea.classList.add("border-success");
          });
        });
        [("dragleave", "drop")].forEach((eventName) => {
          dropArea.addEventListener(eventName, (event) => {
            event.preventDefault();
            dropArea.classList.remove("border-success");
            dropArea.classList.add("border-gray4");
          });
        });
        dropArea.addEventListener(
          "drop",
          (e) => {
            let dt = e.dataTransfer;
            if (dt) {
              let files = dt.files;

              files.forEach((file) => {
                this.filesUploaded.push(file);
              });
            }
            this.$emit("files-dropped", this.filesUploaded, e);
          },
          false
        );
      });
    }
    if (dropAreasFolder) {
      dropAreasFolder.forEach((dropArea) => {
        ["dragenter", "dragover"].forEach((eventName) => {
          dropArea.addEventListener(eventName, (event) => {
            event.preventDefault();
            dropArea.classList.remove("border-gray4");
            dropArea.classList.add("border-success");
          });
        });
        [("dragleave", "drop")].forEach((eventName) => {
          dropArea.addEventListener(eventName, (event) => {
            event.preventDefault();
            dropArea.classList.remove("border-success");
            dropArea.classList.add("border-gray4");
          });
        });
        dropArea.addEventListener(
          "drop",
          (e) => {
            this.foldersSelected(e);
            this.$emit("folders-dropped", this.foldersUploaded, e);
            this.folderInputKey += 1;
          },
          false
        );
      });
    }
  },
};
</script>
<style lang="scss" scoped>
.input {
  position: relative;
  width: 100%;

  input,
  textarea,
  select {
    padding: 0rem 0.5rem 0rem 0.5rem;
    font-size: $base-size;
    line-height: 1.2;
    width: 100%;
    border: 1px solid $gray4;
    border-radius: 0.2rem;
    margin: 0.5rem 0;
    color: $dark;
    min-height: 2.5rem;

    &:hover {
      border-color: $gray5;
    }

    &:focus {
      outline: none;
      border-radius: 0;
      border: 2px solid $gray6;
    }
  }
  &--select {
    position: relative;
    z-index: 3;
    color: $black;
    border: 1px solid $gray6;
    background-color: $light;
    letter-spacing: 0.035rem;
    line-height: 2.5rem;
    font-size: $base-size;
    @extend .shape-rounded;
    position: relative;
    transition: height 0.2s ease-in, width 0.2s ease-in, color 0.2s ease-in,
      padding 0.2s ease-in, margin 0.2s ease-in;
    height: 100%;
    padding: 0.5rem 0.5rem 0 0rem;
    margin: -0.5rem 0.5rem;
    overflow: hidden;
    .icon {
      transition: transform 0.2s ease-in;
      transform: rotate(180deg);
    }
    &--collapsed {
      background-color: transparent;
      color: $gray6;
      padding: 0;
      margin: 0 1rem;
      height: 2.5rem;
      .icon {
        transform: rotate(0deg);
      }
      &:hover {
        .icon {
          &::v-deep {
            svg {
              fill: $white;
              background: transparent;
            }
          }
        }
        color: $white;
        background-color: rgba(177, 177, 180, 0.4);
      }
    }

    &__options {
      top: 2.5rem;
      left: -0.25rem;
      display: flex;
      flex-direction: column;
      border-radius: 0.25rem;
      z-index: 9;
      height: inherit;
      width: 104%;
    }
    &__option {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      padding: 0 0 0 0.75rem;
      color: $gray6;
    }

    &__footer {
      display: flex;
      align-items: center;
      max-height: 2.5rem;
      gap: 1rem;
      line-height: 2.5rem;
      border-top: 1px solid $gray4;
      margin-top: 0.5rem;
      cursor: pointer;
    }
  }
  select {
    height: calc(1.5em + 0.75rem + 2px);
    background-color: $white;
  }

  label {
    color: $gray6;
  }

  span.input-instruction {
    color: $gray6;
    font-size: 84%;
  }

  ::placeholder {
    color: $gray5;
  }

  textarea {
    resize: none;
    width: 100%;
    height: 5.5rem;
    border: 1px solid $gray4;
    padding: 0.9em 0.5rem;
    border-radius: 0.25rem;
    font-size: $base-size;

    &:focus {
      outline: none;
    }
  }

  .wrapper {
    position: relative;
    .icon {
      position: absolute;
      top: 1.4rem;
    }
    &.with-left-icon {
      input {
        padding-left: 2rem;
      }
      .left-icon {
        left: 0.6rem;
      }
    }
    &.with-right-icon {
      input {
        padding-right: 2rem;
      }
      .right-icon {
        right: 0.6rem;
      }
    }
  }

  select {
    appearance: none;
    + .icon {
      position: absolute;
      right: 0.6rem;
      top: 1.5rem;
    }
  }

  /*---------- size ----------*/
  &--sm {
    input,
    select {
      min-height: 2rem;
      font-size: $font-size-sm;
      border-radius: 0.18rem;
    }
    .wrapper .icon {
      top: 1rem;
    }
  }

  &--lg {
    input,
    select {
      min-height: 3rem;
      font-size: $font-size-lg;
      border-radius: 0.3rem;
    }
    .wrapper {
      .icon {
        top: 1.4rem;
      }
      &.with-left-icon {
        input {
          padding-left: 2.3rem;
        }
      }
      &.with-right-icon {
        input {
          padding-right: 2.3rem;
        }
      }
    }
  }

  /*---------- variant ----------*/
  &--transparent {
    input,
    textarea,
    select {
      background-color: transparent;
      color: $white;
    }
    .icon {
      &::v-deep {
        fill: $gray4;
      }
    }
  }
  &--ghost {
    input,
    textarea,
    select {
      color: $gray4;
      border-color: $gray4;
      background-color: $gray6;

      &:hover {
        border-color: $gray4;
      }

      &:focus {
        border-color: $gray4;
      }
    }

    label {
      color: $gray5;
    }

    span.input-instruction {
      color: $gray5;
      font-size: 85%;
    }

    ::placeholder {
      color: $gray4;
    }
  }

  &--alert {
    input,
    textarea,
    select {
      color: $danger;
      border-color: $danger-sub2;
      background-color: $danger-sub3;

      &:hover {
        border-color: $danger;
      }

      &:focus {
        border-color: $danger;
      }
    }

    label {
      color: $danger-sub1;
    }

    span.input-instruction {
      color: $danger-sub1;
      font-size: 85%;
    }

    ::placeholder {
      color: $danger-sub1;
    }
  }

  &--warning {
    input,
    textarea,
    select {
      color: #bdab60;
      border-color: #e3d176;
      background-color: $warning-sub3;

      &:hover {
        border-color: $warning;
      }

      &:focus {
        border-color: $warning;
      }
    }

    label {
      color: #bdab60;
    }

    span.input-instruction {
      color: #bdab60;
      font-size: 85%;
    }

    ::placeholder {
      color: #dcc96d;
    }
  }

  &--accepted {
    input,
    textarea,
    select {
      color: $success;
      border-color: $success-sub2;
      background-color: $success-sub3;

      &:hover {
        border-color: $success;
      }

      &:focus {
        border-color: $success;
      }
    }

    label {
      color: $success-sub1;
    }

    span.input-instruction {
      color: $success-sub1;
      font-size: 85%;
    }

    ::placeholder {
      color: $success-sub1;
    }
  }

  &--secondary {
    input,
    select {
      color: $white;
      border-color: $white;
      background-color: $secondary-sub1;

      &:hover {
        border-color: $gray3;
      }
    }
    label {
      color: $gray4;
    }

    span.input-instruction {
      color: $gray4;
      font-size: 85%;
    }

    ::placeholder {
      color: $gray4;
    }

    textarea {
      border-color: $gray4;

      &:focus {
        border-color: $gray4;
      }
    }
  }
  /*---------- disabled ----------*/
  &--disabled {
    input {
      color: $gray5;
      border-color: $gray3;
      background-color: $gray4;

      &:hover {
        border-color: $gray3;
      }
    }

    label {
      color: $gray4;
    }

    span.input-instruction {
      color: $gray4;
      font-size: 85%;
    }

    ::placeholder {
      color: $gray4;
    }

    textarea {
      border-color: $gray4;

      &:focus {
        border-color: $gray4;
      }
    }
  }

  &__img {
    select,
    input {
      width: 100%;
      border-radius: 0.25rem;
      border: 1px solid $secondary;
      font-size: $base-size;
      padding: 0 0 0 3.5rem;
    }

    .avatar {
      position: absolute;
      top: 0.2rem;
      left: 0.25rem;
    }
  }

  // &__icon {
  //   text-align: center;

  //   input {
  //     padding: 0rem 1rem 0rem 1rem;
  //   }

  //   .icon {
  //     position: absolute;
  //     top: 0.75rem;
  //     right: 0.5rem;
  //   }
  // }

  &--file {
    max-height: 10rem;
  }

  &__indicator {
    div {
      position: absolute;
      top: 1rem;
      left: 1rem;
      width: 0.5rem;
      height: 0.5rem;
    }

    input {
      padding: 0 2rem 0 3rem;
    }
  }

  &__task {
    input {
      padding: 0.25rem 1rem 0.25rem 3rem;
      font-weight: 600;
      font-size: 1.2rem;
    }

    .icon {
      position: absolute;
      cursor: pointer;
      top: 0.45rem;
      padding: 0.15rem;
      left: 0.45rem;
    }
  }

  &__tick {
    input {
      padding: 0.5rem 3rem 0.5rem 1rem;
    }

    .icon {
      position: absolute;
      cursor: pointer;
      top: 0.5rem;
      right: 0.5rem;
    }
  }

  &__face {
    .icon {
      position: absolute;
      text-align: center;
      right: 0.5rem;
      top: 0.75rem;
    }
  }

  &__currency,
  &__time {
    display: flex;
    align-items: center;
    border: 1px solid;
    border-color: $secondary;
    border-radius: 0.25rem;
    padding: 0 2.5rem 0rem 1rem;
    min-height: 2.65rem;

    span {
      color: $dark;
      margin: auto;
      line-height: 1.2;
    }

    input {
      border: 0;
      padding: 0.1rem 0.25rem 0 0.25rem !important;
      min-height: 0;
    }

    div {
      right: 0;
    }
  }
}

#timeSuffix {
  left: 2rem;
}
</style>