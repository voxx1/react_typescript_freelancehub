import styled from "styled-components";
import { mobile, tablet } from '../../Assets/responsive';
import { DUMMY_OFFERS, DUMMY_CATEGORIES } from "../../Assets/DUMMY_DATA"
import headerImage from "../../Assets/HomePageFiles/header.png"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


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
const OffersItem = styled.div`
display: flex;
align-items: flex-start;
flex-direction: column;
padding-left: 140px;
${tablet({ paddingLeft: "0px" })}
`;

const OffersUpper = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
`;
const OffersContent = styled.div`

`;
const OffersFooter = styled.div`

`;
const OffersTitle = styled.h4`
margin-top: 5px;
`;
const OffersDate = styled.h4`
margin-top: 5px;
color: rgb(114, 177, 88);
display: flex;
align-items: center;
${mobile({ alignItems: "flex-start" })}
`;
const OffersDescription = styled.p`
width: 700px;
margin-top: 0px;
${tablet({ width: "100%" })}

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

  return (
    <Container>
      <HeaderContainer>
        <InfoContainer>
          <InfoTitle>Find a new order</InfoTitle><InfoNumber> 5552 orders waiting</InfoNumber>
          <InfoDesc>More than 123 freelancers already!</InfoDesc>
        </InfoContainer>
        <ImageContainer>
          <Image src={headerImage} />
        </ImageContainer>
      </HeaderContainer>
      <BodyContainer>
        <CategoryContainer>
          <CategoryMainTitle>Categories</CategoryMainTitle>
          {DUMMY_CATEGORIES.map(item =>
            <CategoryItem>
              <CategoryLogo src={item.url} /><CategoryTitle>{item.name}</CategoryTitle>
            </CategoryItem>)}
        </CategoryContainer>
        <OffersContainer>
          {DUMMY_OFFERS.map(item =>
            <OffersItem>
              <OffersUpper>
                <OffersTitle>{item.title}</OffersTitle>
                <OffersDate><CalendarMonthIcon />{item.date}</OffersDate>
              </OffersUpper>
              <OffersContent>
                <OffersDescription>{item.description}</OffersDescription>
              </OffersContent>
              <OffersFooter>

              </OffersFooter>
            </OffersItem>)}
        </OffersContainer>

      </BodyContainer>

    </Container>
  )
}

export default OffersList