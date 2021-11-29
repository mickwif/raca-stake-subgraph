import { Address, BigInt, log } from "@graphprotocol/graph-ts";

import {
  AddPoolEvent,
  RACAstake1,
  StakeEvent,
} from "../generated/RACAStake1/RACAstake1";
import { RACAStake1Pool, StakeHistory } from "../generated/schema";

const RACAstake1_ADDRESS = "0x325B2604E3fd2A17C5C99DAb3769051d3BaCa88f";
const RACAstake2_ADDRESS = "0x95270be1D4912d07442bAD300ac93f3B1D1db511";
const NFTstake1_ADDRESS = "0x7A19c2Dd05e259757279702b725222C9479780ac";
const NFTstake2_ADDRESS = "0xb1A620c645152165cce817800Df62AF13aA530bd";

export function handleRacaStake1(event: StakeEvent): void {
  let stakeHistory = new StakeHistory(event.transaction.hash.toHex());
  stakeHistory.user = event.params.user;
  stakeHistory.poolId = event.params.pid;
  let racaStake1 = RACAstake1.bind(event.address);
  let callResult = racaStake1.try_pool(event.params.pid);
  if (callResult.reverted) {
    log.info("RacaStake1 reverted.", []);
  } else {
    stakeHistory.stakeTokenAddress = callResult.value.value0;
    stakeHistory.stakeAmount = callResult.value.value1;
  }
  stakeHistory.timestamp = event.block.timestamp;
  stakeHistory.txhash = event.transaction.hash;
  stakeHistory.save();
}

export function handleAddPool1(event: AddPoolEvent): void {
  let pool = new RACAStake1Pool(event.transaction.hash.toHex());
  let racaStake1 = RACAstake1.bind(event.address);
  let callRes = racaStake1.try_pool(BigInt.fromString("1"));
  if (callRes.reverted) {
    log.info("RacaStake1 reverted.", []);
  } else {
    pool.tokenAddress = callRes.value.value0;
    pool.stakeAmount = callRes.value.value1;
    pool.stakeTime = callRes.value.value2;
    pool.nftAddress = callRes.value.value3;
    pool.nftTokenIds = [callRes.value.value4];
    pool.save();
  }
}
