<template>
  <scroll class="listview" 
          :data="data" 
          ref="listview"
          >
      <ul>
      <li v-for="group in data" class="list-group" ref="listGroup" :key="group.id">
        <h2 class="list-group-title">{{group.title}}</h2>
        <uL>
          <li v-for="(item,index) in group.items"
          :data-index="index" class="list-group-item" :key="item.id"
         >
            <img class="avatar" v-lazy="item.avatar">
            <span class="name">{{item.name}}</span>
          </li>
        </uL>
      </li>
    </ul>
     <div class="list-shortcut" >
      <ul>
        <li v-for="(item, index) in shortcutList" class="item"
          :data-index="index" :key="index" >
          {{item}}
        </li>
      </ul>
    </div>
    <div class="loading-container" v-if="!data.length">
        <loading></loading>
    </div>
  </scroll>  

</template>

<script>
  import Scroll from 'base/scroll'
  import loading from 'base/loading'

  export default {
    props: {
      data: {
        type: Array,
        default: []
      },
    },
    computed: {
      shortcutList() {
        return this.data.map((group) => {
          return group.title.substr(0, 1)
        })
      }
    },
    methods: {
    },
    components: {
      Scroll,
      loading
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .listview
    position: relative
    width: 100%
    height: 100%
    overflow: hidden
    background: $color-background
    .list-group
      padding-bottom: 30px
      .list-group-title
        height: 30px
        line-height: 30px
        padding-left: 20px
        font-size: $font-size-small
        color: $color-text-l
        background: $color-highlight-background
      .list-group-item
        display: flex
        align-items: center
        padding: 20px 0 0 30px
        .avatar
          width: 50px
          height: 50px
          border-radius: 50%
        .name
          margin-left: 20px
          color: $color-text-l
          font-size: $font-size-medium
    .list-shortcut
      position: absolute
      z-index: 30
      right: 0
      top: 50%
      transform: translateY(-50%)
      width: 20px
      padding: 20px 0
      border-radius: 10px
      text-align: center
      background: $color-background-d
      font-family: Helvetica
      .item
        padding: 3px
        line-height: 1
        color: $color-text-l
        font-size: $font-size-small
        &.current
          color: $color-theme
    .list-fixed
      position: absolute
      top: 0
      left: 0
      width: 100%
      .fixed-title
        height: 30px
        line-height: 30px
        padding-left: 20px
        font-size: $font-size-small
        color: $color-text-l
        background: $color-highlight-background
    .loading-container
      position: absolute
      width: 100%
      top: 50%
      transform: translateY(-50%)
</style>
