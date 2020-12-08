import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigatorBeranda, NavigatorGaleri, NavigatorPesan, NavigatorJualBeli, NavigatorAkun} from './saiki/navigator'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const App: () => Saiki = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            labelStyle:{marginTop:-10},
            activeTintColor: '#606060',
            inactiveTintColor: '#606060',
            showLabel: false,
            style: {
              //backgroundColor: '#171F33'
              paddingBottom:4,
              elevation: 0,
              shadowOpacity: 0,
            }
          }}
        >
          <Tab.Screen
            name="Beranda"
            component={NavigatorBeranda}
            options={{
              tabBarIcon: ({ color, focused }) => (
                <Ionicons name={focused ? "home" : "home-outline"} color={color} size={22} />
              ),
            }}
          />
          <Tab.Screen
            name="Galeri"
            component={NavigatorGaleri}
            options={{
              tabBarIcon: ({ color, focused }) => (
                <Ionicons name={focused ? "image" : "image-outline"} color={color} size={24} />
              ),
            }}
          />
          <Tab.Screen
            name="Pesan"
            component={NavigatorPesan}
            options={{
              tabBarIcon: ({ color, focused }) => (
                <Ionicons name={focused ? "chatbubble-ellipses" : "chatbubble-ellipses-outline"} color={color} size={24} />
              ),
            }}
          />
          <Tab.Screen
            name="Jual Beli"
            component={NavigatorJualBeli}
            options={{
              tabBarIcon: ({ color, focused }) => (
                <Ionicons name={focused ? "receipt" : "receipt-outline"} color={color} size={24} />
              ),
            }}
          />
          <Tab.Screen
            name="Akun"
            component={NavigatorAkun}
            options={{
              tabBarIcon: ({ color, focused }) => (
                <Ionicons name={focused ? "options" : "options-outline"} color={color} size={24} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
