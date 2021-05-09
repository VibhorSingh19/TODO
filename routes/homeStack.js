import{createStackNavigator, createStackNAvigator} from 'react-navigation-stack';
import{createAppContainer} from 'react-navigation';
import LoginScreen from '../screens/loginScreen';
import RegisterScreen from '../screens/registerScreen';
import ToDOScreen from '../screens/todoscreen';
const screens={

LoginScreen:{
    screen: LoginScreen
},
RegisterScreen:{
    screen: RegisterScreen
},
TODO:{
    screen: ToDOScreen
}

}

const HomeStack= createStackNavigator(screens);

export default createAppContainer(HomeStack);