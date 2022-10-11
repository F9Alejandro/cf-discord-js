import { setPRNG } from 'tweetnacl';

/**
 * Enum definitions
 */

export enum ApplicationCommandOptionType {
  SUB_COMMAND = 1,
  SUB_COMMAND_GROUP = 2,
  STRING = 3,
  INTEGER = 4,
  BOOLEAN = 5,
  USER = 6,
  CHANNEL = 7,
  ROLE = 8,
  MENTIONABLE = 9,
  NUMBER = 10,
}

export enum ChannelTypes {
  GUILD_TEXT = 0,
  DM = 1,
  GUILD_VOICE = 2,
  GROUP_DM = 3,
  GUILD_CATEGORY = 4,
  GUILD_ANNOUNCEMENT = 5,
  ANNOUNCEMENT_THREAD = 10,
  PUBLIC_THREAD = 11,
  PRIVATE_THREAD = 12,
  GUILD_STAGE_VOICE = 13,
  GUILD_DIRECTORY = 14,
  GUILD_FORUM = 15,
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

export enum InteractionResponseFlags {
  /**
   * Message has been published to subscribed channels (via Channel Following)
   */
  CROSSPOSTED = 1 << 0,
  /**
   * Message originated from a message in another channel (via Channel Following)
   */
  IS_CROSSPOST = 1 << 1,
  /**
   * Do not include any embeds when serializing this message
   */
  SUPPRESS_EMBEDS = 1 << 2,
  /**
   * Source message for this crosspost has been deleted (via Channel Following)
   */
  SOURCE_MESSAGE_DELETED = 1 << 3,
  /**
   * Message came from the urgent message system
   */
  URGENT = 1 << 4,
  /**
   * Message has an associated thread, with the same id as the message
   */
  HAS_THREAD = 1 << 5,
  /**
   * Show the message only to the user that performed the interaction. Message
   * does not persist between sessions.
   */
  EPHEMERAL = 1 << 6,
  /**
   * Message is an interaction Response and the bot is "thinking"
   */
  LOADING = 1 << 7,
  /**
   * Message failed to mention some roles and add their members to the thread
   */
  FAILED_TO_MENTION_SOME_ROLES_IN_THREAD = 1 << 8,
}

export enum AllowedMentionTypes {
  ROLES = 'roles',
  USERS = 'users',
  EVERYONE = 'everyone',
}

export enum ApplicationCommandType {
  CHAT_INPUT = 1,
  USER = 2,
  MESSAGE = 3,
}

export enum PermissionType {
  CREATE_INSTANT_INVITE = 1 << 0,
  KICK_MEMBERS = 1 << 1,
  BAN_MEMBERS = 1 << 2,
  ADMINISTRATOR = 1 << 3,
  MANAGE_CHANNELS = 1 << 4,
  MANAGE_GUILD = 1 << 5,
  ADD_REACTIONS = 1 << 6,
  VIEW_AUDIT_LOG = 1 << 7,
  PRIORITY_SPEAKER = 1 << 8,
  STREAM = 1 << 9,
  VIEW_CHANNEL = 1 << 10,
  SEND_MESSAGES = 1 << 11,
  SEND_TTS_MESSAGES = 1 << 12,
  MANAGE_MESSAGES = 1 << 13,
  EMBED_LINKS = 1 << 14,
  ATTACH_FILES = 1 << 15,
  READ_MESSAGE_HISTORY = 1 << 16,
  MENTION_EVERYONE = 1 << 17,
  USE_EXTERNAL_EMOJIS = 1 << 18,
  VIEW_GUILD_INSIGHTS = 1 << 19,
  CONNECT = 1 << 20,
  SPEAK = 1 << 21,
  MUTE_MEMBERS = 1 << 22,
  DEAFEN_MEMBERS = 1 << 23,
  MOVE_MEMBERS = 1 << 24,
  USE_VAD = 1 << 25,
  CHANGE_NICKNAME = 1 << 26,
  MANAGE_NICKNAMES = 1 << 27,
  MANAGE_ROLES = 1 << 28,
  MANAGE_WEBHOOKS = 1 << 29,
  MANAGE_EMOJIS_AND_STICKERS = 1 << 30,
  USE_APPLICATION_COMMANDS = 1 << 31,
  REQUEST_TO_SPEAK = 1 << 32,
  MANAGE_THREADS = 1 << 34,
  USE_PUBLIC_THREADS = 1 << 35,
  USE_PRIVATE_THREADS = 1 << 36,
  USE_EXTERNAL_STICKERS = 1 << 37,
}
/**
 * The type of interation this request is.
 */
export enum InteractionType {
  /**
   * A ping.
   */
  PING = 1,
  /**
   * A command invocation.
   */
  APPLICATION_COMMAND = 2,
  /**
   * Usage of a message's component.
   */
  MESSAGE_COMPONENT = 3,
  /**
   * An interaction sent when an application command option is filled out.
   */
  APPLICATION_COMMAND_COMPLETE = 4,
  /**
   * An interaction sent when a modal is submitted.
   */
  MODAL_SUBMIT = 5,
}

/**
 * The type of response that is being sent.
 */
export enum InteractionResponseType {
  /**
   * Acknowledge a `PING`.
   */
  PONG = 1,
  /**
   * Unknown function.
   */
  ACKNOWLEDGE = 2,
  /**
   * Unknown function.
   */
  CHANNEL_MESSAGE = 3,
  /**
   * Respond with a message, showing the user's input.
   */
  CHANNEL_MESSAGE_WITH_SOURCE = 4,
  /**
   * Acknowledge a command without sending a message, showing the user's input. Requires follow-up.
   */
  DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE = 5,
  /**
   * Acknowledge an interaction and edit the original message that contains the component later; the user does not see a loading state.
   */
  DEFERRED_UPDATE_MESSAGE = 6,
  /**
   * Edit the message the component was attached to.
   */
  Update_Message = 7,
  /**
   * Callback for an app to define the results to the user.
   */
  APPLICATION_COMMAND_AUTOCOMPLETE_RESULT = 8,
  /**
   * Respond with a modal.
   */
  Modal = 9,
}

export enum EmbedType {
  RICH = 'rich',
  IMAGE = 'image',
  VIDEO = 'video',
  GIFV = 'gifv',
  ARTICLE = 'article',
  LINK = 'link',
}

/**
 * Interaction Components Specific to messages
 */
export enum MessageComponentTypes {
  ACTION_ROW = 1,
  BUTTON = 2,
  SELECT_MENU = 3,
  TEXT_INPUT = 4,
}

export enum ButtonStyleTypes {
  PRIMARY = 1,
  SECONDARY = 2,
  SUCCESS = 3,
  DANGER = 4,
  LINK = 5,
}

export enum TextStyleTypes {
  SHORT = 1,
  PARAGRAPH = 2,
}

/**
 * End Enum definitions
 */

/**
 * Type definitions
 */

export type ApplicationCommandOptionChoice = {
  name: string;
  value: string | number;
};

export type ApplicationCommand = {
  name: Snowflake;
  type?: ApplicationCommandType;
  description: string;
  options?: ApplicationCommandOption[];
};

export type ApplicationCommandOption = {
  type: ApplicationCommandOptionType;
  name: string;
  description: string;
  required?: boolean;
  choices?: ApplicationCommandOptionChoice[];
  options?: ApplicationCommandOption[];
};

export type ApplicationCommandInteractionDataOption = {
  name: string;
  type: ApplicationCommandOptionType;
  value?: ApplicationCommandOptionChoice;
  options?: ApplicationCommandInteractionDataOption[];
};

export type OptionType = any;

export type ApplicationCommandInteractionData = {
  id: string;
  name: string;
  options?: ApplicationCommandInteractionDataOption[];
  resolved?: any;
};

/**
 * General discord typings
 */
export type Snowflake = string;

export type DiscordUser = {
  avatar?: string;
  discriminator: string;
  id: string;
  bot?: boolean;
  public_flags: number;
  username: string;
};

export type RoleTags = {
  bot_id?: string;
  integration_id?: string;
  premium_subscriber?: null;
};

export type GuildRole = {
  id: string;
  name: string;
  color: number;
  hoist: boolean;
  position: number;
  permissions: string;
  managed: boolean;
  mentionable: boolean;
  tags?: RoleTags;
};

export type GuildMember = {
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
};

export type MessageInteraction = {
  id: string;
  name: string;
  type: InteractionType;
  user: DiscordUser;
};

export type MessageAttachment = {
  id: string;
  filename: string;
  description?: string;
  content_type?: string;
  size: number;
  url: string;
  proxy_url: string;
  height?: number;
  width?: number;
  ephemeral?: boolean;
};

export type MessageReference = {
  message_id?: string;
  channel_id?: string;
  guild_id?: string;
  fail_if_not_exists?: boolean;
};

export type DiscordReaction = {
  count: number;
  me: boolean;
  emoji: Pick<DiscordEmoji, 'id' | 'name' | 'animated'>;
};

export type ChannelMention = {
  id: string;
  guild_id: string;
  type: ChannelTypes;
  name: string;
};

export type GuildMessage = {
  id: string;
  channel_id: string;
  author: DiscordUser;
  content: string;
  tts: boolean;
  mention_everyone: boolean;
  mentions: DiscordUser[];
  mention_roles: GuildRole[];
  mention_channels?: ChannelMention[];
  attachments?: MessageAttachment[];
  embeds: Embed[];
  reactions?: DiscordReaction[];
  type: MessageTypes;
  application_id?: string;
  flags?: InteractionResponseFlags;
  interaction?: null; //TODO
  components: MessageComponent[];
};
/**
 * End General discord typings
 */

export type Interaction = {
  id: string;
  type: InteractionType;
  data?: InteractionData;
  guild_id: string;
  channel_id: string;
  member: GuildMember;
  token: string;
  version: number;
  message?: GuildMessage;
};
/**
 * Combines Application Command Interaction Data and Application Messages Interaction Data
 * to make one type of InteractionData (ambiguous)
 */
type InteractionData = ApplicationCommandInteractionData & ApplicationMessageInteractionData;

/* //Commented out for testing purposes, hope this new type works 
   //better since it really should include both anyways
export const InteractionData = (
  input: InteractionType,
  data: ApplicationCommandInteractionData | ApplicationMessageInteractionData,
) => {
  if (input == InteractionType.MESSAGE_COMPONENT) {
    return data as ApplicationMessageInteractionData;
  }
  if (input == (InteractionType.APPLICATION_COMMAND | InteractionType.APPLICATION_COMMAND_COMPLETE)) {
    return data as ApplicationCommandInteractionData;
  }
};
 */
export type AllowedMentions = {
  parse?: AllowedMentionTypes[];
  roles?: string[];
  users?: string[];
  replied_user?: boolean;
};

/**
 * Embed Start
 */
export type EmbedThumbnail = {
  url?: string;
  proxy_url?: string;
  height?: number;
  width?: number;
};

export type EmbedVideo = {
  url?: string;
  height?: number;
  width?: number;
};

export type EmbedImage = {
  url?: string;
  proxy_url?: string;
  height?: number;
  width?: number;
};

export type EmbedProvider = {
  name?: string;
  url?: string;
};

export type EmbedAuthor = {
  name?: string;
  url?: string;
  icon_url?: string;
  proxy_icon_url?: string;
};

export type EmbedFooter = {
  text: string;
  icon_url?: string;
  proxy_icon_url?: string;
};

export type EmbedField = {
  name: string;
  value: string;
  inline?: boolean;
};

export type Embed = {
  title?: string;
  type?: EmbedType;
  description?: string;
  url?: string;
  timestamp?: string;
  color?: number;
  footer?: EmbedFooter;
  image?: EmbedImage;
  thumbnail?: EmbedThumbnail;
  video?: EmbedVideo;
  provider?: EmbedProvider;
  author?: EmbedAuthor;
  fields?: EmbedField[];
};
/**
 * Embed End
 */

export type InteractionApplicationCommandCallbackData = {
  tts?: boolean;
  content: string;
  embeds?: Embed[];
  allowed_mentions?: AllowedMentions;
};

export type InteractionResponse = {
  type: InteractionResponseType;
  data?: InteractionApplicationCommandCallbackData;
};

export type InteractionHandler = (
  interaction: Interaction,
  ...extra: any
) => Promise<InteractionResponse> | InteractionResponse;

/**
 * Related to Message interactions
 */
export type ApplicationMessageInteractionData = {
  custom_id: string;
  component_type: MessageComponentTypes;
  values?: string[];
};

export type MessageComponent = Button | ActionRow | SelectMenu | TextInput;

export type Button = {
  type: MessageComponentTypes.BUTTON;
  style:
    | ButtonStyleTypes.PRIMARY
    | ButtonStyleTypes.SECONDARY
    | ButtonStyleTypes.SUCCESS
    | ButtonStyleTypes.DANGER
    | ButtonStyleTypes.LINK;
  label: string;
  emoji?: Pick<DiscordEmoji, 'id' | 'name' | 'animated'>;
  custom_id?: string;
  uri?: string;
  disabled?: boolean;
};

export type ActionRow = {
  type: MessageComponentTypes.ACTION_ROW;
  components: Exclude<MessageComponent, ActionRow>[];
};

export type SelectMenu = {
  type: MessageComponentTypes.SELECT_MENU;
  custom_id: string;
  options: StringSelectOptions[];
  placeholder?: string;
  min_values?: number;
  max_values?: number;
  disabled?: boolean;
};

export type StringSelectOptions = {
  label: string;
  value: string;
  description?: string;
  emoji?: Pick<DiscordEmoji, 'id' | 'name' | 'animated'>;
  default?: boolean;
};

export type TextInput = {
  type: MessageComponentTypes.TEXT_INPUT;
  custom_id: string;
  style: TextStyleTypes.SHORT | TextStyleTypes.PARAGRAPH;
  label: string;
  min_length?: number;
  max_length?: number;
  required?: boolean;
  value?: string;
  placeholder?: string;
};

export type DiscordEmoji = {
  name: string | undefined;
  id: string | undefined;
  user?: DiscordUser[];
  roles?: string[];
  require_colons?: boolean;
  managed?: boolean;
  available?: boolean;
  animated?: boolean;
};

/**
 * End Type definitions
 */
