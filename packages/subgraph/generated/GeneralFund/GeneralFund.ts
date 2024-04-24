// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Donation extends ethereum.Event {
  get params(): Donation__Params {
    return new Donation__Params(this);
  }
}

export class Donation__Params {
  _event: Donation;

  constructor(event: Donation) {
    this._event = event;
  }

  get donor(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Member extends ethereum.Event {
  get params(): Member__Params {
    return new Member__Params(this);
  }
}

export class Member__Params {
  _event: Member;

  constructor(event: Member) {
    this._event = event;
  }

  get memberAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get memberMsg(): string {
    return this._event.parameters[1].value.toString();
  }

  get memberNumber(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class MemberWithdrawal extends ethereum.Event {
  get params(): MemberWithdrawal__Params {
    return new MemberWithdrawal__Params(this);
  }
}

export class MemberWithdrawal__Params {
  _event: MemberWithdrawal;

  constructor(event: MemberWithdrawal) {
    this._event = event;
  }

  get memberAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Month extends ethereum.Event {
  get params(): Month__Params {
    return new Month__Params(this);
  }
}

export class Month__Params {
  _event: Month;

  constructor(event: Month) {
    this._event = event;
  }

  get startTimestamp(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get endTimestamp(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get funds(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get members(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get fundsPerMember(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class UserAddedSelf extends ethereum.Event {
  get params(): UserAddedSelf__Params {
    return new UserAddedSelf__Params(this);
  }
}

export class UserAddedSelf__Params {
  _event: UserAddedSelf;

  constructor(event: UserAddedSelf) {
    this._event = event;
  }

  get userAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get userMsg(): string {
    return this._event.parameters[1].value.toString();
  }

  get userNumber(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class UserVouchedFor extends ethereum.Event {
  get params(): UserVouchedFor__Params {
    return new UserVouchedFor__Params(this);
  }
}

export class UserVouchedFor__Params {
  _event: UserVouchedFor;

  constructor(event: UserVouchedFor) {
    this._event = event;
  }

  get userId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get userAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get voucherAddress(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get reasonVouchingFor(): string {
    return this._event.parameters[3].value.toString();
  }
}

export class GeneralFund__memberObjsResult {
  value0: BigInt;
  value1: string;
  value2: BigInt;

  constructor(value0: BigInt, value1: string, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }

  getMemberId(): BigInt {
    return this.value0;
  }

  getMessage(): string {
    return this.value1;
  }

  getTimestampAdded(): BigInt {
    return this.value2;
  }
}

export class GeneralFund__userObjsResult {
  value0: BigInt;
  value1: string;
  value2: i32;

  constructor(value0: BigInt, value1: string, value2: i32) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set(
      "value2",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value2))
    );
    return map;
  }

  getUserId(): BigInt {
    return this.value0;
  }

  getUserMsg(): string {
    return this.value1;
  }

  getVoteCounter(): i32 {
    return this.value2;
  }
}

export class GeneralFund extends ethereum.SmartContract {
  static bind(address: Address): GeneralFund {
    return new GeneralFund("GeneralFund", address);
  }

  frequency(): BigInt {
    let result = super.call("frequency", "frequency():(uint256)", []);

    return result[0].toBigInt();
  }

  try_frequency(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("frequency", "frequency():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  fundsAvailable(): BigInt {
    let result = super.call("fundsAvailable", "fundsAvailable():(uint256)", []);

    return result[0].toBigInt();
  }

  try_fundsAvailable(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "fundsAvailable",
      "fundsAvailable():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  lastTimestamp(): BigInt {
    let result = super.call("lastTimestamp", "lastTimestamp():(uint256)", []);

    return result[0].toBigInt();
  }

  try_lastTimestamp(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "lastTimestamp",
      "lastTimestamp():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  memberLastWithdrawal(param0: Address): BigInt {
    let result = super.call(
      "memberLastWithdrawal",
      "memberLastWithdrawal(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_memberLastWithdrawal(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "memberLastWithdrawal",
      "memberLastWithdrawal(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  memberObjs(param0: Address): GeneralFund__memberObjsResult {
    let result = super.call(
      "memberObjs",
      "memberObjs(address):(uint256,string,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return new GeneralFund__memberObjsResult(
      result[0].toBigInt(),
      result[1].toString(),
      result[2].toBigInt()
    );
  }

  try_memberObjs(
    param0: Address
  ): ethereum.CallResult<GeneralFund__memberObjsResult> {
    let result = super.tryCall(
      "memberObjs",
      "memberObjs(address):(uint256,string,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new GeneralFund__memberObjsResult(
        value[0].toBigInt(),
        value[1].toString(),
        value[2].toBigInt()
      )
    );
  }

  originalMembers(param0: BigInt): Address {
    let result = super.call(
      "originalMembers",
      "originalMembers(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toAddress();
  }

  try_originalMembers(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "originalMembers",
      "originalMembers(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  threshold(): i32 {
    let result = super.call("threshold", "threshold():(uint16)", []);

    return result[0].toI32();
  }

  try_threshold(): ethereum.CallResult<i32> {
    let result = super.tryCall("threshold", "threshold():(uint16)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  totalAddedSelf(): BigInt {
    let result = super.call("totalAddedSelf", "totalAddedSelf():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalAddedSelf(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalAddedSelf",
      "totalAddedSelf():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalMembers(): BigInt {
    let result = super.call("totalMembers", "totalMembers():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalMembers(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalMembers", "totalMembers():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  userObjs(param0: Address): GeneralFund__userObjsResult {
    let result = super.call(
      "userObjs",
      "userObjs(address):(uint256,string,uint16)",
      [ethereum.Value.fromAddress(param0)]
    );

    return new GeneralFund__userObjsResult(
      result[0].toBigInt(),
      result[1].toString(),
      result[2].toI32()
    );
  }

  try_userObjs(
    param0: Address
  ): ethereum.CallResult<GeneralFund__userObjsResult> {
    let result = super.tryCall(
      "userObjs",
      "userObjs(address):(uint256,string,uint16)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new GeneralFund__userObjsResult(
        value[0].toBigInt(),
        value[1].toString(),
        value[2].toI32()
      )
    );
  }

  usersMonthlyLimit(): BigInt {
    let result = super.call(
      "usersMonthlyLimit",
      "usersMonthlyLimit():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_usersMonthlyLimit(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "usersMonthlyLimit",
      "usersMonthlyLimit():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  vouches(param0: Address, param1: BigInt): Address {
    let result = super.call("vouches", "vouches(address,uint256):(address)", [
      ethereum.Value.fromAddress(param0),
      ethereum.Value.fromUnsignedBigInt(param1)
    ]);

    return result[0].toAddress();
  }

  try_vouches(param0: Address, param1: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "vouches",
      "vouches(address,uint256):(address)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddSelfCall extends ethereum.Call {
  get inputs(): AddSelfCall__Inputs {
    return new AddSelfCall__Inputs(this);
  }

  get outputs(): AddSelfCall__Outputs {
    return new AddSelfCall__Outputs(this);
  }
}

export class AddSelfCall__Inputs {
  _call: AddSelfCall;

  constructor(call: AddSelfCall) {
    this._call = call;
  }

  get _whyAddedSelf(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class AddSelfCall__Outputs {
  _call: AddSelfCall;

  constructor(call: AddSelfCall) {
    this._call = call;
  }
}

export class DonateCall extends ethereum.Call {
  get inputs(): DonateCall__Inputs {
    return new DonateCall__Inputs(this);
  }

  get outputs(): DonateCall__Outputs {
    return new DonateCall__Outputs(this);
  }
}

export class DonateCall__Inputs {
  _call: DonateCall;

  constructor(call: DonateCall) {
    this._call = call;
  }
}

export class DonateCall__Outputs {
  _call: DonateCall;

  constructor(call: DonateCall) {
    this._call = call;
  }
}

export class MemberWithdrawalCall extends ethereum.Call {
  get inputs(): MemberWithdrawalCall__Inputs {
    return new MemberWithdrawalCall__Inputs(this);
  }

  get outputs(): MemberWithdrawalCall__Outputs {
    return new MemberWithdrawalCall__Outputs(this);
  }
}

export class MemberWithdrawalCall__Inputs {
  _call: MemberWithdrawalCall;

  constructor(call: MemberWithdrawalCall) {
    this._call = call;
  }
}

export class MemberWithdrawalCall__Outputs {
  _call: MemberWithdrawalCall;

  constructor(call: MemberWithdrawalCall) {
    this._call = call;
  }
}

export class TryFinishMonthCall extends ethereum.Call {
  get inputs(): TryFinishMonthCall__Inputs {
    return new TryFinishMonthCall__Inputs(this);
  }

  get outputs(): TryFinishMonthCall__Outputs {
    return new TryFinishMonthCall__Outputs(this);
  }
}

export class TryFinishMonthCall__Inputs {
  _call: TryFinishMonthCall;

  constructor(call: TryFinishMonthCall) {
    this._call = call;
  }
}

export class TryFinishMonthCall__Outputs {
  _call: TryFinishMonthCall;

  constructor(call: TryFinishMonthCall) {
    this._call = call;
  }
}

export class VouchForUserCall extends ethereum.Call {
  get inputs(): VouchForUserCall__Inputs {
    return new VouchForUserCall__Inputs(this);
  }

  get outputs(): VouchForUserCall__Outputs {
    return new VouchForUserCall__Outputs(this);
  }
}

export class VouchForUserCall__Inputs {
  _call: VouchForUserCall;

  constructor(call: VouchForUserCall) {
    this._call = call;
  }

  get _userId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _userVouchingFor(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _reasonForVouching(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class VouchForUserCall__Outputs {
  _call: VouchForUserCall;

  constructor(call: VouchForUserCall) {
    this._call = call;
  }
}
