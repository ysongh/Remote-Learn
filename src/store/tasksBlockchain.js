const state = {
	address: ''
};

const getters = {
	address: state => state.address
};

const actions = {
	updateAddress({ commit }, address){
		commit('setAddress', address);
	}
};

const mutations = {
	setAddress: (state, address) => (state.address = address)
};

export default{
	state,
	getters,
	actions,
	mutations
}