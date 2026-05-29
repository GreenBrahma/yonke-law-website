/**
 * Microsoft Graph — Client Credentials Token Provider
 *
 * Uses @azure/msal-node ConfidentialClientApplication to acquire
 * app-only access tokens for Microsoft Graph API calls.
 *
 * Auth flow: OAuth 2.0 Client Credentials (no user login)
 * Scope: https://graph.microsoft.com/.default
 *
 * Required env vars:
 *   AZURE_TENANT_ID      — Azure AD tenant ID
 *   AZURE_CLIENT_ID      — App registration client ID
 *   AZURE_CLIENT_SECRET   — App registration client secret
 */

import { ConfidentialClientApplication } from "@azure/msal-node";

// ─── Lazy-initialized MSAL client ─────────────────────────────────────────────

let _msalClient: ConfidentialClientApplication | null = null;

function getMsalClient(): ConfidentialClientApplication {
  if (_msalClient) return _msalClient;

  const tenantId = process.env.AZURE_TENANT_ID;
  const clientId = process.env.AZURE_CLIENT_ID;
  const clientSecret = process.env.AZURE_CLIENT_SECRET;

  if (!tenantId || !clientId || !clientSecret) {
    throw new Error(
      "Microsoft Graph credentials not configured. " +
        "Set AZURE_TENANT_ID, AZURE_CLIENT_ID, and AZURE_CLIENT_SECRET in environment variables."
    );
  }

  _msalClient = new ConfidentialClientApplication({
    auth: {
      clientId,
      clientSecret,
      authority: `https://login.microsoftonline.com/${tenantId}`,
    },
  });

  return _msalClient;
}

// ─── Token acquisition ────────────────────────────────────────────────────────

const GRAPH_SCOPE = "https://graph.microsoft.com/.default";

/**
 * Acquire a valid Microsoft Graph access token.
 * MSAL handles token caching and refresh internally.
 *
 * @returns A bearer token string for use in Authorization headers.
 * @throws If credentials are missing or token acquisition fails.
 */
export async function getGraphToken(): Promise<string> {
  const client = getMsalClient();

  const result = await client.acquireTokenByClientCredential({
    scopes: [GRAPH_SCOPE],
  });

  if (!result?.accessToken) {
    throw new Error(
      "Failed to acquire Microsoft Graph access token. " +
        "Verify AZURE_TENANT_ID, AZURE_CLIENT_ID, and AZURE_CLIENT_SECRET are correct, " +
        "and that the app registration has the required Graph Application permissions with admin consent."
    );
  }

  return result.accessToken;
}
