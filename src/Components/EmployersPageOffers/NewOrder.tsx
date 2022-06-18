import styled from "styled-components";
import { useEffect, useState } from "react";
import { mobile, tablet } from '../../Assets/responsive';
import { DUMMY_CATEGORIES, DUMMY_OFFERS } from "../../Assets/DUMMY_DATA"
import headerImage from "../../Assets/ProjectImages/new-order-header.png"
import StepsComponent from "./StepsComponent";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { updateCategory, updateIcon } from "../../Assets/newOfferSlice"
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
margin-right: -252px;
margin-bottom: 30px;
${tablet({ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", marginBottom: "25px", padding: "0px", marginRight: "0px" })}

`;
const CategoryMainTitle = styled.h2`
margin-top: 0px;
width: 400px;

color: #353b64;
${tablet({ textAlign: "center", margin: "15px 5px", fontSize: "1.1em", width: "100%" })}

`;
const CategoryItem = styled.div`
display: flex;
align-items: center;
cursor: pointer;
padding-left: 45px;
${tablet({ padding: "0px" })}

`;

const CategoryTitle = styled.h4`
`;
const CategoryLogo = styled.img`
height: 35px;
width: 35px;
margin-right: 10px;
`;

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


const NewOrder: React.FC = () => {

    const data = useSelector((state: RootState) => state)
    const dispatch = useDispatch()
    const sampleOffer = { ...data.newOffer }
    const [selectedCategory, setSelectedCategory] = useState<string>(sampleOffer.category.name)
    const [categoryIcon, setCategoryIcon] = useState<string>(sampleOffer.category.iconURL)



    const iconHandler = () => {
        let result = DUMMY_OFFERS.filter(item => item.category.name === selectedCategory)
        setCategoryIcon(result[0].category.url)
    }

    useEffect(() => {
        dispatch(updateCategory(selectedCategory))
        dispatch(updateIcon(categoryIcon))

    }, [selectedCategory, categoryIcon, dispatch])


    return (
        <Container>
            <HeaderContainer>
                <InfoContainer>
                    <InfoTitle>Add a new order</InfoTitle>
                    <StepsComponent step1={true} step2={false} step3={false} step4={false} />
                </InfoContainer>
                <ImageContainer>
                    <Image src={headerImage} />
                </ImageContainer>
            </HeaderContainer>
            <BodyContainer>
                <CategoryContainer>
                    <CategoryMainTitle>Choose a category of the work you want to outsource / preview below
                    </CategoryMainTitle>
                    {DUMMY_CATEGORIES.map(item =>
                        <CategoryItem onClick={() => { setSelectedCategory(item.name); iconHandler() }} key={item.name}>
                            <CategoryLogo src={item.url} /><CategoryTitle style={{ color: selectedCategory === item.name ? "#72B158" : "#353b64" }}>{item.name}</CategoryTitle>
                        </CategoryItem>)}
                    {selectedCategory !== "Category of your order" ? <Link to="/employer/step2">
                        <Button>Next step<ArrowForwardIcon sx={{ marginRight: "5px" }} /></Button>
                    </Link> : null}

                </CategoryContainer>
                <OffersContainer>
                    <OffersItem key={sampleOffer.id} deadline={sampleOffer.deadline} title={sampleOffer.title} expanded={false} description={sampleOffer.description} date={sampleOffer.date} id={sampleOffer.id} price={sampleOffer.price} category={{
                        name: sampleOffer.category.name,
                        iconURL: sampleOffer.category.iconURL
                    }} />
                </OffersContainer>
            </BodyContainer>
        </Container>
    )
}

export default NewOrder