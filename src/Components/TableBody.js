import React from 'react';
import { ButtonTable } from './ButtonTable.js'
import { SelectState } from './SelectState.js'




export const TableBody = ({ props }) => {


    return (
        <tr>
            <th scope="row">#{props.id}</th>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>{props.date}</td>
            <td>{props.deliveryDate}</td>
            <td>{props.numberCel}</td>
            <td>{props.equipo}</td>
            <td>
                <ButtonTable props={props} />
            </td>
            <td><SelectState state={props.state} id={props.id} /></td>
        </tr>
    )
}