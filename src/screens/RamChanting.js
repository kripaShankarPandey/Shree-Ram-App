import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native';
import Video from 'react-native-video';
import ram from '../assets/ram.mp4';
import counterBG from '../assets/counter.jpeg';
const RamChanting = () => {
  const [count, setCount] = useState(0);
  const [ramChanting, setRamChanting] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      setRamChanting(false);
    }, 2000);
    return () => {
      clearTimeout(id);
    };
  }, [count]);

  return (
    <ImageBackground style={styles.container} source={counterBG}>
      <View style={styles.counterMain}>
        <View style={styles.counterHeading}>
          <Text style={styles.headingText}>Shree Ram {count} 🚩</Text>
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            setCount(prev => prev + 1);
            setRamChanting(true);
          }}>
          <Text style={styles.btnText}>Shree Ram 🪷</Text>
        </TouchableOpacity>
        {ramChanting && (
          <Video
            style={{height: 0, width: 0}}
            source={ram}
            controls={false}
            resizeMode="cover"
          />
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: '#F15106',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    elevation: 3, // Android elevation for 3D effect
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  counterMain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterHeading: {
    backgroundColor: 'linear-gradient(to right, red, yellow, green)',
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    width: '100%',
  },
  headingText: {
    fontSize: 40,
    color: '#E72D1B',
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default RamChanting;
