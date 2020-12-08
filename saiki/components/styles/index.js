import { StyleSheet } from 'react-native';
import * as DefVar from './common';
export default StyleSheet.create({
  screen:{
      flex:1,
      display:'flex',
      backgroundColor:'#ffffff',
  },
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
      color: DefVar.COLOR_FONT_PRIMARY,
      height: 35,
      borderColor: '#eeeeee',
      borderWidth: 1,
      borderRadius: 5
  },
  //-
  postItem: {
    alignItems: 'stretch',
    backgroundColor: '#EEE',
    padding: 50,
    marginVertical: 2,
    marginHorizontal: 0,
  },
  postTitle: {
    fontSize: 32,
  },
});
