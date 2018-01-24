<template>
   <el-row> 
    <el-col :span="24">
    	<el-button class="add-btn" type="primary" @click="dialogVisible = true" size="small">
        	新增 
    	</el-button>  
     <el-table :data="rows" height="450" border="" style="width: 100%"> 
      
      <el-table-column v-for="(item, n) in showConfigElment" :key="'tab'+n" :prop="item.prop" :label="item.label" :width="item.width"> 
      </el-table-column> 
      
      <el-table-column width="100" fixed="right" label="操作"> 
       <template slot-scope="scope"> 
        <el-button @click="dialogVisible = true" type="text" size="small">
          修改 
        </el-button> 
       </template> 
      </el-table-column> 
     </el-table> 
    </el-col> 
    <el-col :span="24"> 
     <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="page" :page-sizes="[20,30,50,80]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total"> 
     </el-pagination> 
    </el-col> 
    <el-col> 
     <el-dialog title="机房信息新增" :visible.sync="dialogVisible" width="30%" :before-close="handleClose"> 
      <el-form ref="form" label-width="80px"> 
       <el-row> 
        <el-col :span="12"> 
          <template v-for="(item, n) in showConfigElment" v-if="item.formtype">
              <el-form-item v-if="item.formtype=='input'" :label="item.label">
                  <el-input v-model="item.formdata">
                  </el-input>
              </el-form-item>
              <el-form-item v-else="item.type == 'select'" :label="item.label">
                  <el-select v-model="item.formdata" :placeholder="item.label">
                    <el-option v-for="(selItem, index) in item.selectItem" :key="'selectItemTab-' + index" :label="selItem.name" :value="selItem.id">
                    </el-option>
                  </el-select>
              </el-form-item>
          </template>
        </el-col> 
       </el-row> 
      </el-form> 

      <el-button type="primary" @click="onSubmit">
         保存
        </el-button> 
        <el-button @click="dialogVisible = false">
         关闭
        </el-button> 
     </el-dialog> 
    </el-col> 
   </el-row> 
  </template>

<script>
  export default {
  	methods: {
        onSubmit(e){
          console.info(e);
        },
    		handleClose(){
    			this.dialogVisible = false;
    		},
  	  	handleSizeChange(val) {
  	    	console.log(`每页 ${val} 条`);
  	    	this.pageSize = val;
  	  	},
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
          this.page = val;	
        },
        getData(){
        	var me = this;
        	if(this.loading){
        		return;
        	}
        	this.loading = true;
        	this.$http.get('/machineroom/querymachineRoomList.do?dataCenter=&order=asc&offset='+((me.page-1)*me.pageSize)+'&limit='+me.pageSize+'&_='+(new Date().getTime())).then(({data}) => {
          		me.pageSize = data.pageSize;
          		me.page = data.page;
          		me.total = data.total;
          		me.rows = data.rows;
          		me.loading = false;
      		}).then(() => {
      			me.loading = false;
      		})

      }
    },
    watch: {
	    pageSize: function () {
	       this.getData();
	    },
	    page: function () { 
	       this.getData();
	    }
  	},
    data() {
    	return {
        showConfigElment:[
          {
            label:'ID',
            prop:'id',
            width:'70',
            formtype: false,
            formdata:''
          },
          {
            label:'机房名称',
            prop:'dataCenter',
            formtype:'input',
            formdata:'' 
          },
          {
            label:'省',
            prop:'province',
            width:'50',
            formtype:'select',
            selectItem:[
              {
                name:"北京市",
                id:110000
              },
              {
                name:"天津市",
                id:120000
              }
            ],
            formdata:110000
          },
          {
            label:'市',
            prop:'city',
            width:'50',
            formtype:'select',
            selectItem:[
              {
                name:"北京市",
                id:110000
              },
              {
                name:"天津市",
                id:120000
              }
            ],
            formdata:110000
          },
          {
            label:'位置',
            prop:'location',
            width:'100',
            formtype:'select',
            selectItem:[
              {
                name:"北京市",
                id:110000
              },
              {
                name:"天津市",
                id:120000
              }
            ],
            formdata:110000
          },
          {
            label:'类型',
            prop:'type',
            width:'100',
            formtype:'select',
            selectItem:[
              {
                name:"0",
                id:0
              },
              {
                name:"1",
                id:1
              }
            ],
            formdata:0
          },
          {
            label:'联系人',
            prop:'contact',
            width:'100',
            formtype:'input',
            formdata:''
          },
          {
            label:'联系电话',
            prop:'phoneNumber',
            width:'100',
            formtype:'input',
            formdata:''
          },
          {
            label:'数量',
            prop:'number',
            width:'100',
            formtype:false,
            formdata:''
          }
        ],
    		// default
    		dialogVisible: false,
    		page: 1,
    		pageSize: 20,
    		total: null,
    		rows: [],
    		form: {
	       }

    	}
    },
    created(){
    	this.getData();
    }
}
</script>

<style type="text/css">
	
	.add-btn{
		margin: 20px 20px;
	}

</style>