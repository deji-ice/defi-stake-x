// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Tether {
    string name = "Test Tether Token";
    string symbol = "tUSDT";
    uint256 totalSupply = 1000000000000000000000000; // 1 million tokens
    uint8 decimals = 18;

    event Transfer(
        address indexed _from, // indexed means we can filter by this field
        address indexed _to, // indexed means we can filter by this field
        uint256 _value // amount of tokens transferred
    );
    event Approval(
        address indexed _owner, // owner of the tokens
        address indexed _spender, // address that is approved to spend the tokens
        uint256 _value // amount of tokens approved
    );

    mapping(address => uint256) public balanceOf;
    
    // 
    mapping(address =>   mapping(address => uint256)) public allowance; 

    constructor() public {
        balanceOf[msg.sender] = totalSupply;
    }

    function transfer( address _to, uint256 _value) public returns (bool success) {
        require(balanceOf[msg.sender] >= _value); // check if the sender has enough tokens
        balanceOf[msg.sender] -= _value;       // deduct the tokens from the sender
        balanceOf[_to] += _value;           // add the tokens to the recipient
        emit Transfer(msg.sender, _to, _value); // emit the transfer event
        return true;
    }

 function transferFrom(address _from , address _to, uint256 _value) public returns(bool success){
     require(balanceOf[_from] >= _value);

    balanceOf[_from] -= _value;
    balanceOf[_to] += _value;

    emit Transfer(_from, _to, _value);
    return true;
 }

}
