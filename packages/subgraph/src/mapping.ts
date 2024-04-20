import { Bytes, log, BigInt } from "@graphprotocol/graph-ts";
import { UserAddedSelf as UserAddedSelfEvent } from "../generated/GeneralFund/GeneralFund";
import { UserAddedSelf } from "../generated/schema";

export function handleUserAddedSelf(event: UserAddedSelfEvent): void {
  let entity = new UserAddedSelf(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.userAddress = event.params.userAddress;
  entity.userNumber = event.params.userNumber;
  entity.userMsg = event.params.userMsg;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
