import React from 'react';

const lista = (props) => {
    return (
        <div>
            <ul>
                <li>Alface</li>
                <li>Tomate</li>
                <li>Queijo</li>
                <li>Macarrão</li>
                <li>Arroz</li>
            </ul>
        </div>
    )
    };
     
    export default lista;

// const lista = (props) => {
//     console.log("[Lista.js] elementos: ", props.elementos);
//     return (
//         <div>
//             <ul>
//                 {props.elementos.map((item, index)=>{
//                     return <li key={'lista-item-'+item+'-'+index}>{item}</li>
//                 })}
//             </ul>
//         </div>
//     )

// };
 
// export default lista;