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
    Platform,
    FlatList,
} from 'react-native';
export default class SuaSVScreen extends React.Component{
  static navigationOptions =
   {
      title: 'Sửa SV',
   };
   constructor(props){
    	    super(props);
    	    this.state={
    	        ma_sv:this.props.navigation.getParam('ma_sv'),
              ten_sv:this.props.navigation.getParam('ten_sv'),
              ngaysinh_sv:this.props.navigation.getParam('ngaysinh_sv'),
              ma_lop:this.props.navigation.getParam('ma_lop'),
              diachi_sv:this.props.navigation.getParam('diachi_sv'),
    	      //checkLogin:0
    	    }
        }
        
        _onSua = () =>{
            fetch('http://10.0.3.2:81/app/suasv.php', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              ma_sv:this.state.ma_sv,
              ten_sv: this.state.ten_sv,
              ma_lop : this.state.ma_lop,
              ngaysinh_sv : this.state.ngaysinh_sv,
              diachi_sv : this.state.diachi_sv,
          
            })
          
            }).then((response) => response.text())
            .then((responseData) => {
                alert(responseData);
                this.props.navigation.navigate('DSSV');
            }).catch((error) => {
                  console.error(error);
                });
          
          }
          render(){
            const {navigate} = this.props.navigation;
              return(
            <View style={styles.container}>
              <View style={styles.inputContainer}>
                <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/color/48/000000/checked-user-male.png'}}/>
                <TextInput style={styles.inputs}
                  placeholder={this.props.navigation.getParam('ten_sv')}
                  keyboardType="name" 
                  underlineColorAndroid='transparent'
                  onChangeText={ TextInputValue => this.setState({ ten_sv : TextInputValue }) }/>
              </View>
              <View style={styles.inputContainer}>
                <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/color/48/000000/google-classroom.png'}}/>
                <TextInput style={styles.inputs}
                    placeholder={this.props.navigation.getParam('ma_lop')}
                    keyboardType="malop"
                    underlineColorAndroid='transparent'
                    onChangeText={ TextInputValue => this.setState({ ma_lop : TextInputValue }) }/>
              </View>
              
              <View style={styles.inputContainer}>
                <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/color/48/000000/pay-date.png'}}/>
                <TextInput style={styles.inputs}
                   placeholder={this.props.navigation.getParam('ngaysinh_sv')}
                    keyboardType="ngaysinhsv"
                    underlineColorAndroid='transparent'
                    onChangeText={ TextInputValue => this.setState({ ngaysinh_sv : TextInputValue }) }/>
              </View>
              <View style={styles.inputContainer}>
                <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/color/48/000000/student-male.png'}}/>
                <TextInput style={styles.inputs}
                   placeholder={this.props.navigation.getParam('diachi_sv')}
                    keyboardType="diachi_sv"
                    underlineColorAndroid='transparent'
                    onChangeText={ TextInputValue => this.setState({ diachi_sv : TextInputValue }) }/>
              </View>
      
              <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this._onSua}>
                <Text style={styles.loginText}>Sửa</Text>
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
     //borderRadius:30,
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

