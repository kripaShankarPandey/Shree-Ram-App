import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
  StatusBar,
} from 'react-native';
import Video from 'react-native-video';
import vid from './assets/test.mp4';
import RamChanting from './screens/RamChanting';
import {NavigationContainer} from '@react-navigation/native';
import AllRoutes from './routes/AllRoutes';

const App = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => {
      setShow(false);
    }, 12000);
    return () => {
      clearTimeout(id);
    };
  }, []);

  return (
    <View style={styles.container}>
      {show ? (
        <Video
          source={vid}
          style={styles.video}
          controls={false}
          resizeMode="cover"
        />
      ) : (
        <RamChanting />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  btn: {
    backgroundColor: 'red',

    padding: 10,
  },
  btnText: {
    color: 'white',
  },
  counterMain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterHeading: {
    fontSize: 40,
    color: 'red',
    fontWeight: '600',
  },
});

export default App;
