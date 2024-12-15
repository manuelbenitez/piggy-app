export const API_ENDPOINT = "https://piggy-edu-production.up.railway.app/";
export const RPC_ENDPOINT = "https://sepolia.era.zksync.dev";

export function resolveBadgesAddresses(level: number) {
  switch (level) {
    case 0:
      return "0x796C9291a0A0f806151D3c6C631A2d5F9cff06B4";
    case 1:
      return "0xEAe3DE39EEA51b4D6e09C7372800e5745Cf76B32";
    case 2:
      return "0x0145800ba4f999d92f6B83e1b42Ad84076860056";
  }
}
