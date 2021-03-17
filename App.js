import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, Modal} from 'react-native';
import BackgroundGeolocation from 'react-native-background-geolocation';

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
    <SafeAreaView style={{flex: 1}}>
      <Modal visible={visible}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Modal is visible</Text>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default App;
