// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import AsideLayout from './layouts/AsideLayout';
import Home from './pages/Home';
import Form from './pages/Form';
import User from './pages/User';
import NotFound from './pages/NotFound';

const routerConfig = [
  {
    path: '/',
    layout: AsideLayout,
    component: Home,
  },
  {
    path: '/form',
    layout: AsideLayout,
    component: Form,
  },
  {
    path: '/user',
    layout: AsideLayout,
    component: User,
  },
  {
    path: '*',
    layout: AsideLayout,
    component: NotFound,
  },
];

export default routerConfig;
