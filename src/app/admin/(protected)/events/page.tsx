import Link from "next/link";
import { Plus } from "lucide-react";
import { listAdminEvents } from "@/lib/admin/sanity-admin";
import { Badge } from "@/components/admin/ui/badge";
import { Card, CardContent } from "@/components/admin/ui/card";

function formatDate(value: string) {
  return new Date(value).toLocaleString("cs-CZ", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default async function AdminEventsPage() {
  const events = await listAdminEvents();

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Events</h1>
          <p className="mt-1 text-zinc-500">Create and publish events for the website.</p>
        </div>
        <Link
          href="/admin/events/new"
          className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-zinc-900 px-4 text-sm font-medium text-zinc-50 hover:bg-zinc-800"
        >
          <Plus className="h-4 w-4" />
          New event
        </Link>
      </div>

      <div className="grid gap-4">
        {events.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center text-zinc-500">
              No events yet. Create your first one.
            </CardContent>
          </Card>
        ) : (
          events.map((event) => (
            <Card key={event._id} className="overflow-hidden">
              <CardContent className="flex flex-col gap-4 p-0 sm:flex-row">
                {event.imageUrl ? (
                  <img src={event.imageUrl} alt="" className="h-40 w-full object-cover sm:w-48" />
                ) : (
                  <div className="flex h-40 w-full items-center justify-center bg-zinc-100 text-zinc-400 sm:w-48">
                    No image
                  </div>
                )}
                <div className="flex flex-1 flex-col justify-between gap-3 p-5">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-lg font-semibold">{event.title_cz || event.title_en}</h2>
                      {event.featured && <Badge variant="secondary">Featured</Badge>}
                      <Badge variant={event.isPublished ? "success" : "warning"}>
                        {event.isPublished ? "Published" : "Draft"}
                      </Badge>
                    </div>
                    <p className="mt-1 text-sm text-zinc-500">{formatDate(event.startDate)}</p>
                    {event.location_cz && (
                      <p className="mt-1 text-sm text-zinc-600">{event.location_cz}</p>
                    )}
                  </div>
                  <div>
                    <Link
                      href={`/admin/events/${event._id}`}
                      className="text-sm font-medium text-zinc-900 underline underline-offset-4"
                    >
                      Edit event
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
