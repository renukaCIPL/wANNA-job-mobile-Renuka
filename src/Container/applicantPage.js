import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';

const Item = ({title, navigation, applicationData}) => (
  <View style={styles.item}>
    <Text
      style={styles.title}
      onPress={() =>
        navigation.push('ApplicantsFormScreen', {applicationData})
      }>
      {title}
    </Text>
  </View>
);

function ApplicantPage(props) {
  const renderItem = ({item}) => (
    <Item
      title={item.definition.title}
      navigation={props.navigation}
      applicationData={item}
    />
  );

  const selectedRestaurantData = props.route.params.itemData;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {selectedRestaurantData !== null && (
          <View style={styles.scrollView}>
            <Text style={styles.pageTitle}>{selectedRestaurantData.name}</Text>
            <FlatList
              data={selectedRestaurantData.applicants}
              renderItem={renderItem}
              keyExtractor={(item) => item.itemId}
            />
          </View>
        )}
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

export default ApplicantPage;
