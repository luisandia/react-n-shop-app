import React from 'react';
import {Provider} from 'react-redux';
import AppNavigator from './navigation/AppNavigator';
import storeRedux from './store/storeRedux';

const store = storeRedux;

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
