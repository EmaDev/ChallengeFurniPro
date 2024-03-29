import 'react-native-gesture-handler';
import { useEffect } from 'react';
import { useColorScheme } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { BottomTabNavigator } from "./src/routes/BottomTabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import Toast from 'react-native-toast-message';
import SplashScreen from 'react-native-splash-screen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


  useEffect( () => {
    SplashScreen.hide();
  },[])
  return (
    <>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
      <Toast/>
    </>
  );
}

export default App;
