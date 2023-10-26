import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import * as React from "react";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import SearchBar from "./src/components/SearchBar";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { theme } from "./src/infrastructure/theme";
import { SafeArea } from "./src/components/utility/safe-area.component";

import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { RestaurantsContextProvider } from "./src/components/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/components/services/location/location.context";

// function RestaurantsScreen() {
//   return (
//     <View
//       style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
//     ></View>
//   );
// }
const TAB_ICON = {
  Restaurants: "restaurant-sharp",
  Map: "map",
  Settings: "md-settings",
};

const MapScreen = () => (
  <SafeArea>
    <Text>Map!</Text>
  </SafeArea>
);
const SettingsScreen = () => (
  <SafeArea>
    <Text>Settings!</Text>
  </SafeArea>
);

const CreateScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

const Tab = createBottomTabNavigator();

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <NavigationContainer>
              <Tab.Navigator screenOptions={CreateScreenOptions}>
                <Tab.Screen
                  name="Restaurants"
                  component={RestaurantsScreen}
                  options={{ headerShown: false }}
                />
                <Tab.Screen
                  name="Map"
                  component={MapScreen}
                  options={{ headerShown: false }}
                />
                <Tab.Screen
                  name="Settings"
                  component={SettingsScreen}
                  options={{ headerShown: false }}
                />
              </Tab.Navigator>
            </NavigationContainer>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
