import { DiscordEmoji } from "./discord";

export enum AllowedMentionTypes {
  ROLES = "roles",
  USERS = "users",
  EVERYONE = "everyone",
}

export enum ButtonStyleTypes {
  PRIMARY = 1,
  SECONDARY = 2,
  SUCCESS = 3,
  DANGER = 4,
  LINK = 5,
}

export enum MessageComponentTypes {
  ACTION_ROW = 1,
  BUTTON = 2,
  SELECT_MENU = 3,
  TEXT_INPUT = 4,
}

export enum MessageResponseFlags {
  /**
   * Message has been published to subscribed channels (via Channel Following)
   */
  CROSSPOSTED = 2 ** 0,
  /**
   * Message originated from a message in another channel (via Channel Following)
   */
  IS_CROSSPOST = 2 ** 1,
  /**
   * Do not include any embeds when serializing this message
   */
  SUPPRESS_EMBEDS = 2 ** 2,
  /**
   * Source message for this crosspost has been deleted (via Channel Following)
   */
  SOURCE_MESSAGE_DELETED = 2 ** 3,
  /**
   * Message came from the urgent message system
   */
  URGENT = 2 ** 4,
  /**
   * Message has an associated thread, with the same id as the message
   */
  HAS_THREAD = 2 ** 5,
  /**
   * Show the message only to the user that performed the interaction. Message
   * does not persist between sessions.
   */
  EPHEMERAL = 2 ** 6,
  /**
   * Message is an interaction Response and the bot is "thinking"
   */
  LOADING = 2 ** 7,
  /**
   * Message failed to mention some roles and add their members to the thread
   */
  FAILED_TO_MENTION_SOME_ROLES_IN_THREAD = 2 ** 8,
}

export enum MessageTypes {
  DEFAULT = 0,
  RECEPIENT_ADD = 1,
  RECIPENT_REMOVE = 2,
  CALL = 3,
  CHANNEL_NAME_CHANGE = 4,
  CHANNEL_ICON_CHANGE = 5,
  CHANNEL_PINNED_MESSAGE = 6,
  USER_JOIN = 7,
  GUILD_BOOST = 8,
  GUILD_BOOST_TIER_1 = 9,
  GUILD_BOOST_TIER_2 = 10,
  GUILD_BOOST_TIER_3 = 11,
  CHANNEL_FOLLOW_ADD = 12,
  GUILD_DISCOVERY_DISQUALIFIED = 14,
  GUILD_DISCOVERY_REQUALIFIED = 15,
  GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING = 16,
  GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING = 17,
  THREAD_CREATED = 18,
  REPLY = 19,
  CHAT_INPUT_COMMAND = 20,
  THREAD_STARTER_MESSAGE = 21,
  GUILD_INVITE_REMINDER = 22,
  CONTEXT_MENU_COMMAND = 23,
  AUTO_MODERATION_ACTION = 24,
}

export enum TextStyleTypes {
  SHORT = 1,
  PARAGRAPH = 2,
}

export interface ApplicationMessageInteractionData {
  custom_id: string;
  component_type: MessageComponentTypes;
  values?: string[];
}

export interface AllowedMentions {
  parse?: AllowedMentionTypes[];
  replied_user?: boolean;
  roles?: string[];
  users?: string[];
}

export interface MessageAttachment {
  content_type?: string;
  description?: string;
  ephemeral?: boolean;
  filename: string;
  height?: number;
  id: string;
  proxy_url: string;
  size: number;
  url: string;
  width?: number;
}

export interface MessageReference {
  channel_id?: string;
  fail_if_not_exists?: boolean;
  guild_id?: string;
  message_id?: string;
}

export interface Button {
  custom_id?: string;
  disabled?: boolean;
  emoji?: Pick<DiscordEmoji, "id" | "name" | "animated">;
  label: string;
  style:
    | ButtonStyleTypes.DANGER
    | ButtonStyleTypes.LINK
    | ButtonStyleTypes.PRIMARY
    | ButtonStyleTypes.SECONDARY
    | ButtonStyleTypes.SUCCESS;
  type: MessageComponentTypes.BUTTON;
  uri?: string;
}

export interface ActionRow {
  components: Exclude<MessageComponent, ActionRow>[];
  type: MessageComponentTypes.ACTION_ROW;
}

export interface StringSelectOptions {
  default?: boolean;
  description?: string;
  emoji?: Pick<DiscordEmoji, "id" | "name" | "animated">;
  label: string;
  value: string;
}

export interface SelectMenu {
  custom_id: string;
  disabled?: boolean;
  max_values?: number;
  min_values?: number;
  options: StringSelectOptions[];
  placeholder?: string;
  type: MessageComponentTypes.SELECT_MENU;
}

export interface TextInput {
  custom_id: string;
  label: string;
  max_length?: number;
  min_length?: number;
  placeholder?: string;
  required?: boolean;
  style: TextStyleTypes.SHORT | TextStyleTypes.PARAGRAPH;
  type: MessageComponentTypes.TEXT_INPUT;
  value?: string;
}

export type MessageComponent = Button | ActionRow | SelectMenu | TextInput;
