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

    describe('transfer ETH', async() => {
        let result;

        it('received correct ETH', async() => {
            let oldIntstructorBalanace = await web3.eth.getBalance(account[1]);
            oldIntstructorBalanace = new web3.utils.BN(oldIntstructorBalanace);

            result = await remoteLearn.tipInstructor(account[1], { from: account[0], value: web3.utils.toWei('1', 'Ether') });
            
            let newIntstructorBalanace = await web3.eth.getBalance(account[1]);
            newIntstructorBalanace = new web3.utils.BN(newIntstructorBalanace);

            let amount = web3.utils.toWei('1', 'Ether');
            amount = new web3.utils.BN(amount);

            const expectedBalance = oldIntstructorBalanace.add(amount);

            assert.equal(newIntstructorBalanace.toString(), expectedBalance.toString());
            
            const event = result.logs[0].args;
            assert.equal(event.from, account[0], 'Sender address is correct');
            assert.equal(event.to, account[1], 'Intstructor address is correct');
            assert.equal(event.amount.toString(), amount.toString(), 'Amount is correct');
        });
    });
})