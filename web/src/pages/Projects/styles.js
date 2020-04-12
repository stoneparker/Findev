import styled from 'styled-components';

export const Container = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
`;

export const Cards = styled.ul`
     display: grid;
     grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
     grid-gap: 24px;
`;

export const Card = styled.li`
     height: 300px;
     border-radius: 16px;
     background: #fff;
     box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.16);
     padding: 20px 30px;
     display: flex;
     /* align-items: center; */
     flex-direction: column;
     justify-content: center;

     .header {
          display: flex;
          align-items: center;
     }
     .header img {
          width: 65px;
          border-radius: 8px;
          margin-right: 15px;
     }

     .header .header-text h1 {
          font-size: 16px;
          margin-bottom: 7px;
     }

     .header .header-text p {
          color: rgba(0, 0, 0, 0.6);
     }

     p.description {
          margin: 15px 0;
          color: rgba(0, 0, 0, 0.45);
          line-height: 20px;
     }

     .footer {
          display: flex;
          flex-direction: row;
          /* /* justify-content: center; */
          align-items: center;
     }

     .footer .images img {
          width: 40px;
          margin-right: 5px;
          border-radius: 6px;
          box-shadow: -2px 3px 6px 0 rgba(0, 0, 0, 0.16);
     }

     .footer p {
          color: rgba(0, 0, 0, 0.34);
          font-size: 15px;
          margin-left: 10px;
     }

     @media (max-width: 450px) {
          /* width: 100%; */
     }

     @media (max-width: 360px), (max-width: 889px) and (min-width: 813px), (max-width: 589px) and (min-width: 540px) {
          /* padding: 10px 30px; */
          display: block;
          .footer {
               flex-direction: column;
          }
     }
`;