import {
  Animated,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import CheckBox from '@react-native-community/checkbox';

const {width, height} = Dimensions.get('window');

const Login = ({navigation}) => {
  const [viewPassword, setViewPassword] = useState(true);
  const [recordarIsVisible, setRecordarIsVisible] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkbox, setCheckbox] = useState(false);

  const recordarBoxY = useRef(new Animated.Value(-70)).current;
  const recordarBoxOpacity = useRef(new Animated.Value(0)).current;
  const olvideBoxX = useRef(new Animated.Value(100)).current;
  const olvideBoxOpacity = useRef(new Animated.Value(0)).current;

  const aRecordarBox = {
    transform: [{translateY: recordarBoxY}],
    opacity: recordarBoxOpacity,
  };

  const aOlvideBox = {
    transform: [{translateX: olvideBoxX}],
    opacity: olvideBoxOpacity,
  };

  const animateOnlyRecordarCredentials = () => {
    setRecordarIsVisible(true);

    Animated.parallel([
      Animated.timing(recordarBoxY, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(recordarBoxOpacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const animateShowCredentialsHandler = () => {
    setRecordarIsVisible(true);

    Animated.parallel([
      Animated.timing(recordarBoxY, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(recordarBoxOpacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(olvideBoxX, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(olvideBoxOpacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const showPasswordHandler = useCallback(() => {
    setViewPassword(!viewPassword);
  }, [viewPassword]);

  return (
    <View style={{flex: 1}}>
      <KeyboardAvoidingView
        style={styles.viewContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.sideButtonsContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('initial')}>
            <Image
              style={styles.backArrow}
              source={require('../../assets/arrowBack.png')}
            />
          </TouchableOpacity>
          <Animated.View style={aOlvideBox}>
            <TouchableOpacity style={styles.sidebuttons} onPress={() => {}}>
              <Image
                style={styles.sideButtonsIcon}
                source={require('../../assets/passIcon.png')}
              />
              <Text style={[styles.sideButtonsText]}>Forgot my password</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../assets/logo.png')}
          />
        </View>
        <View style={styles.inputsContainer}>
          <View style={[styles.inputArea, {marginBottom: 28}]}>
            <Image
              style={[styles.inputIcon, styles.buttonView]}
              source={require('../../assets/email.png')}
            />
            <TextInput
              style={[styles.input]}
              placeholder="Email"
              placeholderTextColor="#232A30"
              value={email}
              autoCapitalize="none"
              onChangeText={setEmail}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.inputArea}>
            <TouchableOpacity
              onPress={showPasswordHandler}
              style={styles.buttonView}>
              <Image
                style={styles.inputIcon}
                source={require('../../assets/password.png')}
              />
            </TouchableOpacity>
            <TextInput
              style={[styles.input]}
              placeholder="Password"
              placeholderTextColor="#232A30"
              value={password}
              autoCapitalize="none"
              onChangeText={setPassword}
              secureTextEntry={viewPassword === true ? true : false}
              underlineColorAndroid="transparent"
              onFocus={() => animateShowCredentialsHandler()}
            />
          </View>
          {recordarIsVisible && (
            <Animated.View
              style={[styles.recordarCredencialesBox, aRecordarBox]}>
              <Text style={[{fontSize: 15}]}>Remember session</Text>
              <CheckBox
                style={{marginLeft: 5}}
                disabled={false}
                value={checkbox}
                onValueChange={newValue => setCheckbox(newValue)}
                tintColor="black"
                onTintColor="black"
                onCheckColor="black"
                lineWidth={1.5}
              />
            </Animated.View>
          )}
        </View>
      </KeyboardAvoidingView>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.nextButton} onPress={() => {}}>
          <Text style={[styles.succesText]}>LOG IN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 10,
  },
  sideButtonsContainer: {
    flex: 1,
    flexDirection: 'row',
    width,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: height < 670 ? 30 : 0,
    marginTop: 20,
  },
  backArrow: {
    resizeMode: 'contain',
    height: 25,
    width: 25,
    marginLeft: 20,
  },
  sidebuttons: {
    backgroundColor: '#282532',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 2,
    paddingHorizontal: 20,
    minWidth: width / 2,
  },
  sideButtonsText: {
    color: 'white',
  },
  sideButtonsIcon: {
    resizeMode: 'contain',
    width: 20,
    marginRight: 10,
  },
  logoContainer: {
    width,
    flex: 1,
  },
  logo: {
    alignSelf: 'center',
    resizeMode: 'contain',
    height: 60,
  },
  inputsContainer: {
    width,
    flex: 4,
    alignItems: 'center',
  },
  inputArea: {
    width: '85%',
  },
  input: {
    borderWidth: 2,
    paddingHorizontal: 25,
    borderRadius: 20,
    borderColor: '#232A30',
    color: '#232A30',
    height: 70,
    fontSize: 14,
    zIndex: 100,
    backgroundColor: '#f5f5f5',
  },
  recordarCredencialesBox: {
    borderColor: '#232A30',
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: -100,
  },
  buttonView: {
    right: '5%',
    top: '20%',
    position: 'absolute',
    zIndex: 150,
  },
  inputIcon: {
    resizeMode: 'contain',
    height: 40,
    width: 35,
  },
  bottomContainer: {},
  imagePerson: {
    alignSelf: 'center',
    resizeMode: 'contain',
    height: 90,
  },
  nextButton: {
    justifyContent: 'center',
    backgroundColor: '#282532',
    height: 120,
  },
  succesText: {
    fontSize: 17,
    color: 'white',
    textAlign: 'center',
    letterSpacing: 8,
  },
});
