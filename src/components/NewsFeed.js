import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Tabs, Tab, Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import logo from "./assets/logofood.png";

import {
  RiNewspaperLine,
  RiRadarLine,
  RiBaseStationLine,
  RiFolderUserLine,
  RiLogoutBoxLine,
} from "react-icons/ri";

import styles from "./styles/NewsFeed.module.css";

function NewsFeed() {
  let navigate = useNavigate();
  // const [tabValue, setTabValue] = useState("All");

  function handleClick(e) {
    navigate("/newsfeed/allaccounts");
  }

  function handleSignOut(e) {
    localStorage.removeItem("psnUserId");
    localStorage.removeItem("psnToken");
    localStorage.removeItem("psnUserFirstName");
    localStorage.removeItem("psnUserLastName");
    localStorage.removeItem("psnUserEmail");
    navigate("/");
  }

  useEffect(() => {
    if (localStorage.getItem("psnToken") === null) {
      navigate("/unauthorized");
    }
  });

  return (
    <Container className="pt-3">
      <Row className="mb-3">
        <Col md={12}>
          <Row className="justify-content-center align-items-center">
            <Col md={1} className="text-sm-start text-center mb-sm-0 mb-3">
              <img src={logo} width="125" alt="logo" />
            </Col>
            <Col md={2} className="text-sm-start text-center text-success mb-sm-0 mb-3">
              <h1 style={{ color: "blue" }}>PAF</h1>
            </Col>
            <Col md={6} >
        <Navbar bg="light" expand="lg" className="mb-6 mb-sm-0">
          <Container className={styles.navbarContainer}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="navbar-collapse">
              <Nav className={styles.navContainer} >
                  <div style={{ display: 'flex', justifyContent: "space-around" }} className="w-100" >
                    <Nav.Link>
                      <Link to="" className="text-decoration-none" style={{ color: "blue" }}>
                        <li className="list-group-item fs-5 py-3 text-success shadow">
                          <span>
                            {" "}
                            {/* <RiNewspaperLine /> */}
                             Newsfeed
                          </span>
                        </li>
                      </Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link to="following" className="text-decoration-none">
                        <li className="list-group-item fs-5 py-3 text-success shadow">
                          <span>
                            {/* <RiRadarLine />  */}
                            Following
                          </span>
                        </li>
                      </Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link to="follower" className="text-decoration-none">
                        <li className="list-group-item fs-5 py-3 text-success shadow">
                          <span>
                            {/* <RiBaseStationLine />  */}
                            Followers
                          </span>
                        </li>
                      </Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link to="myprofile" className="text-decoration-none">
                        <li className="list-group-item fs-5 py-3 text-success shadow">
                          <span>
                            {/* <RiFolderUserLine /> */}
                             Profile
                          </span>
                        </li>
                      </Link>
                    </Nav.Link>
                    <Nav.Link>
                      <li
                        className={`list-group-item fs-5 py-3 text-success shadow ${styles.signOutButton}`}
                        onClick={handleSignOut}
                      >
                        <span>
                          {/* <RiLogoutBoxLine />  */}
                          Sign Out
                        </span>
                      </li>
                    </Nav.Link>
                  </div>
                  <div className="list-grup row"  >
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </Col>
        <Col  md={3}>
          <div className="d-flex justify-content-center align-items-center w-100 h-100">
            <Button variant="success" onClick={handleClick} style={{ backgroundColor: "#3d85c6" }}>
              Find All User Accounts
            </Button>
          </div>
        </Col>
       
          </Row>
        </Col>
        <div>

        {/* <Row> */}
      
        {/* </Row> */}
      </div>
        {/* <Row> */}
        
        {/* <Col md={4}>
          <div className="d-flex justify-content-center align-items-center w-100 h-100">
            <Button variant="success" onClick={handleClick}>
              Find All User Accounts
            </Button>
          </div>
        </Col> */}
      {/* </Row> */}
        </Row>
       
      <Row className="mb-3">
        <Col md={8}>
          {/* <Row className="justify-content-center align-items-center">
            <Col md="auto" className="text-sm-start text-center mb-sm-0 mb-3">
              <img src={logo} width="125" alt="logo" />
            </Col>
            <Col className="text-sm-start text-center text-success mb-sm-0 mb-3">
              <h1>PAF</h1>
            </Col>
          </Row> */}
        </Col>
       
      </Row>

     
      {/* </Col> */}
      <br/>
      <Col md={12}>
        <Outlet />{" "}
      </Col>
      {/* </Row> */}
      {/* </Col> */}
    </Container>
  );
}

export default NewsFeed;
