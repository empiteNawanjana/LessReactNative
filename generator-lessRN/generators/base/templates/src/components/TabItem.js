import React, { PureComponent } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { tabBarIcons } from "./helpers/Images";
import Styles from "../styles/Styles";
import { WHITE, BLACK, BLUE } from "../styles/Colors";

class TabItem extends PureComponent {
  handlePress = () => {
    this.props.navigation.navigate(this.props.routeName);
  };

  render() {
    const { routeName, isActive } = this.props;
    const icon = tabBarIcons[isActive ? "active" : "inactive"][routeName];
    const { baseFont, fontSize8, colorBlue, colorDarkBlue } = Styles;
    const {
      itemWrapper,
      textStyle,
      item,
      workItem,
      workCircle,
      workCircleActive,
      workCircleInactive
    } = styles;
    const textColor = isActive ? colorBlue : colorDarkBlue;
    const workCircleColor = isActive ? workCircleActive : workCircleInactive;
    return (
      <View style={itemWrapper}>
        {routeName == "Work" ? (
          <TouchableOpacity style={workItem} onPress={this.handlePress}>
            <View style={[workCircle, workCircleColor]}>
              <Image source={icon} />
            </View>
            <Text style={[baseFont, fontSize8, textColor, textStyle]}>
              {routeName}
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={item} onPress={this.handlePress}>
            <Image source={icon} />
            <Text style={[baseFont, fontSize8, textColor, textStyle]}>
              {routeName}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

const styles = {
  itemWrapper: {
    flex: 1
  },

  textStyle: {
    marginTop: 10
  },

  item: {
    height: 78,
    marginTop: 24,
    backgroundColor: WHITE,
    justifyContent: "center",
    alignItems: "center"
  },

  workItem: {
    height: 102,
    justifyContent: "center",
    alignItems: "center"
  },

  workCircle: {
    padding: 25,
    borderRadius: 40,
    shadowColor: BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },

  workCircleActive: {
    backgroundColor: BLUE
  },

  workCircleInactive: {
    backgroundColor: WHITE
  }
};

export default TabItem;
