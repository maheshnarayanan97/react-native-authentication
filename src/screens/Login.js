import React, { useState } from "react";
import { Text, View, Image, TextInput } from "react-native";
import Icon from "@expo/vector-icons/AntDesign";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../action/auth";

const Login = ({ navigation, login, isAuthenticated }) => {
  const { navigate } = navigation;
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });
  const onPress = (e) => {
    e.preventDefault();
    login(username, password);
    console.log("hai");
  };
  if (isAuthenticated) return <Redirect to="/dashboard" />;

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
        <TextInput
          placeholder="username"
          value={username}
          onChangeText={(value) => onChange(value)}
          style={{ paddingHorizontal: 10 }}
          id="username"
        />
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
          secureTextEntry
          placeholder="pssword"
          style={{ paddingHorizontal: 10 }}
          onChangeText={(value) => onChange(value)}
          onChange={(e) => onChange(e)}
          id="password"
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
          onPress={(e) => onPress(e)}
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
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { login })(Login);
