import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useSelector} from 'react-redux';
import {ShopNavigator, ProductsNavigator} from './ShopNavigator';

const AppNavigator = (props) => {
  // const isAuth = useSelector((state) => !!state.auth.token);
  // const didTryAutoLogin = useSelector((state) => state.auth.didTryAutoLogin);

  return (
    // <NavigationContainer>
    //   {isAuth && <ShopNavigator />}
    //   {!isAuth && didTryAutoLogin && <AuthNavigator />}
    //   {!isAuth && !didTryAutoLogin && <StartupScreen />}
    // </NavigationContainer>
    <NavigationContainer>
      {/* <ShopNavigator /> */}
      <ProductsNavigator />
      {/* {!isAuth && didTryAutoLogin && <AuthNavigator />}
      {!isAuth && !didTryAutoLogin && <StartupScreen />} */}
    </NavigationContainer>
  );
};

export default AppNavigator;
