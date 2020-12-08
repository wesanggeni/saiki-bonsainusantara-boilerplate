import React, { Component } from 'react';
import { StyleSheet, Image  } from 'react-native';
import { Icon, Button, Layout, Text} from '@ui-kitten/components';
import LinearGradient from 'react-native-linear-gradient';

import {
  IconSignIn,
  IconSignUp,
} from './../component/icon';

import CustomFooter from './../component/layout/footer';
import { Endpoint, Color } from './../config';

const SplashScreen = (props) => (
  <Layout
  style={styles.container}>

    <Image style={styles.logo}
      source={require('./../asset/logo.png')}
    />

    <Text 
    style={styles.text} 
    category='s1'>Selamat Datang di 
    <Text style={styles.textLogo}> Bonsai Nusantara</Text>
    </Text>

    <Text 
    style={[styles.text, styles.marginBottom]} 
    category='s1'>Galeri Bonsai Indonesia
    </Text>

    <Button 
    style={styles.button} 
    size='medium' status='primary' 
    accessoryLeft={IconSignIn} 
    appearance='outline'
    onPress={()=> { props.navigation.navigate('Login'); }}>
    Masuk Akun
    </Button>

    <Button 
    style={styles.button} 
    size='medium' status='warning' 
    appearance='outline' 
    accessoryLeft={IconSignUp} 
    onPress={()=> { props.navigation.navigate('Register'); }}>
    Daftar Akun
    </Button>

  </Layout>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width:249,
    height:33,
    marginBottom:30,
    marginTop:10
  },
  marginBottom: {
    marginBottom:10
  },
  text: {
    marginBottom: 0,
  },
  textLogo: {
    fontWeight:'bold'
  },
  button: {
    marginTop: 10,
    paddingHorizontal:80
  },
});

export default SplashScreen;