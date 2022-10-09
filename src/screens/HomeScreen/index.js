/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import {connect} from 'react-redux';

function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
}

const mapStateToProps = state => {
  return {
    userInfo: state.user.userInfo,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
