import React, { useState } from "react";
import styled from "styled-components";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { mobile, tablet } from '../../Assets/responsive';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';



interface Props {
    title: string,
    description: string,
    deadline: string,
    date: string,
    price: number,
    id: number,
    category: {
        name: string,
        iconURL: string
    }
}

interface ButtonProps {
    contact: boolean;
}


const OfferItemContainer = styled.div`
display: flex;
align-items: flex-start;
flex-direction: column;
width: 730px;
margin: 0 auto;
padding: 30px 0px 30px 125px;
${tablet({ paddingLeft: "0px", width: "100%" })}
`;

const OffersUpper = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
`;
const OffersContent = styled.div`

`;
const OffersFooter = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
`;
const OffersTitle = styled.h4`
margin-top: 5px;
word-break: break-all;
`;
const OffersDate = styled.h4`
margin-top: 5px;
color: rgb(114, 177, 88);
display: flex;
align-items: center;
padding-left: 15px;
${mobile({ alignItems: "flex-start" })}
`;
const OffersCategory = styled.h4`
margin-top: 5px;
font-size: 17px;
display: flex;
align-items: center;
${mobile({ fontSize: "14px" })}
`;
const OffersCategoryLogo = styled.img`
height: 25px;
width: 25px;
margin-right: 10px;
`;
const OffersDescription = styled.p`
width: 701px;
word-break: break-all;
margin-top: 0px;
${tablet({ width: "100%" })}
`;
const OffersDeadline = styled.h4`
color: rgb(48, 106, 207);
font-size: 17px;
font-weight: bold;
`
const OffersPrice = styled.h4`
color: rgb(48, 106, 207);
font-size: 17px;
font-weight: bold;
`
const OffersBox = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
`
const Button = styled.button`
  padding: 8px 12px 8px 12px;
  font-size: 12px;
  background: ${(props: ButtonProps) => (props.contact ? "rgb(48, 106, 207)" : "#72B158")};
  border-radius: 10px;
  border: 2px solid white;
  cursor: pointer;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: ${(props: ButtonProps) => (props.contact ? "underline rgb(48, 106, 207)" : "underline #72B158")};
  &:hover {
    color: ${(props: ButtonProps) => (props.contact ? "rgb(48, 106, 207)" : "#72B158")};
    background: white;
    border: ${(props: ButtonProps) => (props.contact ? "2px solid rgb(48, 106, 207)" : "2px solid #72B158")};
  }
`;

const InfoButtons = styled.div`
display: flex;
${mobile({ flexDirection: "column" })}
`


const OffersItem: React.FC<Props> = ({ title, description, date, price, deadline, id, category }) => {

    const [showMore, setShowMore] = useState<boolean>(false)

    const showMoreHandler = (event: React.MouseEvent<HTMLElement>) => {
        setShowMore(!showMore)
        console.log(showMore)
    }

    return (
        <OfferItemContainer>
            <OffersUpper>
                <OffersTitle>{title}</OffersTitle>
                <OffersDate><CalendarMonthIcon />{date}</OffersDate>
            </OffersUpper>
            <OffersContent>
                {showMore ? <>
                    <OffersDescription>{description.substring(0, description.length)}</OffersDescription>
                    <OffersBox>
                        <OffersDeadline>Deadline: {deadline}</OffersDeadline><OffersPrice>{price + "$"}</OffersPrice>
                    </OffersBox>
                </> :
                    <OffersDescription>{description.substring(0, 151) + "..."}</OffersDescription>}
            </OffersContent>
            <OffersFooter>
                <OffersCategory><OffersCategoryLogo src={category.iconURL} />{category.name}</OffersCategory>
                {showMore ?
                    <InfoButtons>
                        <Button contact={true}>
                            <HandshakeOutlinedIcon sx={{ marginRight: "5px" }} />
                            Contact now
                        </Button>
                        <Button contact={false} onClick={showMoreHandler}>
                            <ArrowCircleUpIcon sx={{ marginRight: "5px" }} />
                            Hide info
                        </Button>
                    </InfoButtons>
                    :
                    <Button contact={false} onClick={showMoreHandler}>
                        <ArrowCircleDownIcon sx={{ marginRight: "5px" }} />
                        Show more info
                    </Button>}
            </OffersFooter>
        </OfferItemContainer>
    )
}

export default OffersItem