import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const {width} = Dimensions.get('window');

const Initial = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topHalf}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../assets/logo.png')}
          />
        </View>
        <TouchableOpacity
          style={styles.ingresarButton}
          onPress={() => navigation.navigate('login')}>
          <Text style={[styles.ingresarText]}>LOG IN</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.divider} />
      <View style={styles.bottomHalf}>
        <View style={styles.listButtonContainer}>
          <TouchableOpacity style={styles.listButton} onPress={() => {}}>
            <Text style={[styles.listButtonText]}>Register</Text>
            <Image
              style={styles.arrowIcon}
              source={require('../../assets/arrowRight.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.listButton} onPress={() => {}}>
            <Text style={[styles.listButtonText]}>Contact</Text>
            <Image
              style={styles.arrowIcon}
              source={require('../../assets/arrowRight.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.listButton} onPress={() => {}}>
            <Text style={[styles.listButtonText]}>Language</Text>
            <Image
              style={styles.arrowIcon}
              source={require('../../assets/arrowRight.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => {
              // Linking.openURL('https://discord.gg/QQssyjF94R');
            }}>
            <Image
              style={styles.socialButtonIcon}
              source={require('../../assets/1.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => {
              // Linking.openURL('https://mobile.twitter.com/net_eon');
            }}>
            <Image
              style={styles.socialButtonIcon}
              source={require('../../assets/2.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => {
              // Linking.openURL('https://medium.com/@eonnet.io');
            }}>
            <Image
              style={[styles.socialButtonIcon, {height: 30}]}
              source={require('../../assets/3.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Initial;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: '#f5f5f5',
  },
  topHalf: {
    flex: 1,
  },
  logoContainer: {
    width,
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    alignSelf: 'center',
    resizeMode: 'contain',
    height: 80,
  },
  ingresarButton: {
    backgroundColor: '#282532',
    height: 80,
    width: '80%',
    borderRadius: 25,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
    shadowColor: '#232A30',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {x: 0, y: -5},
  },
  ingresarText: {
    color: '#f5f5f5',
    textTransform: 'uppercase',
    fontSize: 18,
    letterSpacing: 5,
    textAlign: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: '#282532',
    width: '85%',
    alignSelf: 'center',
    marginTop: 50,
    opacity: 0.2,
  },
  bottomHalf: {
    flex: 1.5,
  },
  listButtonContainer: {
    flex: 3,
    justifyContent: 'space-evenly',
    paddingHorizontal: 35,
  },
  listButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  arrowIcon: {
    height: 14,
    resizeMode: 'contain',
  },
  listButtonText: {
    fontSize: 18,
  },
  socialButtonsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '80%',
  },
  socialButton: {
    backgroundColor: '#282532',
    height: 70,
    width: 70,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialButtonIcon: {
    alignSelf: 'center',
    resizeMode: 'contain',
    height: 35,
  },
});
