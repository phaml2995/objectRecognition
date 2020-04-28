import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import StartScreen from '../screen/StartScreen';
import MainScreen from '../screen/MainScreen';

const AppNavigator = createStackNavigator({
    Origin: StartScreen,
    Main: MainScreen
})

export default createAppContainer(AppNavigator)