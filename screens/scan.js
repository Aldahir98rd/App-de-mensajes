import React, {Component, Fragment} from 'react';
import styles from './scanStyle';
import {
  TouchableOpacity,
  Text,
  StatusBar,
  Image,
  View,
  ActivityIndicator,
} from 'react-native';

const Scan = props => {
  const {sendSMS, getSMS, deleteSMS, encendido, apagar, acuse} = props;
  const desccription =
    "Use this RN component to send an SMS with a callback (completed/cancelled/error). iOS and Android are both supported.Currently, only user-initiated sending of an SMS is supported. This means you can't use react-native-sms to send an SMS in the background-- this package displays the native SMS view (populated with any recipients/body you want), and gives a callback describing the status of the SMS (completed/cancelled/error)";
  const imageUri =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/sms.png';
  return (
    <View style={styles.scrollViewStyle}>
      {/* View When app starts, here we will dive for camera and vision things */}
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <Image
          source={{uri: imageUri}}
          style={{width: 70, height: 70, alignSelf: 'center'}}
        />

        <Text style={styles.textTitle}>Mensajes</Text>
        {/* {!camera && !cameraResult && */}
        <View style={styles.cardView}>
          {/* <Text numberOfLines={8} style={styles.descText}>
            {desccription}
          </Text> */}

          <TouchableOpacity
            onPress={encendido}
            style={styles.buttonTouchableRead}>
            <Text style={{color: `white`}}> Encender</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={apagar} style={styles.buttonTouchable}>
            <Text style={{color: `white`}}> Apagar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={acuse}
            style={styles.buttonTouchableDelete}>
            <Text style={styles.buttonTextStyle}> Acuse </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            onPress={automatico}
            style={styles.buttonTouchableDelete}>
            <Text style={{color: 'white'}}> Texto</Text>
          </TouchableOpacity> */}
          {/* <TouchableOpacity onPress={getSMS} style={styles.buttonTouchableRead}>
            <Text style={styles.buttonTextStyle}> Leer SMS !</Text>
          </TouchableOpacity> */}
          {/* <TouchableOpacity
            onPress={deleteSMS}
            style={styles.buttonTouchableDelete}>
            <Text style={styles.buttonTextStyle}> Borrar SMS !</Text>
          </TouchableOpacity> */}
        </View>
      </Fragment>
    </View>
  );
};

export default Scan;
