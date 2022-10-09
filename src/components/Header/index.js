import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {connect} from 'react-redux';
import {icons} from '../../theme/icons';
import {styles} from './styles';
import {logout} from '../../store/actions/user';

function Header(props) {
  return (
    <View style={styles.headerContainer}>
      {props.navProps.back && (
        <TouchableOpacity onPress={() => props.navProps.navigation.pop()}>
          <Image source={icons.arrowLeft} />
        </TouchableOpacity>
      )}
      <View>
        <Image
          source={{
            uri: 'https://www.calliaweb.co.uk/wp-content/uploads/2015/10/600x200.jpg',
          }}
          style={{height: 50, width: 100, resizeMode: 'contain'}}
        />
      </View>
      {props.userInfo && (
        <TouchableOpacity onPress={() => props.onLogOut()}>
          <Text style={styles.exitButton}>Çıkış</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const mapStateToProps = state => {
  return {
    userInfo: state.user.userInfo,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogOut: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
