import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { db } from "@/db/client";
import { pfCases } from "@/db/schema/people-first";
import { eq } from "drizzle-orm";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const [userCase] = await db
    .select()
    .from(pfCases)
    .where(eq(pfCases.userId, session.user.id))
    .limit(1);

  if (!userCase) {
    return NextResponse.json({ case: null });
  }

  return NextResponse.json({ case: userCase });
}
