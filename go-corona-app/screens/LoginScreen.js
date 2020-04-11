import React, { useState } from 'react';
import { ActivityIndicator, Button, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signInWithGoogleAsync } from '../utils/Login';
import { setItem } from '../utils/Storage';

export default function LoginScreen() {
    const [loginProgress, setLoginProgress] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const navigation = useNavigation()

    const onLoginPress = async () => {
        setLoginProgress(true)

        const result = await signInWithGoogleAsync();

        if (!result.cancelled && !result.error) {
            await setItem('login', result);

            setLoginProgress(false)
            setIsLoggedIn(true)

            navigation.navigate('Home');
        } else {
            console.log('failed to login')
            // alert('Failed to authenticate !');
        }

        // if there is no result.error or result.cancelled, the user is logged in
        // do something with the result
    };

    return (
        <View style={styles.container}>
            {loginProgress || isLoggedIn ? (
                <ActivityIndicator size="large" color="gray" />
            ) :
                <Button onPress={this.onLoginPress} title="Login using Google" />
            }
        </View>
    )
}

LoginScreen.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});