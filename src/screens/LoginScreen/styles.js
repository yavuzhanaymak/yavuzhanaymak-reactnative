import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  wrapper: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: Dimensions.get('window').width * 0.8,
  },
});
