import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import LoginScreen from './src/screens/login';
import DangkiScreen from './src/screens/Dangki';
import LogoutScreen from './src/Logout';
import HomeScreen from './src/screens/Home';
import NganhScreen from './src/screens/nganh';
import LopScreen from './src/screens/Lop';
import SVSceen from './src/screens/DSSV';
import ThemSVScreen from './src/screens/ThemSV';
import SuaSVScreen from './src/screens/SuaSV';

const LoginStack = createStackNavigator({
  login: LoginScreen,
  Dangki: DangkiScreen,
  Home: HomeScreen,
  nganh: NganhScreen,
  Lop: LopScreen,
  DSSV: SVSceen,
  ThemSV: ThemSVScreen,
  SuaSV: SuaSVScreen,
});
const App = createAppContainer(LoginStack);
// export default createAppContainer(createBottomTabNavigator({
//   Login: LoginStack,
//   Logout: LogoutScreen,
// }));
export default App;