import { ApplicationCommandInteractionData } from "./command";
import { DiscordUser } from "./discord";
import { Embed } from "./embed";
import { AllowedMentions, ApplicationMessageInteractionData } from "./message";
import { GuildMessage, GuildMember } from "./guild";

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

type InteractionData = ApplicationCommandInteractionData &
  ApplicationMessageInteractionData;

export interface MessageInteraction {
  id: string;
  name: string;
  type: InteractionType;
  user: DiscordUser;
}

export interface Interaction {
  channel_id: string;
  data?: InteractionData;
  guild_id: string;
  id: string;
  member: GuildMember;
  message?: GuildMessage;
  token: string;
  type: InteractionType;
  version: number;
}

export interface InteractionApplicationCallbackData {
  allowed_mentions?: AllowedMentions;
  content: string;
  embeds?: Embed[];
  tts?: boolean;
}

export interface InteractionResponse {
  data?: InteractionApplicationCallbackData;
  type: InteractionResponseType;
}

export type InteractionHandler = (
  interaction: Interaction,
  ...extra: any
) => Promise<InteractionResponse> | InteractionResponse;
