import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import MenuButton from '../../shared/components/MenuButton';
import {HomeProps} from '../../shared/constants/NavigatorTypes';

function HomeScreen({route, navigation}: HomeProps) {
  return (
    <SafeAreaView>
      <View style={styles.homeViewStyle}>
        <MenuButton navigation={navigation} route={route} />
        <Text>Home!</Text>
        <Text>네이버지도 추가 예정</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homeViewStyle: {
    height: '100%',
  },
});
export default HomeScreen;
