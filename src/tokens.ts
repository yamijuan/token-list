import { LpTokens, SplTokenInfo, SplTokens } from './types';

export const SOL: SplTokenInfo = {
  symbol: 'SOL',
  name: 'Solana',
  mint: '11111111111111111111111111111111',
  decimals: 9
};

export const WSOL: SplTokenInfo = {
  symbol: 'WSOL',
  name: 'Wrapped SOL',
  mint: 'So11111111111111111111111111111111111111112',
  decimals: 9,
  referrer: 'HTcarLHe7WRxBQCWvhVB8AP56pnEtJUV2jDGvcpY3xo5'
};

export const SPL_TOKENS: SplTokens = {
  WSOL: { ...WSOL },
  BTC: {
    symbol: 'BTC',
    name: 'Wrapped Bitcoin',
    mint: '9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E',
    decimals: 6,
    referrer: 'GZpS8cY8Nt8HuqxzJh6PXTdSxc38vFUjBmi7eEUkkQtG'
  },
  ETH: {
    symbol: 'ETH',
    name: 'Wrapped Ethereum',
    mint: '2FPyTwcZLUg1MDrwsyoP4D6s1tM7hAkHYRjkNb5w6Pxk',
    decimals: 6,
    referrer: 'CXPTcSxxh4AT38gtv3SPbLS7oZVgXzLbMb83o4ziXjjN'
  },
  USDT: {
    symbol: 'USDT',
    name: 'USDT',
    mint: 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB',
    decimals: 6,
    referrer: '8DwwDNagph8SdwMUdcXS5L9YAyutTyDJmK6cTKrmNFk3'
  },
  WUSDT: {
    symbol: 'WUSDT',
    name: 'Wrapped USDT',
    mint: 'BQcdHdAQW1hczDbBi9hiegXAR7A98Q9jx3X3iBBBDiq4',
    decimals: 6,
    referrer: 'CA98hYunCLKgBuD6N8MJSgq1GbW9CXdksLf5mw736tS3'
  },
  USDC: {
    symbol: 'USDC',
    name: 'USDC',
    mint: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
    decimals: 6,
    referrer: '92vdtNjEg6Zth3UU1MgPgTVFjSEzTHx66aCdqWdcRkrg'
  },
  WUSDC: {
    symbol: 'WUSDC',
    name: 'Wrapped USDC',
    mint: 'BXXkv6z8ykpG1yuvUDPgh732wzVHB69RnB9YgSYh3itW',
    decimals: 6,
    referrer: 'J5NszveXYZKmEvk8txGaV2SmyPGjuEp41Pz4QXmX31Tm'
  },
  YFI: {
    symbol: 'YFI',
    name: 'Wrapped YFI',
    mint: '3JSf5tPeuscJGtaCp5giEiDhv51gQ4v3zWg8DGgyLfAB',
    decimals: 6,
    referrer: 'DZjgzKfYzZBBSTo5vytMYvGdNF933DvuX8TftDMrThrb'
  },
  LINK: {
    symbol: 'LINK',
    name: 'Wrapped Chainlink',
    mint: 'CWE8jPTUYhdCTZYWPTe1o5DFqfdjzWKc9WKz6rSjQUdG',
    decimals: 6,
    referrer: 'DRSKKsYZaPEFkRgGywo7KWBGZikf71R9aDr8tjtpr41V'
  },
  XRP: {
    symbol: 'XRP',
    name: 'Wrapped XRP',
    mint: 'Ga2AXHpfAF6mv2ekZwcsJFqu7wB4NV331qNH7fW9Nst8',
    decimals: 6,
    referrer: '6NeHPXG142tAE2Ej3gHgT2N66i1KH6PFR6PBZw6RyrwH'
  },
  SUSHI: {
    symbol: 'SUSHI',
    name: 'Wrapped SUSHI',
    mint: 'AR1Mtgh7zAtxuxGd2XPovXPVjcSdY3i4rQYisNadjfKy',
    decimals: 6,
    referrer: '59QxHeHgb28tDc3gStnrW8FNKC9qWuRmRZHBaAqCerJX'
  },
  ALEPH: {
    symbol: 'ALEPH',
    name: 'Wrapped ALEPH',
    mint: 'CsZ5LZkDS7h9TDKjrbL7VAwQZ9nsRu8vJLhRYfmGaN8K',
    decimals: 6,
    referrer: '8FKAKrenJMDd7V6cxnM5BsymHTjqxgodtHbLwZReMnWW'
  },
  SXP: {
    symbol: 'SXP',
    name: 'Wrapped SXP',
    mint: 'SF3oTvfWzEP3DTwGSvUXRrGTvr75pdZNnBLAH9bzMuX',
    decimals: 6,
    referrer: '97Vyotr284UM2Fyq9gbfQ3azMYtgf7cjnsf8pN1PFfY9'
  },
  HGET: {
    symbol: 'HGET',
    name: 'Wrapped HGET',
    mint: 'BtZQfWqDGbk9Wf2rXEiWyQBdBY1etnUUn6zEphvVS7yN',
    decimals: 6,
    referrer: 'AGY2wy1ANzLM2jJLSkVxPUYAY5iAYXYsLMQkoQsAhucj'
  },
  CREAM: {
    symbol: 'CREAM',
    name: 'Wrapped CREAM',
    mint: '5Fu5UUgbjpUvdBveb3a1JTNirL8rXtiYeSMWvKjtUNQv',
    decimals: 6,
    referrer: '7WPzEiozJ69MQe8bfbss1t2unR6bHR4S7FimiUVRgu7P'
  },
  UBXT: {
    symbol: 'UBXT',
    name: 'Wrapped UBXT',
    mint: '873KLxCbz7s9Kc4ZzgYRtNmhfkQrhfyWGZJBmyCbC3ei',
    decimals: 6,
    referrer: '9aocFzNkSVj9TCS6cJk2uYyuzEpXPWT7xoBBF9JcZ879'
  },
  HNT: {
    symbol: 'HNT',
    name: 'Wrapped HNT',
    mint: 'HqB7uswoVg4suaQiDP3wjxob1G5WdZ144zhdStwMCq7e',
    decimals: 6,
    referrer: 'B61oHrGCFh8P75Z2cRDiw2nbEwbMyhVfZhMWiwxU2qCV'
  },
  FRONT: {
    symbol: 'FRONT',
    name: 'Wrapped FRONT',
    mint: '9S4t2NEAiJVMvPdRYKVrfJpBafPBLtvbvyS3DecojQHw',
    decimals: 6,
    referrer: 'FnasnCc7c43hd2nanSmRjh9Sf9Cgz6aEvNj6wpDznS5h'
  },
  AKRO: {
    symbol: 'AKRO',
    name: 'Wrapped AKRO',
    mint: '6WNVCuxCGJzNjmMZoKyhZJwvJ5tYpsLyAtagzYASqBoF',
    decimals: 6,
    referrer: 'FihBmWJbiLSEvq4QZpPPdjokdMgxqq6pESZ7oMkE1qJH'
  },
  HXRO: {
    symbol: 'HXRO',
    name: 'Wrapped HXRO',
    mint: 'DJafV9qemGp7mLMEn5wrfqaFwxsbLgUsGVS16zKRk9kc',
    decimals: 6,
    referrer: '4NgrGZDRCzyqiwYvKPEePTKfQXtWzKmSDBoZJjRw6wNC'
  },
  UNI: {
    symbol: 'UNI',
    name: 'Wrapped UNI',
    mint: 'DEhAasscXF4kEGxFgJ3bq4PpVGp5wyUxMRvn6TzGVHaw',
    decimals: 6,
    referrer: '4ntxDv95ajBbXfZyGy3UhcQDx8xmH1yJ6eKvuNNH466x'
  },
  SRM: {
    symbol: 'SRM',
    name: 'Serum',
    mint: 'SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt',
    decimals: 6,
    referrer: 'HYxa4Ea1dz7ya17Cx18rEGUA1WbCvKjXjFKrnu8CwugH'
  },
  FTT: {
    symbol: 'FTT',
    name: 'Wrapped FTT',
    mint: 'AGFEad2et2ZJif9jaGpdMixQqvW5i81aBdvKe7PHNfz3',
    decimals: 6,
    referrer: 'CafpgSh8KGL2GPTjdXfctD3vXngNZDJ3Q92FTfV71Hmt'
  },
  MSRM: {
    symbol: 'MSRM',
    name: 'MegaSerum',
    mint: 'MSRMcoVyrFxnSgo5uXwone5SKcGhT1KEJMFEkMEWf9L',
    decimals: 0,
    referrer: 'Ge5q9x8gDUNYqqLA1MdnCzWNJGsbj3M15Yxse2cDbw9z'
  },
  TOMO: {
    symbol: 'TOMO',
    name: 'Wrapped TOMO',
    mint: 'GXMvfY2jpQctDqZ9RoU3oWPhufKiCcFEfchvYumtX7jd',
    decimals: 6,
    referrer: '9fexfN3eZomF5gfenG5L9ydbKRQkPhq6x74rb5iLrvXP'
  },
  KARMA: {
    symbol: 'KARMA',
    name: 'Wrapped KARMA',
    mint: 'EcqExpGNFBve2i1cMJUTR4bPXj4ZoqmDD2rTkeCcaTFX',
    decimals: 4,
    referrer: 'J7KhfbWsxB7fcPVzSX8Vb6ovrawfeuKWhRLAR8UtYzH9'
  },
  LUA: {
    symbol: 'LUA',
    name: 'Wrapped LUA',
    mint: 'EqWCKXfs3x47uVosDpTRgFniThL9Y8iCztJaapxbEaVX',
    decimals: 6,
    referrer: 'HuZwNApjVFuFSDgrwZA8GP2JD7WMby4qt6rkWDnaMo7j'
  },
  MATH: {
    symbol: 'MATH',
    name: 'Wrapped MATH',
    mint: 'GeDS162t9yGJuLEHPWXXGrb1zwkzinCgRwnT8vHYjKza',
    decimals: 6,
    referrer: 'C9K1M8sJX8WMdsnFT7DuzdiHHunEj79EsLuz4DixQYGm'
  },
  KEEP: {
    symbol: 'KEEP',
    name: 'Wrapped KEEP',
    mint: 'GUohe4DJUA5FKPWo3joiPgsB7yzer7LpDmt1Vhzy3Zht',
    decimals: 6,
    referrer: 'GqLDCPz5KCD2AdC8RhkETUynn8dBTkfZ9Eby1HJ4CtZo'
  },
  SWAG: {
    symbol: 'SWAG',
    name: 'Wrapped SWAG',
    mint: '9F9fNTT6qwjsu4X4yWYKZpsbw5qT7o6yR2i57JF2jagy',
    decimals: 6,
    referrer: 'DWRYUNES24866DZUJwwWuKaUwNc2ZbXwn5rR2KWFXN7m'
  },
  FIDA: {
    symbol: 'FIDA',
    name: 'Bonfida',
    mint: 'EchesyfXePKdLtoiZSL8pBe8Myagyy8ZRqsACNCFGnvp',
    decimals: 6,
    referrer: 'AeAsG75UmyPDB271c6NHonHxXAPXfkvhcf2xjfJhReS8'
  },
  KIN: {
    symbol: 'KIN',
    name: 'KIN',
    mint: 'kinXdEcpDQeHPEuQnqmUgtYykqKGVFq6CeVX5iAHJq6',
    decimals: 5,
    referrer: 'AevFXmApVxN2yk1iemSxXc6Wy7Z1udUEfST11kuYKmr9'
  },
  MAPS: {
    symbol: 'MAPS',
    name: 'MAPS',
    mint: 'MAPS41MDahZ9QdKXhVa4dWB9RuyfV4XqhyAZ8XcYepb',
    decimals: 6,
    referrer: '9jXV1z2VocJpSikbiVyUhLz71CU7D5mBqprhtsg8rbgp'
  },
  OXY: {
    symbol: 'OXY',
    name: 'OXY',
    mint: 'z3dn17yLaGMKffVogeFHQ9zWVcXgqgf3PQnDsNs2g6M',
    decimals: 6,
    referrer: '7W23ytr3NyMdfGq6zFsALvfM97gN9YXBkKyXh55REAqe'
  },
  RAY: {
    symbol: 'RAY',
    name: 'Raydium',
    mint: '4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R',
    decimals: 6,
    referrer: '33XpMmMQRf6tSPpmYyzpwU4uXpZHkFwCZsusD9dMYkjy'
  },
  xCOPE: {
    symbol: 'xCOPE',
    name: 'xCOPE',
    mint: '3K6rftdAaQYMPunrtNRHgnK2UAtjm2JwyT2oCiTDouYE',
    decimals: 0,
    referrer: '8DTehuES4tfnd2SrqcjN52XofxWXGjiLZRgM12U9pB6f'
  },
  COPE: {
    symbol: 'COPE',
    name: 'COPE',
    mint: '8HGyAAB1yoM1ttS7pXjHMa3dukTFGQggnFFH3hJZgzQh',
    decimals: 6,
    referrer: 'G7UYwWhkmgeL57SUKFF45K663V9TdXZw6Ho6ZLQ7p4p'
  },
  STEP: {
    symbol: 'STEP',
    name: 'STEP',
    mint: 'StepAscQoEioFxxWGnh2sLBDFp9d8rvKz2Yp39iDpyT',
    decimals: 9,
    referrer: 'EFQVX1S6dFroDDhJDAnMTX4fCfjt4fJXHdk1eEtJ2uRY'
  },
  MEDIA: {
    symbol: 'MEDIA',
    name: 'MEDIA',
    mint: 'ETAtLmCmsoiEEKfNrHKJ2kYy3MoABhU6NQvpSfij5tDs',
    decimals: 6,
    referrer: 'AYnaG3AidNWFzjq9U3BJSsQ9DShE8g7FszriBDtRFvsx',

    description:
      'Media Network is a new protocol that bypasses traditional CDN providers’ centralized approach for a self-governed and open source solution where everyone can participate. Media Network creates a distributed bandwidth market that enables service providers such as media platforms to hire resources from the network and dynamically come and go as the demand for last-mile data delivery shifts. It allows anyone to organically serve content without introducing any trust assumptions or pre-authentication requirements. Participants earn MEDIA rewards for their bandwidth contributions, a fixed supply SPL token minted on Solana’s Blockchain.',
    docs: {
      website: 'https://media.network',
      whitepaper: 'https://media.network/whitepaper.pdf'
    },
    socials: {
      twitter: 'https://twitter.com/Media_FDN',
      telegram: 'https://t.me/Media_FDN',
      medium: 'https://mediafoundation.medium.com'
    }
  },
  ROPE: {
    symbol: 'ROPE',
    name: 'ROPE',
    mint: '8PMHT4swUMtBzgHnh5U564N5sjPSiUz2cjEQzFnnP1Fo',
    decimals: 9,
    referrer: '5sGVVniBSPLTwRHDETShovq7STRH2rJwbvdvvH3NcVTF'
  },
  MER: {
    symbol: 'MER',
    name: 'Mercurial',
    mint: 'MERt85fc5boKw3BW1eYdxonEuJNvXbiMbs6hvheau5K',
    decimals: 6,
    referrer: '36F4ryvqaNW2yKQsAry4ZHCZ3j7tz3gtEz7NEwv7pSRu',

    description:
      'Mercurial is building DeFi’s first dynamic vaults for stable assets on Solana, providing the technical tools for users to easily deposit, swap and mint stable assets.\n\nInnovations\nMercurial will be introducing several key new technical innovations, including on-chain algorithms to regulate the flow of assets and dynamic fees that tap on the market and price data to assist LPs in optimizing performance. We will also be developing a unique pricing curve that will be the first to combine high efficiency, multi-token support, and generalizability for all types of token sets.\n\nMaximizing Capital Utlilization\nMercurial vaults will dynamically utilize assets for a wide range of use cases, like low slippage swaps, lending, flash loans, and external third-party decentralized protocols. To increase pegged assets availability on Solana, we will allow the creation of synthetics, like mUSD or mBTC, which can be added to our vaults to improve liquidity for other stables and facilitate interaction with other third-party decentralized protocols.\n\nStarting with a vault for the most common stables, for example, USDC, USDT, wUSDC, and wDAI, we will be facilitating low slippage swaps with dynamic fees. Features will be added as key technical and ecosystem pieces become available on Solana, i.e. inter-program composability, price oracles, etc.\n\nMER\nThe MER token will be used to accrue value for the holder via fees from swaps, commission from yield farms, and as collateral for synthetic stables like mUSD. MER will also be intrinsically linked to the governance and growth of Mercurial, playing a crucial role in regulating the system across governance, insurance, and bootstrapping.',
    docs: {
      website: 'https://www.mercurial.finance',
      whitepaper: 'https://www.mercurial.finance/Mercurial-Lite-Paper-v1.pdf'
    },
    socials: {
      twitter: 'https://twitter.com/MercurialFi',
      telegram: 'https://t.me/MercurialFi',
      medium: 'https://mercurialfi.medium.com/'
    }
  }
};

export const LP_TOKENS: LpTokens = {
  'RAY-WUSDT': {
    symbol: 'RAY-WUSDT',
    name: 'RAY-WUSDT V2 LP',
    coin: { ...SPL_TOKENS.RAY },
    pc: { ...SPL_TOKENS.WUSDT },

    mint: 'CzPDyvotTcxNqtPne32yUiEVQ6jk42HZi1Y3hUu7qf7f',
    decimals: SPL_TOKENS.RAY.decimals,
    version: 2
  },
  'RAY-SOL': {
    symbol: 'RAY-SOL',
    name: 'RAY-SOL LP',
    coin: { ...SPL_TOKENS.RAY },
    pc: { ...SOL },

    mint: '134Cct3CSdRCbYgq5SkwmHgfwjJ7EM5cG9PzqffWqECx',
    decimals: SPL_TOKENS.RAY.decimals,
    version: 2
  },
  'LINK-WUSDT': {
    symbol: 'LINK-WUSDT',
    name: 'LINK-WUSDT LP',
    coin: { ...SPL_TOKENS.LINK },
    pc: { ...SPL_TOKENS.WUSDT },

    mint: 'EVDmwajM5U73PD34bYPugwiA4Eqqbrej4mLXXv15Z5qR',
    decimals: SPL_TOKENS.LINK.decimals,
    version: 2
  },
  'ETH-WUSDT': {
    symbol: 'ETH-WUSDT',
    name: 'ETH-WUSDT LP',
    coin: { ...SPL_TOKENS.ETH },
    pc: { ...SPL_TOKENS.WUSDT },

    mint: 'KY4XvwHy7JPzbWYAbk23jQvEb4qWJ8aCqYWREmk1Q7K',
    decimals: SPL_TOKENS.ETH.decimals,
    version: 2
  },
  'RAY-USDC': {
    symbol: 'RAY-USDC',
    name: 'RAY-USDC LP',
    coin: { ...SPL_TOKENS.RAY },
    pc: { ...SPL_TOKENS.USDC },

    mint: 'FgmBnsF5Qrnv8X9bomQfEtQTQjNNiBCWRKGpzPnE5BDg',
    decimals: SPL_TOKENS.RAY.decimals,
    version: 2
  },
  'RAY-SRM': {
    symbol: 'RAY-SRM',
    name: 'RAY-SRM LP',
    coin: { ...SPL_TOKENS.RAY },
    pc: { ...SPL_TOKENS.SRM },

    mint: '5QXBMXuCL7zfAk39jEVVEvcrz1AvBGgT9wAhLLHLyyUJ',
    decimals: SPL_TOKENS.RAY.decimals,
    version: 2
  },
  // v3
  'RAY-WUSDT-V3': {
    symbol: 'RAY-WUSDT',
    name: 'RAY-WUSDT V3 LP',
    coin: { ...SPL_TOKENS.RAY },
    pc: { ...SPL_TOKENS.WUSDT },
    mint: 'FdhKXYjCou2jQfgKWcNY7jb8F2DPLU1teTTTRfLBD2v1',

    decimals: SPL_TOKENS.RAY.decimals,
    version: 3
  },
  'RAY-USDC-V3': {
    symbol: 'RAY-USDC',
    name: 'RAY-USDC LP',
    coin: { ...SPL_TOKENS.RAY },
    pc: { ...SPL_TOKENS.USDC },

    mint: 'BZFGfXMrjG2sS7QT2eiCDEevPFnkYYF7kzJpWfYxPbcx',
    decimals: SPL_TOKENS.RAY.decimals,
    version: 3
  },
  'RAY-SRM-V3': {
    symbol: 'RAY-SRM',
    name: 'RAY-SRM LP',
    coin: { ...SPL_TOKENS.RAY },
    pc: { ...SPL_TOKENS.SRM },

    mint: 'DSX5E21RE9FB9hM8Nh8xcXQfPK6SzRaJiywemHBSsfup',
    decimals: SPL_TOKENS.RAY.decimals,
    version: 3
  },
  'RAY-SOL-V3': {
    symbol: 'RAY-SOL',
    name: 'RAY-SOL LP',
    coin: { ...SPL_TOKENS.RAY },
    pc: { ...SOL },

    mint: 'F5PPQHGcznZ2FxD9JaxJMXaf7XkaFFJ6zzTBcW8osQjw',
    decimals: SPL_TOKENS.RAY.decimals,
    version: 3
  },
  'RAY-ETH-V3': {
    symbol: 'RAY-ETH',
    name: 'RAY-ETH LP',
    coin: { ...SPL_TOKENS.RAY },
    pc: { ...SPL_TOKENS.ETH },

    mint: '8Q6MKy5Yxb9vG1mWzppMtMb2nrhNuCRNUkJTeiE3fuwD',
    decimals: SPL_TOKENS.RAY.decimals,
    version: 3
  },
  // v4
  'FIDA-RAY-V4': {
    symbol: 'FIDA-RAY',
    name: 'FIDA-RAY LP',
    coin: { ...SPL_TOKENS.FIDA },
    pc: { ...SPL_TOKENS.RAY },

    mint: 'DsBuznXRTmzvEdb36Dx3aVLVo1XmH7r1PRZUFugLPTFv',
    decimals: SPL_TOKENS.FIDA.decimals,
    version: 4
  },
  'OXY-RAY-V4': {
    symbol: 'OXY-RAY',
    name: 'OXY-RAY LP',
    coin: { ...SPL_TOKENS.OXY },
    pc: { ...SPL_TOKENS.RAY },

    mint: 'FwaX9W7iThTZH5MFeasxdLpxTVxRcM7ZHieTCnYog8Yb',
    decimals: SPL_TOKENS.OXY.decimals,
    version: 4
  },
  'MAPS-RAY-V4': {
    symbol: 'MAPS-RAY',
    name: 'MAPS-RAY LP',
    coin: { ...SPL_TOKENS.MAPS },
    pc: { ...SPL_TOKENS.RAY },

    mint: 'CcKK8srfVdTSsFGV3VLBb2YDbzF4T4NM2C3UEjC39RLP',
    decimals: SPL_TOKENS.MAPS.decimals,
    version: 4
  },
  'KIN-RAY-V4': {
    symbol: 'KIN-RAY',
    name: 'KIN-RAY LP',
    coin: { ...SPL_TOKENS.KIN },
    pc: { ...SPL_TOKENS.RAY },

    mint: 'CHT8sft3h3gpLYbCcZ9o27mT5s3Z6VifBVbUiDvprHPW',
    decimals: 6,
    version: 4
  },
  'RAY-USDT-V4': {
    symbol: 'RAY-USDT',
    name: 'RAY-USDT LP',
    coin: { ...SPL_TOKENS.RAY },
    pc: { ...SPL_TOKENS.USDT },

    mint: 'C3sT1R3nsw4AVdepvLTLKr5Gvszr7jufyBWUCvy4TUvT',
    decimals: SPL_TOKENS.RAY.decimals,
    version: 4
  },
  'SOL-USDC-V4': {
    symbol: 'SOL-USDC',
    name: 'SOL-USDC LP',
    coin: { ...SOL },
    pc: { ...SPL_TOKENS.USDC },

    mint: '8HoQnePLqPj4M7PUDzfw8e3Ymdwgc7NLGnaTUapubyvu',
    decimals: SOL.decimals,
    version: 4
  },
  'YFI-USDC-V4': {
    symbol: 'YFI-USDC',
    name: 'YFI-USDC LP',
    coin: { ...SPL_TOKENS.YFI },
    pc: { ...SPL_TOKENS.USDC },

    mint: '865j7iMmRRycSYUXzJ33ZcvLiX9JHvaLidasCyUyKaRE',
    decimals: SPL_TOKENS.YFI.decimals,
    version: 4
  },
  'SRM-USDC-V4': {
    symbol: 'SRM-USDC',
    name: 'SRM-USDC LP',
    coin: { ...SPL_TOKENS.SRM },
    pc: { ...SPL_TOKENS.USDC },

    mint: '9XnZd82j34KxNLgQfz29jGbYdxsYznTWRpvZE3SRE7JG',
    decimals: SPL_TOKENS.SRM.decimals,
    version: 4
  },
  'FTT-USDC-V4': {
    symbol: 'FTT-USDC',
    name: 'FTT-USDC LP',
    coin: { ...SPL_TOKENS.FTT },
    pc: { ...SPL_TOKENS.USDC },

    mint: '75dCoKfUHLUuZ4qEh46ovsxfgWhB4icc3SintzWRedT9',
    decimals: SPL_TOKENS.FTT.decimals,
    version: 4
  },
  'BTC-USDC-V4': {
    symbol: 'BTC-USDC',
    name: 'BTC-USDC LP',
    coin: { ...SPL_TOKENS.BTC },
    pc: { ...SPL_TOKENS.USDC },

    mint: '2hMdRdVWZqetQsaHG8kQjdZinEMBz75vsoWTCob1ijXu',
    decimals: SPL_TOKENS.BTC.decimals,
    version: 4
  },
  'SUSHI-USDC-V4': {
    symbol: 'SUSHI-USDC',
    name: 'SUSHI-USDC LP',
    coin: { ...SPL_TOKENS.SUSHI },
    pc: { ...SPL_TOKENS.USDC },

    mint: '2QVjeR9d2PbSf8em8NE8zWd8RYHjFtucDUdDgdbDD2h2',
    decimals: SPL_TOKENS.SUSHI.decimals,
    version: 4
  },
  'TOMO-USDC-V4': {
    symbol: 'TOMO-USDC',
    name: 'TOMO-USDC LP',
    coin: { ...SPL_TOKENS.TOMO },
    pc: { ...SPL_TOKENS.USDC },

    mint: 'CHyUpQFeW456zcr5XEh4RZiibH8Dzocs6Wbgz9aWpXnQ',
    decimals: SPL_TOKENS.TOMO.decimals,
    version: 4
  },
  'LINK-USDC-V4': {
    symbol: 'LINK-USDC',
    name: 'LINK-USDC LP',
    coin: { ...SPL_TOKENS.LINK },
    pc: { ...SPL_TOKENS.USDC },

    mint: 'BqjoYjqKrXtfBKXeaWeAT5sYCy7wsAYf3XjgDWsHSBRs',
    decimals: SPL_TOKENS.LINK.decimals,
    version: 4
  },
  'ETH-USDC-V4': {
    symbol: 'ETH-USDC',
    name: 'ETH-USDC LP',
    coin: { ...SPL_TOKENS.ETH },
    pc: { ...SPL_TOKENS.USDC },

    mint: '13PoKid6cZop4sj2GfoBeujnGfthUbTERdE5tpLCDLEY',
    decimals: SPL_TOKENS.ETH.decimals,
    version: 4
  },
  'xCOPE-USDC-V4': {
    symbol: 'xCOPE-USDC',
    name: 'xCOPE-USDC LP',
    coin: { ...SPL_TOKENS.xCOPE },
    pc: { ...SPL_TOKENS.USDC },

    mint: '2Vyyeuyd15Gp8aH6uKE72c4hxc8TVSLibxDP9vzspQWG',
    decimals: SPL_TOKENS.xCOPE.decimals,
    version: 4
  },
  'SOL-USDT-V4': {
    symbol: 'SOL-USDT',
    name: 'SOL-USDT LP',
    coin: { ...SOL },
    pc: { ...SPL_TOKENS.USDT },

    mint: 'Epm4KfTj4DMrvqn6Bwg2Tr2N8vhQuNbuK8bESFp4k33K',
    decimals: SOL.decimals,
    version: 4
  },
  'YFI-USDT-V4': {
    symbol: 'YFI-USDT',
    name: 'YFI-USDT LP',
    coin: { ...SPL_TOKENS.YFI },
    pc: { ...SPL_TOKENS.USDT },

    mint: 'FA1i7fej1pAbQbnY8NbyYUsTrWcasTyipKreDgy1Mgku',
    decimals: SPL_TOKENS.YFI.decimals,
    version: 4
  },
  'SRM-USDT-V4': {
    symbol: 'SRM-USDT',
    name: 'SRM-USDT LP',
    coin: { ...SPL_TOKENS.SRM },
    pc: { ...SPL_TOKENS.USDT },

    mint: 'HYSAu42BFejBS77jZAZdNAWa3iVcbSRJSzp3wtqCbWwv',
    decimals: SPL_TOKENS.SRM.decimals,
    version: 4
  },
  'FTT-USDT-V4': {
    symbol: 'FTT-USDT',
    name: 'FTT-USDT LP',
    coin: { ...SPL_TOKENS.FTT },
    pc: { ...SPL_TOKENS.USDT },

    mint: '2cTCiUnect5Lap2sk19xLby7aajNDYseFhC9Pigou11z',
    decimals: SPL_TOKENS.FTT.decimals,
    version: 4
  },
  'BTC-USDT-V4': {
    symbol: 'BTC-USDT',
    name: 'BTC-USDT LP',
    coin: { ...SPL_TOKENS.BTC },
    pc: { ...SPL_TOKENS.USDT },

    mint: 'DgGuvR9GSHimopo3Gc7gfkbKamLKrdyzWkq5yqA6LqYS',
    decimals: SPL_TOKENS.BTC.decimals,
    version: 4
  },
  'SUSHI-USDT-V4': {
    symbol: 'SUSHI-USDT',
    name: 'SUSHI-USDT LP',
    coin: { ...SPL_TOKENS.SUSHI },
    pc: { ...SPL_TOKENS.USDT },

    mint: 'Ba26poEYDy6P2o95AJUsewXgZ8DM9BCsmnU9hmC9i4Ki',
    decimals: SPL_TOKENS.SUSHI.decimals,
    version: 4
  },
  'TOMO-USDT-V4': {
    symbol: 'TOMO-USDT',
    name: 'TOMO-USDT LP',
    coin: { ...SPL_TOKENS.TOMO },
    pc: { ...SPL_TOKENS.USDT },

    mint: 'D3iGro1vn6PWJXo9QAPj3dfta6dKkHHnmiiym2EfsAmi',
    decimals: SPL_TOKENS.TOMO.decimals,
    version: 4
  },
  'LINK-USDT-V4': {
    symbol: 'LINK-USDT',
    name: 'LINK-USDT LP',
    coin: { ...SPL_TOKENS.LINK },
    pc: { ...SPL_TOKENS.USDT },

    mint: 'Dr12Sgt9gkY8WU5tRkgZf1TkVWJbvjYuPAhR3aDCwiiX',
    decimals: SPL_TOKENS.LINK.decimals,
    version: 4
  },
  'ETH-USDT-V4': {
    symbol: 'ETH-USDT',
    name: 'ETH-USDT LP',
    coin: { ...SPL_TOKENS.ETH },
    pc: { ...SPL_TOKENS.USDT },

    mint: 'nPrB78ETY8661fUgohpuVusNCZnedYCgghzRJzxWnVb',
    decimals: SPL_TOKENS.ETH.decimals,
    version: 4
  },
  'YFI-SRM-V4': {
    symbol: 'YFI-SRM',
    name: 'YFI-SRM LP',
    coin: { ...SPL_TOKENS.YFI },
    pc: { ...SPL_TOKENS.SRM },

    mint: 'EGJht91R7dKpCj8wzALkjmNdUUUcQgodqWCYweyKcRcV',
    decimals: SPL_TOKENS.YFI.decimals,
    version: 4
  },
  'FTT-SRM-V4': {
    symbol: 'FTT-SRM',
    name: 'FTT-SRM LP',
    coin: { ...SPL_TOKENS.FTT },
    pc: { ...SPL_TOKENS.SRM },

    mint: 'AsDuPg9MgPtt3jfoyctUCUgsvwqAN6RZPftqoeiPDefM',
    decimals: SPL_TOKENS.FTT.decimals,
    version: 4
  },
  'BTC-SRM-V4': {
    symbol: 'BTC-SRM',
    name: 'BTC-SRM LP',
    coin: { ...SPL_TOKENS.BTC },
    pc: { ...SPL_TOKENS.SRM },

    mint: 'AGHQxXb3GSzeiLTcLtXMS2D5GGDZxsB2fZYZxSB5weqB',
    decimals: SPL_TOKENS.BTC.decimals,
    version: 4
  },
  'SUSHI-SRM-V4': {
    symbol: 'SUSHI-SRM',
    name: 'SUSHI-SRM LP',
    coin: { ...SPL_TOKENS.SUSHI },
    pc: { ...SPL_TOKENS.SRM },

    mint: '3HYhUnUdV67j1vn8fu7ExuVGy5dJozHEyWvqEstDbWwE',
    decimals: SPL_TOKENS.SUSHI.decimals,
    version: 4
  },
  'TOMO-SRM-V4': {
    symbol: 'TOMO-SRM',
    name: 'TOMO-SRM LP',
    coin: { ...SPL_TOKENS.TOMO },
    pc: { ...SPL_TOKENS.SRM },

    mint: 'GgH9RnKrQpaMQeqmdbMvs5oo1A24hERQ9wuY2pSkeG7x',
    decimals: SPL_TOKENS.TOMO.decimals,
    version: 4
  },
  'LINK-SRM-V4': {
    symbol: 'LINK-SRM',
    name: 'LINK-SRM LP',
    coin: { ...SPL_TOKENS.LINK },
    pc: { ...SPL_TOKENS.SRM },

    mint: 'GXN6yJv12o18skTmJXaeFXZVY1iqR18CHsmCT8VVCmDD',
    decimals: SPL_TOKENS.LINK.decimals,
    version: 4
  },
  'ETH-SRM-V4': {
    symbol: 'ETH-SRM',
    name: 'ETH-SRM LP',
    coin: { ...SPL_TOKENS.ETH },
    pc: { ...SPL_TOKENS.SRM },

    mint: '9VoY3VERETuc2FoadMSYYizF26mJinY514ZpEzkHMtwG',
    decimals: SPL_TOKENS.ETH.decimals,
    version: 4
  },
  'SRM-SOL-V4': {
    symbol: 'SRM-SOL',
    name: 'SRM-SOL LP',
    coin: { ...SPL_TOKENS.SRM },
    pc: { ...SOL },

    mint: 'AKJHspCwDhABucCxNLXUSfEzb7Ny62RqFtC9uNjJi4fq',
    decimals: SPL_TOKENS.SRM.decimals,
    version: 4
  },
  'STEP-USDC-V4': {
    symbol: 'STEP-USDC',
    name: 'STEP-USDC LP',
    coin: { ...SPL_TOKENS.STEP },
    pc: { ...SPL_TOKENS.USDC },

    mint: '3k8BDobgihmk72jVmXYLE168bxxQUhqqyESW4dQVktqC',
    decimals: SPL_TOKENS.STEP.decimals,
    version: 4
  },
  'MEDIA-USDC-V4': {
    symbol: 'MEDIA-USDC',
    name: 'MEDIA-USDC LP',
    coin: { ...SPL_TOKENS.MEDIA },
    pc: { ...SPL_TOKENS.USDC },

    mint: 'A5zanvgtioZGiJMdEyaKN4XQmJsp1p7uVxaq2696REvQ',
    decimals: SPL_TOKENS.MEDIA.decimals,
    version: 4
  },
  'ROPE-USDC-V4': {
    symbol: 'ROPE-USDC',
    name: 'ROPE-USDC LP',
    coin: { ...SPL_TOKENS.ROPE },
    pc: { ...SPL_TOKENS.USDC },

    mint: 'Cq4HyW5xia37tKejPF2XfZeXQoPYW6KfbPvxvw5eRoUE',
    decimals: SPL_TOKENS.ROPE.decimals,
    version: 4
  },
  'MER-USDC-V4': {
    symbol: 'MER-USDC',
    name: 'MER-USDC LP',
    coin: { ...SPL_TOKENS.MER },
    pc: { ...SPL_TOKENS.USDC },

    mint: '3H9NxvaZoxMZZDZcbBDdWMKbrfNj7PCF5sbRwDr7SdDW',
    decimals: SPL_TOKENS.MER.decimals,
    version: 4
  },
  'COPE-USDC-V4': {
    symbol: 'COPE-USDC',
    name: 'COPE-USDC LP',
    coin: { ...SPL_TOKENS.COPE },
    pc: { ...SPL_TOKENS.USDC },

    mint: 'Cz1kUvHw98imKkrqqu95GQB9h1frY8RikxPojMwWKGXf',
    decimals: SPL_TOKENS.COPE.decimals,
    version: 4
  },
  'ALEPH-USDC-V4': {
    symbol: 'ALEPH-USDC',
    name: 'ALEPH-USDC LP',
    coin: { ...SPL_TOKENS.ALEPH },
    pc: { ...SPL_TOKENS.USDC },

    mint: 'iUDasAP2nXm5wvTukAHEKSdSXn8vQkRtaiShs9ceGB7',
    decimals: SPL_TOKENS.ALEPH.decimals,
    version: 4
  },
  'TULIP-USDC-V4': {
    symbol: 'TULIP-USDC',
    name: 'TULIP-USDC LP',
    coin: { ...SPL_TOKENS.TULIP },
    pc: { ...SPL_TOKENS.USDC },

    mint: '2doeZGLJyACtaG9DCUyqMLtswesfje1hjNA11hMdj6YU',
    decimals: SPL_TOKENS.TULIP.decimals,
    version: 4
  }
};
