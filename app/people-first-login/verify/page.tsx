import type { Metadata } from "next";
import { SignInFrame } from "@/components/portal/SignInFrame";
import { VerifyLink } from "@/components/portal/VerifyLink";

export const metadata: Metadata = {
  title: "People First sign-in",
  robots: { index: false, follow: false },
  referrer: "no-referrer",
};

export default async function VerifyPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const { token } = await searchParams;
  return (
    <SignInFrame>
      <VerifyLink token={typeof token === "string" ? token : ""} />
    </SignInFrame>
  );
}
