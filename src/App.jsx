import { useState } from "react";
import {Table} from "./complementos/tablaTickets";

function App() {
  // const [idTicket, setidTicket] = useState("");
  const [area1, setArea1] = useState("");
  const [area2, setArea2] = useState("");
  const [comentario, setComentario] = useState("");
  const [datos,setDatos]=useState ([]);

  function Agregar() {
    let valores = { area1: area1, area2: area2, comentario: comentario };
    setDatos([...datos, valores]);
    setArea1("");
    setArea1("");
    setComentario("");
  }

  return (
    <>
      <div className="container m-2">
        <label className="col-2">
          <input
            type="text"
            className="form-control"
            value={area1}
            onChange={(e) => {
              setArea1(e.target.value);
            }}
            placeholder="Area Solicitante"
          />
        </label>
        <label className="col-2 m-2">
          <input
            type="text"
            className="form-control"
            value={area2}
            onChange={(e) => {
              setArea2(e.target.value);
            }}
            placeholder="Area Encargada"
          />
        </label>
        <label className="col-2">
          <input
            type="text"
            className="form-control"
            value={comentario}
            onChange={(e) => {
              setComentario(e.target.value);
            }}
            placeholder="Comentario"
          />
        </label>
        <input className="btn bg-success m-2 " type="button" value="Crear Ticket" onClick={()=>{Agregar()}} />
      </div>
      <table class="table container">
            <thead>
                <tr>
                    <th className="bg-primary" scope="col">
                        Area Solicitante
                    </th>
                    <th className="bg-info" scope="col">
                        Area Encargada
                    </th>
                    <th className="bg-info" scope="col">
                        Comentarios
                    </th>
                </tr>
            </thead>
        <tbody>
            {datos.map((dato)=>{
                return(
                    <tr>
                        <th>{dato.area1}</th>
                        <td>{dato.area2}</td>
                        <td>{dato.comentario}</td>
                    </tr>
                )
            })}
        </tbody>
        </table>
  

    </>
  );
}
export default App;
