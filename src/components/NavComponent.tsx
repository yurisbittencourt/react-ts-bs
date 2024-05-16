import { Image } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { NavLink } from "react-router-dom"

export default function NavComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <NavLink to="/" className="text-decoration-none">
          <Navbar.Brand>
            <Image src="/logo.png" alt="Company logo" className="me-1" />
            dynaCERT
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink
              to="/inventory"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Inventory
            </NavLink>
            <NavLink
              to="/unit-data"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Unit Data
            </NavLink>
            <NavLink
              to="/unit-status"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Unit Status
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
