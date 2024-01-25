import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RamChanting from '../screens/RamChanting';

import {Text} from 'react-native';

const AllRoutes = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarLabel: ({focused}) => (
          <Text
            style={{
              color: focused ? '#7B241C' : 'white',
              fontSize: 17,
              fontWeight: 600,
            }}>
            {route.name}
          </Text>
        ),
        tabBarIcon: () => {
          if (route?.name === 'CB') {
            return <Text>🤖</Text>;
          } else if (route?.name === 'Todo') {
            return <Text>👾</Text>;
          } else {
            return <Text>🕉</Text>;
          }
        },
        tabBarStyle: {
          backgroundColor: '#F15106',
        },
      })}>
      <Tab.Screen
        name="Home"
        component={RamChanting}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};
export default AllRoutes;
