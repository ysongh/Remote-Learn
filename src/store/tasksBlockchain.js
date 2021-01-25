import Portis from '@portis/web3';
import Web3 from 'web3';

import { portisId } from '../config';
import RemoteLearn from '../abis/RemoteLearn.json';

const state = {
	address: '',
	portis: null,
	blockchain: null,
	walletType: '',
	email: ''
};

const getters = {
	address: state => state.address,
	portis: state => state.portis,
	blockchain: state => state.blockchain,
	walletType: state => state.walletType,
	email: state => state.email
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

		commit('setWalletType', 'Portis');

		const networkId ='42';
		const networkData = RemoteLearn.networks[networkId];

		if(networkData){
			const abi = RemoteLearn.abi;
			const address = RemoteLearn.networks[networkId].address;

			const blockchain = new web3.eth.Contract(abi, address);
			commit('setBlockchain', blockchain);
		}else{
			window.alert('Contract is not deployed to detected network.')
		}
	},
	async getMetaMask({ commit }){
		if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
    
            await window.ethereum.enable();
        }
        else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider);
        }
        else {
            window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
		}
		
		const web3 = window.web3;

		web3.eth.getAccounts((error, accounts) => {
			commit('setAddress', accounts[0]);
		});

		commit('setWalletType', 'MetaMask');

		const networkId = await web3.eth.net.getId();
		const networkData = RemoteLearn.networks[networkId];

		if(networkData){
			const abi = RemoteLearn.abi;
			const address = RemoteLearn.networks[networkId].address;

			const blockchain = new web3.eth.Contract(abi, address);
			commit('setBlockchain', blockchain);
		}else{
			window.alert('Contract is not deployed to detected network.')
		}
	},
	removeAddress({ commit }){
		commit('setAddress', '');
	},
	login({ commit }, email){
		commit('setEmail', email);
	}
};

const mutations = {
	setAddress: (state, address) => (state.address = address),
	setPortis: (state, portis) => (state.portis = portis),
	setBlockchain: (state, blockchain) => (state.blockchain = blockchain),
	setWalletType: (state, walletType) => (state.walletType = walletType),
	setEmail: (state, email) => (state.email = email)
};

export default{
	state,
	getters,
	actions,
	mutations
}