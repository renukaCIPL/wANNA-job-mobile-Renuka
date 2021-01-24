/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {connect, useDispatch, useSelector} from 'react-redux';
import {getDataRequest} from '../actions/restuarantDataActions';

const Item = ({title, navigation}) => (
  <View style={styles.item}>
    <Text
      style={styles.title}
      onPress={() => navigation.push('ApplicantsScreen')}>
      {title}
    </Text>
  </View>
);

function HomeScreen(props) {
  const renderItem = ({item}) => (
    <Item title={item.title} navigation={props.navigation} />
  );

  const globalState = useSelector((state) => state.restuarants);
  const [restuarantData, setRestuarantData] = useState([
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ]);

  const dispatch = useDispatch();

  console.log('PRops');
  console.log(globalState);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <FlatList
            data={restuarantData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default HomeScreen;
