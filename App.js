import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import * as React from "react";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import SearchBar from "./src/components/SearchBar";

export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
