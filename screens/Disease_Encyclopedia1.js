import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import { SearchBar } from "react-native-elements";
import { Table, Row, Rows } from "react-native-table-component";

export const Disease_Encyclopedia1 = ({ navigation }) => {
  const [search, setSearch] = useState("");

  const tableData = {
    tableHead: ["Head", "Head2", "Head3", "Head4", "Head5"],
    tableData: [
      ["감염성질환", "건강증진", "귀코목질환", "근골격질환"],
      ["뇌신경정신질환", "소화기질환", "순환기질환", "소아청소년질환"],
      ["신장비뇨기질환", "여성질환", "유전질환", "응급질환"],
      ["종양혈액질환", "치과질환", "피부질환", "호흡기질환"],
    ],
  };

  const updateSearch = (search) => {
    setSearch(search);
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          marginLeft: 35,
          marginTop: 100,
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        질환 백과
      </Text>

      <SearchBar
        placeholder="키워드를 입력하세요."
        style={{ fontSize: 12, color: "black" }}
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.searchBarInputContainer}
        onChangeText={updateSearch}
        value={search}
        onSubmitEditing={() => {
          navigation.navigate("질환백과2");
        }}
      />

      <View
        style={{
          // width: "90%",
          borderWidth: 1,
          elevation: 10,
          marginTop: 7,
          marginHorizontal: 35,
          borderColor: "#FDFDFF",
          borderRadius: 18,
          alignItems: "center",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            marginVertical: 10,
            // marginHorizontal: 10,
            // marginTop: 15,
            color: "#8CDCE2",
            // textAlign: "center",
          }}
        >
          질환별
        </Text>
        <View
          style={{
            width: "90%",
            borderColor: "#D3D3D3",
            borderWidth: 0.3,
            // marginVertical: 15,
          }}
        />

        <Table>
          <Rows
            data={tableData.tableData}
            style={{
              height: 38,
            }}
            textStyle={styles.text}
            widthArr={[75, 75, 75, 75]}
          />
        </Table>
      </View>

      <Text
        style={{
          fontSize: 10,
          color: "#999999",
          // marginVertical: 15,
          paddingLeft: 40,
          paddingTop: 10,
        }}
      >
        * 서울아산병원 질환 백과를 바탕으로 정보를 제공합니다.
      </Text>
    </View>
  );
};

export default Disease_Encyclopedia1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: "26%",
    backgroundColor: "#f6f6f6",
  },
  searchBarContainer: {
    backgroundColor: "transparent",
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderBottomWidth: 0,
    borderTopWidth: 0,
    height: 70,
    justifyContent: "center",
  },
  searchBarInputContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    borderColor: "gray",
    elevation: 5,
    height: 35,
  },

  text: {
    color: "#616161",
    fontSize: 10, // 폰트 크기 설정
    textAlign: "center",
    // margin: 5,
    // borderWidth: 1,
  },
});
