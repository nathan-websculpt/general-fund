//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// import "@openzeppelin/contracts/access/Ownable.sol";

contract GeneralFund {
	struct AddedUsers {
		uint256 userId; //user counter, starting with 1
		string userMsg;
		uint16 voteCounter;
	}

	uint256 public totalAddedSelf = 0;
	uint16 private constant threshold = 2; //TODO: change to 5
	mapping(address => AddedUsers) public userObjs;

	// Events: a way to emit log statements from smart contract that can be listened to by external parties
	event UserAddedSelf(
		// address indexed userAddress,
		address userAddress,
		string userMsg,
		uint256 userNumber
	);

	event UserVouchedFor(
		address userAddress,
		address voucher,
		string reasonVouchingFor
	);

	//TODO: modifier to be sure they haven't already proposed
	function addSelf(string memory _whyAddedSelf) external {
		totalAddedSelf++;
		AddedUsers storage thisUserObj = userObjs[msg.sender];
		thisUserObj.userId = totalAddedSelf;
		thisUserObj.voteCounter = 0;
		thisUserObj.userMsg = _whyAddedSelf;

		emit UserAddedSelf(msg.sender, _whyAddedSelf, totalAddedSelf);
	}

	//TODO: modifier to prevent a person from vouching for themselves
	//TODO: modifier to prevent a person from vouching twice
	function vouchForUser(address _userVouchingFor, string memory _reasonForVouching) external {
		userObjs[_userVouchingFor].voteCounter++;

		emit UserVouchedFor(_userVouchingFor, msg.sender, _reasonForVouching);
	}

	/**
	 * Function that allows the contract to receive ETH
	 */
	receive() external payable {}
}
