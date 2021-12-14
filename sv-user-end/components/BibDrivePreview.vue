<template>
  <div :key="key" class="peak main bg-dark-sub1 preview-screen h-100">
    <!-- BREADCRUMB SECTION -->
    
        <div class="d-flex h-100">
    <div class="w-100">
        <div class="bg-white height-205 of-hidden text-wrap w-100 d-flex">
      <div class="d-flex align-center cursor-pointer">
        <template>
          <bib-icon
            icon="previous"
            @click.native="$emit('go-to-folder' , { _id: 'root', name: 'My Drive' })"
            :scale="2"
          ></bib-icon>
        </template>
      </div>
      <h4 class="bold mt-auto mb-auto d-flex">
        <template v-for="(bread, key) in breads.bread">
          <bib-link
            href="#"
            class="text-dark crumb"
            @click.native="$emit('go-to-folder' , bread)"
            :label="(key > 0 ? ' / ' : ' ') + bread.name + ' '"
            :key="key"
          ></bib-link>
        </template>
      </h4>
    </div>
    <div class="bg-white d-flex align-center justify-between preview-screen__file__title border-top-gray4">
          <div class="text-wrap of-hidden w-40 d-flex align-center">
            <div class="min-width-2 mr-1 pb-025 pr-025 min-height-205 shape-sharp font-xs text-white d-flex align-end justify-end" :class="'bg-'+$getVariant(file.extension)">{{file.extension}}</div>
            <div class="max-width-20">{{ file.name }}</div>
          </div>
         
          <div class="d-flex align-center gap-05">

            <bib-button
              variant="success"
              size="lg"
              pill
              class="height-205 font-w-400"
              @click.native="$emit('file-download')"
              label="Download"
            ></bib-button>

            <div class="d-flex pl-2 pr-105 align-center">
              <div class="d-flex">
                <bib-avatar
                  class="shape-circle"
                  src="https://i.pravatar.cc/300"
                  size="2.5rem"
                >
                </bib-avatar>
                <div class="position-relative width-305">
                  <div class="position-absolute">
                    <bib-avatar
                      class="shape-circle"
                      src="https://i.pravatar.cc/400"
                      size="2.5rem"
                    >
                    </bib-avatar>
                  </div>
                  <div class="position-absolute top-0 left-33">
                    <bib-avatar
                      class="shape-circle"
                      src="https://i.pravatar.cc/500"
                      size="2.5rem"
                    >
                    </bib-avatar>
                  </div>
                  <div class="position-absolute top-0 left-66">
                    <bib-avatar
                      class="shape-circle"
                      src="https://i.pravatar.cc/700"
                      size="2.5rem"
                    >
                    </bib-avatar>
                  </div>
                </div>
              </div>
              <span class="pl-105 font-sm font-w-400"> + 25 others </span>
            </div>
            <bib-button
              variant="light"
              size="lg"
              pill
              class="height-205 font-w-400"
              label="Share"
            ></bib-button>
            <div
              class="
                bg-light
                height-205
                width-205
                shape-circle
                d-flex
                align-center
                cursor-pointer
                justify-center
              "
            >
              <bib-icon
                @click.native="$emit('file-favorite', !file.isFav)"
                class="favorite__icon"
                :icon="file.isFav ? 'heart-like-solid' : 'heart-like'"
                :scale="1.25"
                :variant="file.isFav ? 'danger' : 'gray5'"
              >
              </bib-icon>
            </div>
            <!-- <div class="d-flex pr-105 pl-105 gap-05">
              <div
                @click="showSortMenu = true"
                class="
                  shape-rounded
                  width-205
                  height-205
                  cursor-pointer
                  d-flex
                  align-center
                  justify-center
                  sort__icon
                "
                :class="showSortMenu == true ? 'bg-dark' : 'bg-light'"
              >
                <div
                  :key="sortKey"
                  class="position-relative height-105"
                  v-click-outside="()=>{showSortMenu = false}"
                >
                  <bib-icon
                    icon="swap-vertical"
                    :scale="1.5"
                    :variant="showSortMenu == true ? 'white' : 'gray5'"
                  ></bib-icon>
                  <div
                    v-show="showSortMenu"
                    class="
                      position-absolute
                      context-menu
                      bg-white
                      right-10
                      mt-05
                    "
                  >
                    <template v-for="(item, key) in sortMenuActions.items">
                      <div
                        @click="fireMethod(item.method, item.params)"
                        :key="key"
                        class="
                          context-menu__item
                          min-height-2
                          bg-hover-dark
                          text-hover-white
                          cursor-pointer
                        "
                        :class="item.icon_right ? 'justify-between' : ''"
                      >
                        <div v-if="item.icon_left" class="align-center">
                          <bib-icon
                            :variant="item.variant"
                            :scale="1.45"
                            :icon="item.icon_left"
                          ></bib-icon>
                        </div>
                        <span class="font-w-400">{{ item.label }} </span>
                        <div v-if="item.icon_right" class="align-center">
                          <bib-icon
                            :variant="item.variant"
                            :scale="1.45"
                            :icon="item.icon_right"
                          ></bib-icon>
                        </div>
                      </div>
                      <div
                        :key="key + 'separator'"
                        class="context-menu__separator"
                        v-if="item.separator"
                      ></div>
                    </template>
                  </div>
                </div>
              </div>
              <div
                class="
                  shape-rounded
                  width-205
                  height-205
                  d-flex
                  align-center
                  justify-center
                  cursor-pointer
                  bg-light
                "
              >
                <bib-icon
                  @click.native="switchView('Board')"
                  v-if="viewGrid == 'List'"
                  icon="apps-large-solid"
                  :scale="1.5"
                  variant="gray5"
                >
                </bib-icon>
                <bib-icon
                  @click.native="switchView('List')"
                  v-else
                  icon="list"
                  :scale="1.5"
                  variant="gray5"
                >
                </bib-icon>
              </div>
            </div> -->
            <div
              class="
                cursor-pointer
                shape-circle
                d-flex
                align-center
                width-205
                height-205
                bg-light
              "
            >
              <div
                @click="showMoreMenu = true"
                class="
                  shape-circle
                  width-205
                  height-205
                  cursor-pointer
                  d-flex
                  align-center
                  justify-center
                "
                :class="showMoreMenu == true ? 'bg-dark' : 'bg-light'"
              >
                <div
                  class="position-relative"
                  
                >
                <div class="d-flex align-center height-2" v-click-outside="()=>{showMoreMenu = false}">
                  <bib-icon
                    icon="elipsis"
                    :scale="1.25"
                    :variant="showMoreMenu == true ? 'white' : 'gray5'"
                  ></bib-icon>
                </div>
                  <div
                    v-show="showMoreMenu"
                    :key="moreMenuKey"
                    class="
                      position-absolute
                      context-menu
                      bg-white
                      right-10
                      mt-05
                    "
                  >
                    <template v-for="(item, key) in moreMenuActions.items">
                      <div
                        @click="$emit(item.event,item.params); fireMethod(item.method)"
                        :key="key"
                        :class="(key == moreMenuActions.items.length - 1 ? 'bg-hover-danger text-danger text-hover-white' : 'bg-hover-secondary-sub3 ')+(item.icon_right ? 'justify-between' : '')"
                        class="
                          context-menu__item
                          min-height-2
                          cursor-pointer
                        "

                      >
                        <div v-if="item.icon_left" class="align-center pr-05">
                          <bib-icon
                            :variant="item.variant"
                            :scale="1.15"
                            v-if="file.isFav && item.label == 'Add to favorites'"
                            icon="heart-like-solid"
                          ></bib-icon>
                          <bib-icon
                            :variant="item.variant"
                            :scale="1.15"
                            v-else
                            :icon="item.icon_left"
                          ></bib-icon>
                        </div>
                        <span v-if="file.isFav && item.label == 'Add to favorites'" class="font-w-400">Remove favorites</span> 
                        <span v-else class="font-w-400">{{ item.label }} </span>
                        <div v-if="item.icon_right" class="align-center">
                          <bib-icon
                            :variant="item.variant"
                            :scale="1.15"
                            :icon="item.icon_right"
                          ></bib-icon>
                        </div>
                      </div>
                      <div
                        :key="key + 'separator'"
                        class="context-menu__separator"
                        v-if="item.separator"
                      ></div>
                    </template>
                  </div>
                 
                </div>
                
              </div>
              
            </div>
             <div @click="$emit('close')" class="cursor-pointer d-flex bg-light justify-center width-205 shape-circle align-center height-205">
                  <bib-icon
                   
                    icon="close"
                    :scale="1.5"
                    variant="gray5"
                  ></bib-icon>
                </div>
          </div>
        </div>
        <div class="d-flex align-center justify-between h-100">
                 <div @click="$emit('previous')" class="cursor-pointer p-05 bg-dark">
                    <bib-icon icon="previous" variant="white" :scale="2.75"></bib-icon>
                </div>
                <div class="preview-screen__image" 
                     v-if="selectedFile.extension == ('png' || 'jpg' || 'jpeg')">
                    <img :src="selectedFile.preview600" alt="">
                </div>
                <div class="h-88 d-flex flex-d-column align-center justify-center" v-else>
                    <bib-file
                    class="preview-screen__file"
                    :property="selectedFile"
                ></bib-file>

                <bib-button
                        variant="success"
                        size="lg"
                        pill
                        class="height-205 w-fit font-w-400 mt-2"
                        @click.native="$emit('file-download')"
                        label="Download"
                        ></bib-button>
                </div>
                <div @click="$emit('next')" class="cursor-pointer p-05 bg-dark">
                    <bib-icon icon="next" variant="white" :scale="2.75"></bib-icon>
                </div>

        </div>
    </div>
    <bib-panel-wrapper v-show="showDetails">
      <template v-slot:header>
        <div class="pl-105 pr-105 pt-1">
          <!-- SIDE PANEL - FILE HEADER INFO -->
          <div class="side-panel__header__file__info">
            <div class="p-05 border-light shape-rounded">
              <bib-icon
                icon="awesome-file"
                :scale="1.35"
                :variant="$getVariant(selectedFile.extension)"
              ></bib-icon>
            </div>
            <div class="d-flex justify-between">
            <div
              class="
                p-05
                of-hidden
                text-of-elipsis
                h-fit
                text-wrap
                font-lg font-w-600
              "
            >
              {{ selectedFile.name }}
                
            </div>
            <div @click="showDetails = false" class="cursor-pointer d-flex bg-light justify-center width-205 shape-circle align-center height-205">
                  <bib-icon
                   
                    icon="close"
                    :scale="1.5"
                    variant="gray5"
                  ></bib-icon>
                </div>
                </div>
            <div
              class="
                p-05
                of-hidden
                text-of-elipsis
                h-fit
                text-wrap text-secondary
              "
            >
              {{
                selectedFile.type.charAt(0).toUpperCase() +
                selectedFile.type.slice(1).toLowerCase() +
                ", " +
                $formatBytes(selectedFile.size)
              }}
            </div>
          </div>
        </div>
      </template>

      <template v-slot:menu>
        <!-- SIDE PANEL - TAB MENU -->
        <div class="menu">
            <bib-tabs
            class="justify-around"
              :value="activeFileInfoTab"
              @change="fileInfoTabChange"
              :tabs="fileInfoTabs"
            ></bib-tabs>
        </div>
      </template>
      <template v-slot:content>
        <!-- SIDE PANEL - DETAILS TAB -->
        <div v-if="activeFileInfoTab == 'details'" class="preview p-1 m-05">
         

          <!-- SIDE PANEL - FILE DETAILED INFO -->
          <div class="preview__info">
            <div class="font-w-400">
              <span class="text-gray6">Type</span>
              <span
                >{{
                  selectedFile.type.charAt(0) +
                  selectedFile.type.slice(1).toLowerCase()
                }}
                ({{ selectedFile.extension.toUpperCase() }})</span
              >
            </div>
            <div class="font-w-400">
              <span class="text-gray6">Size</span>
              <span>{{ $formatBytes(selectedFile.size) }} </span>
            </div>
            <div class="font-w-400">
              <span class="text-gray6">Location</span>
              <span>
                <template v-for="(bread, key) in breads.bread">{{
                  (key > 0 ? " / " : " ") + bread.name + " "
                }}</template>
              </span>
            </div>
            <div class="font-w-400">
              <span class="text-gray6">Owner</span>
              <span v-if="selectedFile.createdBy">
                <bib-avatar
                  class="mb-05"
                  src="https://i.pravatar.cc/300"
                  size="1.5rem"
                ></bib-avatar>
                {{
                  selectedFile.createdBy.first_name +
                  " " +
                  selectedFile.createdBy.last_name
                }}
              </span>
            </div>
            <div class="font-w-400">
              <span class="text-gray6">Modified</span>
              <span>
                {{
                  new Date(selectedFile.updatedAt).getFullYear() +
                  "-" +
                  new Date(selectedFile.updatedAt).getMonth() +
                  "-" +
                  +new Date(selectedFile.updatedAt).getDate() +
                  " " +
                  new Date(selectedFile.createdAt).toLocaleString("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true,
                  })
                }}
              </span>
            </div>
            <div class="font-w-400">
              <span class="text-gray6">Created</span>
              <span>
                {{
                  new Date(selectedFile.createdAt).getFullYear() +
                  "-" +
                  new Date(selectedFile.createdAt).getMonth() +
                  "-" +
                  new Date(selectedFile.createdAt).getDate() +
                  " " +
                  new Date(selectedFile.createdAt).toLocaleString("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true,
                  })
                }}
              </span>
            </div>
            <!-- <div class="font-w-400">
              <span class="text-gray6">Description</span>
              <span>
                <bib-link
                  @click.native="
                    () => {
                      showDescInput = true;
                    }
                  "
                  v-if="!showDescInput && !selectedFile.description"
                  label="Add Description"
                  class="text-primary"
                ></bib-link>
                <bib-input
                  v-else
                  :value="selectedFile.description"
                  type="textarea"
                  class="mt-auto"
                  @input.native="setFileDesc"
                  placeholder="Enter description.."
                ></bib-input>
              </span>
            </div> -->
          </div>
        </div>
      </template>
    </bib-panel-wrapper>
    </div>
  </div>
</template>
<script>
export default {
  name: "BibDrivePreview",
  data() {
    return {
      showMoreMenu: false,
      showDetails: false,
      moreMenuKey: 0,
      key: 0,
      selectedFile: this.file,
      moreMenuActions: {
        items: [
          {
            label: "Close",
            method: "",
            params: [],
            event: "close"
          },
          {
            label: "Open",
            method: "",
            params: [],
            event: "open-file"
          },
          {
            label: "Show details",
            method: "openDetails",
            params: [],
            event: "show-details",
            separator: true,
          },
          {
            label: "Download",
            method: "",
            params: [],
            icon_left: "download",
            variant: "gray5",
            event: "file-download",
          },
          {
            label: "Add to favorites",
            method: "favoriteFolder",
            params: [this.file.isFav],
            icon_left: "heart",
            variant: "gray5",
            event: "file-favorite",
          },
          {
            label: "Share with",
            method: "",
            params: [],
            icon_left: "user-add",
            variant: "gray5",
            event: "share-with",
          },
          {
            label: "Conversations",
            method: "",
            showFunc: true,
            params: [],
            icon_left: "reply",
            variant: "gray5",
            event: "conversations",
          },
          {
            label: "Rename",
            method: "",
            params: [],
            icon_left: "pencil",
            variant: "gray5",
            event: "rename",
          },
          {
            label: "Copy",
            method: "",
            params: [],
            icon_left: "duplicate",
            variant: "gray5",
            event: "copy",
          },
          {
            label: "Paste",
            method: "",
            params: [],
            icon_left: "copy-file",
            variant: "gray5",
            event: "paste",
          },
          {
            label: "Move to",
            method: "",
            params: [],
            icon_left: "transfer",
            variant: "gray5",
            event: "move-to",
          },
          {
            label: "Report",
            method: "",
            params: [],
            icon_left: "warning",
            variant: "gray5",
            event: "report",
            separator: true,
          },
          {
            label: "Delete",
            method: "openDeleteFolderModal",
            params: [],
            event: "sort-reset",
          },
        ],
      },
      fileInfoTabs: [{title: "Details", value: 'details'}, {title: "Sharing", value: 'sharing'}, {title: "Conversation", value: 'conversation'}, {title: "Log", value: 'log'}],
      activeFileInfoTab: 'details',
    };
  },
  props: {
    file: {
      type: Object,
      default() {
        return {
            name: "",
            type: "",
            extension: "",
            type: "",
            description: "",
            isFav: false
         };
      },
    },
    breads: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  methods:{
      openDetails(){
          this.showDetails = true
      },
      fileInfoTabChange(tab) {
      this.activeFileInfoTab = tab.value;
    },
     fireMethod(func, params = null) {
      if (func != "" && params) this[func](...params);
      else if (func != "") this[func]();
    },
  }
};
</script>
<style lang="scss" scoped>

.preview-screen {
    top: 0;
    left: 0;
    position: sticky;
    z-index: 999;
    &__file {
        border: 1px solid $dark;

        &:hover{
            outline: 1px solid $dark;
            
        }
        &::v-deep{
            .file__preview{
                background-color: $dark;
                border-color: $dark-sub1;
                &:hover{
                    border-color: $dark-sub1;
                    
                }
                
            }
            .file__icon {
                display: none !important;
            }
            &:active{
                .file__info{
                    background-color: $dark;
                }
            }
            .file__info{
                background-color: $dark;
                justify-content: center;
                
                &:hover{
                    background-color: $dark;
                }
               
               div p{
                    color: $white;
                    text-align: center;
                }

                 .icon{
                    display: none;
                }
                &__name{
                    font-weight: 600;
                    color: $white;
                    text-align: center;
                }
            }
           
        }
        &__title {
        height: 4.5rem;
        padding-left: 2rem;
        font-size: 1.5rem;
        font-weight: 600;
        padding-right: 1rem;
        }
    }
}
</style>