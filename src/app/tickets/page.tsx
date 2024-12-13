import {initialTickets} from "@/data";
import Link from "next/link"
import { ticketsPath } from "@/paths";

const TicketsPage = () => {
  return (
    <div>
      {initialTickets.map((ticket) => (
        <div key={ticket.id}>
          <h2 className="text-lg">{ticket.title}</h2>

          <Link href={ticketsPath()} className="text-sm underline">
           View
          </Link>
        </div>
      ))}
    </div>
  );
}

export default TicketsPage