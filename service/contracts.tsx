import { JsonRpcProvider } from "ethers";
import {
  LevelBadges,
  LevelBadges__factory,
  LevelRewardsClaim,
  LevelRewardsClaim__factory,
  MyERC20,
  MyERC20__factory,
  MyPaymaster,
  MyPaymaster__factory,
} from "@public/types";
import { RPC_ENDPOINT } from "./api.constants";

export const getLevelBadgesContract = async (
  contractAddress: string,
  chainId: number
): Promise<LevelBadges> => {
  const provider = new JsonRpcProvider(RPC_ENDPOINT, chainId);

  return LevelBadges__factory.connect(contractAddress, provider);
};

export const levelRewardsClaimContract = async (
  contractAddress: string,
  chainId: number
): Promise<LevelRewardsClaim> => {
  const provider = new JsonRpcProvider(RPC_ENDPOINT, chainId);

  return LevelRewardsClaim__factory.connect(contractAddress, provider);
};

export const getGenericERC20Contract = async (
  contractAddress: string,
  chainId: number
): Promise<MyERC20> => {
  const provider = new JsonRpcProvider(RPC_ENDPOINT, chainId);

  return MyERC20__factory.connect(contractAddress, provider);
};

export const getPaymasterContract = async (
  contractAddress: string,
  chainId: number
): Promise<MyPaymaster> => {
  const provider = new JsonRpcProvider(RPC_ENDPOINT, chainId);

  return MyPaymaster__factory.connect(contractAddress, provider);
};
