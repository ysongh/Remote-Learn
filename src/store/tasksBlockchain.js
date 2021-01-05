import Portis from '@portis/web3';
import Web3 from 'web3';

import { portisId } from '../config';
import RemoteLearn from '../abis/RemoteLearn.json';

const state = {
	address: '',
	portis: null,
	blockchain: null
};

const getters = {
	address: state => state.address,
	portis: state => state.portis,
	blockchain: state => state.blockchain
};

const actions = {
	async getPortis({ commit }){
		const portis = new Portis(portisId, 'kovan');
		commit('setPortis', portis);

		const web3 = new Web3(portis.provider);
		window.web3 = web3;

		web3.eth.getAccounts((error, accounts) => {
			commit('setAddress', accounts[0]);
		});

		const networkId ='42';
		const networkData = RemoteLearn.networks[networkId];

		if(networkData){
			const abi = RemoteLearn.abi;
			const address = RemoteLearn.networks[networkId].address;

			const blockchain = new web3.eth.Contract(abi, address);
			commit('setBlockchain', blockchain);
			
			const name = await blockchain.methods.name().call();
			console.log(name);
		}else{
			window.alert('Contract is not deployed to detected network.')
		}
	},
	removeAddress({ commit }){
		commit('setAddress', '');
	}
};

const mutations = {
	setAddress: (state, address) => (state.address = address),
	setPortis: (state, portis) => (state.portis = portis),
	setBlockchain: (state, blockchain) => (state.blockchain = blockchain)
};

export default{
	state,
	getters,
	actions,
	mutations
}