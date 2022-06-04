import styled from "styled-components";
import { mobile } from "../../Assets/responsive"

const Container = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #72B158 ;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ padding: "0px" })}
`;

const Center = styled.h4`
    font-weight: bold;
    color: white;
    text-align: center;
    margin: 3px;
    ${mobile({ fontSize: "12px" })}

`

const SpecialOffer = () => {

    return (
        <Container>
            <Wrapper>
                <Center>
                    Only today hiring a new employee will costs you 30% less!
                </Center>
            </Wrapper>
        </Container>
    );
};

export default SpecialOffer;