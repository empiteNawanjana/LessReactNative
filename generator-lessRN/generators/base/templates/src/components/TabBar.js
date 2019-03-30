import React, { PureComponent } from "react";
import { View, Dimensions } from "react-native";
import TabItem from "./TabItem";
import { WHITE, BLACK } from "../styles/Colors";

var { height, width } = Dimensions.get("window");

class TabBar extends PureComponent {
  render() {
    const { navigation } = this.props;
    const { routes, index } = navigation.state;
    const { tabBarWrapper, tabBarShadow, tabBarContainer } = styles;
    return (
      <View style={tabBarContainer}>
        <View style={tabBarShadow} />
        <View style={tabBarWrapper}>
          {routes.map((route, i) => (
            <TabItem
              key={route.routeName}
              navigation={navigation}
              {...route}
              isActive={index == i}
            />
          ))}
        </View>
      </View>
    );
  }
}

const styles = {
  tabBarShadow: {
    position: "absolute",
    height: 78,
    top: 24,
    left: 0,
    right: 0,
    backgroundColor: WHITE,
    shadowColor: BLACK,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9
  },

  tabBarWrapper: {
    height: 102,
    flexDirection: "row",
    elevation: 10
  },

  tabBarContainer: {
    backgroundColor: WHITE
  }
};

export default TabBar;
