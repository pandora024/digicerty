import React from 'react'

//import bootstrap css
//import 'bootstrap/dist/css/bootstrap.min.css';

//import fire from firebase authen

import fire from '../config/fire'

//import bootstrap components

import { Nav, Navbar, Button, Form, FormControl } from 'react-bootstrap'


const Topbar = () => {

    const logout = () => {

        fire.auth().signOut();
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">หน้าหลัก</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/orders">ดำเนินการ</Nav.Link>
                    <Nav.Link href="/forminput">รายละเอียด</Nav.Link>
                    <Nav.Link href="/pricing">ติดต่อ</Nav.Link>
                </Nav>
                <Form inline>
                    <Button variant="outline-info" onClick={logout}>ออกจากระบบ</Button>
                </Form>
            </Navbar>
        </div>
    )
}

export default Topbar