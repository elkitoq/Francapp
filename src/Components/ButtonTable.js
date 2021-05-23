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
        <Button size='sm' color='success' onClick={(e) => viewProblem(props.problemaEquipo)} >
            Ver
        </Button>
    )
}