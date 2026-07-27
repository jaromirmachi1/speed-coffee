export type EventDisplay = {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate?: string;
  dateLabel: string;
  location: string;
  image: string;
  alt: string;
  externalUrl?: string;
  linkLabel: string;
  featured: boolean;
  isPast: boolean;
};
