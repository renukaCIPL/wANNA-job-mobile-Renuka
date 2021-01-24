/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/Container/home';

function ApplicantsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Applicants Screen</Text>
      <View style={{margin: 10}}>
        <Text onPress={() => navigation.push('ApplicantsFormScreen')}>
          Applicant 1
        </Text>
        <Text onPress={() => navigation.push('ApplicantsFormScreen')}>
          Applicants 2
        </Text>
      </View>
    </View>
  );
}
function ApplicantsFormScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Applicants Form Screen </Text>
      <View style={{margin: 10}}>
        <Text>Applicants Form 1</Text>
        <Text>Applicants Form 2</Text>
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="ApplicantsFormScreen"
          component={ApplicantsFormScreen}
        />
        <Stack.Screen name="ApplicantsScreen" component={ApplicantsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
