import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import React from 'react';
import './components.css';
import logo from './Logo.jpg';
import Image from 'react-bootstrap/Image'
import background from './Background.jpg'
import NavBar from './NavBar'

import { useNavigate  } from 'react-router-dom';


const Home = () => {
    
    const navigate = useNavigate();
    return (
            <div>
                
                <NavBar text = "Welcome, User">
                </NavBar>
                    <div className="justify-content-left">
                <Container>
                    <div
                        style={{
                           
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100vh',}}>
                                 <div className="bg-blue border"><div className='app flex-row align-items-center'>
                                <label htmlFor="">Select an area</label>
                                <select className='form-select'>
                                    <option value="BV">Buchanan View</option>
                                    <option value="HH">Hill Head</option>
                                    <option value="SE">St. Enouch</option>
                                    <option value="SP">Partick</option> 
                                </select>           
                            </div></div><br></br>
                            <div className='app flex-row align-items-center'>
                            <Button variant="outline-secondary" className="px-4" style={{float:'right'}} onClick={()=>navigate("/reserve")}>Reserve Table</Button>
                            </div>
                    </div>
                </Container>
                </div>
                
                <div className="justify-content-right">
                    <div className="back-image" style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100vh',}}>
                    <Image rounded fluid
                        src={background}
                        className="d-inline-block align-top"
                        alt="Digital Chef"
                        height= "100%"
                         />
                    </div>
                 </div>
            </div>
        );

    
}

export default Home;