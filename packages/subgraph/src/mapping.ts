import { Bytes, log, BigInt } from "@graphprotocol/graph-ts";
import {
  UserAddedSelf as UserAddedSelfEvent,
  UserVouchedFor as UserVouchedForEvent,
  Member as MemberEvent,
  Month as MonthEvent,
  Donation as DonationEvent,
} from "../generated/GeneralFund/GeneralFund";
import {
  UserAddedSelf,
  UserVouchedFor,
  Member,
  Donation,
  Month,
} from "../generated/schema";

export function handleDonation(event: DonationEvent): void {
  let entity = new Donation(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.donor = event.params.donor;
  entity.amount = event.params.amount;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleUserAddedSelf(event: UserAddedSelfEvent): void {
  let entity = new UserAddedSelf(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.userAddress = event.params.userAddress;
  entity.userNumber = event.params.userNumber;
  entity.userMsg = event.params.userMsg;
  entity.vouchCount = 0;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleUserVouchedFor(event: UserVouchedForEvent): void {
  let entity = new UserVouchedFor(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.userId = event.params.userId;
  entity.userAddress = event.params.userAddress;
  entity.voucherAddress = event.params.voucherAddress;
  entity.reasonVouchingFor = event.params.reasonVouchingFor;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  let userEntity = UserAddedSelf.load(event.params.userId);
  if (userEntity !== null) {
    entity.user = userEntity.id;
    userEntity.vouchCount++;
    userEntity.save();
  }

  entity.save();
}

export function handleMember(event: MemberEvent): void {
  let entity = new Member(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.memberAddress = event.params.memberAddress;
  entity.memberNumber = event.params.memberNumber;
  entity.memberMsg = event.params.memberMsg;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleMonth(event: MonthEvent): void {
  let entity = new Month(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.startTimestamp = event.params.startTimestamp;
  entity.endTimestamp = event.params.endTimestamp;
  entity.funds = event.params.funds;
  entity.members = event.params.members;
  entity.fundsPerMember = event.params.fundsPerMember;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
