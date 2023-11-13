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

export default function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <View style={styles.container}>
      <View
        style={{
          paddingHorizontal: "3%",
          paddingTop: "2%",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("app2.js")}>
          <Image
            style={{ width: 20, height: 20 }}
            source={require("./assets/lessthan_image.png")}
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
      </View>
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
          placeholder="만성기침"
          placeholderTextColor={"black"}
          style={{ fontSize: 14, color: "black" }}
          containerStyle={styles.searchBarContainer}
          inputContainerStyle={styles.searchBarInputContainer}
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
        />
      </View>

      <ScrollView style={{ height: 1000, borderRadius: 50, elevation: 10 }}>
        <View
          style={{
            width: "100%",
            height: 900,
            borderWidth: 1,
            elevation: 10,
            borderColor: "#FDFDFF",
            borderTopStartRadius: 50,
            borderTopEndRadius: 50,
            backgroundColor: "#FFFFFF",
          }}
        >
          <View
            style={{
              width: 50,
              marginTop: 20,
              marginHorizontal: "45%",
              borderRadius: 10,
              borderWidth: 2,
              borderColor: "#F1F1F1",
            }}
          />

          <Text
            style={{
              marginHorizontal: 40,
              marginTop: 40,
              marginBottom: 10,
              alignItems: "flex-start",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            {" "}
            기침 ( Cough ){" "}
          </Text>
          <View style={{ flexDirection: "row", marginHorizontal: "10%" }}>
            <View
              style={{
                alignItems: "center",
                marginHorizontal: 5,
                width: "22%",
                height: 24,
                paddingVertical: 2,
                borderRadius: 50,
                backgroundColor: "#E1F4F5",
              }}
            >
              <Text
                style={{ paddingVertical: 2, fontSize: 12, color: "#48D1CC" }}
              >
                만성 기침
              </Text>
            </View>
            <View
              style={{
                alignItems: "center",
                marginHorizontal: 5,
                width: "22%",
                height: 24,
                paddingVertical: 2,
                borderRadius: 50,
                backgroundColor: "#E1F4F5",
              }}
            >
              <Text
                style={{ paddingVertical: 2, fontSize: 12, color: "#48D1CC" }}
              >
                건조 기침
              </Text>
            </View>
            <View
              style={{
                alignItems: "center",
                marginHorizontal: 5,
                width: "22%",
                height: 24,
                paddingVertical: 2,
                borderRadius: 50,
                backgroundColor: "#E1F4F5",
              }}
            >
              <Text
                style={{ paddingVertical: 2, fontSize: 12, color: "#48D1CC" }}
              >
                가래 기침
              </Text>
            </View>
            <View
              style={{
                alignItems: "center",
                marginHorizontal: 5,
                width: "22%",
                height: 24,
                paddingVertical: 2,
                borderRadius: 50,
                backgroundColor: "#E1F4F5",
              }}
            >
              <Text
                style={{ paddingVertical: 2, fontSize: 12, color: "#48D1CC" }}
              >
                밤 기침
              </Text>
            </View>
          </View>

          <View style={{ alignItems: "center", marginVertical: 10 }}>
            <Image source={require("./assets/page2_image.png")} />
          </View>

          <Text
            style={{ marginVertical: 3, marginLeft: 40, fontWeight: "bold" }}
          >
            {" "}
            정의{" "}
          </Text>
          <Text
            style={{ marginVertical: 3, marginHorizontal: 50, fontSize: 12 }}
          >
            목에 이물질이나 분비물 등이 걸렸을 때 숨을 쉴 수 있게 걸린 물질을
            밖으로 빼도록 하는 동작이에요.
          </Text>

          <View
            style={{
              width: "80%",
              borderColor: "#D3D3D3",
              marginVertical: 5,
              marginLeft: 40,
              borderWidth: 0.3,
            }}
          />

          <Text
            style={{ marginVertical: 3, marginLeft: 40, fontWeight: "bold" }}
          >
            {" "}
            원인{" "}
          </Text>
          <Text
            style={{ marginVertical: 3, marginHorizontal: 50, fontSize: 12 }}
          >
            기도에 이물질이 걸리는 상황은 다양하기 때문에 원인 역시 다양해요.{" "}
            {"\n"}
            {"\n"}- 역류성 식도염 등 위에 분비물에 의한 기침 {"\n"}- 편도염,
            인후염 등 목의 염증에 의한 기침 {"\n"}- 비염, 후비루 등 콧물에 의한
            기침 {"\n"}- 외부 이물질의 기도 흡인에 의한 기침 {"\n"}
          </Text>

          <View
            style={{
              width: "80%",
              borderColor: "#D3D3D3",
              marginLeft: 40,
              borderWidth: 0.3,
            }}
          />

          <Text
            style={{ marginVertical: 5, marginLeft: 40, fontWeight: "bold" }}
          >
            {" "}
            증상{" "}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "10%",
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
    height: 40,
    fontSize: 12, // 폰트 크기 설정
  },
});
