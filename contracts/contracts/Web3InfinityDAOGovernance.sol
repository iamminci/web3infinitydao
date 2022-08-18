// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Web3InfinityDAOGovernance {
    mapping(address => uint256) public voteCounts;
    mapping(address => uint256) public proposalCounts;

    function voteProposal() external {
        voteCounts[msg.sender] = voteCounts[msg.sender] + 1;
    }

    function createProposal() external {
        proposalCounts[msg.sender] = proposalCounts[msg.sender] + 1;
    }
}
