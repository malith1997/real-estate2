import { useRef } from "react";
import { Link } from "react-router-dom";
// import { ButtonGroup,Divider,Stack,Image,Heading,Text,Button,Card, CardHeader, CardBody, CardFooter,Box,SimpleGrid } from '@chakra-ui/react';



function Nav() {
    const navRef = useRef();

    const showNav = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return(   
        
        <header>
            <h2>Real-estate</h2>
            <nav ref={navRef}>
  
                    <Link to="/">Home</Link>
               
                    <Link to="/Rent">Rent</Link>
                
                    <Link to="/Blog">Blog</Link>
               
                    <Link to="/Sell">Sell</Link>
                
             
                
                {/* USE FOR SMOLLER SCREEN CLOSE THE NAV */}
                <button className="nav-btn nav-close-btn" onClick={showNav}> 
                    <a>x</a>
                </button>
            </nav>




            

            {/* OPEN THE NAV IN SMOLLER SCREEN */}
            <button className="nav-btn" onClick={showNav}>
            {/* <a><Image className="menue" src={menue} alt="post" /></a> */}
                </button>
        </header>

        
    );
}

export default Nav;