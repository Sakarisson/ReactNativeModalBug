import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, Modal, StyleSheet} from 'react-native';
import BackgroundGeolocation from 'react-native-background-geolocation';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const App = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 100);
  }, []);

  useEffect(() => {
    BackgroundGeolocation.onLocation(() => {});

    BackgroundGeolocation.ready({}, () => {
      BackgroundGeolocation.start();
    });
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.contentContainer}>
        <Text>MAIN CONTENT</Text>
      </View>
      <Modal visible={visible}>
        <View style={styles.contentContainer}>
          <Text>MODAL</Text>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default App;
