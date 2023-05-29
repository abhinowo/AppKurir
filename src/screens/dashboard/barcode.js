import React, { useState } from 'react';
import { Text, Button, StyleSheet, View,Camera } from 'react-native';
// import ImagePicker from 'react-native-image-crop-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import BarcodeScanning from '@react-native-ml-kit/barcode-scanning';
import colors from '../../assets/colors/colors';


const Barcodes = () => {
  const [barcodes, setBarcodes] = useState([]);

  const handlePress = async () => {
    try {
      setBarcodes([]);
      const image = await launchImageLibrary({ mediaType: 'photo' });

      // Ensure the image selection is valid
      if (image.didCancel || image.errorCode) {
        throw new Error("Invalid image selection");
      }

      const result = await BarcodeScanning.scan('file://' + image.assets[0].uri);
      setBarcodes(result);
    } catch (error) {
      console.log("An error occurred:", error);
    }
  };

//   const cameraRef = useRef(null);

//   const handlePressCamera = async () => {
//     try {
//       setBarcodes([]);

//       const options = { quality: 0.5, base64: true };
//       const data = await cameraRef.current.takePictureAsync(options);

//       const result = []; // Process the captured image data using barcode scanning library of your choice

//       setBarcodes(result);
//     } catch (error) {
//       console.log('An error occurred:', error);
//     }
//   };
  
  const handlePressCamera = async () => {
    try {
      setBarcodes([]);
      const camera = await launchCamera({ mediaType: 'photo',
                                        cameraType: 'back', });

      // Ensure the image capture is valid
      if (camera.didCancel || camera.errorCode) {
        throw new Error("Invalid image capture");
      }

    //   const result = await BarcodeScanning.scan('file://' + image.assets[0].uri);
        //   const result = await BarcodeScanning.scan(`file://${image.uri}`);
    const result = await BarcodeScanning.scan({ uri: camera.uri });  
    setBarcodes(result);
    } catch (error) {
      console.log("An error occurred:", error);
    }
  };

  return (
    <View style={styles.button}>
      <Button title="Choose an Image" onPress={handlePress} />
      <Button title="Take a Picture" onPress={handlePressCamera} />

      {/* <RNCamera
        ref={cameraRef}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.off}
      /> */}
      {barcodes.length > 0 && <Text style={styles.heading}>Barcodes</Text>}
      {barcodes.map(label => (
        <View style={styles.label} key={label}>
          <Text>
            {label.value} - {label.format}
          </Text>
        </View>
      ))}
    </View>
  );
};



  const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        },
        heading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
        color  : '#000',
        },
        label: {
        marginTop: 5,
        padding: 5,
        backgroundColor: '#000',
        // color: colors.button,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 3,
        },
        button:{
        padding: 5,
        backgroundColor: 'white',
        color: colors.button,
        borderColor: colors.header,
        }
    });


  
export default Barcodes;