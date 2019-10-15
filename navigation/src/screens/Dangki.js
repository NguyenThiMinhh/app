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
export default class DangkiScreen extends React.Component{
  static navigationOptions =
   {
      title: 'Đăng kí',
   };
   constructor(props){
    	    super(props);
    	    this.state={
    	      email:"",
            pass:"",
            re_pas:"",
            name:"",
    	      //checkLogin:0
    	    }
    	  }
    	  _onDangki=()=>{
          if(this.state.name===""){
            Alert.alert("thông báo!","Tên không được bỏ trống");
          }else{
            if(this.state.email===""){
              Alert.alert("thông báo!","Email không được bỏ trống");
            }else{
              if(this.state.pass!==this.state.re_pass){
                Alert.alert("thông báo!","Mật khẩu không trùng khớp");
              }else{
                return fetch('http://10.0.3.2:81/app/dangki.php', { 
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    email_user: this.state.email,
                    pass_user: this.state.pass,
                    ten_user: this.state.name,
                  })
                })
                .then((response) => response.json())
                .then((response) => {
                  if(response==='success'){
                    Alert.alert("thông báo!","Bạn đã đăng kí thành công");
                    this.props.navigation.navigate('login');
                  }else{
                    Alert.alert("thông báo!","Email đã được sử dụng,Bạn đã đăng kí không thành công");
                  }
                })
                .catch((error) =>{
                    console.error(error);
                });
              }
            }
          }
        } 
    render(){
      const {navigate} = this.props.navigation;
        return(
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/color/48/000000/checked-user-male.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Name"
              keyboardType="name"
              underlineColorAndroid='transparent'
              onChangeText={(name) => this.setState({name})}/>
        </View>
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
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/plasticine/100/000000/password.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(re_pass) => this.setState({re_pass})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this._onDangki}>
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