import { Pressable, StyleSheet, Text, View, map, Image } from "react-native";
import React, { useEffect, useState } from "react";

import { useNavigation } from "@react-navigation/native";

var data = [];

var url = "https://65419d75f0b8287df1fe8b4a.mockapi.io/todoss";
const Screen_1 = () => {
  const navigation = useNavigation();
  var [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        data = json;
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <view>
      {data.map((item) => {
        return (

          <View
            key={item.id}
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              margin: 10,
            }}
          >
            <Image
              style={{ width: 100, height: 70, margin: 20 }}
              source={{ uri: item.avatar }}
            />
            <View></View>
            <Text
              style={{
                backgroundColor: "red",
                color: "white",
                margin: 20, 
              }}
            >
              Ho va Ten:  {item.name}
            </Text>
            <Pressable  onPress={() => { }} style = {{ height: 20, width: 100, backgroundColor: 'black',alignItems: "center", justifyContent: "center"}}>
                <Text style = {{color: 'white'}}> Xem Chi Tiet</Text>
                </Pressable> 

           
          </View>
        );
      })}
    </view>
  );
};

export default Screen_1;

const styles = StyleSheet.create({});