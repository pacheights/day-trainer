import React from 'react';
import { Workout } from './views';
import styled from 'styled-components';

function App() {
  return (
    <AppContainer className='App'>
      <Workout />
      <style>
        <link
          rel='stylesheet'
          href='https://pro.fontawesome.com/releases/v5.10.0/css/all.css'
          integrity='sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p'
          crossorigin='anonymous'
        />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap'
          rel='stylesheet'
        />
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css'
        />
      </style>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  font-family: 'BlinkMacSystemFont', '-apple-system', 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    Helvetica, Arial, sans-serif;
  height: 500px;
  width: 350px;
  border: 1px solid black;
`;

export default App;
