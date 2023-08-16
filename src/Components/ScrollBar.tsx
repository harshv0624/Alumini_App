import { useState } from "react"
import { Dimensions, FlatList, Image, Text, View } from "react-native"

const ScrollBar=()=>{
    const data=[
        {
            id:'01',
            image:require("../assets/images/Collage/img1.png")
        },
        {
            id:'02',
            image:require("../assets/images/Collage/img2.jpg")
        },
        {
            id:'03',
            image:require("../assets/images/Collage/img3.jpeg")
        },
        {
            id:'04',
            image:require("../assets/images/Collage/img4.jpg")
        },
        {
            id:'05',
            image:require("../assets/images/Collage/img5.jpg")
        },
        {
            id:'06',
            image:require("../assets/images/Collage/img6.jpg")
        },
        {
            id:'07',
            image:require("../assets/images/Collage/img7.jpg")
        },
        {
            id:'08',
            image:require("../assets/images/Collage/img8.jpg")
        },
        {
            id:'09',
            image:require("../assets/images/Collage/img9.jpg")
        },
    ]
    const width=Dimensions.get("window").width
    const [activeIndex,setActiveIndex]=useState(0)
    const handleScroll=(event)=>{
        const scrollPosition=event.nativeEvent.contentOffset.x
        let index=scrollPosition/width
        index=Math.round(index)
        console.log({index})
        setActiveIndex(index)
    }

    const dots=()=>{
        return data.map((dot,index)=>{
            if(activeIndex===index){
                return(
                    <View key={index} style={{backgroundColor:'black',height:2,width:20,margin:2}}></View>
                )
            }else{
                return(
                <View key={index} style={{backgroundColor:'#fff',height:2,width:20,margin:2}}></View>
                )
            }
        })
    }
    const renderItem=({item,index})=>{
        return(
            <View>
                <Image source={item.image} style={{height:200,width:width}}/>
            </View>
        )
    }
    return(
        <View>
            <FlatList showsHorizontalScrollIndicator={false} data={data} keyExtractor={(item)=>item.id} renderItem={renderItem} horizontal={true}  pagingEnabled={true} onScroll={handleScroll}/>
            <View style={{flexDirection:"row",justifyContent:'center'}}>
                {dots()}
            </View>
        </View>
    )
}

export default ScrollBar;