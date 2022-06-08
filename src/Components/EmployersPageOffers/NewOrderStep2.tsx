import styled from "styled-components";
import { useEffect, useState } from "react";
import { mobile, tablet } from '../../Assets/responsive';
import headerImage from "../../Assets/ProjectImages/new-order-header.png"
import StepsComponent from "./StepsComponent";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { updateTitle, updateDescription } from "../../Assets/newOfferSlice"
import { RootState } from "../../Assets/store";
import OffersItem from "../FreelancerOffersPage/OffersItem";


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


const OffersContainer = styled.div`
padding: 0 30px;
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
  margin: 20px 0 50px 0;
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
  ${mobile({ margin: "20px auto" })}
`;

const FormContainer = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
`
const FormItem = styled.div`
display: flex;
flex-direction: column;
padding: 5px 0;
`
const FormInput = styled.input`
border: 1px solid #ccc;
border-radius: 6px;
font: inherit;
max-width: 100%;
padding: 0.5rem;
width: 20rem;
`
const FormTextArea = styled.textarea`
border: 1px solid #ccc;
border-radius: 6px;
font: inherit;
max-width: 100%;
padding: 0.5rem;
width: 20rem;
`
const FormLabel = styled.label`
color: #353b64;
display: block;
font-size: 1rem;
font-weight: 700;
margin-top: 0.5rem;
margin-bottom: 0.5rem;
`


const NewOrder: React.FC = () => {

    const data = useSelector((state: RootState) => state)
    const dispatch = useDispatch()
    const sampleOffer = { ...data.newOffer }
    const [inputTitle, setInputTitle] = useState<string>(sampleOffer.title)
    const [inputDescription, setInputDescription] = useState<string>(sampleOffer.description)


    const titleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputTitle(event.target.value)
    }
    const descriptionHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputDescription(event.target.value)
    }


    useEffect(() => {
        dispatch(updateTitle(inputTitle))
        dispatch(updateDescription(inputDescription))
    }, [inputTitle, inputDescription, dispatch])


    return (
        <Container>
            <HeaderContainer>
                <InfoContainer>
                    <InfoTitle>Add a new order</InfoTitle>
                    <StepsComponent step1={true} step2={true} step3={false} step4={false} />
                </InfoContainer>
                <ImageContainer>
                    <Image src={headerImage} />
                </ImageContainer>
            </HeaderContainer>
            <BodyContainer>
                <CategoryContainer>
                    <FormMainTitle>Fill form with basic informations / preview below
                    </FormMainTitle>
                    <FormContainer>
                        <FormItem>
                            <FormLabel>Title of order</FormLabel>
                            <FormInput onChange={titleHandler} />
                        </FormItem>
                        <FormItem>
                            <FormLabel>Descrption of order</FormLabel>
                            <FormTextArea onChange={descriptionHandler} />
                        </FormItem>
                    </FormContainer>
                    <Link to="/employer/step3">
                        <Button>Next step<ArrowForwardIcon sx={{ marginRight: "5px" }} /></Button>
                    </Link>
                </CategoryContainer>
                <OffersContainer>
                    <OffersItem key={sampleOffer.id} deadline={sampleOffer.deadline} title={sampleOffer.title} description={sampleOffer.description} date={sampleOffer.date} id={sampleOffer.id} price={sampleOffer.price} category={{
                        name: sampleOffer.category.name,
                        iconURL: sampleOffer.category.iconURL
                    }} />
                </OffersContainer>
            </BodyContainer>
        </Container>
    )
}

export default NewOrder