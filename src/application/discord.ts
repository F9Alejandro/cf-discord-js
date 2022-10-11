export enum UserLocales {
  DANISH = "da",
  GERMAN = "de",
  ENGLISH_UK = "en-GB",
  ENGLISH_US = "en-US",
  SPANISH = "es-ES",
  FRENCH = "fr",
  CROATIAN = "hr",
  ITALIAN = "it",
  LITHUANIAN = "lt",
  HUNGARIAN = "hu",
  
}

export enum UserFlags {
  STAFF = 2 ** 0,
  PARTNER = 2 ** 1,
  HYPESQUAD = 2 ** 2,
  BUG_HUNTER_LEVEL_1 = 2 ** 3,
  HYPESQUAD_ONLINE_HOUSE_1 = 2 ** 6,
  HYPESQUAD_ONLINE_HOUSE_2 = 2 ** 7,
  HYPESQUAD_ONLINE_HOUSE_3 = 2 ** 8,
  PREMIUM_EARLY_SUPPORTER = 2 ** 9,
  TEAM_PSEUDO_USER = 2 ** 10,
  BUG_HUNTER_LEVEL_2 = 2 ** 14,
  VERIFIED_BOT = 2 ** 16,
  VERIFIED_DEVELOPER = 2 ** 17,
  CERTIFIED_MODERATOR = 2 ** 18,
  BOT_HTTP_INTERACTIONS = 2 ** 19,
}

export enum NitroFlags {
  NONE = 0,
  NITRO_CLASSIC = 1,
  NITRO = 2,
}

export interface DiscordUser {
  id: string;
  username: string;
  discriminator: string;
  avatar?: string;
  bot?: boolean;
  system?: boolean;
  mfa_enabled?: boolean;
  banner?: string;
  accent_color?: number;
  locale?: string;
  verified?: boolean;
  email?: string;
  flags?: UserFlags;
  premium_type?: NitroFlags;
  public_flags?: UserFlags;
}

export type MappedUser<> = Map<string, DiscordUser>;

export interface DiscordEmoji {
  animated?: boolean;
  available?: boolean;
  name: string | undefined;
  id: string | undefined;
  user?: DiscordUser[];
  roles?: string[];
  require_colons?: boolean;
  managed?: boolean;
}

export interface DiscordReaction {
  count: number;
  emoji: Pick<DiscordEmoji, "id" | "name" | "animated">;
  me: boolean;
}
