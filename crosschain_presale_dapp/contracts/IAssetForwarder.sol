// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

interface IAssetForwarder {
    
    struct DepositData {
        uint256 partnerId;
        uint256 amount;
        uint256 destAmount;
        address srcToken;
        address refundRecipient;
        bytes32 destChainIdBytes;
    }

    function iDepositMessage(
        DepositData memory depositData,
        bytes memory destToken,
        bytes memory recipient,
        bytes memory message
    ) external payable;
}

interface IMessageHandler {
    function handleMessage(
        address tokenSent,
        uint256 amount,
        bytes memory message
    ) external;
}