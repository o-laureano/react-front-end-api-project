// src/auth/redirectToAuth.ts
import { generateCodeChallenge } from "./generateCodeChallenge";

const clientId: string = "4831374a0c3640c3aea1e5c3baff2c69";
const clientSecret: string = "8fafe1031288442599fc8dfcc4005f8e";
const redirectUri: string = "http://localhost:5173/teste";
const scope = "user-read-private user-read-email";

export const redirectToAuth = async (): Promise<void> => {
  const { codeVerifier, codeChallenge } = await generateCodeChallenge();

  window.localStorage.setItem("code_verifier", codeVerifier);

  const authUrl = new URL("https://accounts.spotify.com/authorize");
  const params = {
    response_type: "code",
    client_id: clientId,
    scope,
    code_challenge_method: "S256",
    code_challenge: codeChallenge,
    redirect_uri: redirectUri,
  };

  Object.keys(params).forEach((key) =>
    authUrl.searchParams.append(key, params[key])
  );
  window.location.href = authUrl.toString();
};

export const getAccessToken = async (): Promise<string> => {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
    },
    body: new URLSearchParams({
      grant_type: "client_credentials",
    }),
  });

  const data = await response.json();
  return data.access_token;
};
