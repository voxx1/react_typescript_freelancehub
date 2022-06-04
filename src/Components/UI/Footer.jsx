import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined';
import styled from "styled-components";
import { mobile, tablet } from '../../Assets/responsive';
import { Link } from 'react-router-dom'


const Container = styled.div`
    display: flex;
    height: 400px;
    padding: 50px;
    background: #306ACF;
    color: white;
    ${tablet({ flexDirection: "column", height: "100%", padding: "35px" })}
  `;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;

const Logo = styled(Link)`
  font-weight: bold;
  font-size: 34px;
  color: white;
  text-decoration: none;
  display:flex;
  ${mobile({ fontSize: "28px" })}
`;

const Desc = styled.p`
    margin: 20px 0px;
  `;

const SocialContainer = styled.div`
    display: flex;
  `;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
  `;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    
  `;

const Title = styled.h3`
    margin-bottom: 30px;
  `;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
  `;

const ListItem = styled(Link)`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
    color: white;
    &:hover {
      color: #72B158;
    }
  `;

const Right = styled.div`
    flex: 1;
    padding: 20px;
  `;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
      color: teal;
    }
  `;

const Payment = styled.img`
  `;

const Footer = () => {


  return (
    <Container>
      <Left>
        <Logo to="/">FreelanceHub</Logo>
        <Desc>
          Lorem ipsum is great text! It is used to fill empty spaces on your website. Feel free to use it everywhere!
        </Desc>
        <SocialContainer>
          <SocialIcon>
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon >
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon>
            <TwitterIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>For freelancer</Title>
        <List>
          <ListItem to="/">Home</ListItem>
          <ListItem to="/cart">Cart</ListItem>
          <ListItem to="/shop">All items</ListItem>
          <ListItem to="/shop/men">Man Fashion</ListItem>
          <ListItem to="/shop/women">Woman Fashion</ListItem>
        </List>
      </Center>
      <Center>
        <Title>For employer</Title>
        <List>
          <ListItem to="/">Home</ListItem>
          <ListItem to="/cart">Cart</ListItem>
          <ListItem to="/shop">All items</ListItem>
          <ListItem to="/shop/men">Man Fashion</ListItem>
          <ListItem to="/shop/women">Woman Fashion</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <BedOutlinedIcon style={{ marginRight: "10px" }} /> 620 Texas Street 6/2a, Grand Canyon, USA
        </ContactItem>
        <ContactItem>
          <PhoneEnabledOutlinedIcon style={{ marginRight: "10px" }} /> +48 991 232 131
        </ContactItem>
        <ContactItem>
          <MailOutlinedIcon style={{ marginRight: "10px" }} /> test@test.pl
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;