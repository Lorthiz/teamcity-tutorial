import React from 'react'
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

export interface PathConfig {
    path: string,
    text: string,
    deactivate?: boolean;
}

interface Props {
    pathsWithNames: PathConfig[];
}

export const NavigationBar = ({pathsWithNames}: Props) => {
    return <Navbar bg={'primary'} variant={'dark'}>
        <Container>
            <Navbar.Brand as={Link} to="/">Teamcity Presentation App</Navbar.Brand>
            <Nav>
                {pathsWithNames.map((feature, index) =>
                    <Nav.Link as={Link} to={feature.path} key={index}>{feature.text}</Nav.Link>
                )}
            </Nav>
        </Container>
    </Navbar>
}
