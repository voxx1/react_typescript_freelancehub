import React from "react";
import styled from "styled-components";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { mobile } from '../../Assets/responsive';



interface Props {
    title: string,
    description: string,
    date: string,
    price: number,
    id: number,
    category: {
        name: string,
        iconURL: string
    }
}

const OfferItemContainer = styled.div`
display: flex;
flex-direction: column;
width: 700px; 
`
const JobTitleContainer = styled.div`
display: flex;
align-items: start;
justify-content: space-between;
${mobile({ justifyContent: "center" })}
`
const JobTitle = styled.h2`
margin-top: 0px;
font-size: 23px;
color: #303458;
`
const JobDate = styled.h2`
color: rgb(114, 177, 88);
margin-top: 3px;
font-size: 14px;
font-weight: 600;
margin-left: 50px;
`
const JobContent = styled.div`
`
const JobDescription = styled.p`
font-size: 15px;
font-weight: 400;
margin-top: 0px;
`
const JobFooter = styled.div`
display: flex;
align-items: center;
`
const JobCategory = styled.h2`
font-weight: 500;
font-size: 17px;
`

const JobCategoryIcon = styled.img`
height: 30px;
width: 30px;
margin-right: 10px;
`

const OffersItem: React.FC<Props> = ({ title, description, date, price, id, category }) => {
    return (
        <OfferItemContainer>
            <JobTitleContainer>
                <JobTitle>{title}</JobTitle>
                <JobDate>{date}<CalendarMonthOutlinedIcon sx={{ color: "rgb(114, 177, 88)", marginLeft: "5px" }} fontSize="small" /></JobDate>
            </JobTitleContainer>
            <JobContent>
                <JobDescription>
                    {description}
                </JobDescription>
            </JobContent>
            <JobFooter>
                <JobCategoryIcon src={category.iconURL} /><JobCategory>{category.name}</JobCategory>
            </JobFooter>

        </OfferItemContainer>
    )
}

export default OffersItem