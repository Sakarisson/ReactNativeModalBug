import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, Modal, Alert} from 'react-native';

const App = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    Alert.alert('ALERT');
  }, []);

  useEffect(() => {
    setVisible(true);
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
