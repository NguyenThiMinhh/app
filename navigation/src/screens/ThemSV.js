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
export default class ThemSVScreen extends React.Component{
  static navigationOptions =
   {
      title: 'Thêm SV',
   };
   constructor(props){
    	    super(props);
    	    this.state={
    	        ma_sv:"",
                ten_sv:"",
                ngaysinh_sv:"",
                ma_lop:"",
                diachi_sv:"",
    	      //checkLogin:0
    	    }
    	  }
    	  _onThem=()=>{
          if(this.state.ma_sv===""){
            Alert.alert("thông báo!","Mã SV bị trùng");
          }else{
            if(this.state.ten_sv===""){
              Alert.alert("thông báo!","Tên SV không được bỏ trống");
            }else{
              if(this.state.ngaysinh_sv===""){
                Alert.alert("thông báo!","Ngày sinh không được bỏ trống");
              }else{
                if(this.state.diachi_sv===""){
                    Alert.alert("thông báo!","Địa chỉ không được bỏ trống");
                  }else{
                return fetch('http://10.0.3.2:81/app/themsv.php', { 
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    ma_sv: this.state.ma_sv,
                    ten_sv: this.state.ten_sv,
                    ngaysinh_sv: this.state.ngaysinh_sv,
                    ma_lop:this.state.ma_lop,
                    diachi_sv:this.state.diachi_sv,
                  })
                })
                .then((response) => response.json())
                .then((response) => {
                  if(response==='success'){
                    Alert.alert("thông báo!","Thêm thành công");
                    this.props.navigation.navigate('DSSV');
                  }else{
                    Alert.alert("thông báo!","Thêm không thành công");
                  }
                })
                .catch((error) =>{
                    console.error(error);
                });
              }
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
              placeholder="Tên SV"
              keyboardType="name"
              underlineColorAndroid='transparent'
              onChangeText={(ten_sv) => this.setState({ten_sv})}/>
        </View>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/color/48/000000/google-classroom.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Mã lớp"
              keyboardType="malop"
              underlineColorAndroid='transparent'
              onChangeText={(ma_lop) => this.setState({ma_lop})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/color/48/000000/student-male.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Mã SV"
              keyboardType="masv"
              underlineColorAndroid='transparent'
              onChangeText={(ma_sv) => this.setState({ma_sv})}/>
        </View>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/color/48/000000/pay-date.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Ngày sinh"
              keyboardType="masv"
              underlineColorAndroid='transparent'
              onChangeText={(ngaysinh_sv) => this.setState({ngaysinh_sv})}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/color/48/000000/place-marker.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Địa chỉ"
              keyboardType="diachi"
              underlineColorAndroid='transparent'
              onChangeText={(diachi_sv) => this.setState({diachi_sv})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this._onThem}>
          <Text style={styles.loginText}>Thêm</Text>
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