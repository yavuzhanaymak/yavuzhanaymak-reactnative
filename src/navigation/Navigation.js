import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import Header from '../components/Header';
import {connect} from 'react-redux';
import {logout} from '../store/actions/user';
import RegisterModal from '../modals/RegisterModal';
import {DropDownComponentProvider} from '../modals/DropDownComponentProvider';

const Stack = createNativeStackNavigator();

const renderHeader = navProps => {
  return <Header navProps={navProps} />;
};

const modalHeader = navProps => {
  return null;
};

function Navigation(props) {
  return (
    <DropDownComponentProvider>
      <NavigationContainer>
        {props.userInfo ? (
          <Stack.Navigator>
            <Stack.Group>
              <Stack.Screen
                name="HomeScreen"
                options={{header: renderHeader, headerTitle: 'Ana Sayfa'}}
                component={HomeScreen}
              />
            </Stack.Group>
            <Stack.Group screenOptions={{presentation: 'modal'}}>
              <Stack.Screen
                options={{header: modalHeader}}
                name="RegisterModal"
                component={RegisterModal}
              />
            </Stack.Group>
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              options={{header: renderHeader, headerTitle: 'Login'}}
              name="LoginScreen"
              component={LoginScreen}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </DropDownComponentProvider>
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

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
