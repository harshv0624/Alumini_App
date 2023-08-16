import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import React, { useState } from "react";
import MaterialIcons2 from "react-native-vector-icons/AntDesign";
import MaterialIcons3 from "react-native-vector-icons/Fontisto";
import IonicIcons from "react-native-vector-icons/Ionicons";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH, FIREBASE_STORE } from "../../FireBase.Config";
import firestore from '@react-native-firebase/firestore'
import { doc, setDoc } from "firebase/firestore/lite";

const SignUp = (props: any) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [contact, setContact] = useState('')
    const [name, setName] = useState('')

    const signUP=()=>{
        createUserWithEmailAndPassword(FIREBASE_AUTH,email,pass)
        .then((userCredential)=>{
            const user=userCredential.user;
            console.log("User Created With ",user.email)
            setDoc(doc(FIREBASE_STORE,"Users","IlR5gJoAVjk0uC2n9OgT"),{
                Name:name,
                Email:email,
                Contact:contact,
                Pass:pass
            })
        })
        .catch((error)=>{
            const errorCode=error.code;
            console.log(error)
        })
    }
    return (
        <SafeAreaView style={{ height: "100%", justifyContent: 'center', backgroundColor: '#fff' }}>
            <View style={{ paddingHorizontal: "5%" }}>
                <View style={{ alignItems: 'center', marginTop: -90 }}>
                    <Image source={require('../assets/images/miscs/SignUp.jpg')} style={{ height: 300, width: 300, marginTop: "15%" }} />
                </View>
                <Text style={{ fontSize: 30, color: '#333', fontFamily: 'Bold', marginBottom: 30 }}>Register</Text>

                {/* <Feilds name="Name" icon="user" material="2" state={name}/>
                <Feilds name="Email Id" icon="email" material="3"/>
                <Feilds name="Contact" icon="contacts" material="2"/>
                <Feilds name="Password" icon="lock-closed-outline" material="1"/>
                <Feilds name="Confirm Password" icon="lock-closed-outline" material="1"/> */}

                <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 2, marginBottom: 25 }}>
                    <MaterialIcons2 name='user' size={20} color="#666" style={{ marginTop: 5, marginRight: 8 }} />
                    <TextInput 
                    placeholder='Name' 
                    placeholderTextColor="black" 
                    style={{ flex: 1, paddingVertical: 0, color: 'black' }} 
                    onChangeText={(text)=>setName(text)}
                    keyboardType="email-address" />
                </View>

                <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 2, marginBottom: 25 }}>
                    <MaterialIcons3 name="email" size={20} color="#666" style={{ marginTop: 5, marginRight: 8 }} />
                    <TextInput 
                    placeholder="Email Id" 
                    placeholderTextColor="black" 
                    style={{ flex: 1, paddingVertical: 0, color: 'black' }} 
                    onChangeText={(text)=>setEmail(text)}
                    keyboardType="email-address" />
                </View>

                <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 2, marginBottom: 25 }}>
                    <MaterialIcons2 name="contacts" size={20} color="#666" style={{ marginTop: 5, marginRight: 8 }} /> 
                    <TextInput 
                    placeholder="Contact" 
                    placeholderTextColor="black" 
                    style={{ flex: 1, paddingVertical: 0, color: 'black' }}
                    onChangeText={(text)=>setContact(text)} 
                    keyboardType="number-pad" />
                </View>

                <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 2, marginBottom: 25 }}>
                    <IonicIcons name="lock-closed-outline" size={20} color="#666" style={{ marginTop: 5, marginRight: 8 }} /> 
                    <TextInput 
                    placeholder="Password" 
                    placeholderTextColor="black" 
                    style={{ flex: 1, paddingVertical: 0, color: 'black' }} 
                    secureTextEntry={true} 
                    onChangeText={(text)=>setPass(text)}
                    keyboardType="default" />
                </View>

                <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 2, marginBottom: 25 }}>
                    <IonicIcons name="lock-closed-outline" size={20} color="#666" style={{ marginTop: 5, marginRight: 8 }} /> 
                    <TextInput 
                    placeholder="Confirm Password" 
                    placeholderTextColor="black" 
                    style={{ flex: 1, paddingVertical: 0, color: 'black' }} 
                    secureTextEntry={true} 
                    onChangeText={(text)=>setPass(text)}
                    keyboardType="default" />
                </View>



                <TouchableOpacity 
                style={{ 
                backgroundColor: '#64A4FF', 
                padding: 20, 
                borderRadius: 10, 
                marginBottom: 30, 
                marginTop: 20 }}
                onPress={signUP}
                >     
                <Text style={{ textAlign: 'center', fontWeight: '900', fontSize: 20, color: '#fff' }}>Sign Up</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: "black", textAlign: "center" }}>Already Registered? </Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
                        <Text style={{ color: "#0C74EB" }}>Login Here</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

// const Feilds = (props: any) => {
//     let CustomTag = props.material
//     return (
//         <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 2, marginBottom: 25 }}>
//             {props.material == 1 ? <IonicIcons name={props.icon} size={20} color="#666" style={{ marginTop: 5, marginRight: 8 }} /> :
//                 props.material == 2 ? <MaterialIcons2 name={props.icon} size={20} color="#666" style={{ marginTop: 5, marginRight: 8 }} /> :
//                     <MaterialIcons3 name={props.icon} size={20} color="#666" style={{ marginTop: 5, marginRight: 8 }} />}
//             <TextInput placeholder={props.name} placeholderTextColor="black" style={{ flex: 1, paddingVertical: 0, color: 'black' }} keyboardType="email-address" />
//         </View>
//     )
// }

export default SignUp;