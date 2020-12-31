const RemoteLearn = artifacts.require("RemoteLearn");

module.exports = async function(deployer){
	deployer.deploy(RemoteLearn);
};