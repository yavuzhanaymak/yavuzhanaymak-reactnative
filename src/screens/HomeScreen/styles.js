import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatlist: {flexGrow: 1, paddingBottom: 20},
  card: {
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },

  innerCard: {
    padding: 10,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  context: {
    fontSize: 16,
    color: 'darkgray',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  roundedIcon: {
    width: 50,
    height: 50,
    position: 'absolute',
    bottom: -25,
    right: 5,
    backgroundColor: '#e9c73a',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    zIndex: 99,
  },
  icon: {
    tintColor: 'white',
  },
  ticketText: {
    color: 'black',
  },
  ticketContainer: {
    padding: 5,
    paddingHorizontal: 10,
    backgroundColor: 'lightgray',
    borderRadius: 10,
    margin: 2,
  },
  ticketWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10,
    width: '80%',
  },
});
