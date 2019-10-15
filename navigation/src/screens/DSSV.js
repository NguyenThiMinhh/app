import React, { Component } from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';
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
export default class SVScreen extends React.Component{
  // _onPress(item){
  //   alert(item.ten_nganh)
  // }
  static navigationOptions =
   {
      title: 'DSSV',
   };
   constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }
  componentDidMount(){
    	    return fetch('http://10.0.3.2:81/app/dssv.php', { 
    	      method: 'POST',
    	      headers: {
    	        'Accept': 'application/json',
    	        'Content-Type': 'application/json',
    	      },
    	      body: JSON.stringify({
    	        ma_lop:this.props.navigation.getParam('item'),
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
            <View style={{flex: 5,}}>
              <SwipeListView 
              data={this.state.dataSource}
                renderItem={({item}) =>(
                  <TouchableHighlight>
                  <View style={styles.ds}>
                      <View style={{flexDirection:'row'}}>
                        <Image source={{uri: 'https://img.icons8.com/color/96/000000/id-verified.png'}}style={styles.anh} />
                      </View>
                      <View style={styles.nddl}>
                        <Text style={{fontSize:20, fontFamily:'arial',}}>Họ và tên: {item.ten_sv}</Text>
                        <Text style={{fontSize:15, fontFamily:'arial',}}>Mã SV: {item.ma_sv}</Text>
                        <Text style={{fontSize:15, fontFamily:'arial',}}>Ngày sinh: {item.ngaysinh_sv}</Text>
                        <Text style={{fontSize:15, fontFamily:'arial',}}>Địa chỉ: {item.diachi_sv}</Text>
                    </View>
                  </View>
                  </TouchableHighlight>
                )}
                renderHiddenItem={ ({item}) => (
                  <View style={styles.swipe}>
                    <TouchableHighlight style={styles.butxoa} onPress={() => 
                    {
                      Alert.alert(
                        'Xóa bản ghi',
                        'Bạn có chắc chắn muốn xóa',
                        [
                          {text:'Không', onPress:()=>console.log('Không')},
                          {text:'Có',onPress:()=>
                          {
                            return fetch('http://10.0.3.2:81/app/xoasv.php', { 
                            method: 'POST',
                            headers: {
                              'Accept': 'application/json',
                              'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                              ma_sv:item.ma_sv,
                            })
                          })
                          .then((response) => response.text())
                          .then((responseData) => {
                              alert(responseData);
                              this.props.navigation.navigate('DSSV');
                          }).catch((error) => {
                                console.error(error);
                              });
                          }
                        },
                        ],
                        {cancelable:false},
                      )
                    }  
                  }                   
                    >
                      <Text>Xóa</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.butsua} onPress={() => navigate('SuaSV',{
                       ma_sv      :item.ma_sv,
                       ten_sv     :item.ten_sv,
                       ma_lop     :item.ma_lop,
                       ngaysinh_sv:item.ngaysinh_sv,
                       diachi_sv  :item.diachi_sv,})}>
                      <Text>Sửa</Text>
                    </TouchableHighlight>
                  </View>
                )}
                leftOpenValue={180}
                rightOpenValue={-180}
                keyExtractor={({id_khoa}, index) => id_khoa}
                />
              </View>
              <View style={{flex: 1, flexDirection:'row-reverse'}}>
                <TouchableHighlight onPress={() => navigate('ThemSV')}>
                  <Image source={{uri:'https://img.icons8.com/color/48/000000/add-user-group-woman-man.png'}} style={styles.anh}/>
                </TouchableHighlight>
              </View>
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
        fontSize: 30,
      },
      butsua:{
        flex:50,
        backgroundColor:'#b0e0e6',
        textAlign: 'center',
        justifyContent:'center',
        alignItems:'center',
      },
      butxoa:{
        backgroundColor:'#ff0000',
        flex:50,
        textAlign: 'center',
        justifyContent:'center',
        alignItems:'center',
      },
      swipe:{
        flex:1,
        marginTop:5,
        flexDirection:'row',
        padding:10,
        flexDirection:'row',
        borderRadius:7,
        backgroundColor:'#7fff00',
      },
    });