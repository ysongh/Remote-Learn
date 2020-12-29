import Portis from '@portis/web3';
import Web3 from 'web3';

import { portisId } from '../config';

const state = {
	address: '',
	portis: null
};

const getters = {
	address: state => state.address,
	portis: state => state.portis
};

const actions = {
	getPortis({ commit }){
		const portis = new Portis(portisId, 'mainnet');
		commit('setPortis', portis);

		const web3 = new Web3(portis.provider);

		web3.eth.getAccounts((error, accounts) => {
			commit('setAddress', accounts[0]);
		});
	}
	
};

const mutations = {
	setAddress: (state, address) => (state.address = address),
	setPortis: (state, portis) => (state.portis = portis)
};

export default{
	state,
	getters,
	actions,
	mutations
}