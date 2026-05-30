/**
 * Send Mail API — Microsoft Graph
 *
 * POST /api/send-mail
 * Body: { to: string | string[], subject: string, body: string }
 *
 * Sends email via Graph endpoint POST /users/{MS365_SENDER_EMAIL}/sendMail
 * using app-only client credentials (no user login).
 *
 * `to` accepts a single address or an array of addresses for multi-recipient.
 *
 * Reply-to is set to MS365_ATTORNEY_EMAIL so client replies
 * land in Mike's inbox, not the system sender mailbox.
 *
 * Required env vars:
 *   MS365_SENDER_EMAIL    — mailbox the email is sent from
 *   MS365_ATTORNEY_EMAIL  — reply-to address (Mike's inbox)
 *   + AZURE_TENANT_ID, AZURE_CLIENT_ID, AZURE_CLIENT_SECRET (via lib/graph/client)
 */

import { NextRequest, NextResponse } from "next/server";
import { getGraphToken } from "@/lib/graph/client";

// ─── Types ────────────────────────────────────────────────────────────────────

interface SendMailBody {
  to: string | string[];
  subject: string;
  body: string;
}

// ─── Route handler ────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    // Validate env vars
    const senderEmail = process.env.MS365_SENDER_EMAIL;
    const attorneyEmail = process.env.MS365_ATTORNEY_EMAIL;

    if (!senderEmail || !attorneyEmail) {
      return NextResponse.json(
        {
          error: "Mail configuration missing",
          detail:
            "MS365_SENDER_EMAIL and MS365_ATTORNEY_EMAIL must be set in environment variables.",
        },
        { status: 500 }
      );
    }

    // Parse and validate request body
    const payload: SendMailBody = await request.json();

    if (!payload.to || !payload.subject || !payload.body) {
      return NextResponse.json(
        {
          error: "Invalid request",
          detail: "Request body must include 'to', 'subject', and 'body' fields.",
        },
        { status: 400 }
      );
    }

    // Normalize recipients — accept string or string[]
    const recipients = Array.isArray(payload.to) ? payload.to : [payload.to];

    if (recipients.length === 0 || recipients.some((r) => !r)) {
      return NextResponse.json(
        {
          error: "Invalid request",
          detail: "'to' must be a non-empty email address or array of addresses.",
        },
        { status: 400 }
      );
    }

    // Acquire Graph token
    const token = await getGraphToken();

    // Build the Graph sendMail payload
    const graphPayload = {
      message: {
        subject: payload.subject,
        body: {
          contentType: "HTML",
          content: payload.body,
        },
        toRecipients: recipients.map((address) => ({
          emailAddress: { address },
        })),
        replyTo: [
          {
            emailAddress: {
              address: attorneyEmail,
            },
          },
        ],
      },
      saveToSentItems: true,
    };

    // Send via Graph API
    const graphUrl = `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(senderEmail)}/sendMail`;

    const response = await fetch(graphUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(graphPayload),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("[send-mail] Graph API error:", response.status, errorBody);
      return NextResponse.json(
        {
          error: "Failed to send email",
          detail: `Graph API returned ${response.status}: ${errorBody}`,
        },
        { status: 500 }
      );
    }

    // Graph returns 202 Accepted with no body on success
    return NextResponse.json({ sent: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("[send-mail] Error:", message);
    return NextResponse.json(
      { error: "Internal server error", detail: message },
      { status: 500 }
    );
  }
}
