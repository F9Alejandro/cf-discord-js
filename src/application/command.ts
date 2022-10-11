import { MappedUser } from "./discord";

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

export enum ApplicationCommandType {
  CHAT_INPUT = 1,
  USER = 2,
  MESSAGE = 3,
}

export interface ApplicationCommandOptionChoice extends Object {
  name: string;
  value: string | number;
}

export interface ApplicationCommandOption extends Object {
  choices?: ApplicationCommandOptionChoice[];
  description: string;
  name: string;
  options?: ApplicationCommandOption[];
  required?: boolean;
  type: ApplicationCommandOptionType;
}

export interface ApplicationCommand extends Object {
  description: string;
  name: string;
  options?: ApplicationCommandOption[];
  type?: ApplicationCommandType;
}

export interface ApplicationCommandInteractionDataOption extends Object {
  name: string;
  options?: ApplicationCommandInteractionDataOption[];
  type: ApplicationCommandOptionType;
  value?: ApplicationCommandOptionChoice;
}

export interface ResolvedData extends Object {
  users?: MappedUser;
}

export interface ApplicationCommandInteractionData extends Object {
  id: string;
  name: string;
  options?: ApplicationCommandInteractionDataOption[];
  resolved?: any;
}
