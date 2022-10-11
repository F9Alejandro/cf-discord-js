import { Router } from "itty-router";
import authorize from "./authorize";
import { interaction } from "./interaction";
import { Permissions } from "./permissions";
import { setup } from "./setup";
import { ApplicationCommand, InteractionHandler } from "./application/index";

const router = Router();

export interface Application {
  applicationId: string;
  applicationSecret: string;
  publicKey: string;
  guildId?: string;
  commands: [ApplicationCommand, InteractionHandler][];
  permissions: Permissions;
}

/**
 * Create the commands on discord api
 *
 * @param {Application} application - Use Application interface to start the application/setup slash-commands.
 * @returns {Promise<any>}
 */
export const createApplicationCommandHandler = (application: Application) => {
  router.get(
    "/",
    authorize(application.applicationId, application.permissions)
  );
  router.post(
    "/interaction",
    interaction({
      publicKey: application.publicKey,
      commands: application.commands,
    })
  );
  router.get(
    "/setup",
    setup({
      applicationId: application.applicationId,
      applicationSecret: application.applicationSecret,
      guildId: application.guildId,
      commands: application.commands,
    })
  );
  return router.handle;
};
