import '@tarojs/async-await';
import Taro, {Component} from '@tarojs/taro';
import {Provider} from '@tarojs/redux';
import dva from './utils/dva';
import models from './models';

// 页面
import Home from './pages/home';

// 全局样式
import './styles/base.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const dvaApp = dva.createApp({
	initialState: {},
	models: models,
});
const store = dvaApp.getStore();

class App extends Component {

	config = {
		pages: [
			'pages/home/index'
		],
		window: {
			backgroundTextStyle: 'light',
			navigationBarBackgroundColor: '#fff',
			navigationBarTitleText: 'WeChat',
			navigationBarTextStyle: 'black'
		}
	}

	componentDidMount() {
	}

	componentDidShow() {
	}

	componentDidHide() {
	}

	componentDidCatchError() {
	}

	// 在 App 类中的 render() 函数没有实际作用
	// 请勿修改此函数
	render() {
		return (
			<Provider store={store}>
				<Home/>
			</Provider>
		);
	}
}

Taro.render(<App/>, document.getElementById('app'))
