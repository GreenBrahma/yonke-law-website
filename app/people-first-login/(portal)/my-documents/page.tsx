import { requirePortalUser } from "@/lib/portal/session";
import { listMyDocuments } from "@/lib/portal/my-documents";
import { PortalPage } from "@/components/portal/PortalPage";
import { MyDocumentsClient } from "@/components/portal/MyDocumentsClient";

export default async function MyDocuments() {
  const user = await requirePortalUser();
  const docs = await listMyDocuments(user.id);
  return (
    <PortalPage
      title="My Documents"
      lead="A private place for your own documents: medical bills, photos, letters from an insurance company, anything you want us to have. Only you and Yonke Law can see what you add here."
    >
      <MyDocumentsClient initial={docs} />
    </PortalPage>
  );
}
