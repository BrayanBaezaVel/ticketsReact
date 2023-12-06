import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { CreateTicket } from "./complementos/create-ticket/CreateTicket.jsx";
import { Dashboard } from "./complementos/dashboard/Dashboard"
import { Area } from "./complementos/area/Area.jsx"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/crearTicket" element={<CreateTicket />}> </Route>
        <Route path="/verTickets" element={<Dashboard />}> </Route>
        <Route path="" element={<Area />}> </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
