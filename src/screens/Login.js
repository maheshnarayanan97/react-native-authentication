import React from "react";
import { Text, View, Image, TextInput } from "react-native";
import Icon from "@expo/vector-icons/AntDesign";

export default class Login extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ backgroundColor: "#FFF", height: "100%" }}>
        <Image
          source={require("../images/image.jpg")}
          style={{ width: "100%", height: "43%" }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 55,
            borderWidth: 2,
            marginTop: 50,
            paddingHorizontal: 10,
            borderColor: "black",
            borderRadius: 23,
            paddingVertical: 2,
          }}
        >
          <Icon name="user" color="black" size={24} />
          <TextInput placeholder="username" style={{ paddingHorizontal: 10 }} />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 55,
            borderWidth: 2,
            marginTop: 15,
            paddingHorizontal: 10,
            borderColor: "black",
            borderRadius: 23,
            paddingVertical: 2,
          }}
        >
          <Icon name="lock" color="black" size={24} />
          <TextInput
            placeholder="pssword"
            style={{ paddingHorizontal: 10 }}
            type="password"
          />
        </View>
        <View
          style={{
            marginHorizontal: 55,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 30,
            backgroundColor: "#00CC00",
            paddingVertical: 10,
            borderRadius: 23,
          }}
        >
          <Text
            style={{
              color: "white",
              fontFamily: "SemiBold",
            }}
          >
            Sign In
          </Text>
        </View>

        <Text
          onPress={() => navigate("Register")}
          style={{
            alignSelf: "center",
            color: "#00716F",
            fontFamily: "SemiBold",
            paddingVertical: 30,
          }}
        >
          Dont Have an Account ? Register
        </Text>
      </View>
    );
  }
}
