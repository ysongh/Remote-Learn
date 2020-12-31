pragma solidity >=0.4.21 <0.7.0;

contract RemoteLearn {
    string public name = "RemoteLearn";

    event Tip(
        address from,
        address to,
        uint amount
    );

    function tipInstructor(address payable _to) public payable {
        _to.transfer(msg.value);

        emit Tip(msg.sender, _to, msg.value);
    }
}