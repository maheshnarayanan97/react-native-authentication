import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./src/navigations/Navigator";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { isRequired } from "react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType";
import { Provider } from "react-redux";
import store from "./store";
const loadFont = () => {
  return Font.loadAsync({
    SemiBold: require("./src/fonts/Montserrat-SemiBold.otf"),
    Medium: require("./src/fonts/Montserrat-Medium.otf"),
    Regular: require("./src/fonts/Montserrat-Regular.otf"),
  });
};

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return isLoaded === true ? (
    <Provider store={store}>
      <AppNavigator />{" "}
    </Provider>
  ) : (
    <AppLoading startAsync={loadFont} onFinish={() => setIsLoaded(true)} />
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
