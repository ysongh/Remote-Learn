const { assert } = require('chai');

const RemoteLearn = artifacts.require('./RemoteLearn.sol');

contract(RemoteLearn, (account) => {
    let remoteLearn;

    before(async() => {
        remoteLearn = await RemoteLearn.deployed();
    });

    describe('deployment', async() => {
        it('deploys successfully', async() => {
            const address = await remoteLearn.address;
            assert.notEqual(address, 0x0);
            assert.notEqual(address, '');
            assert.notEqual(address, null);
            assert.notEqual(address, undefined);
        });
        it('has correct name', async() => {
            const name = await remoteLearn.name();
            assert.equal(name, "RemoteLearn");
        });
    });
})