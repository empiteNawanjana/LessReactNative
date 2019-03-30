import React from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableHighlight
} from "react-native";
import Styles from "../styles/Styles";
import Swipeout from "react-native-swipeout";
import { WHITE, LIGHT_GRAY } from "../styles/Colors";

let { width } = Dimensions.get("window");

const ItemListItem = ({ item, onPressRow, onPressDelete }) => {
  //console.log(item);
  const {
    flexDirectionRow,
    availableTickSmall,
    //FONTS
    fontBold,
    fontSize15,
    //COLORS
    colorDarkerGray
  } = Styles;
  const { itemContainer } = styles;

  var swipeoutBtns = [
    {
      backgroundColor: WHITE,
      component: (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text>Delete</Text>
        </View>
      ),
      onPress: () => {
        onPressDelete(item);
      }
    }
  ];

  return (
    <Swipeout right={swipeoutBtns} autoClose={true}>
      <TouchableHighlight
        onPress={() => {
          onPressRow(item);
        }}
      >
        <View style={[flexDirectionRow, itemContainer]}>
          <Text style={[fontBold, fontSize15, colorDarkerGray]}>{item}</Text>
        </View>
      </TouchableHighlight>
    </Swipeout>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 20,
    width: width,
    borderBottomWidth: 1,
    borderBottomColor: LIGHT_GRAY,
    backgroundColor: WHITE
  }
});

export { ItemListItem };
