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
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getDataRequest} from '../actions/restuarantDataActions';

const Item = ({title, navigation, itemData}) => (
  <View style={styles.item}>
    <Text
      style={styles.title}
      onPress={() => {
        navigation.push('ApplicantsScreen', {itemData});
      }}>
      {title}
    </Text>
  </View>
);

function HomeScreen(props) {
  const renderItem = ({item}) => {
    return (
      <Item title={item.name} navigation={props.navigation} itemData={item} />
    );
  };

  const globalState = useSelector((state) => state.restuarants);
  const [restuarantData, setRestuarantData] = useState([]);
  const [restaurantList, setRestuarantList] = useState({});

  const dispatch = useDispatch();

  //On mount hook

  // useEffect(() => {
  //   dispatch(getDataRequest());
  // }, [dispatch]);

  useEffect(() => {
    console.log('globalState');
    console.log(globalState);
    if (
      globalState.error === null &&
      globalState.list !== null &&
      restuarantData &&
      restuarantData.length === 0
    ) {
      setRestuarantData(globalState.list.data);

      let tempList = {};

      // To filter out data on basis of restuarant id
      if (globalState.list.data && globalState.list.data.length > 0) {
        globalState.list.data.forEach((listItem) => {
          if (listItem.restaurant) {
            let singleResturantData = {
              name: listItem.restaurant.label,
              restId: listItem.restaurant.id,
              applicants: [listItem.form_response],
              itemId: listItem.id,
            };

            if (tempList[listItem.restaurant.id] === undefined) {
              // The restuarant is not in list yet

              tempList[listItem.restaurant.id] = singleResturantData;
            } else {
              //The restuarant is in list

              tempList[listItem.restaurant.id].applicants.push(
                listItem.form_response,
              );
            }
          }
        });
      }

      setRestuarantList(tempList);
    }
  }, [globalState, restuarantData]);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.scrollView}>
          {Object.keys(restaurantList).length > 0 && (
            <FlatList
              data={Object.values(restaurantList)}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          )}
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  pageTitle: {
    color: '#ff570a',
    fontSize: 32,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#12355b',
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 16,
    borderRadius: 5,
    overflow: 'hidden',
  },
  title: {
    fontSize: 28,
    color: '#fff',
  },
});

export default HomeScreen;
