/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';

const Item = ({details, navigation}) => (
  <View style={styles.item}>
    <Text style={styles.titleText}>{`Field Id : ${details.field.id}`}</Text>
    <Text style={styles.titleText}>{`Field Ref : ${details.field.ref}`}</Text>

    <Text style={styles.titleText}>{`Type: ${details.type.replace(
      '_',
      ' ',
    )}`}</Text>

    <Text style={styles.text}>{`Field Value : ${
      details.type === 'choice' ? details.choice.label : details[details.type]
    }`}</Text>
  </View>
);

function ApplicantPage(props) {
  const renderItem = ({item}) => (
    <Item navigation={props.navigation} details={item} />
  );

  const applicationData = props.route.params.applicationData;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {applicationData !== null && (
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Text style={styles.pageTitle}>
              {applicationData.definition.title}
            </Text>
            <FlatList
              data={applicationData.answers}
              renderItem={renderItem}
              keyExtractor={(item) => item.itemId}
            />
          </ScrollView>
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
    fontSize: 24,
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
    fontSize: 24,
    color: '#fff',
  },
  titleText: {
    color: '#fff',
    fontSize: 20,
    textTransform: 'capitalize',
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
});

export default ApplicantPage;
