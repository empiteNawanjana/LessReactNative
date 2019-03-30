import React from "react";
import { View, Text, FlatList, RefreshControl } from "react-native";
import Styles from "../styles/Styles";
import { ItemListItem } from "./";

const ItemList = ({
  data,
  onPressRow,
  onPressDelete,
  state,
  refreshing,
  refreshList,
  onEndReached,
  ListFooterComponent
}) => {
  // console.log(data);
  const { baseColor } = Styles;
  return (
    <FlatList
      data={data}
      extraData={state}
      style={baseColor}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <ItemListItem
          item={item}
          onPressRow={onPressRow}
          onPressDelete={onPressDelete}
        />
      )}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={refreshList} />
      }
      onEndReached={onEndReached}
      ListFooterComponent={ListFooterComponent}
      onEndReachedThreshold={0.01}
    />
  );
};

export { ItemList };
