// 菜单配置
// asideMenuConfig：侧边导航配置

const asideMenuConfig = [
  {
    name: '首页',
    path: '/',
    icon: 'home'
  },
  {
    name: '列表',
    path: '/form',
    icon: 'form'
  },
  {
    name: '设置',
    path: '/setting',
    icon: 'tool',
    children: [
      {
        name: '用户管理',
        path: '/user',
        // newWindow: true
      }
    ]
  }
];

export default asideMenuConfig;
