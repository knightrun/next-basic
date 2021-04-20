import React, {ElementType} from "react";
import styled from "@emotion/styled";

const HeadingWrap = styled.div`
  text-align: center;
  margin: 30px 0;
`

const StyledHeading = styled.div`
  font-weight: 500;
  font-size: ${({level}: { level: number }) =>
          +level === 2 ? '30px' :
                  +level === 3 ? '20px' : '40px'};
  padding-bottom: ${({level}: { level: number }) =>
          +level === 3 ? '10px' : ''};
  border-bottom: ${({level}: { level: number }) =>
          +level === 3 ? '1px solid #ccc' : ''};
`

const Heading = ({level, title}: { level: string, title: string }) => {
  const tag: ElementType = `h${level}` as ElementType
  return (
    <HeadingWrap className="title">
      <StyledHeading as={tag} level={+level}>{title}</StyledHeading>
    </HeadingWrap>
  )
}

export default Heading
