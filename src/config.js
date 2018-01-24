import Project from './page/project/project';
import Assets from './page/assets/assets_1';
import Engine from './page/engine/engine_1';


// 系统配置
export default {
	//系统名称（左上title）
	sysName:'京东物流管理系统',
	//是否需要登录验证
	isTestlogin: true,
  //首页ID
  // indexPage:'project_1',
	// 菜单栏配置
	// title对应页面名称
	// index对应路由和页面id	
	menuList: [
		{
          title: '资产管理',
          index: 'asset_index',
          child: [
          {
            title: '资产信息',
            index: 'asset_1',
            child: []
          },
          {
            title: '资源池信息',
            index: 'asset_1',
            child: []
          },
          {
            title: '操作日志信息',
            index: 'asset_1',
            child: []
          }]
        },
        {
          title: '机房管理',
          index: 'engine_index',
          child: [
          {
            title: '机房信息',
            index: 'engine_1',
            child: []
          }]
        },
        {
          title: '项目管理',
          index: 'project_index',
          child: [
          {
            title: '项目信息',
            index: 'project',
            child: []
          }]
        },
        {
          title: '字典管理',
          index: 'dictionary_index',
          child: [
            {
              title: '字典信息',
              index: 'dictionary_1',
              child: []
            }
          ]
        }
  ],
  // 路由表单配置
  routes:[
    {
      path:'/',
      component: Project
    },
    {
      path:'/project',
      component: Project
    },
    {
      path:'/assets',
      component: Assets
    },
    {
      path:'/engine',
      component: Engine
    },
    {
      path: '*', redirect: '/'
    }
  ]

};