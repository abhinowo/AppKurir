import React, {useState, useEffect} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Image,
    ActivityIndicator
} from 'react-native';
import auth from "@react-native-firebase/auth";

const Splash = ({navigation}) => {
    const [animating, setAnimating] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setAnimating(false);
            navigation.replace(
                auth().currentUser ? 'DrawerNavigationRoutes' : 'Auth'
            );
        }, 5000);
    }, []);

    return (
        <SafeAreaView
        style={{ flex: 1, backgroundColor: "#307ecc" }}
        >
            <View style={styles.container}>
                <ActivityIndicator
                    animating={animating}
                    color="#FFFFFF"
                    size='large'
                    stlye={styles.activityIndicator}
                />
            </View>
        </SafeAreaView>
    );

};

export default Splash;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    activityIndicator: {
      alignItems: "center",
      height: 80,
    },
  });
