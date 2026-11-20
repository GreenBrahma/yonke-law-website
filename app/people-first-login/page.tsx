import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { portalUser } from "@/lib/portal/session";
import { SignInFrame } from "@/components/portal/SignInFrame";
import { SignInForm } from "@/components/portal/SignInForm";

export const metadata: Metadata = {
  title: "People First sign-in",
  robots: { index: false, follow: false },
};

export default async function PeopleFirstSignIn() {
  if (await portalUser()) redirect("/people-first-login/home");
  return (
    <SignInFrame
      intro={
        <>
          <p className="text-white/80 text-sm max-w-xs mx-auto mt-6">
            Sign in to see what is coming up, your documents, and how to reach us.
          </p>
          <p className="text-white/55 text-xs max-w-xs mx-auto mt-3">
            People First is for people Yonke Law represents. If we have not told you your access is set up,
            call us at 816-221-6400.
          </p>
        </>
      }
    >
      <SignInForm />
    </SignInFrame>
  );
}
