import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import News from '../components/News';
import Menu from '../components/Menu';

const Dashboard = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center', gap: 11}}>
          <Text style={{fontWeight: '500', fontSize: 15}}>Log out</Text>
          <Image
            source={require('../../assets/logout.png')}
            style={styles.logout}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.centerContainer}>
        <News />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={[styles.titleHeader]}>MENU</Text>
        <View style={styles.menuContainer}>
          <Menu />
        </View>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  topContainer: {
    flex: 0.25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    marginTop: 55,
    backgroundColor: '#f5f5f5',
    borderBottomColor: '#282532',
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  logo: {
    width: 70,
    resizeMode: 'contain',
  },
  logout: {
    width: 30,
    resizeMode: 'contain',
  },
  centerContainer: {
    flex: 1.5,
  },
  bottomContainer: {
    flex: 1.5,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: '#f5f5f5',
    borderBottomColor: '#282532',
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: -10},
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  titleHeader: {
    fontSize: 20,
    letterSpacing: 2,
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: 15,
    fontWeight: '600',
    marginTop: 30,
  },
  menuContainer: {
    alignItems: 'center',
  },
});
