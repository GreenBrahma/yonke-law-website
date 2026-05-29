/**
 * Create Calendar Event API — Microsoft Graph
 *
 * POST /api/calendar/create-event
 * Body: { subject: string, start: string, end: string, attendees: string[], body?: string }
 *
 * Creates an event on Mike's calendar via Graph endpoint
 * POST /users/{MS365_ATTORNEY_EMAIL}/calendar/events
 * using app-only client credentials (no user login).
 *
 * start and end are ISO 8601 datetime strings (e.g. "2026-06-01T10:00:00-05:00").
 *
 * Required env vars:
 *   MS365_ATTORNEY_EMAIL  — Mike's calendar mailbox
 *   + AZURE_TENANT_ID, AZURE_CLIENT_ID, AZURE_CLIENT_SECRET (via lib/graph/client)
 */

import { NextRequest, NextResponse } from "next/server";
import { getGraphToken } from "@/lib/graph/client";

// ─── Types ────────────────────────────────────────────────────────────────────

interface CreateEventBody {
  subject: string;
  start: string;
  end: string;
  attendees: string[];
  body?: string;
}

// ─── Route handler ────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    // Validate env vars
    const attorneyEmail = process.env.MS365_ATTORNEY_EMAIL;

    if (!attorneyEmail) {
      return NextResponse.json(
        {
          error: "Calendar configuration missing",
          detail: "MS365_ATTORNEY_EMAIL must be set in environment variables.",
        },
        { status: 500 }
      );
    }

    // Parse and validate request body
    const payload: CreateEventBody = await request.json();

    if (!payload.subject || !payload.start || !payload.end || !Array.isArray(payload.attendees)) {
      return NextResponse.json(
        {
          error: "Invalid request",
          detail:
            "Request body must include 'subject', 'start' (ISO 8601), 'end' (ISO 8601), and 'attendees' (string array).",
        },
        { status: 400 }
      );
    }

    // Validate ISO 8601 dates
    const startDate = new Date(payload.start);
    const endDate = new Date(payload.end);

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      return NextResponse.json(
        {
          error: "Invalid dates",
          detail: "'start' and 'end' must be valid ISO 8601 datetime strings.",
        },
        { status: 400 }
      );
    }

    if (endDate <= startDate) {
      return NextResponse.json(
        {
          error: "Invalid date range",
          detail: "'end' must be after 'start'.",
        },
        { status: 400 }
      );
    }

    // Acquire Graph token
    const token = await getGraphToken();

    // Build the Graph event payload
    const graphPayload = {
      subject: payload.subject,
      body: {
        contentType: "HTML" as const,
        content: payload.body ?? "",
      },
      start: {
        dateTime: startDate.toISOString(),
        timeZone: "America/Chicago",
      },
      end: {
        dateTime: endDate.toISOString(),
        timeZone: "America/Chicago",
      },
      attendees: payload.attendees.map((email) => ({
        emailAddress: { address: email },
        type: "required" as const,
      })),
    };

    // Create event via Graph API
    const graphUrl = `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(attorneyEmail)}/calendar/events`;

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
      console.error("[calendar] Graph API error:", response.status, errorBody);
      return NextResponse.json(
        {
          error: "Failed to create calendar event",
          detail: `Graph API returned ${response.status}: ${errorBody}`,
        },
        { status: 500 }
      );
    }

    const event = await response.json();

    return NextResponse.json({
      created: true,
      event: {
        id: event.id,
        subject: event.subject,
        start: event.start,
        end: event.end,
        webLink: event.webLink,
        attendees: event.attendees,
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("[calendar] Error:", message);
    return NextResponse.json(
      { error: "Internal server error", detail: message },
      { status: 500 }
    );
  }
}
