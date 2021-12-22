import { Button } from 'reactstrap'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const ButtonTable = ({ props }) => {

    function viewProblem(problem) {
        const MySwal = withReactContent(Swal)

        //create modal view problem
        MySwal.fire(
            {
                icon: 'info',
                title: 'Problema',
                text: problem,
                showConfirmButton: true
            }
        )
    }

    return (
        <Button style={{ width: "50px" }} size='sm' color='info' onClick={(e) => viewProblem(props.problemaEquipo)} >
            Ver
        </Button>
    )
}