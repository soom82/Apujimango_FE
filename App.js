// Paste files to run
// report_medicine.js

import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { SearchBar } from "react-native-elements";
import { Table, Row, Rows } from "react-native-table-component";

export default function Encyclpedia_HomeScreen({ navigation }) {
  const [search, setSearch] = useState("");

  const tableData = {
    tableHead: ["Head", "Head2", "Head3", "Head4", "Head5"],
    tableData: [
      ["감염성질환", "건강증진", "귀코목질환", "근골격질환", "눈질환"],
      ["뇌신경정신질환", "성형미용 및 재건", "소아청소년질환", "순환기질환"],
      ["신장비뇨기질환", "여성질환", "유방내분비질환", "유전질환", "응급질환"],
      ["종양혈액질환", "치과질환", "피부질환", "호흡기질환", "기타"],
    ],
  };

  const updateSearch = (search) => {
    setSearch(search);
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          paddingHorizontal: "8%",
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "left",
        }}
      >
        질환 백과
      </Text>
      <View style={{ width: 400, alignItems: "center" }}>
        <SearchBar
          placeholder="키워드를 입력하세요."
          style={{ fontSize: 14, color: "black" }}
          containerStyle={styles.searchBarContainer}
          inputContainerStyle={styles.searchBarInputContainer}
          onChangeText={updateSearch}
          value={search}
        />
      </View>

      <Button title="이동" onPress={() => navigation.navigate("Detail")} />

      <View
        style={{
          width: "90%",
          borderWidth: 1,
          elevation: 10,
          marginTop: 20,
          borderColor: "#FDFDFF",
          borderRadius: 30,
          marginHorizontal: "6%",
          alignItems: "center",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Text
          style={{
            fontSize: 15,
            fontWeight: "normal",
            marginHorizontal: 10,
            marginTop: 15,
            color: "#48D1CC",
            textAlign: "center",
          }}
        >
          질환별
        </Text>
        <View
          style={{
            width: "90%",
            borderColor: "#D3D3D3",
            borderWidth: 0.3,
            marginVertical: 15,
          }}
        />

        <Table>
          <Rows
            data={tableData.tableData}
            textStyle={styles.text}
            widthArr={[90, 90, 90, 90]}
          />
        </Table>
      </View>

      <Text
        style={{
          fontSize: 10,
          color: "gray",
          marginVertical: 15,
          marginLeft: 40,
        }}
      >
        *서울아산병원 질환 백과를 바탕으로 정보를 제공합니다.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "26%",
    backgroundColor: "#f6f6f6",
  },
  searchBarContainer: {
    backgroundColor: "transparent",
    borderWidth: 0,
    borderBottomWidth: 0,
    borderTopWidth: 0,
    borderRadius: 20,
    width: "90%",
    height: 65,
  },
  searchBarInputContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    borderColor: "gray",
    elevation: 10,
    width: "100%",
    height: 35,
    marginVertical: 10,
  },

  text: {
    color: "#696969",
    height: 40,
    fontSize: 12, // 폰트 크기 설정
    textAlign: "center",
  },
});

/* <Button 
    title ="이동"
    onPress={()=> navigation.navigate('DetailScreen')}/>
<Text style={{paddingTop:25}}>이동</Text> 
*/
