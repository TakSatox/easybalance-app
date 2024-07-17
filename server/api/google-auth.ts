import { OAuth2Client } from "google-auth-library";

const config = useRuntimeConfig();
const googleClientId = config.googleClientId;
console.log('clientid: ' + googleClientId);

const client = new OAuth2Client(googleClientId);

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const token = body.token

    if (!token) {
        throw createError({
            statusCode: 400,
            statusMessage: 'No token provided'
        })
    }

    const payload = await verify(token).catch((err) => {
      console.error(err)

      throw createError({
        statusCode: 401,
        statusMessage: 'Invalid token',
      });
    });

    return payload;    
});


async function verify(token: string) {
  const ticket = await client.verifyIdToken({
      idToken: token,
      audience: googleClientId,
  });

  const payload = ticket.getPayload();

  return payload;
}

