import styled from "styled-components";

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
`;

export const NavigationList = styled.ol`
  display: flex;
  width: 1242px;
  height: 50px;
  justify-content: center;
  align-items: center;
  gap: 13px;
`;

export const NavigationItem = styled.li`
  color: #828282;
    text-align: center;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
`;

export const NavigationLink = styled.a`
  color: #828282;
    text-align: center;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
`;

// .navigation {
//   display: flex;
//   justify-content: center;

//   &__list {
//     display: flex;
//     width: 1242px;
//     height: 50px;
//     justify-content: center;
//     align-items: center;
//     gap: 13px;
//   }

//   &__item {
//     color: $secondary-text-color;
//     text-align: center;
//     font-family: Roboto;
//     font-size: 14px;
//     font-weight: 400;
//   }

//   &__link {
//     color: $secondary-text-color;
//     text-align: center;
//     font-family: Roboto;
//     font-size: 14px;
//     font-weight: 400;
//   }
// }
