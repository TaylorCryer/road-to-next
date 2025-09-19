import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ticketPath } from "@/paths";
import Link from "next/link";
import { TICKETS_ICON } from "./constants";
import { Ticket } from "./types";

type TicketItemProps = {
  ticket: Ticket;
};

const TicketItem = ({ ticket }: TicketItemProps) => {
  return (
    <Card key={ticket.id} className="w-full max-w-[420px]">
      <CardHeader>
        <CardTitle className="flex gap-x-2">
          <span>{TICKETS_ICON[ticket.status]}</span>
          <span className="truncate">{ticket.title}</span>
        </CardTitle>
      </CardHeader>
      <Separator />
      <CardContent>
        <span className="line-clamp-3 whitespace-break-spaces">
          {ticket.content}
        </span>
      </CardContent>

      <CardFooter>
        <Link href={ticketPath(ticket.id)} className="text-sm underline">
          View
        </Link>
      </CardFooter>
    </Card>
  );
};

export { TicketItem };
