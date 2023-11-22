//Cau 2

// import { StyleSheet, Text, View } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import React, { useEffect, useState } from "react";
// import Master from "./Screen_1";

// const stack = createNativeStackNavigator();
// export default function App() {
//   return (
//     <NavigationContainer>
//       <stack.Navigator
//         initialRouteName="Master"
//         screenOptions={{ headerShown: false }}
//       >
//         <stack.Screen name="Master" component={Master} />
//       </stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width: 360,
//     height: 640,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

//Cau 3

// import React from 'react';
// import { Provider } from 'react-redux';
// import { store } from './src/app/store';
// import JobList from './src/components/JobList';
// import { Text, SafeAreaView } from 'react-native';

// function App() {
//   return (
//     <Provider store={store}>
//       <SafeAreaView style ={{alignItems: "center"}}>
//         <Text style={{fontSize:20,fontWeight:700,marginLeft:10,color:'red'}}>Nhap Nhung Gi Ban Muon</Text>
//         <JobList />
//       </SafeAreaView>
//     </Provider>
//   );
// }

// export default App;


// cau 1
import { Provider } from 'react-redux';
import store from './redux/store';
import Screen1 from './Screen1';

export default function App() {

  return (
    <Provider store={store}>
      <Screen1/>
    </Provider>
  )
}


