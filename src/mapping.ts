import { Address, BigInt, log } from "@graphprotocol/graph-ts";

import {
  AddPoolEvent,
  ForceWithdrawEvent,
  HarvestEvent,
  RACAstake1,
  StakeEvent,
} from "../generated/RACAStake1/RACAstake1";
import { StakeHistory } from "../generated/schema";

const RACAstake1_ADDRESS = "0x325B2604E3fd2A17C5C99DAb3769051d3BaCa88f";
const RACAstake2_ADDRESS = "0x95270be1D4912d07442bAD300ac93f3B1D1db511";
const NFTstake1_ADDRESS = "0x7A19c2Dd05e259757279702b725222C9479780ac";
const NFTstake2_ADDRESS = "0xb1A620c645152165cce817800Df62AF13aA530bd";

export function handleRacaStake(event: StakeEvent): void {
  let stakeHistory = new StakeHistory(event.transaction.hash.toHex());
  stakeHistory.user = event.params.user;
  stakeHistory.poolId = event.params.pid;
  stakeHistory.contract = event.address;
  // @Deprecated The function call would fail as the node is not archive node
  // let racaStake1 = RACAstake1.bind(event.address);
  // let callResult = racaStake1.try_pool(event.params.pid);
  // if (callResult.reverted) {
  //   log.info("RacaStake1 reverted.", []);
  // } else {
  //   stakeHistory.stakeTokenAddress = callResult.value.value0;
  //   stakeHistory.stakeAmount = callResult.value.value1;
  // }
  stakeHistory.type = "Stake";
  stakeHistory.timestamp = event.block.timestamp;
  stakeHistory.txhash = event.transaction.hash;
  stakeHistory.save();
}

export function handleRacaStakeForceWithdraw(event: ForceWithdrawEvent): void {
  let stakeHistory = new StakeHistory(event.transaction.hash.toHex());
  stakeHistory.user = event.params.user;
  stakeHistory.poolId = event.params.pid;
  stakeHistory.contract = event.address;
  stakeHistory.type = "ForceWithdraw";
  stakeHistory.timestamp = event.block.timestamp;
  stakeHistory.txhash = event.transaction.hash;
  stakeHistory.save();
}
export function handleRacaStakeHarvest(event: HarvestEvent): void {
  let stakeHistory = new StakeHistory(event.transaction.hash.toHex());
  stakeHistory.user = event.params.user;
  stakeHistory.poolId = event.params.pid;
  stakeHistory.contract = event.address;
  stakeHistory.type = "Harvest";
  stakeHistory.timestamp = event.block.timestamp;
  stakeHistory.txhash = event.transaction.hash;
  stakeHistory.save();
}

