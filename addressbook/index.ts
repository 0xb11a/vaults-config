import Chain from './types/chain';
import { ChainId, ChainIdKey } from './types/chainid';
import { ReadonlyRecord } from './types/readonly-record';

import aBook from './addressbook.json';
import { convertSymbolTokenMapToAddressTokenMap } from './util/convertSymbolTokenMapToAddressTokenMap';

export { ChainId }; // enum which is compiled to a JS object
export type { Chain };
export type { Token, TokenWithId } from './types/token';

const _mantle = aBook.mantle as any as Chain;
const mantle = {
  platforms: _mantle.platforms,
  tokens: _mantle.tokens,
  tokenAddressMap: convertSymbolTokenMapToAddressTokenMap(_mantle.tokens),
};

export const addressBook: ReadonlyRecord<ChainIdKey, Chain> = {
  mantle,
};

export const addressBookByChainId: ReadonlyRecord<`${ChainId}`, Chain> = {
  [ChainId.mantle]: mantle,
} as const;