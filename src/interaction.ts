import nacl from 'tweetnacl';
import { Buffer } from 'buffer';
import { ApplicationCommand, InteractionHandler, Interaction, InteractionType, InteractionResponseType } from './types';

const makeValidator =
  ({ publicKey }: { publicKey: string }) =>
  async (request: Request) => {
    const headers = Object.fromEntries(request.headers);
    const signature = String(headers['x-signature-ed25519']);
    const timestamp = String(headers['x-signature-timestamp']);
    const body = await request.json();

    const isValid = nacl.sign.detached.verify(
      Buffer.from(timestamp + JSON.stringify(body)),
      Buffer.from(signature, 'hex'),
      Buffer.from(publicKey, 'hex'),
    );

    if (!isValid) throw new Error('Invalid request');
  };

const jsonResponse = (data: any) =>
  new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });

const DEFAULT_COMMAND: ApplicationCommand = {
  name: '',
  description: '',
};

const DEFAULT_HANDLER: InteractionHandler = () => ({
  type: InteractionResponseType.PONG,
});

/**
 * Takes an Interaction and replies back based on handler
 *
 * @param {string} publicKey - Application Public Key. String format
 * @param {[AppicationCommand, InteractionHandler][]} commands - Handles commands/interactions.
 * @returns {Promise<Response>} async response to interaction.
 */
export const interaction = ({
  publicKey,
  commands,
}: {
  publicKey: string;
  commands: [ApplicationCommand, InteractionHandler][];
}) => {
  return async (request: Request, ...extra: any): Promise<Response> => {
    const validateRequest = makeValidator({ publicKey });

    try {
      await validateRequest(request.clone());

      try {
        const interaction = (await request.json()) as Interaction;

        if (interaction.type == InteractionType.PING) {
          return jsonResponse({ type: 1 });
        } else if (interaction.type == InteractionType.APPLICATION_COMMAND) {
          const [command, handler]: [ApplicationCommand, InteractionHandler] = commands.find(
            ([command, handler]: [ApplicationCommand, InteractionHandler]) => command.name === interaction.data?.name,
          ) || [DEFAULT_COMMAND, DEFAULT_HANDLER];

          return jsonResponse(await handler(interaction, ...extra));
        }
      } catch (e: any) {
        console.log(e.message);
        return new Response(null, { status: 400 });
      }
    } catch (e: any) {
      console.error(e.message);
      return new Response(null, { status: 401 });
    }
    return new Response(null, { status: 500 });
  };
};
