// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "./Tether.sol"; 
import "./RewardToken.sol";

contract DecentralBank {
    address public owner;
    string public name = "Decentral Bank";


    Tether public tether;
    RewardToken public rewardToken;


     address[] public stakers; // keep track of people who are staking
     
// keep track of the staking balance of each address 
    mapping(address => uint) public stakingBalance; 
    mapping(address => bool) public hasStaked;
    mapping(address => bool) public isStaking;

    constructor(RewardToken _rwd, Tether _tether) public {
        owner = msg.sender;
        rewardToken = _rwd; // Reward Token
        tether = _tether; // Tether Token
    }

    // 1. Stakes Tokens (Deposit)
    function depositTokens(uint _amount) public{
        // require amount greater than 0
        require(_amount > 0, "amount cannot be 0");
        // transfer tether tokens to this contract for staking
        tether.transferFrom(msg.sender, address(this), _amount);
        // update staking balance
        stakingBalance[msg.sender]= stakingBalance[msg.sender] + _amount;

        // add user to stakers array only if they haven't staked already
        if(!hasStaked[msg.sender]){
            stakers.push(msg.sender);
        } 
        // update staking status
        isStaking[msg.sender] = true;
        hasStaked[msg.sender] = true;

    }

    //  2. Unstaking Tokens (Withdraw)

    function withdraw(uint _amount) public{
        require(_amount > 0, "amount cannot be 0");
        // get the staking balance
        uint balance = stakingBalance[msg.sender];
    }
}
 