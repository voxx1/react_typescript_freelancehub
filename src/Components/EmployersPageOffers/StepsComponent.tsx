
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import styled from "styled-components";
import { tablet } from "../../Assets/responsive"


interface Props {
    step1: boolean,
    step2: boolean,
    step3: boolean,
    step4: boolean,
}

const Steps = styled.div`
display: flex;
flex-direction: row;
margin-top: 35px;
${tablet({ flexDirection: "column", marginTop: "5px" })}

`
const Step = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin-right: 15px;
${tablet({ justifyContent: "center", margin: "8px 0px", alignItems: "flex-end" })}

`
const StepInfo = styled.div`
margin-left: 5px;

`

const StepTitle = styled.h5`
margin: 0;
color: grey;
`
const StepDescription = styled.p`
margin: 0;
color: rgb(48, 106, 207);
font-weight: bold;
`

const StepsComponent: React.FC<Props> = ({ step1, step2, step3, step4 }) => {
    return (
        <Steps>
            <Step>
                <CheckCircleIcon sx={{ color: step1 ? "rgb(48,106,207)" : "#CBCBCB" }} />
                <StepInfo>
                    <StepTitle>Step 1</StepTitle>
                    <StepDescription style={{ color: step1 ? "rgb(48,106,207)" : "#CBCBCB" }}>Choose your category</StepDescription>
                </StepInfo>
            </Step>
            <Step>
                <CheckCircleIcon sx={{ color: step2 ? "rgb(48,106,207)" : "#CBCBCB" }} />
                <StepInfo>
                    <StepTitle>Step 2</StepTitle>
                    <StepDescription style={{ color: step2 ? "rgb(48,106,207)" : "#CBCBCB" }}>Fill basic informations</StepDescription>
                </StepInfo>
            </Step>
            <Step>
                <CheckCircleIcon sx={{ color: step3 ? "rgb(48,106,207)" : "#CBCBCB" }} />
                <StepInfo>
                    <StepTitle>Step 3</StepTitle>
                    <StepDescription style={{ color: step3 ? "rgb(48,106,207)" : "#CBCBCB" }}>Fill price and deadline</StepDescription>
                </StepInfo>
            </Step>
            <Step>
                <CheckCircleIcon sx={{ color: step4 ? "rgb(48,106,207)" : "#CBCBCB" }} />
                <StepInfo>
                    <StepTitle>Step 4</StepTitle>
                    <StepDescription style={{ color: step4 ? "rgb(48,106,207)" : "#CBCBCB" }}>Confirmation</StepDescription>
                </StepInfo>
            </Step>
        </Steps>
    )
}

export default StepsComponent