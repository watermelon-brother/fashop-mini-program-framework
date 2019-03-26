import Taro from '@tarojs/taro'

/*获取当前页url*/
export const getCurrentPageUrl = () => {
	let pages = getCurrentPages()
	let currentPage = pages[pages.length - 1]
	let url = currentPage.route
	return url
}

export const hasLogin = () => {
	return Taro.getStorageSync('Authorization').length > 0
}
