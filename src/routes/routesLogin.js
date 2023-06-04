import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Initial from '../pages/Initial';
import Login from '../pages/Login';

const Stack = createNativeStackNavigator();

export default function () {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        swipeEnabled: false,
      }}>
      <Stack.Screen name="initial" component={Initial} />
      <Stack.Screen name="login" component={Login} />
    </Stack.Navigator>
  );
}
