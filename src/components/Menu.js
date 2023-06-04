import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Menu = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.button}>
          <View style={styles.menuItem}>
            <Image
              source={require('../../assets/menu1.png')}
              style={styles.icon}
            />
          </View>
          <Text
            style={{
              fontSize: 12,
              textAlign: 'center',
              marginTop: 8,
              fontWeight: '500',
            }}>
            Profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <View style={styles.menuItem}>
            <Image
              source={require('../../assets/menu2.png')}
              style={styles.icon}
            />
          </View>
          <Text
            style={{
              fontSize: 12,
              textAlign: 'center',
              marginTop: 8,
              fontWeight: '500',
            }}>
            Wallet
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <View style={styles.menuItem}>
            <Image
              source={require('../../assets/menu3.png')}
              style={styles.icon}
            />
          </View>
          <Text
            style={{
              fontSize: 12,
              textAlign: 'center',
              marginTop: 8,
              fontWeight: '500',
            }}>
            Marketplace
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.button}>
          <View style={styles.menuItem}>
            <Image
              source={require('../../assets/menu4.png')}
              style={styles.icon}
            />
          </View>
          <Text
            style={{
              fontSize: 12,
              textAlign: 'center',
              marginTop: 8,
              fontWeight: '500',
            }}>
            Community
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <View style={styles.menuItem}>
            <Image
              source={require('../../assets/menu5.png')}
              style={styles.icon}
            />
          </View>
          <Text
            style={{
              fontSize: 12,
              textAlign: 'center',
              marginTop: 8,
              fontWeight: '500',
            }}>
            Portfolio
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <View style={styles.menuItem}>
            <Image
              source={require('../../assets/menu6.png')}
              style={styles.icon}
            />
          </View>
          <Text
            style={{
              fontSize: 12,
              textAlign: 'center',
              marginTop: 8,
              fontWeight: '500',
            }}>
            Help
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
  button: {
    marginBottom: 30,
  },
  menuItem: {
    marginHorizontal: 10,
  },
  icon: {
    width: 90,
    height: 50,
    resizeMode: 'contain',
    backgroundColor: '#282532',
    borderRadius: 12,
  },
});
