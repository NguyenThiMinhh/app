import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image, 
    AppRegistry,
    Keyboard,
    Alert,
  Platform,} from 'react-native';
export default class LoginScreen extends React.Component{
  static navigationOptions =
   {
      title: 'Đăng nhập',
   };
   constructor(props){
    	    super(props);
    	    this.state={
    	      email:"",
    	      pass:"",
    	     // checkLogin:0
    	    }
    	  }
    	  _onSubmit=()=>{
    	    return fetch('http://10.0.3.2:81/app/login.php', { 
    	      method: 'POST',
    	      headers: {
    	        'Accept': 'application/json',
    	        'Content-Type': 'application/json',
    	      },
    	      body: JSON.stringify({
    	        email_user: this.state.email,
    	        pass_user: this.state.pass,
    	      })
    	    })
    	    .then((response) => response.json())
    	    .then((response) => {
    	        if(response==='success'){
                Alert.alert("thông báo!","Bạn đã đăng nhập thành công");
                this.props.navigation.navigate('Home');
              }else{
                Alert.alert("thông báo!","Bạn đã đăng nhập không thành công");
              }
    	    })
    	    .catch((error) =>{
    	        console.error(error);
    	    });
    	  }   
    render(){
      const {navigate} = this.props.navigation;
        return(
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/color/48/000000/new-post.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/plasticine/100/000000/password.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(pass) => this.setState({pass})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this._onSubmit}>
          <Text style={styles.loginText}>Đăng nhập</Text>
        </TouchableHighlight>
        <Text>Đăng kí nếu bạn chưa có tài khoản</Text>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => navigate('Dangki')}>
          <Text style={styles.loginText}>Đăng kí</Text>
        </TouchableHighlight>

      </View>
        );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#008b8b',
  }, 
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});