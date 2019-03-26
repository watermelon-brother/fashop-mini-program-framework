import Api from '../../service/api';

export const homepage = data => Api.get('/server/page/portal', data);

