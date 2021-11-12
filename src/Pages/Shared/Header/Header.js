import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#home" className="text-White fw-bold">
            Watch Shop Bd
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end ">
            <Nav.Link as={HashLink} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#services">
              Products
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#experts">
              More Products
            </Nav.Link>

            {user.email ? (
              <div>
                <NavDropdown
                  variant="text-light"
                  title="Manage Service"
                  id="basic-nav-dropdown"
                >
                  <Nav.Link className="text-black" as={HashLink} to="/orders">
                    {/* <button >My Order</button> */}
                    order
                  </Nav.Link>
                  <Nav.Link className="text-black" as={HashLink} to="/mange">
                    {/* <button >Mange</button> */}
                    Mange
                  </Nav.Link>
                  <br />
                  <Nav.Link
                    className="text-black"
                    as={HashLink}
                    to="/addservice"
                  >
                    {/* <button >Add Service</button> */}
                    Add Product
                  </Nav.Link>
                </NavDropdown>
              </div>
            ) : (
              ""
            )}

            {user?.email ? (
              <Button
                onClick={logOut}
                className="Rounded btn-danger m-2"
                variant="black"
              >
                Logout
              </Button>
            ) : (
              <Nav.Link className="text-black" as={Link} to="/login">
                <button className="btn-danger">Login</button>
              </Nav.Link>
            )}

            <Navbar.Text>
             {user.email && <a  href="#login" className="text-white">
                {user?.displayName ? user?.displayName : user?.email}
              </a>}
              &nbsp;&nbsp;&nbsp;&nbsp;
              <img
                style={{
                  borderRadius: "100%",
                  width: "50px",
                }}
                src={user?.photoURL}
                alt=""
              />
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
