import styled from "styled-components";
import { mobile, tablet } from "../../Assets/responsive"
import left from "../../Assets/use-left.png"
import right from "../../Assets/use-right.png"



const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
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
${tablet({ flexDirection: "column", margin: "0 auto", textAlign: "start", })}
${mobile({ flexDirection: "column" })}

`

const Title = styled.h2`
  font-size: 40px;
  margin-top: -35px;
  ${mobile({ fontSize: "25px", marginTop: "20px" })}

`;

const Desc = styled.p`
  margin: 30px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
`;

const Item = styled.div`
${tablet({ margin: "20px" })}

`

const ItemText = styled.h3`
font-size: 25px;
`
const ItemList = styled.ul`
font-weight: 400;
`
const ItemListItem = styled.li`
`

const Image = styled.img`
height: auto;
max-width: 100%;
`

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
  text-decoration: underline white;
`;


const TypeChoice = () => {
  return (
    <Container>
      <InfoContainer>
        <Title>Use as you need to!</Title>
        <Desc>Choose the type of assistance you need</Desc>
      </InfoContainer>
      <ItemsWrapper>
        <Item>
          <Image src={left} />
          <ItemText>Receive payment for the project</ItemText>
          <ItemList>
            <ItemListItem>Fill out the form and attach files with the finished work.</ItemListItem>
            <ItemListItem>Wait for the customer to pay the pro forma and receive a VAT invoice.</ItemListItem>
            <ItemListItem>Receive your salary even within an hour of the customer's payment.</ItemListItem>
          </ItemList>
          <Button>Check available orders</Button>
        </Item>
        <Item>
          <Image src={right} />
          <ItemText>Secure a new job</ItemText>
          <ItemList>
            <ItemListItem>Send an online contract proposal and wait for customer acceptance. </ItemListItem>
            <ItemListItem>Pick up your net salary when the client accepts the job.</ItemListItem>
          </ItemList>
          <Button style={{ background: "#306ACF" }}>Add a new order</Button>
        </Item>
      </ItemsWrapper>
    </Container>
  );
};

export default TypeChoice;