import logo from '../logo.svg'
import { Nav, NavItem, NavLink, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import NewOrderActive from '../assets/icons/icon_new_active.svg'
import NewOrderUnactive from '../assets/icons/icon_new_unactive.svg'
import WorkordersActive from '../assets/icons/icon_martillo_active.svg'
import WorkordersUnactive from '../assets/icons/icon_martillo_unactive.svg'
import CalendarActive from '../assets/icons/icon_calendar_active.svg'
import CalendarUnactive from '../assets/icons/icon_calendar_unactive.svg'
import OptionActive from '../assets/icons/icon_settings_active.svg'
import OptionUnactive from '../assets/icons/icon_setting_unactive.svg'

import '../assets/css/style.css'

export const Sidebar = () => {

    return (
        <Col className="col-sidebar" xs="2">
            <Nav vertical className="sidebar">
                <div className="logo">
                    <img className="logo-img" src={logo} height="150px" alt="" />
                </div>
                <NavItem>
                    <NavLink href="/"><img src={NavLink ? NewOrderActive : NewOrderUnactive}
                        alt="" />Nueva Orden</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/Workorders"><img src={NavLink ? WorkordersActive : WorkordersUnactive}
                        alt="" />Workorders</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/Calendar"><img src={NavLink ? CalendarActive : CalendarUnactive}
                        alt="" />Calendar</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/Options"><img src={NavLink ? OptionActive : OptionUnactive}
                        alt="" />Opciones</NavLink>
                </NavItem>
            </Nav>
        </Col>
    )
}

export default Sidebar;