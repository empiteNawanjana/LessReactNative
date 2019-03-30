import { StyleSheet } from "react-native";
import { WHITE } from "../../styles/Colors";

module.exports = StyleSheet.create({
  authTitle: {
    marginBottom: 32
  },

  authDescription: {
    marginTop: 35,
    marginBottom: 30
  },

  authButton: {
    height: 45,
    marginBottom: 15
  },

  noBgAuthButton: {
    backgroundColor: WHITE
  },

  backButton: {
    position: "absolute",
    top: 66,
    left: 35
  }
});
