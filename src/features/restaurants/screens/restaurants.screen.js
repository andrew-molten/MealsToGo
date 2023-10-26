import React, { useContext } from "react";
import { Platform, FlatList, View } from "react-native";
import styled from "styled-components/native";
import { Search } from "../components/search.component";
import { RestaurantInfo } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

import { RestaurantsContext } from "../../../components/services/restaurants/restaurants.context";

const isAndroid = Platform.OS === "android";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const LoadingIndicator = styled(ActivityIndicator)`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -25px;
`;

export const RestaurantsScreen = () => {
  const { isLoading, err, restaurants } = useContext(RestaurantsContext);

  return (
    <SafeArea isAndroid={isAndroid}>
      {isLoading && (
        <LoadingIndicator animating={true} color={MD2Colors.red800} size={50} />
      )}
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          // console.log(JSON.stringify(item, null, 2));
          return (
            <Spacer position={"bottom"} size={"large"}>
              <RestaurantInfo restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
