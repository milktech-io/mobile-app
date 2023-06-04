/**
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RoutesLogin from './src/routes/routesLogin';
import RoutesMain from './src/routes/routesMain';

// import {Web3Button, Web3Modal} from '@web3modal/react-native';
// const projectId = '50a39e4042bcb48349411df02e30e639';
// const providerMetadata = {
//   name: 'Calaca Dao',
//   description: 'Nueva dao',
//   url: 'https://your-project-website.com/',
//   icons: ['https://your-project-logo.com/'],
// };

function App(): JSX.Element {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <NavigationContainer>
      {!isLoggedIn && <RoutesLogin />}
      {isLoggedIn && <RoutesMain />}
    </NavigationContainer>
  );
}

export default App;
