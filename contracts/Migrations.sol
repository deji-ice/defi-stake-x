// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

contract Migrations {
    address public owner;
    uint public last_completed_migration;

    constructor() {
        owner = msg.sender;
    }
    modifier restricted() {
        if (msg.sender == owner) _; // the _; is replaced by the function code
    }

    function setCompleted(uint completed) public restricted {
        last_completed_migration = completed;
    }

    function upgrade(address newAddress) public restricted {
        Migrations upgraded = Migrations(newAddress); // create a new contract instance of the Migrations contract
        upgraded.setCompleted(last_completed_migration); // call the setCompleted function of the new contract instance
    }
}
