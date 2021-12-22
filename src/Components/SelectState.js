import { Button } from 'reactstrap'
import { useState } from 'react';
import { updateWork } from '../Service/ServiceLocalBase.js'


export const SelectState = (id) => {

    const [value, setValue] = useState(1)

    const handleChange = (e) => {
        let { value } = e.target;
        setValue({
            value,
        });
    }

    const update = async () => {
        console.log(id)
        updateWork(id.id, value.value)
    }

    return (
        <div>
            <select onChange={handleChange} style={{ width: "80px", marginRight: "5px", height: "25px", cursor: "pointer", borderRadius: ".2rem" }}>
                <option value={'1'} >Espera</option>
                <option value={'2'} >Progreso</option>
                <option value={'3'}>Terminado</option>
                <option value={'4'}>Entregado</option>
            </select>
            <Button size='sm' color='success' onClick={async (e) => { update() }} >Save</Button>
        </div>
    )
}