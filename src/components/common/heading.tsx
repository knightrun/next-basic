import React from "react";
import styled from "@emotion/styled";

const HeadingWrap = styled.div`
    text-align: center;
    margin: 10px 0;
`

const StyledHeading = styled.div`
    font-size: ${({level} : {level: number}) => 
            +level === 2 ? '30px' :
                    +level === 3 ? '20px' : '40px' };
    font-weight: 500;
`

const Heading = ({level, title}: {level: number, title: string}) => (
    <HeadingWrap className="title">
      <StyledHeading as={level === 1 ? "h1" : level === 2 ? "h2" : level === 3 ? "h3" : "h4"} level={+level}>{title}</StyledHeading>
    </HeadingWrap>
)

export default Heading
