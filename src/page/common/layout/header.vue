<template>
    <div>
       	<el-row>
    		  <el-col :span="24">
            <el-col :span="22">
              <div class="grid-content bg-purple">
                <router-link to="/">
                  <p class="header-sys-title">{{sysName}}</p>
                </router-link>
                <i id="switch-left-menu-btn" class="el-icon-menu" @click="switchLeftMume()"></i>
              </div>
            </el-col>
            <el-col :span="2">
              <div class="login-container grid-content bg-purple">
                <template v-if="userName != ''">
                  <span style="margin-right: 10px;">{{userName}}</span>
                  <span style="cursor: pointer;" @click="onLoginoutClick()">退出</span>
                </template>
              </div>
            </el-col>
          </el-col>
    		</el-row>
    </div>
</template>

<style>
  
  #switch-left-menu-btn{
    float:left;
    margin-top: 4px;
    margin-left: 10px;
  }
  .header-sys-title{
    margin-left: 20px;
    color:#fff;
    float:left;
    text-decoration:none !important;
  }


  .el-row {
    /*margin-bottom: 20px;*/
    color:#fff;
    &:last-child {
      margin-bottom: 0;
    }
  }

  
  .el-col {
    
  }
  .grid-content {
    min-height: 36px;
    background-color: #3c8dbc; 
    padding-top: 7px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>

<script>
  import { mapState, mapActions } from 'vuex'
  export default{
      data() {
        return {
          // systitle : mapState.sys.sysName
        }
      },
      computed: mapState({
        sysName: state => state.sys.sysName,
        userName: state => state.user.username,
      }),
      methods: {
          // 使用对象展开运算符将 getters 混入 computed 对象中
          ...mapActions({
            sysLogout: 'user/logout'
          }),
          onLoginoutClick(){
            this.sysLogout().then(() => {
                let target = encodeURIComponent(location.href);
                location.href = 'http://test.ssa.jd.com/sso/logout?ReturnUrl=' + target;
            })
          },
          switchLeftMume(){
              
          }
      }
  }
</script>>
