import React from "react";


export function Table() {
    return (
    <div>
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
    </div>

)

}
