<template>
  <bib-app-wrapper
    :navigationCollapsed="collapseNavigation"
    :select="appHeaderActions.select"
    :button="appHeaderActions.button"
    @button-click="rightClkFileSection"
    @collapseNavigation="
      () => {
        collapseNavigation = !collapseNavigation;
      }
    "
  >
    <template #notification v-if="showNotification">
      <bib-notification-persistent
        @dismiss="
          () => {
            showNotification = false;
          }
        "
        :label="notificationText"
        :variant="notificationVariant"
      ></bib-notification-persistent>
    </template>
    <template #topbar>
      <bib-header
        @input.native="searchAll"
        v-click-outside="
          () => {
            showUserMenu = false;
          }
        "
        logo="/img/bib-logo-wb.png"
        @user-click="openUserMenu"
      >
      </bib-header>
      <div v-show="showUserMenu" class="user-menu position-absolute">
        <span class="list__item disabled">{{ currentUser }}</span>
        <span
          class="list__item text-danger text-center cursor-pointer"
          @click="logout"
          >Logout</span
        >
      </div>
    </template>
    <template #switcher>
      <bib-app-switcher :menuItems="appItems"></bib-app-switcher>
    </template>
    <template #navigation>
      <bib-app-navigation
        @sub-clicked="goToFolder"
        :subCollapsed="!collapseNavigation"
        :items="navItems1"
      ></bib-app-navigation>

      <bib-app-navigation
        :class="!collapseNavigation ? 'pt-1' : ''"
        :items="navItems2"
      ></bib-app-navigation>

      <div v-show="!collapseNavigation" 
      class="p-1 d-flex flex-d-column justify-around pt-2"
      >
      <div class="h-100 shape-rounded w-100 bg-dark-sub4">
        <h5 class="font-w-400 text-gray4 p-05">My storage</h5>
        <div>
          <bib-progress max="15 GB" :indicator="$formatBytes(storageValue)" :value=" 100 * (storageValue/ (1024*1024)).toFixed(2) / 15360"></bib-progress>
        </div>
      </div>
      </div>
      <div v-show="!collapseNavigation" class="d-flex gap-1 align-center pt-2 p-1">
          <bib-icon :scale="1.75" variant="secondary" icon="domain"></bib-icon>
          <template v-for="lang in $i18n.locales">
            <bib-link v-if="$i18n.locale != lang.code" class="text-gray4 font-sm" @click.native="$i18n.locale = lang.code" :key="lang.code" :label="lang.name"></bib-link>
          </template>
         
        </div>
    </template>
    <template #content>
      <div
        v-if="!showSidePanel"
        v-click-outside="closePreview"
        id="main-section"
        class="main pb-2"
      >
        <!-- BREADCRUMB SECTION -->
        <div class="of-hidden text-wrap w-100 d-flex">
          <div class="d-flex align-center cursor-pointer">
            <template v-if="nav.bread.length > 1">
              <bib-icon
                icon="previous"
                @click.native="goToFolder(nav.backLink)"
                :scale="2.0"
              ></bib-icon>
            </template>
            <template v-else>
              <bib-icon icon="previous" :scale="2.0"></bib-icon>
            </template>
          </div>
          <h4 class="bold mt-auto mb-auto d-flex">
            <template v-for="(bread, key) in nav.bread">
              <bib-link
                href="#"
                class="text-dark crumb"
                @click.native="goToFolder(bread)"
                :label="(key > 0 ? ' / ' : ' ') + bread.name + ' '"
                :key="key"
              ></bib-link>
            </template>
          </h4>
        </div>
        <!-- PAGE HEADER SECTION -->
        <div class="page__title border-top-gray4">
          <div class="text-wrap of-hidden">
            {{ page.title }}
          </div>
          <div v-show="showSearchCount" class="font-w-400 font-md mr-auto pl-1">
            <small>{{ searchCount }}</small>
          </div>
          <div class="d-flex align-center gap-05">
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
              v-if="currentFolder._id != 'root'"
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
                @click.native="favoriteFolder"
                class="favorite__icon"
                :icon="isFavorite ? 'heart-like-solid' : 'heart-like'"
                :scale="1.25"
                :variant="isFavorite ? 'danger' : 'gray5'"
              >
              </bib-icon>
            </div>
            <div class="d-flex pr-105 pl-105 gap-05">
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
                  v-click-outside="
                    () => {
                      showSortMenu = false;
                    }
                  "
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
            </div>
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
                <div class="position-relative">
                  <div
                    class="d-flex align-center height-2"
                    v-click-outside="
                      () => {
                        showMoreMenu = false;
                      }
                    "
                  >
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
                        @click="fireMethod(item.method, item.params)"
                        :key="key"
                        :class="
                          (key == moreMenuActions.items.length - 1
                            ? 'bg-hover-danger text-danger text-hover-white'
                            : 'bg-hover-secondary-sub3 ') +
                          (item.icon_right ? 'justify-between' : '')
                        "
                        v-show="
                          !(
                            currentFolder._id == 'root' &&
                            (item.label == 'Show details' ||
                              item.label == 'Add to favorites' ||
                              item.label == 'Rename' ||
                              item.label == 'Move to' ||
                              item.label == 'Delete')
                          )
                        "
                        class="context-menu__item min-height-2 cursor-pointer"
                      >
                        <div v-if="item.icon_left" class="align-center pr-05">
                          <bib-icon
                            :variant="item.variant"
                            :scale="1.15"
                            v-if="
                              isFavorite && item.label == 'Add to favorites'
                            "
                            icon="heart-like-solid"
                          ></bib-icon>
                          <bib-icon
                            :variant="item.variant"
                            :scale="1.15"
                            v-else
                            :icon="item.icon_left"
                          ></bib-icon>
                        </div>
                        <span
                          v-if="isFavorite && item.label == 'Add to favorites'"
                          class="font-w-400"
                          >Remove favorites</span
                        >
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
                        v-show="
                          !(
                            currentFolder._id == 'root' &&
                            (item.label == 'Show details' ||
                              item.label == 'Add to Favorites' ||
                              item.label == 'Rename' ||
                              item.label == 'Move to' ||
                              item.label == 'Delete')
                          )
                        "
                      ></div>
                    </template>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- TOOLBAR SECTION
        <div>
          <bib-toolbar
            :actions="toolbarActions"
            @view-switch="switchView"
            @create-folder="openCreateFolderModal"
            @upload-file="openUploadFileModal"
            @upload-folder="openUploadFolderModal"
            label="Add Files/Folders"
          ></bib-toolbar>
        </div> -->

        <div class="h-100">
          <!-- FOLDERS SECTION -->
          <bib-detail-collapse
            class="border-top-gray4 pb-2"
            label="Folders"
            open
          >
            <template v-slot:content>
              <div
                class="
                  view view__grid--board view__grid--board--folder
                  dragArea
                "
                v-show="!showLoader"
                :class="
                  folders.data.length > 0
                    ? ''
                    : 'view__grid--' + viewGrid.toLowerCase() + '-folder--empty'
                "
                @contextmenu.self="rightClkFileSection"
              >
                <!-- LIST GRID FOLDERS -->
                <template v-if="viewGrid == 'List'">
                  <draggable
                    v-for="(folder, key) in folders.data"
                    :key="key"
                    @dragenter.native="folderDragEnter(key)"
                    :id="'folder' + key"
                    ghost-class="d-none"
                    :group="{ name: 'files' }"
                    class="view__grid--list--folder view__grid--list__row above"
                    @click.native="goToFolder(folder)"
                    @contextmenu.native="rightClkFolder($event, folder)"
                  >
                    <bib-icon icon="folder" :scale="1.25"></bib-icon>
                    <span class="pl-1 text-bold h-100">{{ folder.name }}</span>
                  </draggable>
                </template>

                <!-- BOARD GRID FOLDERS -->
                <draggable
                  :key="key"
                  v-else
                  v-for="(folder, key) in folders.data"
                  :list="folders.data"
                  @dragenter.native="folderDragEnter(key)"
                  @end="folderDragEnter()"
                  @start="draggedFolder = folder"
                  @drop.native="onFolderDrop($event, folder)"
                  :id="'folder' + key"
                  ghost-class="d-none"
                  :sort="false"
                  chosen-class="d-none"
                  drag-class="d-none"
                  :group="{ name: 'files', pull: 'move' }"
                  @click.native="goToFolder(folder)"
                  @contextmenu.native="rightClkFolder($event, folder)"
                >
                  <div
                    :id="'folder' + key"
                    class="d-flex p-1 folder shape-rounded dragArea"
                  >
                    <bib-icon
                      icon="folder-solid"
                      variant="secondary-sub2"
                      :scale="1.25"
                    ></bib-icon>
                    <span
                      class="
                        pl-1
                        text-bold
                        w-100
                        text-of-elipsis
                        folder__name
                        of-hidden
                        text-wrap
                      "
                      >{{ folder.name }}</span
                    >
                  </div>
                </draggable>

                <!-- FOLDER CONTEXT MENU -->
                <div
                  v-click-outside="
                    () => {
                      showFolderMenu = false;
                    }
                  "
                  v-show="showFolderMenu"
                  id="folder__context"
                  class="position-absolute"
                >
                  <span class="list__item" @click="goToFolder"
                    >Open Folder</span
                  >
                  <span class="list__item">Share</span>
                  <span class="list__item">Copy</span>
                  <span class="list__item">Move to...</span>
                  <span class="list__item">Download</span>
                  <span class="list__item" @click="openRenameFolderModal"
                    >Rename</span
                  >
                  <span class="list__item">Add to favorites</span>
                  <span class="list__item">Report</span>
                  <span class="list__item" @click="openDeleteFolderModal"
                    >Delete</span
                  >
                </div>

                <!-- FILE / FOLDER SECTION CONTEXT MENU -->
                <div
                  @contextmenu="rightClkFileSection"
                  class="w-fit m-auto d-flex flex-d-column"
                  v-if="folders.data.length < 1"
                >
                  <bib-icon
                    icon="folder"
                    class="m-auto"
                    variant="gray4"
                    :scale="2.0"
                  ></bib-icon>
                  <small class="text-gray4 font-w-400 pt-05"
                    >No folders found</small
                  >
                </div>
              </div>
              <!-- SKELETON FOLDER BOARD GRID -->
              <div
                class="view view__grid--board"
                v-show="showLoader && viewGrid == 'Board'"
              >
                <div
                  class="
                    folder__skeleton
                    of-hidden
                    position-relative
                    bg-light
                    border-gray4
                    d-flex
                    p-1
                    shape-rounded
                  "
                ></div>
                <div
                  class="
                    folder__skeleton
                    of-hidden
                    position-relative
                    bg-light
                    border-gray4
                    d-flex
                    p-1
                    shape-rounded
                  "
                ></div>
                <div
                  class="
                    folder__skeleton
                    of-hidden
                    position-relative
                    bg-light
                    border-gray4
                    d-flex
                    p-1
                    shape-rounded
                  "
                ></div>

                <div
                  class="
                    folder__skeleton
                    of-hidden
                    position-relative
                    bg-light
                    border-gray4
                    d-flex
                    p-1
                    shape-rounded
                  "
                ></div>
              </div>
              <!-- SKELETON FOLDER LIST GRID -->
              <div
                class="view view__grid--list"
                v-show="showLoader && viewGrid == 'List'"
              >
                <div
                  class="
                    folder__skeleton
                    of-hidden
                    position-relative
                    view__grid--list__row
                    bg-light
                    border-gray4
                    d-flex
                    p-1
                    w-100
                    h-100
                    shape-rounded
                  "
                ></div>
                <div
                  class="
                    folder__skeleton
                    of-hidden
                    position-relative
                    view__grid--list__row
                    bg-light
                    border-gray4
                    d-flex
                    p-1
                    w-100
                    h-100
                    shape-rounded
                  "
                ></div>
                <div
                  class="
                    folder__skeleton
                    of-hidden
                    position-relative
                    view__grid--list__row
                    bg-light
                    border-gray4
                    d-flex
                    w-100
                    h-100
                    p-1
                    shape-rounded
                  "
                ></div>

                <div
                  class="
                    folder__skeleton
                    of-hidden
                    position-relative
                    view__grid--list__row
                    bg-light
                    border-gray4
                    w-100
                    h-100
                    d-flex
                    p-1
                    shape-rounded
                  "
                ></div>
              </div>
            </template>
          </bib-detail-collapse>
          <!-- FILES SECTION -->
          <bib-detail-collapse
            class="border-top-gray4"
            :class="files.data.length < 1 ? 'h-75' : 'h-max'"
            :key="filesKey"
            :label="$t('files')"
            open
          >
            <template v-slot:content>
              <div class="h-100">
                <div
                  class="view view__grid--list"
                  v-show="showLoader && viewGrid == 'List'"
                >
                  <div
                    class="
                      file__skeleton--list
                      of-hidden
                      position-relative
                      bg-light
                      border-gray4
                      d-flex
                      p-1
                      shape-rounded
                    "
                  ></div>
                  <div
                    class="
                      file__skeleton--list
                      of-hidden
                      position-relative
                      bg-light
                      border-gray4
                      d-flex
                      p-1
                      h-100
                      shape-rounded
                    "
                  ></div>
                  <div
                    class="
                      file__skeleton--list
                      of-hidden
                      position-relative
                      bg-light
                      border-gray4
                      d-flex
                      p-1
                      h-100
                      shape-rounded
                    "
                  ></div>
                  <div
                    class="
                      file__skeleton--list
                      of-hidden
                      position-relative
                      bg-light
                      border-gray4
                      d-flex
                      p-1
                      h-100
                      shape-rounded
                    "
                  ></div>
                </div>
                <!-- LIST GRID FILES -->
                <div
                  @contextmenu.self.prevent="rightClkFileSection"
                  v-if="viewGrid == 'List'"
                  v-show="!showLoader"
                  :class="
                    files.data.length < 1
                      ? 'view__grid--' + viewGrid.toLowerCase() + '-file--empty'
                      : ' '
                  "
                  class="view view__grid--list"
                >
                  <!-- FILES EMPTY STATE -->
                  <div
                    @contextmenu="rightClkFileSection"
                    class="w-fit m-auto d-flex flex-d-column"
                    v-if="files.data.length < 1"
                  >
                    <bib-icon
                      icon="file"
                      class="m-auto"
                      variant="gray4"
                      :scale="2.0"
                    ></bib-icon>
                    <small class="text-gray4 font-w-400 pt-05"
                      >No files found</small
                    >
                  </div>

                  <!-- FILES FILLED STATE -->
                  <template v-else>
                    <!-- FILE TABLE -->
                    <bib-table
                      @item-clicked="showFileInfo"
                      @item-right-clicked="rightClkFile"
                      :fields="fields"
                      ref="tableList"
                      :sections="files.data"
                    >
                      <template #cell(_v)="data">
                        {{ data.value.key }}
                      </template>
                      <template #cell(name)="data">
                        <draggable
                          :list="files.data"
                          @end="onFileDrop"
                          :sort="false"
                          :group="{ name: 'files' }"
                          ghost-class="file--ghost"
                          drag-class="file--drag"
                          chosen-class="file--drag"
                          class="view__grid--list-file"
                        >
                          <div
                            :id="
                              'file' +
                              files.data
                                .map((e) => {
                                  return e._id;
                                })
                                .indexOf(data.value._id)
                            "
                            class="d-flex gap-05"
                          >
                            <bib-avatar
                              v-if="data.value.preview"
                              class="mt-auto mb-auto"
                              shape="rounded"
                              :src="data.value.preview"
                              size="1.5rem"
                            >
                            </bib-avatar>
                            <bib-icon
                              class="mb-auto mt-auto"
                              v-else
                              icon="awesome-file"
                              variant="gray4"
                              :scale="1.2"
                            ></bib-icon>
                            <span class="text-dark">
                              {{ data.value.name }}
                            </span>
                          </div>
                        </draggable>
                      </template>
                      <template #cell(type)="data">
                        <div class="justify-between text-dark">
                          <span>
                            {{
                              data.value.type.charAt(0) +
                              data.value.type.slice(1).toLowerCase()
                            }}
                            ({{ data.value.extension.toUpperCase() }})
                          </span>
                        </div>
                      </template>
                      <template #cell(owner)="data">
                        <div class="d-flex gap-1">
                          <span v-if="data.value.createdBy" class="text-dark">
                            <bib-avatar
                              size="1.5rem"
                              src="https://i.pravatar.cc/300"
                              shape="circle"
                            ></bib-avatar>
                            {{
                              data.value.createdBy.first_name +
                              " " +
                              data.value.createdBy.last_name
                            }}
                          </span>
                        </div>
                      </template>
                      <template #cell(date)="data">
                        <div class="text-dark">
                          {{
                            new Date(data.value.createdAt).getFullYear() +
                            "-" +
                            new Date(data.value.createdAt).getMonth() +
                            "-" +
                            new Date(data.value.createdAt).getDay() +
                            " " +
                            new Date(data.value.createdAt).toLocaleString(
                              "en-US",
                              {
                                hour: "numeric",
                                minute: "2-digit",
                                hour12: true,
                              }
                            )
                          }}
                          /
                          {{
                            new Date(data.value.updatedAt).getFullYear() +
                            "-" +
                            new Date(data.value.updatedAt).getMonth() +
                            "-" +
                            new Date(data.value.updatedAt).getDay() +
                            " " +
                            new Date(data.value.updatedAt).toLocaleString(
                              "en-US",
                              {
                                hour: "numeric",
                                minute: "2-digit",
                                hour12: true,
                              }
                            )
                          }}
                        </div>
                      </template>
                    </bib-table>
                  </template>
                </div>

                <!-- BOARD GRID FILES -->
                <div
                  v-else
                  @contextmenu.self="rightClkFileSection"
                  class="h-100"
                >
                  <div
                    class="view view__grid--board view__grid--board-file"
                    v-show="showLoader && viewGrid == 'Board'"
                  >
                    <div
                      class="
                        file__skeleton
                        of-hidden
                        position-relative
                        bg-light
                        border-gray4
                        d-flex
                        p-1
                        h-100
                        shape-rounded
                      "
                    ></div>
                    <div
                      class="
                        file__skeleton
                        of-hidden
                        position-relative
                        bg-light
                        border-gray4
                        d-flex
                        p-1
                        h-100
                        shape-rounded
                      "
                    ></div>
                    <div
                      class="
                        file__skeleton
                        of-hidden
                        position-relative
                        bg-light
                        border-gray4
                        d-flex
                        p-1
                        h-100
                        shape-rounded
                      "
                    ></div>
                    <div
                      class="
                        file__skeleton
                        of-hidden
                        position-relative
                        bg-light
                        border-gray4
                        d-flex
                        p-1
                        h-100
                        shape-rounded
                      "
                    ></div>
                  </div>
                  <draggable
                    :list="files.data"
                    @end="onFileDrop"
                    @start="draggedFolder = null"
                    handle=".file__handle"
                    :sort="false"
                    :group="{ name: 'files', pull: 'clone' }"
                    class="
                      view view__grid--board view__grid--board-file
                      dragArea
                    "
                    v-show="!showLoader"
                    ghost-class="file--ghost"
                    drag-class="file--drag"
                    chosen-class="file--drag"
                    :class="
                      files.data.length < 1
                        ? 'view__grid--' +
                          viewGrid.toLowerCase() +
                          '-file--empty'
                        : ''
                    "
                    @contextmenu.native.prevent.self="rightClkFileSection"
                  >
                    <!-- FILES EMPTY STATE -->
                    <div
                      @contextmenu="rightClkFileSection"
                      class="w-fit m-auto d-flex flex-d-column mt-14"
                      v-if="files.data.length < 1"
                    >
                      <bib-icon
                        icon="file"
                        class="m-auto"
                        variant="gray4"
                        :scale="2.0"
                      ></bib-icon>
                      <small class="text-gray4 font-w-400 pt-05"
                        >No files found</small
                      >
                    </div>

                    <!-- FILES FILLED STATE -->
                    <template v-for="(file, key) in files.data">
                      <div :key="key">
                        <bib-file
                          :favorite="file.isFav"
                          @favorite-file="favoriteFile(file, $event)"
                          :id="'file' + key"
                          @contextmenu.native="rightClkFile($event, file)"
                          @click.native="showFileInfo(file)"
                          :property="file"
                          :outline="file.active"
                        ></bib-file>
                      </div>
                    </template>
                  </draggable>
                </div>

                <!-- FILE CONTEXT MENU -->
                <div
                  v-click-outside="
                    () => {
                      showFileMenu = false;
                    }
                  "
                  v-show="showFileMenu"
                  id="file__context"
                  class="position-absolute bg-white cursor-pointer context-menu"
                >
                  <span class="context-menu__item bg-hover-light"
                    >Open with</span
                  >
                  <span class="context-menu__item bg-hover-light">Share</span>
                  <span class="context-menu__item bg-hover-light">Copy</span>
                  <span class="context-menu__item bg-hover-light"
                    >Move to...</span
                  >
                  <span class="context-menu__item bg-hover-light"
                    >Download</span
                  >
                  <span
                    class="context-menu__item bg-hover-light"
                    @click="openRenameFileModal"
                    >Rename</span
                  >
                  <span class="context-menu__item bg-hover-light"
                    >Add to favorites</span
                  >
                  <span class="context-menu__item bg-hover-light">Report</span>
                  <span
                    class="context-menu__item bg-hover-light"
                    @click="openDeleteFileModal"
                    >Delete</span
                  >
                </div>

                <!-- FILE / FOLDER SECTION CONTEXT MENU -->
                <div
                  v-click-outside="outsideContextMenu"
                  v-show="showFileSectionMenu"
                  id="file__section__context"
                  class="position-absolute bg-light context-menu"
                >
                  <template v-for="(item, key) in toolbarActions.items">
                    <div
                      @click="fireMethod(item.method, item.params)"
                      :key="key"
                      class="context-menu__item bg-hover-white cursor-pointer"
                      :class="item.icon_right ? 'justify-between' : ''"
                    >
                      <div v-if="item.icon_left" class="align-center">
                        <bib-icon
                          :variant="item.variant"
                          :scale="1.5"
                          :icon="item.icon_left"
                        ></bib-icon>
                      </div>
                      <span>{{ item.label }} </span>
                      <div v-if="item.icon_right" class="align-center">
                        <bib-icon
                          :variant="item.variant"
                          :scale="1.5"
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
            </template>
          </bib-detail-collapse>
        </div>

        <!-- MODALS -->
        <bib-drive-modals
          @files-dropped="setUploadFiles"
          @upload-file="uploadFile"
          @folders-dropped="setUploadFolders"
          @folders-removed="
            (folders) => {
              foldersDropped = folders;
            }
          "
          @upload-folder="uploadFolder(currentFolder)"
          @update-file="updateFile"
          @delete-file="deleteFile"
          @delete-folder="deleteFolder"
          @update-folder="updateFolder"
          @create-folder="
            (fldr) => {
              folder = fldr;
              createFolder(true);
            }
          "
          ref="modals"
        ></bib-drive-modals>
      </div>
      <!-- PREVIEW PANEL -->
      <bib-drive-preview
        @close="closePreview"
        @file-favorite="favoriteFile(selectedFile, $event)"
        @file-download="downloadFile(selectedFile)"
        @go-to-folder="goToFolder($event)"
        @next="navigateFiles(true)"
        @previous="navigateFiles(false)"
        :key="previewkey"
        :breads="nav"
        ref="preview"
        :file="selectedFile"
        v-else
      >
      </bib-drive-preview>
    </template>
  </bib-app-wrapper>
</template>
<script>
export default {
  auth: false,
  data() {
    return {
      filesKey: 0,
      searchCount: 0,
      sortKey: 0,
      previewkey: 0,
      moreMenuKey: 0,
      folderClass: "",
      controlOnStart: true,
      filesDropped: [],
      foldersDropped: [],
      showNotification: false,
      showDescInput: false,
      showFolderMenu: false,
      showSortMenu: false,
      showSidePanel: false,
      showFileMenu: false,
      showUserMenu: false,
      showMoreMenu: false,
      showSearchCount: false,
      collapseNavigation: true,
      showDetailsPreview: false,
      currentUser: {},
      draggedFolder: {},
      currentFolder: { _id: "root", name: "My Drive" },
      createdFolder: {},
      showFileSectionMenu: false,
      showLoader: false,
      notificationText: "",
      notificationVariant: "",
      sortMenuActions: {
        items: [
          {
            label: "Name",
            method: "sortBy",
            params: ["name", "asc"],
            icon_right: "long-arrow-up",
            variant: "white",
            event: "sort-by-name",
          },
          {
            label: "Date Modified",
            method: "sortBy",
            params: ["updatedAt", "asc"],
            icon_right: "long-arrow-up",
            variant: "white",
            event: "sort-by-date",
          },
          {
            label: "Size",
            method: "sortBy",
            params: ["size", "asc"],
            icon_right: "long-arrow-up",
            variant: "white",
            event: "sort-by-size",
          },
          {
            label: "File format",
            method: "sortBy",
            params: ["extension", "asc"],
            icon_right: "long-arrow-up",
            variant: "white",
            event: "sort-by-format",
            separator: true,
          },
          {
            label: "Reset",
            method: "sortBy",
            params: ["reset", "asc"],
            event: "sort-reset",
          },
        ],
      },
      moreMenuActions: {
        items: [
          {
            label: "Show details",
            method: "",
            params: [],
            event: "show-details",
            separator: true,
          },
          {
            label: "Upload to folder...",
            method: "openUploadFileModal",
            params: [],
            icon_left: "upload",
            variant: "gray5",
            event: "upload-to-folder",
          },
          {
            label: "Download",
            method: "",
            params: [],
            icon_left: "download",
            variant: "gray5",
            event: "download",
          },
          {
            label: "Add to favorites",
            method: "favoriteFolder",
            params: [],
            icon_left: "heart",
            variant: "gray5",
            event: "add-favorites",
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
      appHeaderActions: {
        button: {
          label: "Create / Upload",
          event: "button-click",
          variant: "success",
          icon: "add",
        },
        select: {
          items: [
            {
              label: "Organization Name",
              event: "item-click",
              img: "https://i.pravatar.cc/300",
            },
            {
              label: "Organization Name",
              event: "item-click",
              img: "https://i.pravatar.cc/300",
            },
          ],
          footer: {
            label: "Add organization",
            icon: "plus",
            event: "add-organization",
          },
        },
      },
      contextFile: {
        name: "",
        description: "",
      },
      contextFolder: {},
      months: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      selectedFile: {
        name: "",
        type: "",
        extension: "",
        type: "",
        description: "",
      },
      fileInfoTabs: ["Details", "Sharing", "Conversation", "History"],
      activeFileInfoTab: "Details",
      navItems2: [
        { label: "Shared with me", icon: "nodes" },
        { label: "Shared by me", icon: "user-org-chart" },
        { label: "Recent", icon: "time" },
        { label: "Favorites", icon: "heart" },
        { label: "Document Templates", icon: "layers" },
        { label: "Trash", icon: "trash" },
      ],
      nav: {
        title: "My Drive",
        backLink: { name: "My Drive", _id: "root" },
        bread: [{ name: "My Drive", _id: "root" }],
      },
      parent: "",
      viewGrid: "Board",
      toolbarActions: {
        items: [
          {
            label: "New Document",
            method: "",
            icon_left: "add",
            variant: "success",
            event: "new-document",
          },
          {
            label: "New Spreadsheet",
            method: "",
            icon_left: "add",
            variant: "primary",
            event: "new-spreadsheet",
          },
          {
            label: "New Folder",
            method: "openCreateFolderModal",
            icon_left: "folder-solid",
            variant: "gray5",
            event: "create-folder",
            separator: true,
          },
          {
            label: "Upload File",
            method: "openUploadFileModal",
            icon_left: "file",
            variant: "gray5",
            event: "upload-file",
          },
          {
            label: "Upload Folder",
            method: "openUploadFolderModal",
            icon_left: "folder-solid",
            variant: "gray5",
            event: "upload-folder",
          },
        ],
      },
      appItems: [
        {
          img: "Layers",
          color: "primary",
          active: false,
          text: "Templates",
          href: "#",
        },
        {
          img: "Files",
          color: "success-sub1",
          active: true,
          text: "Files",
          href: "#",
        },
        {
          img: "Signature",
          color: "orange",
          active: false,
          text: "eSign",
          href: "#",
        },
        {
          img: "Tick",
          color: "primary",
          active: false,
          text: "Project",
          href: "#",
        },
        {
          img: "CommentForum",
          color: "purple",
          active: false,
          text: "Chat",
          href: "#",
        },
      ],
      page: {
        title: "My Drive",
      },
      folder: {
        name: "",
      },
      fields: [
        {
          key: "_v",
          label: "#",
        },
        {
          key: "name",
          label: "File name",
        },
        {
          key: "type",
          label: "File type",
        },
        {
          key: "owner",
          label: "File owner",
        },
        {
          key: "date",
          label: "Added/Modified",
        },
      ],
    };
  },
  mounted() {
    document
      .getElementById("main-section")
      .addEventListener("wheel", this.handleScroll, { passive: true });
  },
  methods: {
    navigateFiles(forward){
      if(forward){
        this.selectedFile = this.files.data[(this.files.data.map((e)=>{ return e._id}).indexOf(this.selectedFile._id) + 1 + this.files.data.length) % this.files.data.length]; 
      }else{
        this.selectedFile = this.files.data[(this.files.data.map((e)=>{ return e._id}).indexOf(this.selectedFile._id) - 1 + this.files.data.length) % this.files.data.length]; 
      }
      if(this.$refs.preview.showDetails == true){
        this.previewkey += 1; 
        return Promise.resolve().then(() => {
          this.$refs.preview.openDetails();
      });
      }else{
        this.previewkey += 1
      }
      
    },  
    handleScroll(ev) {
      if (
        !ev.target.classList.contains("context-menu__item") &&
        !ev.target.classList.contains("context-menu") &&
        !ev.target.classList.contains("list__item")
      ) {
        this.closeMenus();
      }
    },
    closeMenus() {
      this.showSortMenu = false;
      this.showMoreMenu = false;
      this.showFolderMenu = false;
      this.showFileMenu = false;
      this.showFileSectionMenu = false;
      for (let file of this.files.data) {
        file.active = false;
      }
    },
    folderDragEnter(id = null) {
      let folders = document.getElementsByClassName("folder--drop");

      for (let folder of folders) {
        folder.classList.remove("folder--drop");
      }
      if (id != null) {
        document.getElementById("folder" + id).classList.add("folder--drop");
      }
    },
    async onFolderDrop(event, toFolder) {
      if (
        this.draggedFolder != null &&
        toFolder._id != this.draggedFolder._id
      ) {
        this.startLoader();
        try {
          let response = await this.$axios.$post(
            "/v1/folders/" + this.draggedFolder._id + "/move",
            {
              parent: toFolder._id,
              name: this.draggedFolder.name,
            }
          );
          if ((response.state = "fulfilled")) {
            //IF FOLDER IS MOVED
            this.notificationText = response.message;
            this.showNotification = true;
            this.notificationVariant = "success";

            this.goToFolder(this.currentFolder);

            //UPDATING FILE / FOLDER STREAM
            this.filesKey += 1;
            this.endLoader();
          }
        } catch (err) {
          //IF FOLDER IS NOT MOVED
          this.notificationText = err.response.data.message;
          this.showNotification = true;
          this.notificationVariant = "warning";

          this.goToFolder(this.currentFolder);

          //UPDATING FILE / FOLDER STREAM
          this.filesKey += 1;
          this.endLoader();
        }
      }
      let folders = document.getElementsByClassName("folder--drop");
      for (let folder of folders) {
        folder.classList.remove("folder--drop");
      }
    },
    async onFileDrop(customEvent) {
      let folders = document.getElementsByClassName("folder--drop");
      if (
        (customEvent.from.classList &&
          customEvent.from.classList.contains("view__grid--board-file")) ||
        customEvent.from.classList.contains("view__grid--list-file")
      ) {
        if (
          !customEvent.to.classList.contains("view__grid--board-file") &&
          customEvent.to.getAttribute("id")
        ) {
          this.startLoader();

          let fromItem = customEvent.from.classList.contains(
            "view__grid--board-file"
          )
            ? this.files.data[
                customEvent.item.firstChild
                  .getAttribute("id")
                  .replace("file", "")
              ]
            : this.files.data[customEvent.item.id.replace("file", "")];
          let toItem =
            this.folders.data[
              customEvent.to.getAttribute("id").replace("folder", "")
            ];
          if (fromItem && toItem) {
            try {
              let response = await this.$axios.$post(
                "/v1/files/" + fromItem._id + "/move",
                {
                  parent: toItem._id,
                  name: fromItem.name,
                }
              );

              if ((response.state = "fulfilled")) {
                //IF FILE IS MOVED
                this.notificationText = response.message;
                this.showNotification = true;
                this.notificationVariant = "success";

                this.goToFolder(this.currentFolder);
              }
            } catch (err) {
              //IF FILE IS NOT MOVED
              this.notificationText = err.response.data.message;
              this.showNotification = true;
              this.notificationVariant = "warning";

              this.goToFolder(this.currentFolder);

              //UPDATING FILE / FOLDER STREAM
              this.filesKey += 1;
              this.endLoader();
            }
          }
        }
      }
      for (let folder of folders) {
        folder.classList.remove("folder--drop");
      }
    },
    closePreview() {
      //CLOSE SIDE PANEL
      this.showSidePanel = false;
    
      //UNSELECT ALL ELEMS
        for (let file of this.files.data) {
          file.active = false;
      }
    },
    fireMethod(func, params = null) {
      if (func != "" && params) this[func](...params);
      else if (func != "") this[func]();
    },
    outsideContextMenu(e) {
      let flag = true;
      if (
        !e.target.classList.contains("button-action") &&
        !e.path
          .map((p) => {
            if (p.classList) return p.classList.contains("button-action");
          })
          .filter((p) => {
            return p;
          })[0]
      )
        flag = false;
      this.showFileSectionMenu = flag;
    },
    rightClkFolder(event, folder) {
      event.preventDefault();
      this.$refs.modals.contextFolder = folder;
      var menu = document.getElementById("folder__context");
      this.closeMenus();
      this.showFolderMenu = true;

      var body = document.body,
        html = document.documentElement;

      var height = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );

      if (menu) {
        menu.style.position = "fixed";
        menu.style.left = event.clientX + "px";
        menu.style.top = event.clientY + "px";
        if (height - event.pageY < 350) {
          menu.style.maxHeight = height - event.pageY + "px";
          menu.style.overflowY = "scroll";
          menu.scroll(1, 1);
        } else {
          menu.style.maxHeight = 370 + "px";
        }
      }
    },
    rightClkFile(event, file) {
      event.preventDefault();
      this.$refs.modals.contextFile = file;
      var menu = document.getElementById("file__context");
      this.closeMenus();
      this.showFileMenu = true;

      var body = document.body,
        html = document.documentElement;

      var height = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );

      if (menu) {
        menu.style.position = "fixed";
        menu.style.left = event.clientX + "px";
        menu.style.top = event.clientY + "px";
        if (height - event.pageY < 370) {
          menu.style.maxHeight = height - event.pageY + "px";
          menu.style.overflowY = "scroll";
          menu.scroll(1, 1);
        } else {
          menu.style.maxHeight = 370 + "px";
        }
      }
    },
    rightClkFileSection(event) {
      event.preventDefault();
      var menu = document.getElementById("file__section__context");
      this.closeMenus();
      this.showFileSectionMenu = true;

      var body = document.body,
        html = document.documentElement;

      var height = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );

      if (menu) {
        menu.style.position = "fixed";
        menu.style.left = event.clientX + "px";
        menu.style.top = event.clientY + "px";

        if (height - event.pageY < 150) {
          menu.style.maxHeight = height - event.pageY + "px";
          menu.style.overflowY = "scroll";
          menu.scroll(1, 1);
        } else {
          menu.style.maxHeight = "max-content";
        }
      }
    },
    openUploadFileModal() {
      this.filesDropped.forEach((file) => {
        this.$refs.modals.$refs.files.removeFile(file);
      });
      this.foldersDropped.forEach((folder) => {
        this.$refs.modals.$refs.folders.removeFile(folder);
      });
      this.$refs.modals.showUploadFileModal = true;
      this.closeMenus();
    },
    openUploadFolderModal() {
      this.foldersDropped.forEach((folder) => {
        this.$refs.modals.$refs.folders.removeFile(folder);
      });
      this.filesDropped.forEach((file) => {
        this.$refs.modals.$refs.files.removeFile(file);
      });
      this.$refs.modals.showUploadFolderModal = true;
      this.closeMenus();
    },
    openCreateFolderModal() {
      this.folder.name = "";
      this.$refs.modals.showCreateFolderModal = true;
      this.$refs.modals.contextFolder.name = "";
      this.closeMenus();
    },
    openRenameFileModal() {
      this.$refs.modals.showRenameFileModal = true;
      this.closeMenus();
    },
    openDeleteFileModal() {
      this.closeMenus();
      this.$refs.modals.showDeleteFileModal = true;
    },
    openRenameFolderModal() {
      this.$refs.modals.showRenameFolderModal = true;
      this.closeMenus();
    },
    openDeleteFolderModal() {
      this.closeMenus();
      if (this.currentFolder._id != "root") {
        this.$refs.modals.contextFolder = this.currentFolder;
      }
      this.$refs.modals.showDeleteFolderModal = true;
    },
    fileInfoTabChange(value) {
      this.activeFileInfoTab = value;
    },
    setUploadFiles(files) {
      this.filesDropped = files;
    },
    setUploadFolders(folders) {
      this.foldersDropped = folders;
    },
    setFileDesc(event) {
      if (event.target.value.length > 0) {
        this.selectedFile.description = event.target.value;
      } else {
        this.selectedFile.description = null;
      }
      this.updateFile();
    },
    showFileInfo(file) {
      for (let fl of this.files.data) {
        fl.active = false;
      }
      file.active = true;
      this.showDescInput = false;
      this.selectedFile = file;
      this.showSidePanel = true;
      this.showDownloadFile = true;
      this.previewkey += 1;
    },
    openUserMenu() {
      this.showUserMenu = true;
    },
    switchView(value) {
      //VIEW GRID LABEL CONSTRUCTION
      this.viewGrid = value;
      let sections = document.getElementsByClassName("view");
      let className = "view__grid--" + value.toLowerCase();

      //SWITCHING ALL SECTIONS
      for (let i = 0; i < sections.length; i++) {
        if (
          sections[i].classList.contains("view__grid--board") ||
          sections[i].classList.contains("view__grid--list")
        )
          sections[i].classList.remove("view__grid--board", "view__grid--list");
        sections[i].classList.add(className);
      }
    },
    async searchAll(e) {
      this.searchCount = " ";
      this.showSearchCount = false;
      this.startLoader();
      if (e.target.value != "" && e.target.value != " ") {
        try {
          let responseFolders = await this.$axios.$get(
            "/v1/search/folder?keyword=" + e.target.value
          );

          this.folders = {
            data: responseFolders.data.filter(
              (v, i, a) =>
                a.findIndex((t) => t._id === v._id && !t.trashed) === i
            ),
          };

          let responseFiles = await this.$axios.$get(
            "/v1/search/file?keyword=" + e.target.value
          );

          this.searchCount =
            "Displaying " +
            (responseFiles.data.filter(
              (v, i, a) =>
                a.findIndex((t) => t._id === v._id && !t.trashed) === i
            ).length +
              responseFolders.data.filter(
                (v, i, a) =>
                  a.findIndex((t) => t._id === v._id && !t.trashed) === i
              ).length) +
            " matching results";

          this.files = {
            data: responseFiles.data.filter(
              (v, i, a) =>
                a.findIndex((t) => t._id === v._id && !t.trashed) === i
            ),
          };

          this.showSearchCount = true;
          this.page.title = 'Looking for "' + e.target.value + '"';
          this.endLoader();
                 for(let file of this.files.data){
          //IF FILE IS OF IMAGE TYPE
        if (this.images.includes(file.extension)) {
          if(e.target.value == '' || e.target.value == ' '){
            this.showSearchCount = false
            break;
          }
          //FETCH PREVIEW URL (200,600)
          let expiration = new Date(
            new Date().getTime() +
              process.env.URLIFY_PREVIEW_DURATION * 24 * 60 * 60 * 1000
          );
          try {
            const response = await this.$axios.$post(
              "/v1/files/" + file._id + "/urlify",
              {
                thumbnail: true,
                expiredAt: expiration.toISOString(),
              }
            );

            file.preview = this.apiUrl + response.data[200];
            file.preview600 = this.apiUrl + response.data[600];
            this.filesKey += 1
          } catch (err) {
            console.log(err);
          }

          //ELSE SET PREVIEW AS FILE ICON
        } else {
          file.preview = false;
          file.preview600 = false;
        }
          }
        } catch (err) {
          console.log(err);
        }  
      } else {
        this.goToFolder(this.currentFolder);
        this.showSearchCount = false;
        this.searchCount = ''
        this.endLoader();
      }
      
    },
    async favoriteFile(file, isFavorite) {
      if (isFavorite) {
        try {
          let response = await this.$axios.$post(
            "/v1/favorites/files/" + file._id
          );
          //SHOW PERSISTANT NOTIFICATION WITH FEEDBACK MESSAGE
          this.notificationText = response.message;
          this.showNotification = true;
          this.$refs.preview.file.isFav = true
          this.notificationVariant = "success";
        } catch (err) {
          console.log(err);
        }
        
      } else {
        try {
          let response = await this.$axios.$delete(
            "/v1/favorites/files/" + file._id
          );
          //SHOW PERSISTANT NOTIFICATION WITH FEEDBACK MESSAGE
          this.notificationText = response.message;
          this.showNotification = true;
          this.$refs.preview.file.isFav = false
          this.notificationVariant = "success";
        } catch (err) {
          console.log(err);
        }
      }
    },
    async favoriteFolder(isFavorite) {
      if (!this.isFavorite) {
        try {
          let response = await this.$axios.$post(
            "/v1/favorites/folders/" + this.currentFolder._id
          );
          //SHOW PERSISTANT NOTIFICATION WITH FEEDBACK MESSAGE
          this.notificationText = response.message;
          this.showNotification = true;
          this.notificationVariant = "success";
          this.isFavorite = true;
        } catch (err) {
          console.log(err);
        }
      } else {
        try {
          let response = await this.$axios.$delete(
            "/v1/favorites/folders/" + this.currentFolder._id
          );
          //SHOW PERSISTANT NOTIFICATION WITH FEEDBACK MESSAGE
          this.notificationText = response.message;
          this.showNotification = true;
          this.notificationVariant = "success";
          this.isFavorite = false;
        } catch (err) {
          console.log(err);
        }
      }
    },
    async updateFolder(file = null) {
      let fileToUpdate = {};
      if (file) {
        fileToUpdate = file;
      } else {
        fileToUpdate = this.contextFolder;
      }
      // UPDATING FOLDER INFO
      try {
        let response = await this.$axios.$put(
          "/v1/folders/" + fileToUpdate._id,
          {
            name: fileToUpdate.name,
          }
        );
        //SHOW PERSISTANT NOTIFICATION WITH FEEDBACK MESSAGE
        this.notificationText = response.message;
        this.showNotification = true;
        this.notificationVariant = "success";

        if (!fileToUpdate.parent) {
          this.navItems1[0].sub.splice(
            this.navItems1[0].sub
              .map((e) => {
                return e._id;
              })
              .indexOf(this.$refs.modals.contextFolder._id),
            1
          );
          this.navItems1[0].sub.push({
            label: response.data.name,
            icon: "folder-solid",
            _id: response.data._id,
          });
        }
      } catch (err) {
        console.log(err);
      }
    },
    async updateFile(file = null) {
      let id = "";
      //COLLECTING MNEW FILE INFO
      if (!file) {
        var fileBodyData = new FormData();
        fileBodyData.append("name", this.selectedFile.name);
        fileBodyData.append("description", this.selectedFile.description);
        id = this.selectedFile._id;
      } else {
        var fileBodyData = new FormData();
        fileBodyData.append("name", file.name);
        if (file.description != null) {
          fileBodyData.append("description", file.description);
        }
        id = file._id;
      }

      // UPDATING FILE INFO
      try {
        let response = await this.$axios.$put("/v1/files/" + id, fileBodyData);
        //SHOW PERSISTANT NOTIFICATION WITH FEEDBACK MESSAGE
        this.notificationText = response.message;
        this.showNotification = true;
        this.notificationVariant = "success";
      } catch (err) {
        console.log(err);
      }
    },
    async deleteFile() {
      //DELETE CONTEXT FILE
      try {
        let response = await this.$axios.$delete(
          "/v1/files/" + this.$refs.modals.contextFile._id
        );

        //SHOW PERSISTANT NOTIFICATION WITH FEEDBACK MESSAGE
        this.notificationText = response.message;
        this.showNotification = true;
        this.notificationVariant = "danger";
      } catch (err) {
        console.log(err);
      }

      if (this.parent._id && this.parent._id != "root") {
        //IF THE CURRENT FOLDER IF A CHILD
        this.goToFolder(this.parent);
      } else {
        //IF THE CURRENT FOLDER IS THE ROOT
        this.goToFolder({ name: "My Drive", _id: "root" });
      }

      //HIDE DELETE FILE MODAL
      this.$refs.modals.showDeleteFileModal = false;
    },
    async deleteFolder() {
      //DELETE CONTEXT FILE
      try {
        let response = await this.$axios.$delete(
          "/v1/folders/" + this.$refs.modals.contextFolder._id
        );

        //SHOW PERSISTANT NOTIFICATION WITH FEEDBACK MESSAGE
        this.notificationText =
          "Folder " +
          this.$refs.modals.contextFolder.name +
          " has been deleted successfully !";
        this.showNotification = true;
        this.notificationVariant = "danger";
      } catch (err) {
        console.log(err);
      }

      if (this.parent._id && this.parent._id != "root") {
        //IF THE CURRENT FOLDER IS A CHILD
        this.goToFolder(this.parent);
      } else {
        //IF THE CURRENT FOLDER IS THE ROOT
        this.goToFolder({ name: "My Drive", _id: "root" });
      }
      if (!this.$refs.modals.contextFolder.parent) {
        this.navItems1[0].sub.splice(
          this.navItems1[0].sub
            .map((e) => {
              return e._id;
            })
            .indexOf(this.$refs.modals.contextFolder._id),
          1
        );
      }
      //HIDE DELETE FILE MODAL
      this.$refs.modals.showDeleteFolderModal = false;
    },
    async getFullPath(folder_id, pushBack = false) {
      if (folder_id != null && folder_id != "root") {
        try {
          let response = await this.$axios.$get("/v1/folders/" + folder_id);
          if (response.data && !pushBack) {
            this.nav.bread.push(response.data);
          } else if (response.data && pushBack) {
            let index = 0;
            index = this.nav.bread
              .map((e) => {
                return e.parent;
              })
              .indexOf(response.data._id);
            this.nav.bread.splice(index, 0, response.data);
          }
          if (response.data.parent != "root") {
            this.getFullPath(response.data.parent, true);
          }
        } catch (err) {
          console.log(err);
        }
        this.nav.bread = this.nav.bread.filter(
          (v, i, a) => a.findIndex((t) => t._id === v._id) === i
        );
      }
    },
    async uploadFolder() {
      this.startLoader();

      //CONSTRUCT THE TREE ARRAY WITH PARENTS
      let tree = [];
      const currentPath = this.currentFolder;
      for (let item of this.foldersDropped.filter(
        (e) => e.name != ".DS_Store"
      )) {
        //IF ELEMENT IS IN ROOT DIR
        if ("/" + item.name == item.fullPath && item.isDirectory) {
          item.parent = "/";
          item.currentFolder = this.currentFolder;
          tree.push(item);
        } else {
          //IF ITEM IS A SUB FOLDER
          if (item.fullPath) {
            let parentPath = item.fullPath.split("/");
            parentPath.pop();
            item.parent =
              this.foldersDropped[
                this.foldersDropped
                  .map(function (e) {
                    if (e.fullPath) return e.fullPath;
                  })
                  .indexOf(parentPath.join("/"))
              ];
            tree.push(item);
          } else {
            tree.push(item);
          }
        }
      }

      if (tree.length > 0) {
        //ORDERING TREE BY FULL PATH AND DIRECTORIES
        tree = tree
          .filter(
            (v, i, a) => a.findIndex((t) => t.fullPath === v.fullPath) === i
          )
          .sort((a, b) => {
            if (a.isDirectory) {
              return -1;
            } else {
              return 1;
            }
          })
          .sort((a, b) => {
            if (a.isDirectory && b.isDirectory)
              return a.fullPath.localeCompare(b.fullPath);
          });

        for (let node of tree) {
          //IF ELEMENT IS PART OF ROOT DIRECTORIES
          if (node.parent == "/" && !node.isFile) {
            this.folder = node;

            //PARENT BECOMES THE ROOT CURRENT FOLDER
            this.parent = node.currentFolder;
            //CREATING FOLDER
            await this.createFolder(false);

            //REGISTERING CREATED FOLDER WITH _ID FOR FUTURE FETCHING
            tree[
              tree
                .map((e) => {
                  if (e.fullPath) return e.fullPath;
                })
                .indexOf(node.fullPath)
            ]._id = this.createdFolder._id;
          } else if (node.isFile && !node.parent) {
            //IF ELEMENT IS PART OF ROOT FILES
            if (this.nav.bread[this.nav.bread.length - 1]._id != "root") {
              this.parent = this.nav.bread[this.nav.bread.length - 1];
            } else {
              this.parent = { _id: "root", name: "My Drive" };
            }

            //UPLOAD FILE
            this.setUploadFiles([await this.makeFile(node)]);
            await this.uploadFile();
          } else {
            //IF ELEMENT IS PART OF SUB FILES
            if (node.isFile) {
              //FETCHING PARENT WITH FULLPATH
              if (
                tree[
                  tree
                    .map((e) => {
                      if (e.fullPath) return e.fullPath;
                    })
                    .indexOf(node.parent.fullPath)
                ]
              ) {
                this.parent._id =
                  tree[
                    tree
                      .map((e) => {
                        if (e.fullPath) return e.fullPath;
                      })
                      .indexOf(node.parent.fullPath)
                  ]._id;
                this.parent.name =
                  tree[
                    tree
                      .map((e) => {
                        if (e.fullPath) return e.fullPath;
                      })
                      .indexOf(node.parent.fullPath)
                  ].name;
                if (node.filesystem) {
                  this.setUploadFiles([await this.makeFile(node)]);
                } else {
                  this.filesDropped.push(node);
                }

                //UPLOADING FILES
                await this.uploadFile();
              }
            } else if (node.isDirectory && node.parent) {
              //IF ELEMENT IS PART OF SUB FOLDERS
              if (
                tree[
                  tree
                    .map((e) => {
                      if (e.fullPath) return e.fullPath;
                    })
                    .indexOf(node.parent.fullPath)
                ]
              ) {
                this.parent = {
                  _id: tree[
                    tree
                      .map((e) => {
                        if (e.fullPath) return e.fullPath;
                      })
                      .indexOf(node.parent.fullPath)
                  ]._id,
                };
                this.parent.name =
                  tree[
                    tree
                      .map((e) => {
                        if (e.fullPath) return e.fullPath;
                      })
                      .indexOf(node.parent.fullPath)
                  ].name;
                this.folder = node;

                //CREATING SUB FOLDER
                await this.createFolder(false);
                tree[
                  tree
                    .map((e) => {
                      if (e.fullPath) return e.fullPath;
                    })
                    .indexOf(node.fullPath)
                ]._id = this.createdFolder._id;
              }
            }
          }
        }
      }
      //GO TO ROOT FOLDER
      this.goToFolder(currentPath);

      //EMPTY LIST OF FOLDERS
      this.foldersDropped.forEach((folder) => {
        this.$refs.modals.$refs.folders.removeFolder(folder);
      });

      this.$refs.modals.showUploadFolderModal = false;
      this.endLoader();
    },
    async makeFile(fileEntry) {
      try {
        return await new Promise((resolve, reject) =>
          fileEntry.file(resolve, reject)
        );
      } catch (err) {
        console.log(err);
      }
    },

    async uploadFile() {
      if (this.filesDropped.length > 0) {
        for (let file of this.filesDropped) {
          //COLLECTING FILE SRC
          var bodyFormData = new FormData();
          bodyFormData.append("file", file);

          if (this.parent != "" && this.parent._id != "root") {
            bodyFormData.append("parent", this.parent._id);
          }

          // UPLOADING A FILE
          try {
            const response = await this.$axios.$post("/v1/files", bodyFormData);

            //DISPLAY PERSISTENT NOTIFICATION WITH FEEDBACK MESSAGE
            this.showNotification = true;
            this.notificationText = response.message;
            if (response.statusCode == 200) {
              this.notificationVariant = "success";
            } else {
              this.notificationVariant = "warning";
            }
          } catch (err) {
            console.log(err);
          }

          //NAVIGATE TO THE CURRENT FILE TO UPDATE STREAM
          if (this.parent._id && this.parent._id != "root") {
            this.goToFolder(this.parent);
          } else {
            this.goToFolder({ name: "My Drive", _id: "root" });
          }
        }
      }
      //EMPTYING THE DROPPED FILES
      this.filesDropped.forEach((file) => {
        this.$refs.modals.$refs.files.removeFile(file);
      });

      //HIDE UPLOAD MODAL
      this.$refs.modals.showUploadFileModal = false;
      //RERENDER THE FOLDER / FILE SECTIONS
      this.filesKey += 1;
      this.filesDropped = [];
    },
    async downloadFile(file){
      if(file){
        try{
          let response = await this.$axios.$get('/v1/files/'+file._id+'/download');
        
          const url = window.URL
             .createObjectURL(new Blob([response]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', file.name);
                    document.body.appendChild(link);
                    link.click();
        }catch(err){
          console.log(err)
        }
      }
    },
    async createFolder(goTo) {
      //COLLECTING FOLDER INFO
      if (this.folder.name != "") {
        // console.log("From Create Folder "+this.parent._id)
        let data = { name: this.folder.name };
        if (this.parent != "" && this.parent._id != "root") {
          data.parent = "" + this.parent._id;
        } else {
          this.parent = { name: "My Drive", _id: "root" };
        }
        //CREATING FOLDER
        try {
          const response = await this.$axios.$post("/v1/folders", data);
          this.createdFolder = response.data;
          if (goTo == true) {
            this.goToFolder(this.createdFolder);
            this.collapseNavigation = true;
          }
          this.nav.bread = [{ name: "My Drive", _id: "root" }];
          await this.getFullPath(this.parent._id);
          this.$refs.modals.showCreateFolderModal = false;
          if (!response.data.parent) {
            let item = this.navItems1[0];
            item.sub.push({
              label: response.data.name,
              icon: "folder-solid",
              _id: response.data._id,
            });
            this.navItems1[0] = item;
          }
        } catch (err) {
          console.log(err);
        }
      }
    },
    startLoader() {
      this.showLoader = true;
    },
    endLoader() {
      this.showLoader = false;
    },
    sortBy(criteria, direction = "asc") {
      if (direction == "asc") {
        switch (criteria) {
          case "name":
            this.folders.data.sort((a, b) =>
              a[criteria].localeCompare(b[criteria])
            );
            this.files.data.sort((a, b) =>
              a[criteria].localeCompare(b[criteria])
            );
          case "extension":
            this.files.data.sort((a, b) =>
              a[criteria].localeCompare(b[criteria])
            );
            break;
          case "size":
            this.files.data.sort((a, b) => a[criteria] - b[criteria]);
            break;
          case "updatedAt":
          case "createdAt":
            this.folders.data.sort(
              (a, b) => new Date(b[criteria]) - new Date(a[criteria])
            );
            this.files.data.sort(
              (a, b) => new Date(b[criteria]) - new Date(a[criteria])
            );
            break;
          case "reset":
            this.sortBy("name");
            break;
          default:
            break;
        }
        if (criteria != "reset") {
          this.sortMenuActions.items[
            this.sortMenuActions.items
              .map((e) => {
                return e.params[0];
              })
              .indexOf(criteria)
          ].icon_right = "long-arrow-down";
          this.sortMenuActions.items[
            this.sortMenuActions.items
              .map((e) => {
                return e.params[0];
              })
              .indexOf(criteria)
          ].params = [criteria, "desc"];
        }
      } else {
        //If Direction is desc then we order by asc and reverse
        this.sortBy(criteria, "asc");
        if (criteria == "name" || criteria == "updatedAt") {
          this.folders.data.reverse();
        }
        this.files.data.reverse();

        if (criteria != "reset") {
          this.sortMenuActions.items[
            this.sortMenuActions.items
              .map((e) => {
                return e.params[0];
              })
              .indexOf(criteria)
          ].icon_right = "long-arrow-up";
          this.sortMenuActions.items[
            this.sortMenuActions.items
              .map((e) => {
                return e.params[0];
              })
              .indexOf(criteria)
          ].params = [criteria, "asc"];
        }
      }
      this.sortKey += 1;
    },
    async goToFolder(folder) {
      this.startLoader();
      this.showSearchCount = false
      //IF CURRENT FOLDER IS ROOT REFRESH ASYNC DATA
      if (folder._id == "root") {
        this.page.title = "My Drive";
        this.nav.bread = [{ name: "My Drive", _id: "root" }];
      }
      //ELSE IF CURRENT FOLDER IS A CHILD
      try {
        this.showSidePanel = false
        //STORE CHILDREN FOLDERS
        this.folders = await this.$axios.$get(
          "/v1/folders/" + folder._id + "/folder-items",
          {
            id: folder._id,
            limit: 20,
            offset: 1,
          }
        );

        //IF FOLDER IS FAVORITE
        const folderFavorites = await this.$axios.$get("/v1/favorites/folders");
        for (let favFolder of folderFavorites.data) {
          if (folder._id == favFolder.objectRef._id) {
            this.isFavorite = true;
            break;
          } else {
            this.isFavorite = false;
          }
        }
        //STORE CHILDREN FILES
        this.files = await this.$axios.$get(
          "/v1/folders/" + folder._id + "/file-items",
          {
            id: folder._id,
            limit: 20,
            offset: 1,
          }
        );
        this.currentFolder = folder;
      } catch (err) {
        console.log(err);
      }

      this.page.title = folder.name;
      //PARENT BECOMES THE FOLDER DESIRED
      this.parent = folder;
      let parent = {};
      if (folder.parent && folder.parent != "root") {
        //GETTING PARENT INFO
        try {
          parent = await this.$axios.$get("/v1/folders/" + folder.parent);
        } catch (err) {
          console.log(err);
        }

        //PUTTING THE BACK LINK FOR PREVIOUS NAVIGATION AS THE PARENT
        this.nav.backLink = parent.data;
      } else {
        this.nav.backLink = { name: "My Drive", _id: "root" };
      }

      //GETTING FILE PREVIEWS
      for (let [key, file] of Object.entries(this.files.data)) {
        file.key = parseInt(key) + 1;
        try {
          const fileFavorites = await this.$axios.$get("/v1/favorites/files");
          for (let favFile of fileFavorites.data) {
            file.active = false
            if (file._id == favFile.objectRef._id) {
              file.isFav = true;
              break;
            } else {
              file.isFav = false;
            }
          }
        } catch (err) {
          console.log(err);
        }

        //IF FILE IS OF IMAGE TYPE
        if (this.images.includes(file.extension)) {
          //FETCH PREVIEW URL (200,600)
          let expiration = new Date(
            new Date().getTime() +
              process.env.URLIFY_PREVIEW_DURATION * 24 * 60 * 60 * 1000
          );
          try {
            const response = await this.$axios.$post(
              "/v1/files/" + file._id + "/urlify",
              {
                thumbnail: true,
                expiredAt: expiration.toISOString(),
              }
            );

            file.preview = this.apiUrl + response.data[200];
            file.preview600 = this.apiUrl + response.data[600];
          } catch (err) {
            console.log(err);
          }

          //ELSE SET PREVIEW AS FILE ICON
        } else {
          file.preview = false;
          file.preview600 = false;
        }
      }

      //UPDATING FILE / FOLDER STREAM
      this.filesKey += 1;
      this.moreMenuKey += 1;
      this.endLoader();
      this.nav.bread = [{ name: "My Drive", _id: "root" }];
      await this.getFullPath(this.parent._id);

      //UNSELECTING PAGE (REREDERING THE PAGE CAUSES SELECTION)
      if (window.getSelection) {
        window.getSelection().removeAllRanges();
      } else if (document.selection) {
        document.selection.empty();
      }
    },
    async logout() {
      try {
        this.$store.commit("setToken", "");
        this.$axios.setToken("", "Bearer");
        location.href = "";
        this.$router.replace(
          process.env.AUTH_REDIRECT_URL + process.env.VUE_APP_URL
        );
      } catch (err) {
        console.log(err);
      }
    },
  },
  async asyncData({ $axios }) {
    //FETCHING ENV VAR
    const apiUrl = process.env.VUE_APP_API_ENDPOINT;
    const images = ["png", "jpg", "jpeg", "gif"];
    const navItems1 = [];
    let isFavorite = false;
    let storageValue = 0;

    
    const getUsage = await $axios.$get("/v1/users/storage");
    storageValue = getUsage.data.size
    
    //FETCHING FOLDERS FOR ROOT
    const folders = await $axios.$get("/v1/folders/root/folder-items", {
      limit: 20,
      offset: 1,
    });
    const folderFavorites = await $axios.$get("/v1/favorites/files");

    for (let favFolder of folderFavorites.data) {
      if ("root" == favFolder.objectRef._id) {
        isFavorite = true;
        break;
      } else {
        isFavorite = false;
      }
    }
    //FETCHING FILES FOR ROOT
    const files = await $axios.$get("/v1/folders/root/file-items", {
      limit: 20,
      offset: 1,
    });

    for (let [key, file] of Object.entries(files.data)) {
      try {
        const isFavorite = await $axios.$get("/v1/favorites/files");
        for (let favFile of isFavorite.data) {
          if (file._id == favFile.objectRef._id) {
            file.isFav = true;
            break;
          } else {
            file.isFav = false;
          }
        }
        //IF FILE IS OF IMAGE TYPE
        if (images.includes(file.extension)) {
          //FETCH PREVIEW URL (200,600)
          let expiration = new Date(
            new Date().getTime() +
              process.env.URLIFY_PREVIEW_DURATION * 24 * 60 * 60 * 1000
          );
          const response = await $axios.$post(
            process.env.VUE_APP_API_ENDPOINT +
              "/v1/files/" +
              file._id +
              "/urlify",
            {
              thumbnail: true,
              expiredAt: expiration.toISOString(),
            }
          );

          file.preview = process.env.VUE_APP_API_ENDPOINT + response.data[200];
          file.preview600 =
            process.env.VUE_APP_API_ENDPOINT + response.data[600];

          //ELSE SET PREVIEW AS FILE ICON
        } else {
          file.preview = false;
          file.preview600 = false;
        }
      } catch (err) {
        console.log(err);
      }

      //ASSIGNING KEY TO REFRESH DOM
      file.key = parseInt(key) + 1;
    }
    let rootFolders = [];
    for (let folder of folders.data) {
      rootFolders.push({
        label: folder.name,
        name: folder.name,
        icon: "folder-solid",
        _id: folder._id,
      });
    }
    navItems1.splice(0, 0, {
      label: "My Files",
      icon: "home",
      selected: true,
      sub: rootFolders,
    });
    return { folders, files, images, apiUrl, navItems1, isFavorite, storageValue };
  },
};
</script>
<style lang="scss">
</style>