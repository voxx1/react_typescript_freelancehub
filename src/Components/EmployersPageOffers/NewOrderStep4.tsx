import styled from "styled-components";
import { mobile, tablet } from '../../Assets/responsive';
import headerImage from "../../Assets/ProjectImages/new-order-header.png"
import StepsComponent from "./StepsComponent";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { RootState } from "../../Assets/store";
import OffersItem from "../FreelancerOffersPage/OffersItem";


interface ButtonProps {
    startOver: boolean;
}

const Container = styled.div`
  display: block;
  position: relative;
  overflow: hidden;
  width: 100%;
`;

const InfoContainer = styled.div`
max-width: 1200px;
`;
const BodyContainer = styled.div`
padding: 0px 45px;
display: flex;
justify-content: center;
align-items: center;
${tablet({ flexDirection: "column", padding: "0px" })}

`;
const CategoryContainer = styled.div`
padding: 10px 0 0 50px;
margin-right: -132px;
${tablet({ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", marginBottom: "0px", padding: "0px", marginRight: "0px" })}

`;
const FormMainTitle = styled.h2`
margin-top: 0px;
width: 400px;
color: #353b64;
${tablet({ textAlign: "center", margin: "15px 5px", fontSize: "1.1em", width: "100%" })}
`;

const FormText = styled.p`
width: 400px;
text-align: left;
${tablet({ width: "90%", textAlign: "center" })}

`


const OffersContainer = styled.div`
padding: 0 30px;
${tablet({ width: "90%" })}

`;
const HeaderContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
${mobile({ justifyContent: "center", marginTop: "25px", textAlign: "center" })}
`;

const InfoTitle = styled.span`
font-weight: bold;
color:#353b64;
font-size: 27px;
${mobile({ fontSize: "19px" })}

`;

const ImageContainer = styled.div`
margin-left: 50px;
${tablet({ textAlign: "center", margin: "0px" })}

`;


const Image = styled.img`
height: auto;
width: 250px;
${mobile({ display: "none" })}
`;

const Button = styled.button`
padding: 11px 25px 11px 25px;
font-size: 20px;
margin: 0px 0 25px 0;
  background: ${(props: ButtonProps) => (props.startOver ? "rgb(48, 106, 207)" : "#72B158")};
  border-radius: 10px;
  border: 2px solid white;
  cursor: pointer;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: ${(props: ButtonProps) => (props.startOver ? "underline rgb(48, 106, 207)" : "underline #72B158")};
  &:hover {
    color: ${(props: ButtonProps) => (props.startOver ? "rgb(48, 106, 207)" : "#72B158")};
    background: white;
    border: ${(props: ButtonProps) => (props.startOver ? "2px solid rgb(48, 106, 207)" : "2px solid #72B158")};
  }
  ${mobile({ margin: "20px auto" })}
`;



const NewOrderStep4: React.FC = () => {

    const data = useSelector((state: RootState) => state)
    const sampleOffer = { ...data.newOffer }

    const restartHandler = () => {
        window.location.href = "/employer/step1"
    }

    const getResults = () => {
        console.log(sampleOffer)
    }

    return (
        <Container>
            <HeaderContainer>
                <InfoContainer>
                    <InfoTitle>Add a new order</InfoTitle>
                    <StepsComponent step1={true} step2={true} step3={true} step4={true} />
                </InfoContainer>
                <ImageContainer>
                    <Image src={headerImage} />
                </ImageContainer>
            </HeaderContainer>
            <BodyContainer>
                <CategoryContainer>
                    <FormMainTitle>On the right you can see a preview of your order
                    </FormMainTitle>
                    <FormText>If everything is correct press the button below to add new order, in other case you can start over.</FormText>
                    <Link to="/employer/step4">
                        <Button onClick={getResults} startOver={false}>Add my order!<ArrowForwardIcon sx={{ marginRight: "5px" }} /></Button>
                    </Link>
                    <Button onClick={restartHandler} startOver={true}>Start again<ArrowForwardIcon sx={{ marginRight: "5px" }} /></Button>
                </CategoryContainer>
                <OffersContainer>
                    <OffersItem key={sampleOffer.id} deadline={sampleOffer.deadline} title={sampleOffer.title} expanded={true} description={sampleOffer.description} date={sampleOffer.date} id={sampleOffer.id} price={sampleOffer.price} category={{
                        name: sampleOffer.category.name,
                        iconURL: sampleOffer.category.iconURL
                    }} />
                </OffersContainer>
            </BodyContainer>
        </Container>
    )
}

export default NewOrderStep4