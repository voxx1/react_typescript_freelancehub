import styled from "styled-components";
import { mobile, smallmobile, tablet } from "../../Assets/responsive"
import step1 from "../../Assets/HomePageFiles/step-1.png"
import step2 from "../../Assets/HomePageFiles/step-2.png"
import step3 from "../../Assets/HomePageFiles/step-3.png"
import step4 from "../../Assets/HomePageFiles/step-4.png"


const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column", marginTop: "0px" })}
  ${smallmobile({ marginTop: "-10px" })}

`;

const InfoContainer = styled.div`
  flex: 1;
  text-align: center;
  padding: 45px;
  ${mobile({ padding: "15px", textAlign: "center" })}
`;

const ItemsWrapper = styled.div`
display: flex;
flex-direction: row;
display: flex;
align-text: center;
justify-content: space-around;
${tablet({ flexDirection: "column", margin: "0 auto", textAlign: "center" })}
${mobile({ flexDirection: "column" })}

`

const Title = styled.h2`
  font-size: 40px;
  margin-top: -105px;
  ${mobile({ fontSize: "25px", marginTop: "0px" })}
  


`;

const Desc = styled.p`
  margin: 30px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Item = styled.div`
width: 250px;
`

const ItemText = styled.h3`
font-size: 25px;
`
const ItemDesc = styled.h4`
font-weight: 500;
`

const Image = styled.img`
height: 200px;
width: 220px;
`

const HowItWorks = () => {
    return (
        <Container>
            <InfoContainer>
                <Title>How does it work?!</Title>
                <Desc>Check the whole process below!</Desc>
            </InfoContainer>
            <ItemsWrapper>
                <Item>
                    <Image src={step1} />
                    <ItemText>1. Order</ItemText>
                    <ItemDesc>The client entrusts you with a job or you already have a completed job.</ItemDesc>
                </Item>
                <Item>
                    <Image src={step2} />
                    <ItemText>2. Form</ItemText>
                    <ItemDesc>In the form on the website, you provide customer data and details of the work.</ItemDesc>
                </Item>
                <Item>
                    <Image src={step3} />
                    <ItemText>3. Invoice</ItemText>
                    <ItemDesc>The customer pays pro forma and receives a VAT invoice, and you a contract for a specific task.</ItemDesc>
                </Item>
                <Item>
                    <Image style={{ height: "180px", width: "180px" }} src={step4} />
                    <ItemText>4. Payment</ItemText>
                    <ItemDesc>After accepting the work, we will pay you the remuneration.</ItemDesc>
                </Item>
            </ItemsWrapper>

        </Container>
    );
};

export default HowItWorks;