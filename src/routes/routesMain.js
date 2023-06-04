import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../pages/Dashboard';

const Stack = createNativeStackNavigator();

export default function () {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        swipeEnabled: false,
      }}>
      <Stack.Screen name="dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
}
