import React from 'react';
import {StyleSheet, TouchableHighlight, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const MenuButton = () => {
  return (
    <TouchableHighlight onPress={() => {}}>
      <View style={styles.buttonCircle}>
        <Icon name="menu" size={25} />
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  buttonCircle: {
    position: 'absolute',
    top: 16,
    marginLeft: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 50,
    borderStyle: 'solid',
    borderWidth: 1,
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: Colors.black,
  },
});

export default MenuButton;
