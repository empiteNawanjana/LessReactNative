import React from "react";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";

import TabBar from "../components/TabBar";

import Home from "../features/home/Home";
import Details from "../features/details/Details";
import Details2 from "../features/details2/Details2";

import SignIn from "../features/auth/SignIn";
import SignUp from "../features/auth/SignUp";
import ForgotPassword from "../features/auth/ForgotPassword";

const HomeStack = createStackNavigator(
  {
    Home: { screen: Home },
    HomeDetails: { screen: Details },
    SignIn: { screen: SignIn },
    SignUp: { screen: SignUp },
    ForgotPassword: { screen: ForgotPassword }
  },
  {
    initialRouteName: "Home"
  }
);

const AppStack = createBottomTabNavigator(
  {
    Home: HomeStack,
    Details: { screen: Details },
    Details2: { screen: Details2 }
  },
  {
    tabBarComponent: props => <TabBar {...props} />
  }
);

const NavigationStack = createStackNavigator(
  {
    App: AppStack
    //Auth: AuthStack
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(NavigationStack);
