import type { ChainIdMap } from '../types/chainid.js';

export const chainIdMap = {
  mantle: 5000,
} satisfies ChainIdMap;

// back-compat
export default chainIdMap;