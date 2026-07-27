import { notFound } from "next/navigation";
import { getAdminEvent } from "@/lib/admin/sanity-admin";
import { EventForm } from "@/components/admin/EventForm";

type PageProps = { params: Promise<{ id: string }> };

export default async function EditEventPage({ params }: PageProps) {
  const { id } = await params;
  const event = await getAdminEvent(id);
  if (!event) notFound();

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Edit event</h1>
        <p className="mt-1 text-zinc-500">{event.title_cz || event.title_en}</p>
      </div>
      <EventForm event={event} />
    </div>
  );
}
