import { requirePortalUser } from "@/lib/portal/session";
import { getCaseFor } from "@/lib/portal/source";
import { readProfile } from "@/lib/portal/profile";
import { PortalPage } from "@/components/portal/PortalPage";
import { AboutYouForm } from "@/components/portal/AboutYouForm";

export default async function AboutYou() {
  const user = await requirePortalUser();
  const [portalCase, profile] = await Promise.all([getCaseFor(user.email), readProfile(user.id)]);
  return (
    <PortalPage
      title="Tell Us About You"
      lead="You are a person, not a file number. Tell us how you like to be reached and anything that helps us work around your life."
    >
      <AboutYouForm initial={{ ...profile, preferredName: profile.preferredName || portalCase.person.preferredName }} />
    </PortalPage>
  );
}
