import React, { Component } from 'react';
import {
    AppRegistry,
    KeyboardAvoidingView,
    TouchableOpacity,
    AsyncStorage,
    Image,
    TextInput,
    StyleSheet,
    Text, 
    View
} from 'react-native';

export default class Login extends Component{
    constructor () {
        super();
    this.state = {
        email: '',
        senha: ''
    };
 }
static navigationOptions = {
    headerStyle: {
        backgroundColor: "#16a085",
        elevation: null
      },
      header: null
    };
    async onLoginPress() {
      const { email, password } = this.state;
      console.log(email);
      console.log(password);
      await AsyncStorage.setItem("email", email);
      await AsyncStorage.setItem("password", password);
      this.props.navigation.navigate("Boiler");
    }
    render() {
      return (
        <View style={styles.container}>
          <View behavior="padding" style={styles.container}>
            <View style={styles.logoContainer}>
              <Image style={styles.logo} source={require("../imgs/download.jpg")} />
              <Text style={styles.subtext}>RodrigoTeste</Text>
            </View>
            <KeyboardAvoidingView style={styles.keyboard}>
              <TextInput
                placeholder="Usuário"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="next"
                onSubmitEditing={() => this.passwordInput.focus()}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
              />
              <TextInput
                placeholder="Senha"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="go"
                secureTextEntry
                ref={input => (this.passwordInput = input)}
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
              />
  
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={this.onLoginPress.bind(this)}
              >
                <Text style={styles.buttonText}>Logar</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text
              style={styles.buttonText}
              onPress={() => this.props.navigation.navigate("Register")}
              title="Cadastrar"
            >
           Cadastrar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text
              style={styles.buttonText}
              onPress={() => this.props.navigation.navigate("ForgetPassword")}
              title="Esqueceu a Senha"
            >
              Esqueceu a Senha?
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#16a085"
    },
    logoContainer: {
      alignItems: "center",
      flexGrow: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    logo: {
      width: 200,
      height: 150
    },
    subtext: {
      color: "#ffffff",
      marginTop: 10,
      width: 160,
      textAlign: "center",
      opacity: 0.8
    },
    keyboard:{
      margin: 20,
      padding: 20,
      alignSelf: "stretch"
    },
    buttonContainer: {
      backgroundColor: "rgba(255,255,255,0.2)",
      paddingVertical: 15
    },
    buttonText: {
      textAlign: "center",
      color: "#FFF",
      fontWeight: "700"
    },
    button: {
      backgroundColor: "#27ae60",
      paddingVertical: 15
    }
  });
  
  AppRegistry.registerComponent("Login", () => Login);
  