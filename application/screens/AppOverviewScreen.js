import React, {useEffect} from 'react';
import {View, Button, StyleSheet, PermissionsAndroid} from 'react-native';
import Colors from '../constants/Colors';

const AppOverviewScreen = props => {
  const requestExternalStoreageRead = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Read APK files from storage',
          message: 'App needs to access your APK files',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('File read access allowed!');
      } else {
        console.log('File access permission denied');
      }

      const writeGranted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Read APK files from storage',
          message: 'App needs to access your APK files',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (writeGranted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('File write access allowed!');
      } else {
        console.log('File access permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    requestExternalStoreageRead();
  });

  const selectItemHandler = title => {
    props.navigation.navigate(title);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          color={Colors.primary}
          title="View System Apps"
          onPress={() => {
            selectItemHandler('SystemApps');
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          color={Colors.primary}
          title="View Non System Apps"
          onPress={() => {
            selectItemHandler('NonSystemApps');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginVertical: 20,
    width: 250,
  },
});

export default AppOverviewScreen;
