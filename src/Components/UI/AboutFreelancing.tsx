import styled from "styled-components";
import { mobile, tablet } from "../../Assets/responsive"
import boon1 from "../../Assets/boon-1.png"
import boon2 from "../../Assets/boon-2.png"
import boon3 from "../../Assets/boon-3.png"



const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  ${mobile({ padding: "0px", flexDirection: "column", marginTop: "0px" })}

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
justify-content: space-evenly;
width: 90%;
margin: 0 auto;
${tablet({ flexDirection: "column", margin: "0 auto", textAlign: "center" })}
${mobile({ flexDirection: "column" })}

`

const Title = styled.h2`
  font-size: 40px;
  margin-top: -35px;
  ${mobile({ fontSize: "25px", marginTop: "0px" })}

`;

const Desc = styled.p`
  margin: 30px 0px;
  font-size: 20px;
  font-weight: 400;
`;

const Item = styled.div`
padding: 30px;
${mobile({ margin: "20px", padding: "5px" })}
`

const ItemText = styled.h3`
font-size: 25px;
`

const Image = styled.img`
height: auto;
max-width: 100%;
`



const AboutFreelancing = () => {
    return (
        <Container>
            <InfoContainer>
                <Title>Professional freelancing</Title>
            </InfoContainer>
            <ItemsWrapper>
                <Item>
                    <Image src={boon1} />
                    <ItemText>Payment on the account even on the same day</ItemText>
                    <Desc>The money for the work done will reach you on the same business day, if your client uses fast online payments or BLIK.</Desc>
                </Item>
                <Item>
                    <Image src={boon2} />
                    <ItemText>Invoice without VAT for foreign customers</ItemText>
                    <Desc>Settle orders for clients from all over the world without restrictions and work permits. We will issue an invoice with reverse VAT for your services.</Desc>

                </Item>
                <Item>
                    <Image src={boon3} />
                    <ItemText>Easy settlement of contracts without unnecessary documents</ItemText>
                    <Desc>We will pay the income tax for you, issue a confirmation of employment and send you PIT-11 once a year. Without complications.</Desc>

                </Item>
            </ItemsWrapper>
        </Container>
    );
};

export default AboutFreelancing;