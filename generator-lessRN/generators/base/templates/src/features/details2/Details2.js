/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { DetailsFunction } from "../../actions";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
class Details2 extends Component<Props> {
  constructor() {
    super();
    //Constructor is always called at the first time when react native application will start in mobile, it is mostly used to create States in react native application class.
    console.log("Constructor Called.");
  }

  componentWillMount() {
    //This function is just called right after constructor() called, It is mostly used to call asynchronous functions or web calls from react native apps.
    console.log("ComponentWillMount() Called.");
  }

  render() {
    //Render function is one of the most important function of a class because it is used to render View’s or any graphical representation on screen using its return block.
    console.log("Render Called");
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>This is Details 2</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }

  componentDidMount() {
    //componentDidMount function called itself after render called, It is used to call Web Calls to parse JSON data first time when application will start.
    console.log("ComponentDidMount() Called.");
  }

  // componentWillReceiveProps(nextProps) {
  //   //This function would called before our component dose anything with new props, We would send the next prop as argument inside it.
  // }

  // shouldComponentUpdate(nextProp, nextState) {
  //   //The shouldComponentUpdate() function calls every time before the screen or parent component re-rendering process. You can stop re-rendering screen by passing false in this function.
  //   console.log(nextProp, nextState);

  //   console.log(this.props, this.state);

  //   return false;

  // }

  // componentWillUpdate(nextProp, nextState) {
  //   //This function is however called before re-rendering process and when new state or props is received for updating and dose not allow the this.setState({}) method.
  //   console.log('componentWillUpdate Called', nextProp, nextState);

  // }

  // componentDidUpdate() {
  //  //The componentDidUpdate() function called after the React updates the DOM, this method is mostly used to interact with updated DOM value and execute any post render events. You can use it with Library which directly interact with the DOM.
  //  //This method has its own 2 arguments:
  //    //prevProps: previous properties object.
  //    //prevState: previous state object.
  //}

  componentWillUnmount() {
    //This function is called right after the component is removed form DOM or destroyed, Users can clear any running timers, stop network requests and cleaning any previously stored value in application.
    //this.value= this.value.destroy();
  }

  componentDidCatch(error, info) {
    //method is a part of error handling method. It is used to find error between JavaScript code and handle them by passing correct message or argument with them. It will help us to use any cache or try method to handle any error.
    //Handle error.
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

const mapDispatchToProps = {
  DetailsFunction
};

const mapStateToProps = ({ HomeReducer }) => {
  const { isDetailsSample } = HomeReducer;
  return { isDetailsSample };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details2);
