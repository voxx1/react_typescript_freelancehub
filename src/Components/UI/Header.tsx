import React, { useEffect } from "react";
import styled from "styled-components";
import { mobile } from "../../Assets/responsive"
import { Link } from "react-router-dom";
import SpecialOffer from "./SpecialOffer";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./Header.css"

const Container = styled.header`
  height: 80px;
  background: white ;
  ${mobile({ height: "60px" })}

`;

const Wrapper = styled.nav`
  padding: 20px 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${mobile({ padding: "10px 0px", flexDirection: "column" })}
`;


const Left = styled.div`
  text-align: center;
  background: #72B158;
background: linear-gradient(to bottom, #72B158 0%, #306ACF 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
  ${mobile({ flex: 0, marginLeft: "10px", textAligh: "flex-start" })}

`;

const Logo = styled(Link)`
  font-weight: bold;
  font-size: 30px;
  color: black;
  text-decoration: none;
  display:flex;
  ${mobile({ fontSize: "14px" })}
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "end", marginRight: "5px" })}
`;

const MenuItem = styled(Link)`
  font-size: 18px;
  cursor: pointer;
  color: black;
  font-weight: bold;
  text-decoration: none;
  margin: 0px 18px;
  ${mobile({ fontSize: "13px", margin: "0px 5px" })}
`;


const Navbar = () => {

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  const isSticky = () => {
    const header = document.querySelector('.header');
    const scrollTop = window.scrollY;
    scrollTop >= 40 ? header!.classList.add('is-sticky') : header!.classList.remove('is-sticky');
  };

  return (
    <>
      <SpecialOffer />
      <Container className="header" >
        <Wrapper>
          <Left>
            <Logo to="/">FreelanceHub</Logo>

          </Left>
          <Right>
            <MenuItem style={{ color: "#72B158" }} to="/freelancer">For freelancer</MenuItem>
            <MenuItem style={{ color: "#306ACF" }} to="/employer">For employer</MenuItem>
            <MenuItem to="/register">Register</MenuItem>
            <MenuItem to="/login">Login</MenuItem>
            <AccountCircleIcon fontSize="medium" />
          </Right>

        </Wrapper>
      </Container>
    </>

  );
};

export default Navbar;