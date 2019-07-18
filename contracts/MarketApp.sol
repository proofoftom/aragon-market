pragma solidity ^0.4.24;

import "@aragon/os/contracts/apps/AragonApp.sol";
import "@aragon/os/contracts/lib/math/SafeMath.sol";


contract MarketApp is AragonApp {
    using SafeMath for uint256;

    /// Events
    event Trade(address indexed entity, uint256 orderNumber);

    /// State
    uint256 public orderNumber;

    /// ACL
    bytes32 constant public TRADE_ROLE = keccak256("TRADE_ROLE");

    function initialize() public onlyInit {
        initialized();
    }

    /**
     * @notice Create a new buy/sell order
     */
    function trade() external auth(TRADE_ROLE) {
        orderNumber = orderNumber.add(1);
        emit Trade(msg.sender, orderNumber);
    }
}
