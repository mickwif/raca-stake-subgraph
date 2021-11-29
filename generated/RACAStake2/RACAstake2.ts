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

export class AddNFT2PoolEvent extends ethereum.Event {
  get params(): AddNFT2PoolEvent__Params {
    return new AddNFT2PoolEvent__Params(this);
  }
}

export class AddNFT2PoolEvent__Params {
  _event: AddNFT2PoolEvent;

  constructor(event: AddNFT2PoolEvent) {
    this._event = event;
  }

  get pid(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get tokenIds(): Array<BigInt> {
    return this._event.parameters[1].value.toBigIntArray();
  }
}

export class AddPoolEvent extends ethereum.Event {
  get params(): AddPoolEvent__Params {
    return new AddPoolEvent__Params(this);
  }
}

export class AddPoolEvent__Params {
  _event: AddPoolEvent;

  constructor(event: AddPoolEvent) {
    this._event = event;
  }

  get tokenAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get stakeAmount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get stakeTime(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get nftAddress(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class ForceWithdrawEvent extends ethereum.Event {
  get params(): ForceWithdrawEvent__Params {
    return new ForceWithdrawEvent__Params(this);
  }
}

export class ForceWithdrawEvent__Params {
  _event: ForceWithdrawEvent;

  constructor(event: ForceWithdrawEvent) {
    this._event = event;
  }

  get pid(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get user(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get beginTime(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class HarvestEvent extends ethereum.Event {
  get params(): HarvestEvent__Params {
    return new HarvestEvent__Params(this);
  }
}

export class HarvestEvent__Params {
  _event: HarvestEvent;

  constructor(event: HarvestEvent) {
    this._event = event;
  }

  get pid(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get user(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class StakeEvent extends ethereum.Event {
  get params(): StakeEvent__Params {
    return new StakeEvent__Params(this);
  }
}

export class StakeEvent__Params {
  _event: StakeEvent;

  constructor(event: StakeEvent) {
    this._event = event;
  }

  get pid(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get user(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get beginTime(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class RACAstake2__getUserStakeHisResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: boolean;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt, value3: boolean) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromBoolean(this.value3));
    return map;
  }
}

export class RACAstake2__poolResult {
  value0: Address;
  value1: BigInt;
  value2: BigInt;
  value3: Address;
  value4: BigInt;

  constructor(
    value0: Address,
    value1: BigInt,
    value2: BigInt,
    value3: Address,
    value4: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromAddress(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    return map;
  }
}

export class RACAstake2 extends ethereum.SmartContract {
  static bind(address: Address): RACAstake2 {
    return new RACAstake2("RACAstake2", address);
  }

  getNFTList(_pid: BigInt): Array<BigInt> {
    let result = super.call("getNFTList", "getNFTList(uint256):(uint256[])", [
      ethereum.Value.fromUnsignedBigInt(_pid)
    ]);

    return result[0].toBigIntArray();
  }

  try_getNFTList(_pid: BigInt): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "getNFTList",
      "getNFTList(uint256):(uint256[])",
      [ethereum.Value.fromUnsignedBigInt(_pid)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  getNFTListLength(_pid: BigInt): BigInt {
    let result = super.call(
      "getNFTListLength",
      "getNFTListLength(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_pid)]
    );

    return result[0].toBigInt();
  }

  try_getNFTListLength(_pid: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getNFTListLength",
      "getNFTListLength(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_pid)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getPoolAmount(_pid: BigInt): BigInt {
    let result = super.call(
      "getPoolAmount",
      "getPoolAmount(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_pid)]
    );

    return result[0].toBigInt();
  }

  try_getPoolAmount(_pid: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getPoolAmount",
      "getPoolAmount(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_pid)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getPoolNFTLeft(_pid: BigInt): BigInt {
    let result = super.call(
      "getPoolNFTLeft",
      "getPoolNFTLeft(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_pid)]
    );

    return result[0].toBigInt();
  }

  try_getPoolNFTLeft(_pid: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getPoolNFTLeft",
      "getPoolNFTLeft(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_pid)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getUserStakeHis(
    _pid: BigInt,
    _userAddr: Address,
    _index: BigInt,
    _time: BigInt
  ): RACAstake2__getUserStakeHisResult {
    let result = super.call(
      "getUserStakeHis",
      "getUserStakeHis(uint256,address,uint256,uint256):(uint256,uint256,uint256,bool)",
      [
        ethereum.Value.fromUnsignedBigInt(_pid),
        ethereum.Value.fromAddress(_userAddr),
        ethereum.Value.fromUnsignedBigInt(_index),
        ethereum.Value.fromUnsignedBigInt(_time)
      ]
    );

    return new RACAstake2__getUserStakeHisResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBoolean()
    );
  }

  try_getUserStakeHis(
    _pid: BigInt,
    _userAddr: Address,
    _index: BigInt,
    _time: BigInt
  ): ethereum.CallResult<RACAstake2__getUserStakeHisResult> {
    let result = super.tryCall(
      "getUserStakeHis",
      "getUserStakeHis(uint256,address,uint256,uint256):(uint256,uint256,uint256,bool)",
      [
        ethereum.Value.fromUnsignedBigInt(_pid),
        ethereum.Value.fromAddress(_userAddr),
        ethereum.Value.fromUnsignedBigInt(_index),
        ethereum.Value.fromUnsignedBigInt(_time)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new RACAstake2__getUserStakeHisResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBoolean()
      )
    );
  }

  getUserStakeHisCnt(_pid: BigInt, _userAddr: Address): BigInt {
    let result = super.call(
      "getUserStakeHisCnt",
      "getUserStakeHisCnt(uint256,address):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_pid),
        ethereum.Value.fromAddress(_userAddr)
      ]
    );

    return result[0].toBigInt();
  }

  try_getUserStakeHisCnt(
    _pid: BigInt,
    _userAddr: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getUserStakeHisCnt",
      "getUserStakeHisCnt(uint256,address):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_pid),
        ethereum.Value.fromAddress(_userAddr)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  nftInContract(param0: Address, param1: BigInt): boolean {
    let result = super.call(
      "nftInContract",
      "nftInContract(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toBoolean();
  }

  try_nftInContract(
    param0: Address,
    param1: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "nftInContract",
      "nftInContract(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): Bytes {
    let result = super.call(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  pool(param0: BigInt): RACAstake2__poolResult {
    let result = super.call(
      "pool",
      "pool(uint256):(address,uint256,uint256,address,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new RACAstake2__poolResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toAddress(),
      result[4].toBigInt()
    );
  }

  try_pool(param0: BigInt): ethereum.CallResult<RACAstake2__poolResult> {
    let result = super.tryCall(
      "pool",
      "pool(uint256):(address,uint256,uint256,address,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new RACAstake2__poolResult(
        value[0].toAddress(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toAddress(),
        value[4].toBigInt()
      )
    );
  }

  user(param0: BigInt, param1: Address, param2: BigInt): BigInt {
    let result = super.call("user", "user(uint256,address,uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0),
      ethereum.Value.fromAddress(param1),
      ethereum.Value.fromUnsignedBigInt(param2)
    ]);

    return result[0].toBigInt();
  }

  try_user(
    param0: BigInt,
    param1: Address,
    param2: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "user",
      "user(uint256,address,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
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

export class AddNFT2PoolCall extends ethereum.Call {
  get inputs(): AddNFT2PoolCall__Inputs {
    return new AddNFT2PoolCall__Inputs(this);
  }

  get outputs(): AddNFT2PoolCall__Outputs {
    return new AddNFT2PoolCall__Outputs(this);
  }
}

export class AddNFT2PoolCall__Inputs {
  _call: AddNFT2PoolCall;

  constructor(call: AddNFT2PoolCall) {
    this._call = call;
  }

  get _pid(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _tokenIds(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }
}

export class AddNFT2PoolCall__Outputs {
  _call: AddNFT2PoolCall;

  constructor(call: AddNFT2PoolCall) {
    this._call = call;
  }
}

export class AddPoolCall extends ethereum.Call {
  get inputs(): AddPoolCall__Inputs {
    return new AddPoolCall__Inputs(this);
  }

  get outputs(): AddPoolCall__Outputs {
    return new AddPoolCall__Outputs(this);
  }
}

export class AddPoolCall__Inputs {
  _call: AddPoolCall;

  constructor(call: AddPoolCall) {
    this._call = call;
  }

  get _tokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _stakeAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _stakeTime(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _nftAddress(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class AddPoolCall__Outputs {
  _call: AddPoolCall;

  constructor(call: AddPoolCall) {
    this._call = call;
  }
}

export class ForceWithdrawCall extends ethereum.Call {
  get inputs(): ForceWithdrawCall__Inputs {
    return new ForceWithdrawCall__Inputs(this);
  }

  get outputs(): ForceWithdrawCall__Outputs {
    return new ForceWithdrawCall__Outputs(this);
  }
}

export class ForceWithdrawCall__Inputs {
  _call: ForceWithdrawCall;

  constructor(call: ForceWithdrawCall) {
    this._call = call;
  }

  get _pid(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _sid(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ForceWithdrawCall__Outputs {
  _call: ForceWithdrawCall;

  constructor(call: ForceWithdrawCall) {
    this._call = call;
  }
}

export class HarvestCall extends ethereum.Call {
  get inputs(): HarvestCall__Inputs {
    return new HarvestCall__Inputs(this);
  }

  get outputs(): HarvestCall__Outputs {
    return new HarvestCall__Outputs(this);
  }
}

export class HarvestCall__Inputs {
  _call: HarvestCall;

  constructor(call: HarvestCall) {
    this._call = call;
  }

  get _pid(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _sid(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class HarvestCall__Outputs {
  _call: HarvestCall;

  constructor(call: HarvestCall) {
    this._call = call;
  }
}

export class OnERC721ReceivedCall extends ethereum.Call {
  get inputs(): OnERC721ReceivedCall__Inputs {
    return new OnERC721ReceivedCall__Inputs(this);
  }

  get outputs(): OnERC721ReceivedCall__Outputs {
    return new OnERC721ReceivedCall__Outputs(this);
  }
}

export class OnERC721ReceivedCall__Inputs {
  _call: OnERC721ReceivedCall;

  constructor(call: OnERC721ReceivedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get value3(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class OnERC721ReceivedCall__Outputs {
  _call: OnERC721ReceivedCall;

  constructor(call: OnERC721ReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class StakeCall extends ethereum.Call {
  get inputs(): StakeCall__Inputs {
    return new StakeCall__Inputs(this);
  }

  get outputs(): StakeCall__Outputs {
    return new StakeCall__Outputs(this);
  }
}

export class StakeCall__Inputs {
  _call: StakeCall;

  constructor(call: StakeCall) {
    this._call = call;
  }

  get _pid(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class StakeCall__Outputs {
  _call: StakeCall;

  constructor(call: StakeCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawNFTByOwnerCall extends ethereum.Call {
  get inputs(): WithdrawNFTByOwnerCall__Inputs {
    return new WithdrawNFTByOwnerCall__Inputs(this);
  }

  get outputs(): WithdrawNFTByOwnerCall__Outputs {
    return new WithdrawNFTByOwnerCall__Outputs(this);
  }
}

export class WithdrawNFTByOwnerCall__Inputs {
  _call: WithdrawNFTByOwnerCall;

  constructor(call: WithdrawNFTByOwnerCall) {
    this._call = call;
  }

  get _nftAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _tokenIds(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }
}

export class WithdrawNFTByOwnerCall__Outputs {
  _call: WithdrawNFTByOwnerCall;

  constructor(call: WithdrawNFTByOwnerCall) {
    this._call = call;
  }
}

export class WithdrawTokenByOwnerCall extends ethereum.Call {
  get inputs(): WithdrawTokenByOwnerCall__Inputs {
    return new WithdrawTokenByOwnerCall__Inputs(this);
  }

  get outputs(): WithdrawTokenByOwnerCall__Outputs {
    return new WithdrawTokenByOwnerCall__Outputs(this);
  }
}

export class WithdrawTokenByOwnerCall__Inputs {
  _call: WithdrawTokenByOwnerCall;

  constructor(call: WithdrawTokenByOwnerCall) {
    this._call = call;
  }

  get _tokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class WithdrawTokenByOwnerCall__Outputs {
  _call: WithdrawTokenByOwnerCall;

  constructor(call: WithdrawTokenByOwnerCall) {
    this._call = call;
  }
}
