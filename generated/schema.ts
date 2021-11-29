// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class StakeHistory extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save StakeHistory entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save StakeHistory entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("StakeHistory", id.toString(), this);
  }

  static load(id: string): StakeHistory | null {
    return store.get("StakeHistory", id) as StakeHistory | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user(): Bytes {
    let value = this.get("user");
    return value.toBytes();
  }

  set user(value: Bytes) {
    this.set("user", Value.fromBytes(value));
  }

  get poolId(): BigInt {
    let value = this.get("poolId");
    return value.toBigInt();
  }

  set poolId(value: BigInt) {
    this.set("poolId", Value.fromBigInt(value));
  }

  get stakeTokenAddress(): Bytes | null {
    let value = this.get("stakeTokenAddress");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set stakeTokenAddress(value: Bytes | null) {
    if (value === null) {
      this.unset("stakeTokenAddress");
    } else {
      this.set("stakeTokenAddress", Value.fromBytes(value as Bytes));
    }
  }

  get stakeAmount(): BigInt {
    let value = this.get("stakeAmount");
    return value.toBigInt();
  }

  set stakeAmount(value: BigInt) {
    this.set("stakeAmount", Value.fromBigInt(value));
  }

  get stakeNFTAddress(): Bytes | null {
    let value = this.get("stakeNFTAddress");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set stakeNFTAddress(value: Bytes | null) {
    if (value === null) {
      this.unset("stakeNFTAddress");
    } else {
      this.set("stakeNFTAddress", Value.fromBytes(value as Bytes));
    }
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get txhash(): Bytes {
    let value = this.get("txhash");
    return value.toBytes();
  }

  set txhash(value: Bytes) {
    this.set("txhash", Value.fromBytes(value));
  }
}

export class RACAStake1Pool extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save RACAStake1Pool entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save RACAStake1Pool entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("RACAStake1Pool", id.toString(), this);
  }

  static load(id: string): RACAStake1Pool | null {
    return store.get("RACAStake1Pool", id) as RACAStake1Pool | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenAddress(): Bytes | null {
    let value = this.get("tokenAddress");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set tokenAddress(value: Bytes | null) {
    if (value === null) {
      this.unset("tokenAddress");
    } else {
      this.set("tokenAddress", Value.fromBytes(value as Bytes));
    }
  }

  get stakeAmount(): BigInt | null {
    let value = this.get("stakeAmount");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set stakeAmount(value: BigInt | null) {
    if (value === null) {
      this.unset("stakeAmount");
    } else {
      this.set("stakeAmount", Value.fromBigInt(value as BigInt));
    }
  }

  get stakeTime(): BigInt | null {
    let value = this.get("stakeTime");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set stakeTime(value: BigInt | null) {
    if (value === null) {
      this.unset("stakeTime");
    } else {
      this.set("stakeTime", Value.fromBigInt(value as BigInt));
    }
  }

  get nftAddress(): Bytes | null {
    let value = this.get("nftAddress");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set nftAddress(value: Bytes | null) {
    if (value === null) {
      this.unset("nftAddress");
    } else {
      this.set("nftAddress", Value.fromBytes(value as Bytes));
    }
  }

  get nftTokenIds(): Array<BigInt> | null {
    let value = this.get("nftTokenIds");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigIntArray();
    }
  }

  set nftTokenIds(value: Array<BigInt> | null) {
    if (value === null) {
      this.unset("nftTokenIds");
    } else {
      this.set("nftTokenIds", Value.fromBigIntArray(value as Array<BigInt>));
    }
  }

  get nftLeft(): BigInt | null {
    let value = this.get("nftLeft");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set nftLeft(value: BigInt | null) {
    if (value === null) {
      this.unset("nftLeft");
    } else {
      this.set("nftLeft", Value.fromBigInt(value as BigInt));
    }
  }
}