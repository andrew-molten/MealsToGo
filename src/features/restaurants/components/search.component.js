import React, { useContext, useState } from "react";
import styled from "styled-components/native";
// import SearchBar from "../../../components/SearchBar";
import { Searchbar } from "react-native-paper";

import { LocationContext } from "../../../components/services/location/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  const locationContext = useContext(LocationContext);
  // console.log(locationContext);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};
