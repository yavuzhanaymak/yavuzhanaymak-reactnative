import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  headerContainer: {
    height: 50,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
  },
  title: {
    fontWeight: 'bold',
  },
  exitButton: {
    color: 'red',
  },
});
