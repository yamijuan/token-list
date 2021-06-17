// Native SOL
export interface NativeTokenInfo {
  readonly symbol: string;
  readonly name: string;

  readonly decimals: number;
}

export type DocKey = 'website' | 'whitepaper';

export type Docs = { [key in DocKey]?: string };

export type SocialKey = 'twitter' | 'telegram' | 'medium';

export type Socials = {
  [key in SocialKey]?: string;
};

// SPL token
export interface SplTokenInfo extends NativeTokenInfo {
  readonly mint: string;

  readonly referrer?: string;

  readonly description?: string;
  readonly docs?: Docs;
  readonly socials?: Socials;
}

// SPL tokens
export interface SplTokens {
  [key: string]: SplTokenInfo;
}

// LP token
export interface LpTokenInfo extends NativeTokenInfo {
  readonly mint: string;
  readonly coin: SplTokenInfo;
  readonly pc: SplTokenInfo;

  readonly version: 2 | 3 | 4;
}

// LP tokens
export interface LpTokens {
  [key: string]: LpTokenInfo;
}
