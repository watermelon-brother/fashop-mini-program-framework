import Taro, {Component} from '@tarojs/taro';
import {Swiper, SwiperItem, Image, View} from '@tarojs/components';
import { AtCard, AtDivider } from "taro-ui";
import {connect} from '@tarojs/redux';
import './index.scss'

@connect(({home, loading}) => ({
	...home,
	...loading,
}))
export default class Index extends Component {

	config = {
		navigationBarTitleText: '首页'
	}

	componentDidMount = () => {
		this.props.dispatch({
			type: 'home/load',
		});
	};

	render() {
		const { banner } = this.props;
		let ads = [];
		for (let key in banner) {
			if (banner[key].type != 'image_ads') {
				continue;
			}
			ads = banner[key].data;
			break;
		}
		return (
			<View>
				<Swiper
					indicatorColor='#999'
					indicatorActiveColor='#333'
					vertical={false}
					circular
					indicatorDots
					autoplay={true}>
					{ads.map((item, index) => (
						<SwiperItem >
							<View key={index}>
								<Image style='width: 100%;' src={item.img.url} />
							</View>
						</SwiperItem>
					))}
				</Swiper>
				<AtDivider content='fashop' />
				<AtCard
					note='西瓜哥'
					extra='new'
					title='shop小程序开发框架上线啦'
					thumb='https://www.fashop.cn/logo.png'
				>
					taro + taro ui + dva,支持restful风格api!
				</AtCard>
			</View>

		)
	}
}
