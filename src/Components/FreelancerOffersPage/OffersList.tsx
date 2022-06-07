import styled from "styled-components";
import { useState } from "react";
import { mobile, tablet } from '../../Assets/responsive';
import { DUMMY_OFFERS, DUMMY_CATEGORIES } from "../../Assets/DUMMY_DATA"
import headerImage from "../../Assets/ProjectImages/freelancer-header.png"
import OffersItem from "./OffersItem"


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
${tablet({ flexDirection: "column", padding: "0px 30px" })}

`;
const CategoryContainer = styled.div`
${tablet({ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", marginBottom: "25px" })}

`;
const CategoryMainTitle = styled.h2`
margin-top: 0px;
`;
const CategoryItem = styled.div`
display: flex;
align-items: center;
cursor: pointer;

`;

const CategoryTitle = styled.h4`

`;
const CategoryLogo = styled.img`
height: 35px;
width: 35px;
margin-right: 10px;
`;

const OffersContainer = styled.div`

`;
const HeaderContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
${mobile({ justifyContent: "center", marginTop: "25px" })}
`;

const InfoTitle = styled.span`
font-weight: bold;
font-size: 27px;
${mobile({ fontSize: "19px" })}

`;
const InfoDesc = styled.h4`
font-weight: bold;
`;
const InfoNumber = styled.span`
font-weight: bold;
font-size: 13px;
${mobile({ fontSize: "11px" })}

`;
const ImageContainer = styled.div`

`;
const Image = styled.img`
height: auto;
width: 190px;
${mobile({ display: "none" })}
`;



const OffersList = () => {

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  let clickedCategory = DUMMY_OFFERS
  if (selectedCategory != null) {
    clickedCategory = DUMMY_OFFERS.filter(item => item.category.name === selectedCategory)
  }



  return (
    <Container>
      <HeaderContainer>
        <InfoContainer>
          <InfoTitle>Find a new order</InfoTitle><InfoNumber> 5552 orders waiting</InfoNumber>
          <InfoDesc>Click on category to filter by it's name!</InfoDesc>
        </InfoContainer>
        <ImageContainer>
          <Image src={headerImage} />
        </ImageContainer>
      </HeaderContainer>
      <BodyContainer>
        <CategoryContainer>
          <CategoryMainTitle>Categories</CategoryMainTitle>
          {DUMMY_CATEGORIES.map(item =>
            <CategoryItem onClick={() => setSelectedCategory(item.name)} key={item.name}>
              <CategoryLogo src={item.url} /><CategoryTitle style={{ color: selectedCategory === item.name ? "#72B158" : "black" }}>{item.name}</CategoryTitle>
            </CategoryItem>)}
          <CategoryItem onClick={() => setSelectedCategory(null)}>
            <CategoryLogo src="https://cdn-icons-png.flaticon.com/512/709/709606.png" /><CategoryTitle>Back to all</CategoryTitle>
          </CategoryItem>
        </CategoryContainer>
        <OffersContainer>
          {clickedCategory.map(item =>
            <OffersItem key={item.id} deadline={item.deadline} title={item.title} description={item.description} date={item.date} id={item.id} price={item.price} category={{
              name: item.category.name,
              iconURL: item.category.url
            }} />)}
        </OffersContainer>

      </BodyContainer>

    </Container>
  )
}

export default OffersList