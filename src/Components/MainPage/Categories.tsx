import React from 'react'
import styled from "styled-components";
import { tablet } from "../../Assets/responsive"
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import KeyboardAltOutlinedIcon from '@mui/icons-material/KeyboardAltOutlined';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
import MonochromePhotosOutlinedIcon from '@mui/icons-material/MonochromePhotosOutlined';


const CategoriesBody = styled.div`

color: white;
display: flex;
justify-content: space-evenly;
align-items: center;
${tablet({ flexDirection: "column", paddingBottom: "30px" })}
`

const Item = styled.div`
border: 2px solid white;
padding: 5px 60px 60px 15px;
height: 200px;
width: 250px;
${tablet({ margin: "15px" })}

`
const CategoryTitle = styled.h2`
padding: 25px 15px 15px 40px;
font-size: 32px;
color: white;
${tablet({ textAlign: "center", padding: "35px 15px 0px 15px" })}
`
const CategoriesFull = styled.div`
background: #72B158;
height: 440px;
${tablet({ height: "100%" })}

`

const ItemText = styled.h3`
font-size: 22px;
`
const ItemDesc = styled.h4`
font-weight: 500;
`

const Categories = () => {
    return (
        <CategoriesFull>
            <CategoryTitle>Browse our categories below:</CategoryTitle>
            <CategoriesBody>
                <Item>
                    <ItemText>Building websites and applications</ItemText>
                    <ItemDesc>The client entrusts you with a job or you already have a completed job.</ItemDesc>
                    <ComputerOutlinedIcon fontSize="large" />
                </Item>
                <Item>
                    <ItemText>Programming and IT</ItemText>
                    <ItemDesc>In the form on the website, you provide customer data and details of the work.</ItemDesc>
                    <KeyboardAltOutlinedIcon fontSize='large' />
                </Item>
                <Item>
                    <ItemText>Graphics, design, architecture</ItemText>
                    <ItemDesc>The customer pays pro forma and receives a VAT invoice, and you a contract for a specific task.</ItemDesc>
                    <InsightsOutlinedIcon fontSize='large' />
                </Item>
                <Item>
                    <ItemText>Multimedia and photography</ItemText>
                    <ItemDesc>After accepting the work, we will pay you the remuneration.</ItemDesc>
                    <MonochromePhotosOutlinedIcon fontSize='large' />
                </Item>
            </CategoriesBody>
        </CategoriesFull>


    )
}

export default Categories