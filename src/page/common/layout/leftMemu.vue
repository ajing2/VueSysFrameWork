<template>
    <!-- <el-row class="tac"> -->
      <!-- <el-col :span="6"> -->
    <div class="side-nav">
     <el-menu router menu-trigger="click" theme="dark" @open="openMenu" @close="closeMenu" unique-opened>

  
        <el-submenu v-for="(item, n) in menuList" :key="'tab'+n" :index="String(n)">
          <template slot="title">
            <!-- <i class="el-icon-location"></i> -->
            <span>{{item.title}}</span>
          </template>
          <!-- <el-menu-item-group> -->

            <el-menu-item v-for="(subItem, m) in item.child" :key="'tab1'+m" :index="String(subItem.index)">{{subItem.title}}</el-menu-item>

        </el-submenu>

        <!-- <el-menu-item  else-if :index="String(index)">{{title}}</el-menu-item> -->



        


      </el-menu>
    </div>

      <!-- </el-col> -->
    <!-- </el-row> -->
</template>

<style>
    


</style>

<script>
  import { mapState } from 'vuex'
  export default {
    // data() {
    //   return {
    //     menuList: [{
    //       title: '资产管理',
    //       index: 'asset',
    //       child: [
    //       {
    //         title: '资产信息',
    //         index: 'asset_1',
    //         child: []
    //       },
    //       {
    //         title: '资源池信息',
    //         index: 'asset_2',
    //         child: []
    //       },
    //       {
    //         title: '操作日志信息',
    //         index: 'asset_3',
    //         child: []
    //       }]
    //     },
    //     {
    //       title: '机房管理',
    //       index: 'engine',
    //       child: [
    //       {
    //         title: '机房信息',
    //         index: 'engine_1',
    //         child: []
    //       }]
    //     },
    //     {
    //       title: '项目管理',
    //       index: 'project',
    //       child: [
    //       {
    //         title: '项目信息',
    //         index: 'project_1',
    //         child: []
    //       }]
    //     },
    //     {
    //       title: '字典管理',
    //       index: 'dictionary',
    //       child: [
    //         {
    //           title: '字典信息',
    //           index: 'dictionary_1',
    //           child: []
    //         }
    //       ]
    //     }]
    //   }
    // },
    computed: {
        // 使用对象展开运算符将 getters 混入 computed 对象中
      ...mapState({
        menuList: state => state.routes.menuList
      })
    },
    methods: {
      openMenu(key, keyPath) {
        console.log(key, keyPath);
      },
      closeMenu(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="scss">

    .side-nav {
        .el-menu{
            z-index: 10;
        }
        .full-screen-navBg{
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            z-index: 5;
        }
        .el-submenu .el-menu-item{
            min-width: 0;
        }
/*        &.left{
            position: absolute;
            top: $headerHeight;
            bottom: 0;
            left: 0px;
            width: $leftNavWidth;
            background: $sidenavBgColor;
            overflow: auto;
        }*/
        &.top{
            float: left;
            margin-left: 20px;
            & > .el-menu{
                background-color: transparent;
                & > div > a >.el-menu-item.is-active{
                    border-bottom-color: #20a0ff;
                }
                & > div > .el-submenu > .el-menu{
                    background-color: #324157;
                    // 三级菜单及以后
                    .el-menu{
                        top: -5px;
                        left: 100%;
                        border: none;
                        // background-color: #324157;
                        box-shadow: none;
                        z-index: auto;
                        .el-menu-item:hover{
                            background-color:#223142;
                            color: #fff;
                        }
                    }
                    .el-menu-item{
                        height: 60px;
                        line-height: 60px;
                        background: none;
                        color: #bfcbd9;
                        padding: 0 20px;
                        &:hover{
                            background-color: #1f2d3d;
                        }
                    }
                    .el-submenu__title:hover{
                        background-color:#1f2d3d;
                    }
                    .el-submenu{
                        width: 100%;
                        &.is-active>.el-submenu__title{
                            border-bottom-color: transparent;
                        }
                        &.is-opened>.el-submenu__title{
                            background-color: #1f2d3d;
                            .el-submenu__icon-arrow{
                                transform: rotateZ(-90deg);
                            }
                        }
                        &.is-opened>.el-menu{
                            background-color: #1f2d3d;
                        }
                    }
                }
                & > div > .el-submenu.is-active > .el-menu .el-submenu__title{
                    border-bottom-color: transparent;
                }
            }
        }
        
    }
</style>