import React from 'react';
import { Table } from 'reactstrap';
import { TableBody } from './TableBody.js'
import { TableHead } from './TableHead.js'

export const TableWork = ({ works }) => {
    return (
        <Table hover className="no-scroll1">
            <TableHead />
            <tbody>
                {works.map(datos => (<TableBody key={datos.id} props={datos} />))}
            </tbody>
        </Table>
    );
}

