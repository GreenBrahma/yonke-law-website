import { requirePortalUser } from "@/lib/portal/session";
import { PortalPage } from "@/components/portal/PortalPage";
import { ScheduleForm } from "@/components/portal/ScheduleForm";

export default async function Schedule({ searchParams }: { searchParams: Promise<{ type?: string }> }) {
  await requirePortalUser();
  const { type } = await searchParams;
  return (
    <PortalPage
      title="Schedule a Call or Meeting"
      lead="Tell us what works for you and we will confirm a time. Nothing is booked until you hear from us."
    >
      <ScheduleForm initialType={type === "meeting" ? "meeting" : "call"} />
    </PortalPage>
  );
}
