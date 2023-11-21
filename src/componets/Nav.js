import { useRef } from "react";
import { Link } from "react-router-dom";
import imglogo from "../img/logo.png";
// import { ButtonGroup,Divider,Stack,Image,Heading,Text,Button,Card, CardHeader, CardBody, CardFooter,Box,SimpleGrid } from '@chakra-ui/react';

function Nav() {
  const navRef = useRef();

  const showNav = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      
      <div className="containernav">
        <nav ref={navRef}>
          <div className="nav11">
            <img className="imgelogo" src={imglogo} />

            <Link to="/">Home</Link>

            <Link to="/Rent">Rent</Link>

            <Link to="/Blog">Blog</Link>

            <Link to="/Sell">Sell</Link>
          </div>

          {/* USE FOR SMOLLER SCREEN CLOSE THE NAV */}
        </nav>
      </div>
    </header>
  );
}

export default Nav;
