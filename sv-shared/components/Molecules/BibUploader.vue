<template>
  <div class="uploader">
    <div class="uploader__title">
      <template v-if="accept == 'image'"> Upload a image </template>
      <template v-if="accept == 'doc'"> Upload a document </template>
    </div>

    <div class="uploader__pad">
      <input type="file" multiple @change="changeFile($event)" />

      <div class="uploader__pad__description">
        <template v-if="!files.length">
          <template v-if="accept == 'image'">
            Drop your image here, or click to upload <br />
            (JPG, PNG, TIFF file formats accepted)
          </template>
          <template v-if="accept == 'doc'">
            Drop your document here, or click to upload <br />
            (PDF, DOC, RTF file formats accepted)
          </template>
        </template>
        <template v-if="files.length">
          <span v-for="(file, key) in files" :key="key">
            {{ file.name }}&nbsp;
          </span>
        </template>
      </div>
    </div>

    <div class="uploader__external">
      <div class="uploader__external__title">
        <template v-if="accept == 'image'"> Or upload a image from: </template>
        <template v-if="accept == 'doc'"> Or upload a document from: </template>
      </div>
      <div class="uploader__external__icons">
        <bib-icon icon="dropbox"></bib-icon>
        <bib-icon icon="gdrive"></bib-icon>
        <bib-icon icon="box"></bib-icon>
        <bib-icon icon="evernote"></bib-icon>
        <bib-icon icon="onedrive"></bib-icon>
      </div>
    </div>

    <div class="uploader__error" v-if="error">
      {{ error }}
    </div>
  </div>
</template>

<script>
/**
 * @module Molecules/BibUploader
 * @author Sharp Eye
 * @desc Uploader component uploading image and doc.
 * @vue-prop {String} accept=null - accepting file variety (image, doc).
 * @vue-data {Array<Object>} files - file objecs array.
 * @vue-data {String} error - error message.
 */
import BibAvatar from "../Atoms/BibAvatar.vue";
export default {
  components: { BibAvatar },
  name: "BibUploader",
  props: {
    accept: {
      type: String,
      default() {
        return null;
      },
    },
  },
  data() {
    return {
      files: [],
      error: "",
    };
  },
  methods: {
    changeFile(e) {
      this.error = "";

      var droppedFiles = e.target.files;

      if (!droppedFiles) return;

      this.files = [];

      [...droppedFiles].forEach((f) => {
        if (this.accept == "image") {
          if (f.type.includes("image")) {
            this.files.push(f);
          } else {
            this.error = "File format " + f.type + " is not supported.";
          }
        }

        if (this.accept == "doc") {
          if (f.type == "application/pdf" || f.type == "application/msword") {
            this.files.push(f);
          } else {
            this.error = "File format " + f.type + " is not supported.";
          }
        }

        console.log("files:", this.files);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.uploader {
  letter-spacing: 0;

  &__title {
    padding: 0.5rem 0rem;
    color: $gray1;
    line-height: $base-line-height;
  }

  &__pad {
    border-radius: 0.25rem;
    border: 1px dashed $success;
    background-color: $white;
    position: relative;

    input {
      width: 100%;
      height: 100%;
      opacity: 0;
      position: absolute;
      cursor: pointer;
    }

    &__description {
      padding: 3.5rem 8rem;
      color: $gray1;
      text-align: center;
    }
  }

  &__external {
    text-align: center;

    &__title {
      margin-top: 1rem;
      text-align: center;
    }

    &__icons {
      margin-top: 1rem;
      gap: 0.5rem;
      display: flex;
      justify-content: center;
    }
  }

  &__error {
    font-size: $font-size-sm;
    color: $danger;
  }
}
</style>
