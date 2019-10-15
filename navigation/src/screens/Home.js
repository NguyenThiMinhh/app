import React from 'react';
import { 
  FlatList,
  ActivityIndicator,
  Text,
  View ,
  Image,
  TouchableHighlight,
  StyleSheet,
  Button,
} from 'react-native';

export default class HomeScreen extends React.Component {
  
  static navigationOptions =
  {
    title: 'Khoa',
  };

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }
  // _onPress(item){
  //   alert(item.ten_khoa)
  // }
  componentDidMount(){
    return fetch('http://10.0.3.2:81/app/Khoa.php')
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
      <View style={{flex: 1, marginLeft:7, marginRight:7, }}>
        <FlatList
        data={this.state.dataSource}
          renderItem={({item}) =>(
            <TouchableHighlight onPress={() => navigate('nganh',{item:item.ma_khoa})}>
            <View style={styles.ds}>
                <View style={{flexDirection:'row'}}>
                  <Image source={{uri: 'https://img.icons8.com/color/96/000000/bird.png'}}style={styles.anh} />
                </View>
                <View style={styles.nddl}>
                  <Text style={{fontSize:20, fontFamily:'arial',}}>{item.ten_khoa}</Text>
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
    //borderBottomWidth:1,
    padding:10,
    flexDirection:'row',
    backgroundColor:'#90ee90',
    borderRadius:7,
    marginTop:5,
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