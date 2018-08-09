import ReactDOM from 'react-dom';
import router from './router';
import './index.less';

const CONTAINER = document.getElementById('container');

if (!CONTAINER) {
  throw new Error('当前页面不存在 <div id="container"></div> 节点.');
}

ReactDOM.render(router, CONTAINER);
