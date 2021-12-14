<template>
  <div>
    <!-- CREATE FOLDER  -->
    <bib-modal-wrapper
      @close="showCreateFolderModal = false"
      v-show="showCreateFolderModal"
      title="Create Folder"
      id="create-folder"
      @keypress.native="bindEnter($event, 'create-folder-btn')"
    >
      <template v-slot:content>
        <bib-input
          class="placeholder--dark"
          :value="contextFolder.name"
          @input="
            ($event) => {
            contextFolder.name = $event;
            }
          "
          placeholder="Enter folder name..."
        ></bib-input>
      </template>
      <template v-slot:footer>
        <div class="m-auto pt-1 d-flex justify-between">
          <bib-button
            @click.native="
              () => {
                showCreateFolderModal = false;
              }
            "
            variant="light"
            size="lg"
            pill
            label="Cancel"
          ></bib-button>
          <bib-button
            @click.native="triggerModalAction('create-folder',contextFolder)"
            variant="success"
            size="lg"
            id="create-folder-btn"
            pill
            label="Create"
          ></bib-button>
        </div>
      </template>
    </bib-modal-wrapper>

    <!-- UPLOAD FOLDER -->
    <bib-modal-wrapper
      @close="showUploadFolderModal = false"
      v-show="showUploadFolderModal"
      title="Upload Folder"
      @keypress.native="bindEnter($event, 'upload-folder-btn')"
    >
      <template v-slot:content>
        <bib-input type="text" class="d-none"></bib-input>
        <bib-input
          type="folder"
          ref="folders"
          @folders-dropped="triggerModalAction('folders-dropped',$event)"
          @folders-removed="triggerModalAction('folders-removed',$event)"
          variant="accepted"
          iconLeft="upload"
          placeholder="Drop folder here or click to upload"
        ></bib-input>
      </template>
      <template v-slot:footer>
        <div class="m-auto d-flex justify-between pt-105">
          <bib-button
            @click.native="
              () => {
                showUploadFolderModal = false;
              }
            "
            variant="light"
            pill
            size="lg"
            label="Cancel"
          ></bib-button>
          <bib-button
            @click.native="triggerModalAction('upload-folder')"
            variant="success"
            pill
            id="upload-folder-btn"
            size="lg"
            label="Upload"
          ></bib-button>
        </div>
      </template>
    </bib-modal-wrapper>

    <!-- RENAME FOLDER -->
    <bib-modal-wrapper
      @close="showRenameFolderModal = false"
      v-show="showRenameFolderModal"
      title="Rename Folder"
      @keypress.native="bindEnter($event, 'rename-folder-btn')"
    >
      <template v-slot:content>
        <div class="d-flex flex-d-column">
          <div class="">
            <bib-input
              type="text"
              :value="contextFolder.name"
              @input="
                (val) => {
                  contextFolder.name = val;
                }
              "
            ></bib-input>
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <div class="d-flex justify-between pt-1">
          <bib-button
            @click.native="
              () => {
                showRenameFolderModal = false;
              }
            "
            variant="light"
            pill
            size="lg"
            label="Cancel"
          ></bib-button>
          <bib-button
            @click.native="
              () => {
                triggerModalAction('update-folder',contextFolder);
                showRenameFolderModal = false;
              }
            "
            variant="success"
            pill
            id="rename-folder-btn"
            size="lg"
            label="Rename"
          ></bib-button>
        </div>
      </template>
    </bib-modal-wrapper>

    <!-- DELETE FOLDER -->
    <bib-modal-wrapper
      @close="showDeleteFolderModal = false"
      v-show="showDeleteFolderModal"
      title="Delete Folder"
    >
      <template v-slot:content>
        <div class="pb-2">
          <p class="text-center">Are you sure you want to delete</p>
          <h4 class="text-center bold text-wrap of-hidden text-of-elipsis">
            {{ contextFolder.name }} ?
          </h4>
        </div>
      </template>
      <template v-slot:footer>
        <div class="m-auto d-flex align-center justify-between">
          <bib-link
            @click.native="triggerModalAction('delete-folder', contextFolder)"
            class="text-danger text-underline"
            label="Yes, delete this folder."
          ></bib-link>
          <bib-button
            @click.native="
              () => {
                showDeleteFolderModal = false;
              }
            "
            size="lg"
            pill
            variant="light"
            label="Cancel"
          ></bib-button>
        </div>
      </template>
    </bib-modal-wrapper>

    <!-- UPLOAD FILE -->
    <bib-modal-wrapper
      @close="showUploadFileModal = false"
      v-show="showUploadFileModal"
      title="Upload File"
      @keypress.native="bindEnter($event, 'upload-file-btn')"
    >
      <template v-slot:content>
        <bib-input type="text" class="d-none"></bib-input>
        <bib-input
          type="file"
          ref="files"
          @files-dropped="triggerModalAction('files-dropped',$event,$event)"
          variant="accepted"
          iconLeft="upload"
          placeholder="Drop file here or click to upload"
        ></bib-input>
      </template>
      <template v-slot:footer>
        <div class="m-auto d-flex justify-between pt-105">
          <bib-button
            @click.native="
              () => {
                showUploadFileModal = false;
              }
            "
            variant="light"
            pill
            size="lg"
            label="Cancel"
          ></bib-button>
          <bib-button
            @click.native="triggerModalAction('upload-file',$event)"
            variant="success"
            pill
            id="upload-file-btn"
            size="lg"
            label="Upload"
          ></bib-button>
        </div>
      </template>
    </bib-modal-wrapper>

    <!-- RENAME FILE -->
    <bib-modal-wrapper
      @close="showRenameFileModal = false"
      v-show="showRenameFileModal"
      title="Rename File"
      @keypress.native="bindEnter($event, 'rename-file-btn')"
    >
      <template v-slot:content>
        <div class="d-flex flex-d-column">
          <div class="">
            <bib-input
              type="text"
              :value="contextFile.name"
              @input="
                (val) => {
                  contextFile.name = val;
                }
              "
            ></bib-input>
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <div class="d-flex justify-between pt-1">
          <bib-button
            @click.native="
              () => {
                showRenameFileModal = false;
              }
            "
            variant="light"
            pill
            size="lg"
            label="Cancel"
          ></bib-button>
          <bib-button
            @click.native="
              () => {
                triggerModalAction('update-file',contextFile);
                showRenameFileModal = false;
              }
            "
            variant="success"
            pill
            id="rename-file-btn"
            size="lg"
            label="Rename"
          ></bib-button>
        </div>
      </template>
    </bib-modal-wrapper>

    <!-- DELETE FILE -->
    <bib-modal-wrapper
      @close="showDeleteFileModal = false"
      v-show="showDeleteFileModal"
      title="Delete File"
    >
      <template v-slot:content>
        <div class="pb-2">
          <p class="text-center">Are you sure you want to delete</p>
          <h4 class="text-center bold text-wrap of-hidden text-of-elipsis">
            {{ contextFile.name }} ?
          </h4>
        </div>
      </template>
      <template v-slot:footer>
        <div class="m-auto d-flex align-center justify-between">
          <bib-link
            @click.native="triggerModalAction('delete-file')"
            class="text-danger text-underline"
            label="Yes, delete this file."
          ></bib-link>
          <bib-button
            @click.native="
              () => {
                showDeleteFileModal = false;
              }
            "
            size="lg"
            pill
            variant="light"
            label="Cancel"
          ></bib-button>
        </div>
      </template>
    </bib-modal-wrapper>
  </div>
</template>
<script>
export default {
  name: "BibDriveModals",
  data() {
    return {
      showCreateFolderModal: false,
      showDeleteFolderModal: false,
      showRenameFileModal: false,
      showRenameFolderModal: false,
      showDeleteFileModal: false,
      showUploadFolderModal: false,
      showUploadFileModal: false,
      contextFile: {
        name: "",
      },
      contextFolder: {
        name: "",
      },
    };
  },
  methods: {
    bindEnter(event, button) {
      if (event.key == "Enter") {
        document.getElementById(button).click();
        return false;
      }
    },
    triggerModalAction(modal, payload, e = null) {
      this.$emit(modal, payload, e);
    },
  },
};
</script>