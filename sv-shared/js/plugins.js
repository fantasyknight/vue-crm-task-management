'use strict';
import Vue from 'vue'
import vco from 'v-click-outside'
import Draggable from 'vuedraggable'
import VueSignaturePad from 'vue-signature-pad';
// import movable from "v-movable";
// import VueHtml2Canvas from 'vue-html2canvas';
import nestedDraggable from "vuedraggable";
import VueColumnsResizable from 'vue-columns-resizable';
// import VueDocPreview from 'vue-doc-preview'

Vue.use(VueColumnsResizable);

Vue.use(vco);
// Vue.use(movable);
Vue.use(VueSignaturePad);
// Vue.use(VueHtml2Canvas);

Vue.component('draggable', Draggable);
Vue.component('nested-draggable', nestedDraggable);
// Vue.component('vue-doc-preview', VueDocPreview);

/**
   * @function Directives/Toggle
   * @desc Toggle directive is used to open/close the element with id $1.
   * </br> usage: <pre>\<div v-toggle.drpcollapse class="dropdown__arrow">＋\</div></pre> 
   * @param {String} $1 the id following the directive is the section to toggle.
   @return {Void}
  */
Vue.directive('toggle', function (el, binding, vnode) {
    el.style.cursor = 'pointer';
    el.addEventListener('click', function () {
        if (binding)
            var content = document.getElementById(binding.value);
        if (content)
            content.classList.toggle("collapse");
    });
});

/**
   * @function Directives/Hover
   * @desc Hover directive is used to display the element with id $1 on hover.
   * </br> usage: <pre>\<div v-hover.drpdisplay class="forward arrow"></div></pre> 
   * @param {String} $1 the id following the directive is the section to display.
   @return {Void}
  */
Vue.directive('hover', function (el, binding, vnode) {
    el.style.cursor = 'pointer';
    if (binding) {
        el.addEventListener('mouseover', function () {
            var content = document.getElementById(binding.value);
            if (content)
                content.classList.toggle("display");
        });
    }
});

/**
   * @function Directives/GridBy
   * @desc Grid by directive is used to split any element in a grid of n.
   *  </br>  usage:  <pre>\<Block light v-gridby.6> \</Block>  </pre> 
   * @param {Number} n the number following the directive is the number of cells.
   @return {Void}
  */
Vue.directive('gridby', function (el, binding, vnode) {
    el.style.display = 'grid';
    if (Object.keys(binding.modifiers).length) {
        el.style.gridTemplateColumns = 'minmax(0, 1fr) '.repeat(Object.keys(binding.modifiers)[0]);
    } else if (binding.value) {
        el.style.gridTemplateColumns = 'minmax(0, 1fr) '.repeat(binding.value);
    }
});

/**
    * @function Directives/RowBy
    * @desc Row by directive splits any row into the possible grids.
    *  </br>  usage:  <pre>\<div v-rowby="33.66"> \</div>  </pre> 
    * @param {Number} n the numbers to split by.
    @return {Void}
   */
Vue.directive('rowby', function (el, binding, vnode) {
    let vals = binding.value.toString().split('.');
    let special_grid = "";
    vals.forEach(function (element) {
        switch (element) {
            case "25":
                special_grid += "minmax(0, 1fr) ";
                break;
            case "33":
                special_grid += "minmax(0, 1fr) ";
                break;
            case "50":
                special_grid += "minmax(0, 2fr) ";
                break;
            case "66":
                special_grid += "minmax(0, 2.1fr) ";
                break;
            case "75":
                special_grid += "minmax(0, 3fr) ";
                break;
            default:
                break;
        }
    })
    el.style.display = 'grid';
    el.style.gridTemplateColumns = special_grid;

});

/**
   * @function Directives/SpanOver
   * @desc Span over directive is used for task in Calendar / Timeline.
   * @param {Number} n the number following the directive is the number of cells to span.
   @return {Void}
  */
Vue.directive('spanover', function (el, binding, vnode) {
    el.style.position = 'absolute';
    el.style.minWidth = 'unset'
    el.classList.add("item--spanover");
    if (Object.keys(binding.modifiers).length) {
        el.style.width = Object.keys(binding.modifiers)[0] * 2.5 + 'rem';
    } else if (binding.value) {
        el.style.width = (binding.value * 2.5) + 'rem';
    }

});

Vue.filter('kb', val => {
    return Math.floor(val / 1024);
});

export default (context, inject) => {
    const getVariant = (ext) => {
        switch(ext){
            case 'pdf':
              return 'danger'
            break;
            case 'env':
            case 'docx':
              return 'primary'
            break;
            case 'xls':
            case 'xlsx':
              return 'success'
            break;
            case 'mov':
            case 'mp3':
            case 'wav':
              return 'purple'
            break;
            case 'png':
            case 'jpg':
            case 'jpeg':
              return 'dark'
            break;
            default:
              return 'gray5'
            break;
        }
    }
    
    const formatBytes = (bytes, decimals = 2) => {
        if (bytes === 0) return '0 Bytes';
    
        const k = 1024;
        const dm = 2;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    
        const i = Math.floor(Math.log(bytes) / Math.log(k));
    
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
    

    inject('getVariant', getVariant) 
    inject('formatBytes', formatBytes)

    context.$getVariant = getVariant
    context.$formatBytes = formatBytes
}
