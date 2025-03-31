import type { Finance } from './finance';
import type { Token, TokenWithId } from './token';

export interface Chain {
  readonly platforms: Record<string, Record<string, string>> & {
    beefyfinance: Finance;
  };
  readonly tokens: Record<string, Token>;
  readonly tokenAddressMap: Record<string, TokenWithId>;
}

// back-compat
export type { Chain as default };