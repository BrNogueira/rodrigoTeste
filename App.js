
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import Login from "./src/components/login/login";
import Boiler from "./src/components/Boiler/Boiler";
import ForgetPassword from "./src/components/EsqueceuSenha/EsqueceuSenha";
import Register from "./src/components/cadastro/cadastro";
import firebase from 'firebase';
import { StackNavigator } from "react-navigation";

class Home extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#16a085",
      elevation: null
    },
    header: null
  };
    componentWillMount()  {
      let config = {
        apiKey: "AIzaSyCXi9SZqUfZMllSpGAWmwsMcqj5Z8EE2aw",
        authDomain: "projetoteste-b630d.firebaseapp.com",
        databaseURL: "https://projetoteste-b630d.firebaseio.com",
        projectId: "projetoteste-b630d",
        storageBucket: "projetoteste-b630d.appspot.com",
        messagingSenderId: "906096228429"
      };
      firebase.initializeApp(config);
    }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#16a085" />
        <Login navigation={this.props.navigation} />
      </View>
    );
  }
}

export default App = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Home"
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: "Login"
    }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      title: "Register"
    }
  },
  ForgetPassword: {
    screen: ForgetPassword,
    navigationOptions: {
      title: "ForgetPassword"
    }
  },
  Boiler: {
    screen: Boiler,
    navigationOptions: {
      title: "Boiler"
    }
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});