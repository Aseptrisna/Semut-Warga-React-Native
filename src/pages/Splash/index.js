import React, { useEffect } from 'react'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import { SplashBackground, Logo,Bg} from '../../assets'

const Splash = ({ navigation }) => {
    
    useEffect(() => {
        setTimeout( () => {
            navigation.replace('Signin');
        }, 3000)
    }, [navigation]);

    return (
       <ImageBackground source={Bg} style={styles.background}>
           {/* <Image source={Logo} style={styles.logo} /> */}
           <Text style={styles.text}>Semut Warga</Text>
       </ImageBackground>
    )
}

export default Splash

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 222,
        height: 105
    },
    text:{
        marginTop:120,
        color: '#20B2AA',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'center',
        padding: 15,
    }
})
