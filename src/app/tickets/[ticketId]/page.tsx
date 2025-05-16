import { InitialTickets } from "@/data";

type TicketPageProps = {
  params: Promise<{ ticketId: string }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;
  const ticket = InitialTickets.find(
    (ticket) => ticket.id.toString() === ticketId
  );
  return (
    <div>
      <h2 className="text-lg">
        Welcome to Next.js! tickets page id {ticket?.title}
      </h2>
      <p className="text-lg">{ticket?.content}</p>
      <p className="text-lg">{ticket?.status}</p>
    </div>
  );
};

export default TicketPage;
