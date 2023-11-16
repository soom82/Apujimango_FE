import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SearchBar } from "react-native-elements";

export const Disease_Encyclopedia2 = ({}) => {
  const [search, setSearch] = useState("만성기침");

  const updateSearch = (search) => {
    setSearch(search);
  };

  return (
    <View style={styles.container}>
      {/* <View
        style={{
          paddingHorizontal: "3%",
          paddingTop: "2%",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("app2.js")}>
          <Image
            style={{ width: 20, height: 20 }}
            source={require("../assets/lessthan_image.png")}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 10,
            color: "gray",
            paddingBottom: "10%",
            paddingTop: 2,
          }}
        >
          {" "}
          이전
        </Text>
      </View> */}

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
        style={{ fontSize: 12, color: "black" }}
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.searchBarInputContainer}
        onChangeText={updateSearch}
        value={search}
      />

      <ScrollView>
        <View
          style={{
            height: 700,
            elevation: 20,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: "#FFFFFF",
          }}
        >
          <View
            style={{
              width: 50,
              marginTop: 20,
              borderRadius: 10,
              borderWidth: 2,
              borderColor: "#ECECEC",
              alignSelf: "center",
            }}
          />

          <Text
            style={{
              marginTop: 40,
              marginLeft: 40,
              //   alignItems: "flex-start",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            {" "}
            기침 ( Cough ){" "}
          </Text>

          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                width: 60,
                height: 25,
                marginLeft: 40,
                borderRadius: 30,
                backgroundColor: "#E1F4F5",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 12, color: "#8CDCE2", padding: 2 }}>
                만성 기침
              </Text>
            </View>

            <View
              style={{
                width: 60,
                height: 25,
                marginLeft: 10,
                borderRadius: 30,
                backgroundColor: "#E1F4F5",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 12, color: "#8CDCE2", padding: 2 }}>
                건조 기침
              </Text>
            </View>

            <View
              style={{
                width: 60,
                height: 25,
                marginLeft: 10,
                borderRadius: 30,
                backgroundColor: "#E1F4F5",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 12, color: "#8CDCE2", padding: 2 }}>
                가래 기침
              </Text>
            </View>

            <View
              style={{
                width: 60,
                height: 25,
                marginLeft: 10,
                borderRadius: 30,
                backgroundColor: "#E1F4F5",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 12, color: "#8CDCE2", padding: 2 }}>
                밤 기침
              </Text>
            </View>
          </View>

          <View style={{ alignItems: "center", marginTop: 20 }}>
            <Image source={require("../assets/page2_image.png")} />
          </View>

          <Text style={{ marginTop: 10, marginLeft: 40, fontWeight: "bold" }}>
            {" "}
            정의{" "}
          </Text>
          <Text style={{ marginTop: 5, marginHorizontal: 50, fontSize: 12 }}>
            목에 이물질이나 분비물 등이 걸렸을 때 숨을 쉴 수 있게 걸린 물질을
            밖으로 빼도록 하는 동작이에요.
          </Text>

          <View
            style={{
              width: "80%",
              borderColor: "#A5A5A5",
              opacity: 0.5,
              marginTop: 10,
              marginLeft: 40,
              borderWidth: 0.3,
            }}
          />

          <Text style={{ marginTop: 10, marginLeft: 40, fontWeight: "bold" }}>
            {" "}
            원인{" "}
          </Text>
          <Text style={{ marginTop: 5, marginHorizontal: 50, fontSize: 12 }}>
            기도에 이물질이 걸리는 상황은 다양하기 때문에 원인 역시 다양해요.{" "}
            {"\n"}
            {"\n"}- 역류성 식도염 등 위에 분비물에 의한 기침 {"\n"}- 편도염,
            인후염 등 목의 염증에 의한 기침 {"\n"}- 비염, 후비루 등 콧물에 의한
            기침 {"\n"}- 외부 이물질의 기도 흡인에 의한 기침
          </Text>

          <View
            style={{
              width: "80%",
              borderColor: "#A5A5A5",
              opacity: 0.5,
              marginTop: 10,
              marginLeft: 40,
              borderWidth: 0.3,
            }}
          />

          <Text style={{ marginTop: 10, marginLeft: 40, fontWeight: "bold" }}>
            {" "}
            증상{" "}
          </Text>
          <Text style={{ marginTop: 5, marginHorizontal: 50, fontSize: 12 }}>
            후비루 증후군은 만성 기침을 유발하는 대표적인 원인이예요. 이
            증후군으로 인해 콧물이 뒤로 넘어가 목을 자극하면서 기침을 유발하는
            증상이 나타나요.{"\n"}
            {"\n"}주로 밤에 자리에 누웠을 때 증상이 심해집니다. 코 뒷부분과 목
            뒷부분이 연결되는 부위에 이물감이 느껴지며, 코가 막혀 숨을
            몰아쉬기도 해요.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Disease_Encyclopedia2;

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
