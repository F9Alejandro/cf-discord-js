import { Permissions } from "./permissions";

/**
 *
 * @param applicationId - Used to identify the application itself.
 * @param permissions - Permissions enum that provides uint of each permission given the name.
 * @returns {Response}
 */
const authorize =
  (applicationId: string, permissions: Permissions) =>
  async (): Promise<Response> => {
    const urlSearchParams = new URLSearchParams({
      client_id: applicationId,
      scope: "bot applications.commands",
      permissions: permissions.compute(),
    });

    const redirectURL = new URL("https://discord.com/oauth2/authorize");
    redirectURL.search = urlSearchParams.toString();

    return new Response(null, {
      status: 302,
      headers: { Location: redirectURL.toString() },
    });
  };

export default authorize;
