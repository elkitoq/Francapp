import { FormGroup, Label } from 'reactstrap'

export const FormLabel = ({ nombre }) => {
    return (
        <FormGroup row>
            <Label>{nombre}</Label>
        </FormGroup>
    )
}