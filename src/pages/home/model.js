import * as homeApi from './service';

export default {
	namespace: 'home',
	state: {
		banner: [],
	},
	effects: {
		* load(_, {call, put}) {
			const {statusCode, data} = yield call(homeApi.homepage, {});
			if (statusCode === 200) {
				yield put({
					type: 'save',
					payload: {
						banner: data.result.info.body,
					},
				});
			}
		},
	},
	reducers: {
		save(state, {payload}) {
			return {...state, ...payload};
		},
	},
};
