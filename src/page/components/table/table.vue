<template>
	<el-row>
		<el-col :span="24">
			<el-table :data="rows" height="450" border="" style="width: 100%">
				<el-table-column prop="id" label="ID" width="70">
				</el-table-column>
				<el-table-column prop="dataCenter" label="机房名称">
				</el-table-column>
				<el-table-column prop="province" width="50" label="省">
				</el-table-column>
				<el-table-column prop="city" width="50" label="市">
				</el-table-column>
				<el-table-column prop="location" width="100" label="位置">
				</el-table-column>
				<el-table-column prop="type" width="100" label="类型">
				</el-table-column>
				<el-table-column prop="contact" width="100" label="联系人">
				</el-table-column>
				<el-table-column prop="phoneNumber" width="100" label="联系电话">
				</el-table-column>
				<el-table-column prop="number" width="100" label="数量">
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
			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
			:current-page="page" :page-sizes="[20,30,50,80]" :page-size="pageSize"
			layout="total, sizes, prev, pager, next, jumper" :total="total">
			</el-pagination>
		</el-col>
	</el-row>
</template>



<script>
  export default {
  	props:['tableHeaderConf','url','tdata','page','pageSize','total'],
  	methods: {
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
    		page: 1,
    		pageSize: 20,
    		total: null,
    		rows: []
    	}
    },
    created(){
    	this.getData();
    }
}
</script>