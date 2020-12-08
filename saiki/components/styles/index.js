import { StyleSheet } from 'react-native';
import { COLOR_PRIMARY, BORDER_RADIUS } from './common';
export default StyleSheet.create({
  container: {
    borderRadius: BORDER_RADIUS,
  },
  button: {
    backgroundColor: COLOR_PRIMARY,
    borderRadius: BORDER_RADIUS,
  },
  //-
  searchSection: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
  },
  searchIcon: {
      paddingLeft: 10,
  },
  searchInput: {
      flex: 1,
      paddingTop: 3,
      paddingRight: 10,
      paddingBottom: 3,
      paddingLeft: 10,
      backgroundColor: '#f2f2f2',
      color: '#606060',
      height: 35,
      borderColor: '#eeeeee',
      borderWidth: 1,
      borderRadius: 5
  },
});
