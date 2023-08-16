import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import IonicIcons from "react-native-vector-icons/Ionicons";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_APP, FIREBASE_AUTH } from "../../FireBase.Config";
import { useNavigation } from "@react-navigation/core";

const LoginPage = (props: any) => {
    const [pass, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const navigation=useNavigation()

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(FIREBASE_AUTH,user=>{
            if(user){
                console.log(user)
                navigation.navigate("HomeScreen")
            }
        })
        return unsubscribe
    },[])

    const Login = ()=> {
        signInWithEmailAndPassword(FIREBASE_AUTH,email,pass)
        .then((userCredential)=>{
            const user=userCredential.user;
            console.log("Loggedin With ",user.email)
        })
        .catch((error)=>{
            const errorCode=error.code;
            console.log(error)
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ paddingHorizontal: "5%" }}>
                <View style={{ alignItems: 'center' }}>
                    <Image source={require('../assets/images/miscs/img.jpg')} style={{ height: 300, width: 300, marginTop: "-5%" }} />
                </View>
                <Text style={styles.headingText}>Login</Text>

                <View style={ styles.inputFeilds}>
                    <MaterialIcons name='alternate-email' size={20} color="#666" style={{ marginTop: 5, marginRight: 8 }} />
                    <TextInput placeholder="Email Id" placeholderTextColor="black" style={styles.textInput } keyboardType="email-address" onChangeText={(text) => setEmail(text)} />
                </View>

                <View style={styles.inputFeilds}>
                    <IonicIcons name='lock-closed-outline' size={20} color="#666" style={{ marginTop: 5, marginRight: 8 }} />
                    <TextInput placeholder="Password" placeholderTextColor="black" style={styles.textInput} secureTextEntry={true} onChangeText={(text) => setPassword(text)} />
                    <TouchableOpacity>
                        <Text style={{ color: '#00E0BE', fontWeight: '900' }}>Forgot?</Text>
                    </TouchableOpacity>
                </View>


                <TouchableOpacity onPress={Login} style={styles.loginBtn}>
                    <Text style={{ textAlign: 'center', fontWeight: '900', fontSize: 20, color: '#fff' }}>Login</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: "black", textAlign: "center" }}>New usesr? </Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate("SignUp")}>
                        <Text style={{ color: "#02B09B" }} >Register here</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles=StyleSheet.create({
    container:{
        height: "100%", 
        justifyContent: 'center', 
        backgroundColor: '#fff' 
    },

    headingText:{
        fontSize: 30, color: '#333', fontFamily: 'Bold', marginBottom: 30
    },

    inputFeilds:{
        flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 2, marginBottom: 25 
    },

    textInput:{
        flex: 1, paddingVertical: 0, color: 'black' 
    },

    loginBtn:{
        backgroundColor: '#00E0BE', padding: 20, borderRadius: 10, marginBottom: 30, marginTop: 20
    }
})


export default LoginPage;
