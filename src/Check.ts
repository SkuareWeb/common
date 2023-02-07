import { IOrderItem, ITicket, ITicketItem } from "./interfaces";

const ticket: ITicket = {
  entryFor: { female: 1, male: 1, open: 2, kid: 0 },
  id: "abc123",
  lastBookingTime: new Date(),
  price: 30,
  validTo: new Date(),
  validFrom: new Date(),
  ticketName: "Family",
  ticketDescription: "Sample",
};

const event: ITicketItem = {
  ticket,
  availableQuantity: 10,
  bufferQuantity: 10,
  inTransaction: 0,
  totalQuantity: 20,
  allowOnlyPerTransaction: false,
};

const order: IOrderItem = {
  ticket,
  checkedIn: 1,
  quantity: 3,
  total: 90,
};

const orderItemTickets = [
  {
    ticketName: "Family",
    ticketDescription: "",
    entryFor: "Male",
    checkedIn: true,
    associatedTo: "userId-1",
  },
  { ticketName: "Family", ticketDescription: "", entryFor: "Female", checkedIn: true },
  { ticketName: "Family", ticketDescription: "", entryFor: "Kid", checkedIn: false },
  { ticketName: "Family", ticketDescription: "", entryFor: "Kid", checkedIn: false },
  { ticketName: "Family", ticketDescription: "", entryFor: "Male", checkedIn: true },
  { ticketName: "Family", ticketDescription: "", entryFor: "Female", checkedIn: true },
  { ticketName: "Family", ticketDescription: "", entryFor: "Kid", checkedIn: false },
  { ticketName: "Family", ticketDescription: "", entryFor: "Kid", checkedIn: false },
  { ticketName: "Family", ticketDescription: "", entryFor: "Male", checkedIn: true },
  { ticketName: "Family", ticketDescription: "", entryFor: "Female", checkedIn: true },
  { ticketName: "Family", ticketDescription: "", entryFor: "Kid", checkedIn: false },
  { ticketName: "Family", ticketDescription: "", entryFor: "Kid", checkedIn: false },
];

/**
 * 1x Family
 *  1x Male
 *  1x Female
 *  1x Kid
 *  1x Kid
 * 1x Couple
 * 1x Couple
 */
