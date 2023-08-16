import { Image, StyleSheet, Text, View, Dimensions, ScrollView,SafeAreaView } from "react-native";
import ScrollBar from "../Components/ScrollBar";

const HomeScreen=()=>{
    const width=Dimensions.get("window").width
    // return(
    //     <ScrollView style={styles.container}>
    //         <View style={styles.header}>
    //             <Image source={require("../assets/images/Collage/header.jpg")} style={{marginTop:"5%",alignItems:"center",height:"50%",width:width}}/>
    //         </View>
    //         <View style={styles.body}>
    //             <ScrollBar/>
    //             <View style={{backgroundColor:'#fff'}}>
    //                 <Text style={{margin:20,textAlign:'justify'}}>
    //                 As the Chairman of Ajeenkya DY Patil Group, I am committed to providing our students with the best educational experience that can prepare them for the future and help them achieve their dreams. Our vision is to create an environment of learning that fosters creativity, innovation, and excellence. We strive to cultivate a culture of excellence, a culture of collaboration, and a culture of innovation. We are dedicated to building a community of learners who can think critically, solve problems, and be successful in the 21st century. We will provide the tools and resources necessary to equip our students with the knowledge and skills they need to succeed, while also ensuring they are prepared to lead and make a meaningful impact in their communities. Ajeenkya D Y Patil College of Engineering, Pune is an engineering college established in 2010 and affiliated to the University of Pune. It offers undergraduate and postgraduate courses in engineering and technology. It has several research centres and student clubs, as well as state-of-the-art facilities such as a library, computer centre and workshop. The college also has an active placement cell which provides placement assistance to its students. It regularly organizes workshops, seminars and conferences to update students with the latest technology and industry trends. The college also offers several scholarships to meritorious students, as well as financial assistance to students from economically weaker sections.
    //                 </Text>
    //             </View>
    //         </View>
    //         <View style={styles.footer}>
    //             <Text>Footer</Text>
    //         </View>
    //     </ScrollView>
    // )
    return(
        <ScrollView style={styles.container}>
            <View style={styles.header}>
            <Image source={require("../assets/images/Collage/header.jpg")} style={{marginTop:"5%",alignItems:"center",height:"50%",width:width}}/>
            </View>
            <View style={{height:"60%"}}>
            <ScrollBar/>
            <Text style={{margin:20,textAlign:'justify'}}>
            As the Chairman of Ajeenkya DY Patil Group, I am committed to providing our students with the best educational experience that can prepare them for the future and help them achieve their dreams. Our vision is to create an environment of learning that fosters creativity, innovation, and excellence. We strive to cultivate a culture of excellence, a culture of collaboration, and a culture of innovation. We are dedicated to building a community of learners who can think critically, solve problems, and be successful in the 21st century. We will provide the tools and resources necessary to equip our students with the knowledge and skills they need to succeed, while also ensuring they are prepared to lead and make a meaningful impact in their communities. Ajeenkya D Y Patil College of Engineering, Pune is an engineering college established in 2010 and affiliated to the University of Pune. It offers undergraduate and postgraduate courses in engineering and technology. It has several research centres and student clubs, as well as state-of-the-art facilities such as a library, computer centre and workshop. The college also has an active placement cell which provides placement assistance to its students. It regularly organizes workshops, seminars and conferences to update students with the latest technology and industry trends. The college also offers several scholarships to meritorious students, as well as financial assistance to students from economically weaker sections.

            </Text>
            </View>
            <View style={{backgroundColor:'green',height:400}}>
            </View>
            <View style={{backgroundColor:'blue',height:400}}>
            </View>
        </ScrollView>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1
    },

    header:{
        height:100
    },

    body:{
        backgroundColor:'#fff',
        // flex:5,
        height:"70%",
        marginTop:-20
    },

    footer:{
        backgroundColor:'black',
        height:"15%"
    }
})

export default HomeScreen;
