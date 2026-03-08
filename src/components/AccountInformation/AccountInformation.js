import styled from "styled-components";

export const Sect = styled.section`
  padding-bottom: 36px;

  @media (min-width: 768px) {
    padding: 8px 48px;
  }

  @media (min-width: 1200px) {
    padding: 11px 0 54px;
  }

  @media (min-width: 1920px) {
    padding: 13px 0 64px;
  }
`;

export const Way = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 10px;
  line-height: 3.6;
  color: #828282;
  text-align: center;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 12px;
    line-height: 3.2;
    margin-bottom: 11px;
  }

  @media (min-width: 1200px) {
    margin-bottom: 12px;
  }

  @media (min-width: 1920px) {
    font-size: 14px;
    line-height: 2.57;
    margin-bottom: 13px;
  }
`;

export const Title = styled.h2`
  display: none;

  @media (min-width: 768px) {
    display: block;
    font-family: "Oswald", sans-serif;
    font-weight: 400;
    font-size: 36px;
    line-height: 1.24;
    text-align: center;
    color: #000;
    margin-bottom: 32px;
  }

  @media (min-width: 1200px) {
    margin-bottom: 16px;
    font-size: 42px;
    line-height: 1.35;
  }

  @media (min-width: 1920px) {
    font-size: 48px;
    line-height: 1.42;
    margin-bottom: 17px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  height: auto;
  padding : 32px;
  display: flex;
    width: 100%;
    align-items: center;

  @media (min-width: 768px) {
    gap: 36px;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    padding: 40px 78px 0;
    border: 1px solid #c4c4c4;
    justify-content: center;
    flex-direction: row;
    gap: 108px;
    max-width: 1454px;
    padding: 73px 0 171px;
    margin: 0 auto;
    align-items: start;
    ustify-content: center;
  }

  @media (min-width: 1920px) {
    flex-direction: row;
    gap: 108px;
height: 716px;
    padding: 73px 212px 0;
  }

`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
  max-width: 400px;

  @media (min-width: 1200px) {
    gap: 49px;
    width: min-content;
    max-width: min-content;
  }
`;

export const Subtitle = styled.h3`
  font-family: "Oswald", sans-serif;
  font-weight: 400;
  font-size: 14px;
  text-transform: uppercase;
  color: #828282;

  @media (min-width: 768px) {
    margin-bottom: 16px;
    font-size: 16px;
    line-height: 1;
  }

  @media (min-width: 1200px) {
    margin-bottom: 20px;
    font-size: 20px;
  }

  @media (min-width: 1920px) {
    margin-bottom: 27px;
    font-size: 24px;
    color: #000;
  }
`;

export const Labels = styled.div`
 display: flex;
        flex-direction: column;
        gap: 6px;

        @media  (min-width:1200px) {
            gap: 15px;
        }
`;

export const Label = styled.label`
color: #3f3f3f;
        font-weight: 400;
        font-size: 12px;
        font-family: "Roboto",
            sans-serif;
        line-height: 1.66667;

        @media  (min-width:1200px) {
            font-size: 16px;
            line-height: 1.25;
            display: flex;
    justify-content: space-between;
    width: 541px;
        }
`;

export const Input = styled.input`
   width: 100%;
        height: 40px;
        padding: 0 10px;
        border: 1px solid #c4c4c4;
        background-color: #fff;
        color: #3f3f3f;
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 12px;
        line-height: 1.66667;

        @media (min-width:1200px) {
            width: 392px;
            height: 44px;
            padding: 0 14px;
            font-size: 16px;
            line-height: 1.25;
        }

        &::placeholder {
            font-family: "Roboto",
                sans-serif;
            font-weight: 400;
            font-size: 12px;
            line-height: 1.66667;
            color: #828282;

            @media (min-width:1200px) {
                font-size: 16px;
            }

        }
`;

export const Desc = styled.p`
    color: #3f3f3f;
        font-weight: 400;
        font-size: 12px;
        font-family: "Roboto",screen and
            sans-serif;
        line-height: 1.66667;

        @media (min-width:1200px) {
            font-size: 16px;
            line-height: 1.25;
        }
`

export const Red = styled.span`
    color: #eb5757;
`

export const LabelC = styled.label`
font-family: "Roboto", sans-serif;
font-weight: 400;
font-size: 14px;
line-height: 1.42857;
color: #828282;
`;


export const Checkbox = styled.input`
margin-right: 10px; 
`;

export const Button = styled.button`
  font-family: "Oswald", sans-serif;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #ffffff;
  width: 100%;
  height: 38px;
  background-color: #000000;

  @media (min-width: 1200px) {
    font-size: 14px;
    width: 140px;
    height: 50px;
  }
`;