// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Migrations {
    address public owner;
    uint public last_completed_migration;

    event OwnerSet(address indexed oldOwner, address indexed newOwner);
    event MigrationCompleted(uint completed);
    event Upgraded(address indexed newAddress);

    constructor() public {
        owner = msg.sender;
        emit OwnerSet(address(0), owner);
    }

    modifier restricted() {
        require(
            msg.sender == owner,
            "This function is restricted to the contract's owner"
        );
        _;
    }

    function setCompleted(uint completed) public restricted {
        last_completed_migration = completed;
        emit MigrationCompleted(completed);
    }

    function upgrade(address newAddress) public restricted {
        Migrations upgraded = Migrations(newAddress);
        upgraded.setCompleted(last_completed_migration);
        emit Upgraded(newAddress);
    }
}
