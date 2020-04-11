import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Button, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signInWithGoogleAsync } from '../utils/Login';
import { setItem, getItem, clear } from '../utils/Storage';

export default function LoginScreen() {
    const [loginProgress, setLoginProgress] = useState(false)
    const [loggedInUser, setloggedInUser] = useState(null)

    const navigation = useNavigation()
    const goToHome = () => navigation.replace('Root');

    // get login info from local storage
    useEffect(() => {
        async function getLoginUser() {
            setloggedInUser(await getItem("login"))
        }
        getLoginUser();
    }, [])

    // navigate away if already logged-in
    useEffect(() => {
        loggedInUser && goToHome()
    }, [loggedInUser])

    const onLoginPress = async () => {
        setLoginProgress(true)

        const result = await signInWithGoogleAsync();

        if (!result.cancelled && !result.error) {
            await setItem('login', result);

            setLoginProgress(false)
            setloggedInUser(result)

            goToHome()
        } else {
            console.log('failed to login')
        }
    };

    return (
        <View style={styles.container}>
            {loginProgress ? (
                <ActivityIndicator size="large" color="gray" />
            ) :
                <Button onPress={onLoginPress} title="Login using Google" />
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