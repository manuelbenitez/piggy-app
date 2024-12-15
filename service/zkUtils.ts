// import { Provider, utils, Contract, Signer } from "zksync-web3";
// import { ethers } from "ethers";

// // ABI simplificado para los contratos (deberás reemplazarlo con el ABI completo)
// const LEVEL_BADGE_ABI = ["function mint(address to) external returns (uint256)"];
// const ERC20_ABI = ["function approve(address spender, uint256 amount) external returns (bool)"];

// export const setupZkSync = async () => {
//   // Crear provider de zkSync
//   const provider = new Provider("https://sepolia.era.zksync.dev");

//   // Crear signer con el provider de zkSync

//   const signer = await provider.getSigner();
//   const zkSyncSigner = await signer.connect(provider);

//   return { provider, signer: zkSyncSigner };
// };

// export const getLevelBadgesContract = async (contractAddress: string, signer: Signer) => {
//   return new Contract(contractAddress, LEVEL_BADGE_ABI, signer);
// };

// export const approveTokenForPaymaster = async (
//   tokenAddress: string,
//   paymasterAddress: string,
//   amount: bigint,
//   signer: ethers.Signer
// ) => {
//   const tokenContract = new Contract(tokenAddress, ERC20_ABI, signer);
//   const tx = await tokenContract.approve(paymasterAddress, amount);
//   await tx.wait();
// };

// export const mintWithPaymaster = async ({
//   levelBadgesAddress,
//   paymasterAddress,
//   tokenAddress,
//   userAddress,
//   signer,
// }: {
//   levelBadgesAddress: string;
//   paymasterAddress: string;
//   tokenAddress: string;
//   userAddress: string;
//   signer: ethers.Signer;
// }) => {
//   // Obtener el contrato con el signer
//   const levelBadgesContract = await getLevelBadgesContract(levelBadgesAddress, signer);

//   // Configurar los parámetros del paymaster
//   const paymasterParams = utils.getPaymasterParams(paymasterAddress, {
//     type: "ApprovalBased",
//     token: tokenAddress,
//     minimalAllowance: BigInt("1"),
//     innerInput: new Uint8Array(),
//   });

//   // Ejecutar la transacción de mint
//   const tx = await levelBadgesContract.mint(userAddress, {
//     customData: {
//       paymasterParams,
//       gasPerPubdata: utils.DEFAULT_GAS_PER_PUBDATA_LIMIT,
//     },
//     gasLimit: 1000000, // Ajustado a un valor más razonable
//   });

//   return await tx.wait();
// };
