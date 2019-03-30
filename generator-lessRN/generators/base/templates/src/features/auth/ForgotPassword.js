/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Text, View, Dimensions, StatusBar } from "react-native";
import Styles from "../../styles/Styles";
import AuthStyles from "./AuthStyles";
import {
  Button,
  AuthLogo,
  BackButton,
  LabelInput,
  Spinner
} from "../../components";
import validationHelper from "../../components/helpers/ValidationHelper";
import DropdownAlert from "react-native-dropdownalert";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

var { height, width } = Dimensions.get("window");

type Props = {};
class ForgotPassword extends Component<Props> {
  //   static navigationOptions = {
  //     header: null
  //   };

  constructor() {
    super();
    //Constructor is always called at the first time when react native application will start in mobile, it is mostly used to create States in react native application class.
    console.log("Constructor Called.");
    this.state = {
      username: "",
      isloading: false,
      UserId: "",
      screenHeight: 0
    };
  }

  componentWillMount() {
    //This function is just called right after constructor() called, It is mostly used to call asynchronous functions or web calls from react native apps.
    console.log("ComponentWillMount() Called.");
  }

  didPressButton() {
    console.log("forgotpassword Button pressed");
    this.setState({ isloading: true });
    const { username } = this.state;
    let { error, errorMessage } = validationHelper.forgotPasswordValidation({
      username
    });

    if (error) {
      this.setState({ isloading: false });
      this.dropdown.alertWithType("error", "Error", errorMessage);
    } else {
      console.log("forgotPassword action");
    }
  }

  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({ screenHeight: contentHeight });
  };

  renderLoading() {
    if (this.state.isloading) {
      return <Spinner size="large" color="#fff" />;
    }
  }

  render() {
    //Render function is one of the most important function of a class because it is used to render View’s or any graphical representation on screen using its return block.
    console.log("Render Called");
    const {
      container,
      authContainerPadding,
      justifyCenter,
      sampleButton,
      baseFont,
      flex4,
      //color
      baseColor,
      colorDarkBlue,
      colorWhite,
      //fontsize
      fontSize25,
      fontSize16
    } = Styles;
    const { authTitle, authButton, authDescription } = AuthStyles;
    const scrollEnabled = this.state.screenHeight > height;
    return (
      <View style={[baseColor, container]}>
        <KeyboardAwareScrollView
          ref="scroller"
          keyboardShouldPersistTaps="handled"
          scrollEnabled={scrollEnabled}
          onContentSizeChange={this.onContentSizeChange}
        >
          <View style={[authContainerPadding, justifyCenter, baseColor]}>
            <StatusBar barStyle="dark-content" />
            <View style={flex4}>
              <Text style={[baseFont, fontSize25, colorDarkBlue, authTitle]}>
                Forgot Password?
              </Text>
              <Text style={[colorDarkBlue, fontSize16, authDescription]}>
                Please provide either your email or phone number that was used
                to register your Quallogi account
              </Text>
              <LabelInput
                label="Email or Phone Number"
                value={this.state.username}
                onChangeText={username => this.setState({ username })}
                keyboardType="email-address"
              />
              <Button
                onPress={this.didPressButton.bind(this)}
                buttonStyle={[sampleButton, authButton]}
                textStyle={[baseFont, colorWhite, fontSize16]}
              >
                Send
              </Button>
            </View>
            {this.renderLoading()}
          </View>
        </KeyboardAwareScrollView>
        <DropdownAlert
          ref={ref => (this.dropdown = ref)}
          onClose={() => this.onClose()}
        />
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

export default ForgotPassword;
