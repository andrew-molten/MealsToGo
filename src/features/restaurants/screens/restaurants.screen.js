import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Platform,
} from "react-native";
import styled from "styled-components/native";
import SearchBar from "../../../components/SearchBar";
import { RestaurantInfo } from "../components/restaurant-info-card.component";

const isAndroid = Platform.OS === "android";

const Container = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled.View`
  padding: 16px;
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: 16px;
  background-color: blue;
`;

export const RestaurantsScreen = () => (
  <Container isAndroid={isAndroid}>
    <SearchContainer>
      <SearchBar />
    </SearchContainer>
    <RestaurantListContainer>
      <RestaurantInfo />
    </RestaurantListContainer>
  </Container>
);
