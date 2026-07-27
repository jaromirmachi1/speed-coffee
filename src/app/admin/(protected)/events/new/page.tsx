import { EventForm } from "@/components/admin/EventForm";

export default function NewEventPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">New event</h1>
        <p className="mt-1 text-zinc-500">Add a new event to the public events page.</p>
      </div>
      <EventForm />
    </div>
  );
}
