import styled from 'styled-components'
import { mobile, smallmobile } from '../../Assets/responsive';
import { Link } from 'react-router-dom';
import heroImage from "../../Assets/ProjectImages/hero_img.png"
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';

const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  position: relative;
  margin-top: -25px;
  overflow: hidden;
  ${mobile({ marginTop: "0px", height: "100vh" })}

`;


const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  ${mobile({ flexDirection: "column-reverse" })}

`;


const InfoContainer = styled.div`
  padding: 15px;
  ${mobile({ padding: "15px", textAlign: "center", })}

`;

const ImageContainer = styled.div`
`

const Image = styled.img`
  width: 45vw;
  ${mobile({ width: "100vw", maxHeight: "400px" })}
  ${smallmobile({ height: "290px", width: "100%", marginTop: "0px" })}

`

const Title = styled.h1`
  font-size: 40px;
  ${mobile({ fontSize: "25px" })}
  color: #72B158;
`;

const Desc = styled.h3`
  margin: 30px 0px;
  font-size: 34px;
  font-weight: 700;
  letter-spacing: 3px;
  ${mobile({ fontSize: "21px" })}
`;

const DescFull = styled.p`
  margin: 30px 0px;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 3px;
  ${mobile({ fontSize: "16px" })}
`;

const Button = styled.button`
  padding: 14px 35px 14px 35px;
  font-size: 20px;
  background: #72B158;
  border-radius: 10px;
  border: 2px solid white;
  cursor: pointer;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: underline #72B158;
  &:hover {
    color: #72B158;
    background: white;
    border: 2px solid #72B158;
  }
  ${mobile({ margin: "0px auto" })}
`;

const Slider = () => {



  return (
    <Container>
      <Wrapper>
        <InfoContainer>
          <Title>For a freelancer</Title>
          <Desc>Sell your services<br />
            without a company</Desc>
          <DescFull>
            Securely send files with work<br />
            and settle orders on an invoice
          </DescFull>
          <Link to="/freelancer">
            <Button>
              <MiscellaneousServicesIcon sx={{ marginRight: "5px" }} />
              Find a job now</Button>
          </Link>
        </InfoContainer>
        <ImageContainer>
          <Image src={heroImage} />
        </ImageContainer>
      </Wrapper>
    </Container>
  )
}

export default Slider