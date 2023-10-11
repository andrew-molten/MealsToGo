import * as React from "react";
import { Platform, FlatList } from "react-native";
import styled from "styled-components/native";
import SearchBar from "../../../components/SearchBar";
import { RestaurantInfo } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

const isAndroid = Platform.OS === "android";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => (
  <SafeArea isAndroid={isAndroid}>
    <SearchContainer>
      <SearchBar />
    </SearchContainer>
    <RestaurantList
      data={[
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
        { name: 6 },
      ]}
      renderItem={() => (
        <Spacer position={"bottom"} size={"large"}>
          <RestaurantInfo />
        </Spacer>
      )}
      keyExtractor={(item) => item.name}
      contentContainerStyle={{ padding: 16 }}
    />
    {/* <RestaurantInfo /> */}
  </SafeArea>
);
