import { deleteTicket, deleteUsername } from "./util";

export default () => {
    deleteTicket();
    deleteUsername();
    location.reload();
}
