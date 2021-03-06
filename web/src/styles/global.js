import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
     @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');

     * {
          margin: 0;
          padding: 0;
          outline: 0;
          box-sizing: border-box;
     }

     html, body, #root {
          height: 100%;
     }

     body, button {
          font-family: sans-serif;
          background: #F5F5F5;
          -webkit-font-smoothing: antialiased !important;
          color: #222;
     }

     input {
          font-family: Arial, sans-serif;
     }

     ul {
          list-style: none;
     }

     input {
          padding: 0 15px;
          border: 1px solid #ccc;
          border-radius: 6px;
          background: transparent;
          font-size: 15px;
     }
`
