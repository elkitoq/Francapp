import { Card } from 'reactstrap'

import { CardTexts } from './CardTexts.js'
import '../assets/css/card-text.css'

export const CardWorks = ({ props }) => {


    return (
        <Card body className="text-left card-body" >
            <CardTexts props={props} />
        </Card>
    )
}