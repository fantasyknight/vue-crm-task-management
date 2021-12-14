<template>
    <div class="sidebar">
        <div v-for="(item, index) in menu" :key="index">
            <div class="sidebar--item">
                <a v-if="item.routerLink" :href="item.routerLink">{{item.label}}</a>
                <a v-if="!item.routerLink" href="#" v-scroll-to="`#${item.id}`">{{item.label}}</a>
            </div>
            <div v-if="item.subMenu">
                <div v-for="(subItem, sub_index) in item.subMenu" :key="sub_index" class="ml-1">
                    <div class="sidebar--item">
                        <a v-if="subItem.routerLink" :href="subItem.routerLink">{{subItem.label}}</a>
                        <a v-if="!subItem.routerLink" href="#" v-scroll-to="`#${subItem.id}`">{{subItem.label}}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        menu: Array
    }
}
</script>

<style lang="scss" scoped>
.sidebar {
  position: sticky;
  top: 0;
  z-index: 1;
  height: calc(100vh);
  background: $dark;
  flex: 0 0 10%;
  padding: 1rem;
  &--item a {
    color: $white;
    white-space: nowrap;
    text-overflow: hidden;
    cursor: pointer;
    font-size: 1rem;
    text-decoration: none;
    &:hover {
        color: $success;
    }
  }
}
</style>