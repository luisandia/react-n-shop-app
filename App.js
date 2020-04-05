import React from 'react';
import {Provider} from 'react-redux';
import AppNavigator from './navigation/AppNavigator';
import storeRedux from './store/storeRedux';

const store = storeRedux;
// const fetchFonts = () => {
//   return Font.loadAsync({
//     'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
//     'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
//   });
// };

export default function App() {
  // const [fontLoaded, setFontLoaded] = useState(false);

  // if (!fontLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={fetchFonts}
  //       onFinish={() => {
  //         setFontLoaded(true);
  //       }}
  //     />
  //   );
  // }
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
