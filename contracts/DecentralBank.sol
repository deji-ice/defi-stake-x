// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "./Tether.sol";
import "./RewardToken.sol";

contract DecentralBank {
    address public owner;
    string public name = "Decentral Bank";

    Tether public tether;
    RewardToken public rewardToken;

    constructor(RewardToken _rwd, Tether _tether) public {
        owner = msg.sender;
        rewardToken = _rwd; // Reward Token
        tether = _tether; // Tether Token
    }
}
