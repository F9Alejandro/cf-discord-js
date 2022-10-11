import { Obj } from "itty-router";
import { ChannelMention } from "./channel";
import { DiscordUser, DiscordReaction } from "./discord";
import { Embed } from "./embed";
import {
  MessageResponseFlags,
  MessageAttachment,
  MessageComponent,
  MessageTypes,
} from "./message";

export interface RoleTags extends Object {
  bot_id?: string;
  integration_id?: string;
  premium_subscriber?: null;
}

export interface GuildRole extends Object {
  color: number;
  hoist: boolean;
  id: string;
  managed: boolean;
  mentionable: boolean;
  name: string;
  permissions: string;
  position: number;
  tags?: RoleTags;
}

export type MappedRole<> = Map<string, GuildRole>;

export interface GuildMember extends Object {
  deaf: boolean;
  is_pending: boolean;
  joined_at: string;
  mute: boolean;
  nick?: string;
  pending: boolean;
  permissions: string;
  premium_since?: string;
  roles: string[];
  user: DiscordUser;
}

export interface GuildMemberPartial extends Object {
  is_pending: boolean;
  joined_at: string;
  nick?: string;
  pending: boolean;
  permissions: string;
  premium_since?: string;
  roles: string[];
}

export type MappedMember<> = Map<string, GuildMember>;

export type MappedMemberPartial<> = Map<string, GuildMemberPartial>;

export interface GuildMessage {
  application_id?: string;
  attachments?: MessageAttachment[];
  author: DiscordUser;
  channel_id: string;
  components: MessageComponent[];
  content: string;
  embeds: Embed[];
  flags?: MessageResponseFlags;
  id: string;
  interaction?: null; // TODO
  mention_channels?: ChannelMention[];
  mention_everyone: boolean;
  mention_roles: GuildRole[];
  mentions: DiscordUser[];
  reactions?: DiscordReaction[];
  tts: boolean;
  type: MessageTypes;
}
