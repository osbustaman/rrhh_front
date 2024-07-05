import { Link } from 'react-router-dom';
import { Navbar, Nav, Accordion, Card, useAccordionButton } from 'react-bootstrap';
import { FaUser, FaCog, FaTachometerAlt, FaChevronDown } from 'react-icons/fa';
import { useState } from 'react';

import { ModalError } from "./ModalError";

import { useUserData } from '../hooks/useUserData';


import '../static/sidebar.css';

function CustomToggle({ children, eventKey, onClick, isOpen }) {
  const decoratedOnClick = useAccordionButton(eventKey, () => onClick(eventKey));
  return (
    <div
      onClick={decoratedOnClick}
      className={`custom-toggle ${isOpen ? 'open' : ''}`}
    >
      {children}
      <FaChevronDown className={`chevron-icon ms-auto ${isOpen ? 'open' : ''}`} />
    </div>
  );
}

export const Sidebar = ({ isHidden }) => {
  const [openKeys, setOpenKeys] = useState([]);
  const [fullName, setFullname] = useState();
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(redirectTo);
  const handleShow = () => setShow(true);

  const { get_UserData } = useUserData();
  const redirectTo = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh-token');
    localStorage.removeItem('last_name');
    localStorage.removeItem('first_name');
    localStorage.removeItem('mail');

    window.location.href = '/login-admin';
  }


  const dataUser = async () => {
    const dataUser = await get_UserData();

    if (dataUser.error) {
      setTitle("Error")
      setMessage("Usuario no autorizado!!!")
      handleShow();
    }

    setFullname(dataUser.first_name + ' ' + dataUser.last_name);
  };

  dataUser();

  const handleAccordionClick = (eventKey) => {
    setOpenKeys((prevState) =>
      prevState.includes(eventKey) ? [] : [eventKey]
    );
  };

  return (
    <div className={`sidebar ${isHidden ? 'sidebar-hidden' : ''}`}>
      <Navbar expand="lg" className="flex-column align-items-start">
        
        <Navbar.Brand href="#">
          <div className="logo-container">
            <img src="/path/to/logo.png" className="logo" />
          </div>
        </Navbar.Brand>
        <div className="user-profile">
          <div className="profile-image">
          <img src="/path/to/logo.png" className="logo" />
          </div>
          <div className="welcome-text">Hola { fullName }!</div>
        </div>
        
        
        
        <Nav className="flex-column w-100">
          <Accordion className="w-100">
            <Card className="w-100">
              <Card.Header className="w-100 p-0">
                <CustomToggle
                  eventKey="1"
                  onClick={handleAccordionClick}
                  isOpen={openKeys.includes('1')}
                >
                  <FaUser className="me-2" /> Clientes
                </CustomToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="p-0">
                  <Nav.Link as={Link} to="/panel-control/list-clients">
                    Listar Clientes
                  </Nav.Link>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="w-100">
              <Card.Header className="w-100 p-0">
                <CustomToggle
                  eventKey="2"
                  onClick={handleAccordionClick}
                  isOpen={openKeys.includes('2')}
                >
                  <FaCog className="me-2" /> Settings
                </CustomToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="p-0">
                  <Nav.Link as={Link} to="/panel-control/settings/account">
                    Account Settings
                  </Nav.Link>
                  <Nav.Link as={Link} to="/panel-control/settings/privacy">
                    Privacy Settings
                  </Nav.Link>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Nav>
      </Navbar>

      <ModalError show={ show } handleClose={ handleClose } title={title}  message={message} />

    </div>
  );
};
