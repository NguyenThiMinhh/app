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
    FlatList,
    ActivityIndicator, 
  Platform,} from 'react-native';
export default class NganhScreen extends React.Component{
  // _onPress(item){
  //   alert(item.ten_nganh)
  // }
  static navigationOptions =
   {
      title: 'Ngành',
   };
   constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }
  componentDidMount(){
  
    	    return fetch('http://10.0.3.2:81/app/nganh.php', { 
    	      method: 'POST',
    	      headers: {
    	        'Accept': 'application/json',
    	        'Content-Type': 'application/json',
    	      },
    	      body: JSON.stringify({
    	        ma_khoa:this.props.navigation.getParam('item'),
    	      })
    	    })
    	    .then((response) => response.json())
    	    .then((responseJson) => {
    	      this.setState({
              isLoading: false,
              dataSource: responseJson,
            }, function(){    
            });    
          })
    	    .catch((error) =>{
    	        console.error(error);
    	    });
    	  }   
        render(){   
          const {navigate} = this.props.navigation;
      
          if(this.state.isLoading){
            return(
              <View style={{flex: 1, padding: 20}}>
                <ActivityIndicator/>
              </View>
            )
          }      
          return(
          <View style={{flex: 1,marginLeft:7, marginRight:7, }}>
            <FlatList
            data={this.state.dataSource}
              renderItem={({item}) =>(
                <TouchableHighlight onPress={() => navigate('Lop',{item:item.ma_nganh})}>
                <View style={styles.ds}>
                    <View style={{flexDirection:'row'}}>
                      <Image source={{uri: 'https://img.icons8.com/color/96/000000/id-verified.png'}}style={styles.anh} />
                    </View>
                    <View style={styles.nddl}>
                      <Text style={{fontSize:20, fontFamily:'arial',}}>{item.ten_nganh}</Text>
                  </View>
                </View>
                </TouchableHighlight>
              )}
              keyExtractor={({id_khoa}, index) => id_khoa}
              />
          </View>
        );
      }
    }
    const styles = StyleSheet.create({
      ds:{
        padding:10,
        flexDirection:'row',
        borderRadius:7,
        marginTop:5,
        backgroundColor:'#7fff00',
      },
      anh:{
        width:50,
        height:50,
      },
      nddl:{
        flexDirection:'column',
        marginLeft:30,
        textAlign: 'center',
        justifyContent:'center',
        alignItems:'center',
        fontFamily: 'arial',
        fontSize: 30,
      },
      butsua:{
        flex:50,
        backgroundColor:'#b0e0e6',
      },
      butxoa:{
        backgroundColor:'#ff0000',
        flex:50
      },
      swipe:{
        flex:1,
        flexDirection:'row',
      },
    });