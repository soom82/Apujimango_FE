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

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            position: "absolute",
            top: 50,
            bottom: -50,
            left: 0,
            right: "75%",
            borderColor: "#FDFDFF",
            borderTopStartRadius: 20,
            borderTopEndRadius: 20,
            backgroundColor: "#F4F4F4",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("App");
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 13,
                paddingLeft: 15,
                paddingTop: 15,
                color: "#959595",
              }}
            >
              {" "}
              약성분 분석{" "}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "25%",
            height: 40,
            marginTop: 50,
            marginLeft: "25%",
            borderColor: "#FDFDFF",
            borderTopStartRadius: 20,
            borderTopEndRadius: 20,
            backgroundColor: "#FAA629",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("App");
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 13,
                paddingLeft: 20,
                paddingTop: 15,
                color: "#FFFFFF",
              }}
            >
              {" "}
              음식 분석{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ borderRadius: 50 }}>
        <View
          style={{
            width: "100%",
            height: 610,
            borderWidth: 1,
            elevation: 10,
            borderColor: "#FDFDFF",
            borderTopStartRadius: 50,
            borderTopEndRadius: 50,
            backgroundColor: "#FFFFFF",
          }}
        >
          <Text
            style={{
              marginHorizontal: "27%",
              color: "#858585",
              marginVertical: 30,
              marginBottom: 5,
              fontSize: 12,
            }}
          >
            2023/ 10/ 16 월요일 제조받았어요!{" "}
          </Text>
          <Text
            style={{
              marginHorizontal: "20%",
              color: "black",
              marginBottom: 10,
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            우리 아이1의 레포트 분석 결과예요.{" "}
          </Text>

          <ScrollView style={{ height: 1000 }}>
            <View
              style={{
                flexDirection: "row",
                marginLeft: "10%",
                marginTop: 20,
                width: "80%",
                height: 35,
                backgroundColor: "#ECF8F9",
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  paddingVertical: 6,
                  paddingLeft: 30,
                  paddingRight: 1,
                  fontSize: 15,
                }}
              >
                {" "}
                🤧
              </Text>
              <Text
                style={{
                  paddingVertical: 5,
                  alignSelf: "center",
                  paddingLeft: 10,
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                [감기] 콧물 증상이 있어요.
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginLeft: "10%",
                marginTop: 10,
                width: "80%",
                height: 35,
                backgroundColor: "#ECF8F9",
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  paddingVertical: 6,
                  paddingLeft: 30,
                  paddingRight: 1,
                  fontSize: 15,
                }}
              >
                {" "}
                🤒
              </Text>
              <Text
                style={{
                  paddingVertical: 5,
                  alignSelf: "center",
                  paddingLeft: 10,
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                [감기] 미열이 있어요.
              </Text>
            </View>

            <View
              style={{
                width: "80%",
                marginBottom: 30,
                marginTop: 30,
                borderColor: "#D3D3D3",
                marginLeft: 40,
                borderWidth: 0.3,
              }}
            />

            <Text
              style={{ alignSelf: "center", fontWeight: "bold", fontSize: 18 }}
            >
              이런 음식들을 조심해주세요.{" "}
            </Text>

            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                marginLeft: "10%",
                marginTop: 10,
                width: "80%",
                height: 80,
                backgroundColor: "#ffeacc",
                borderRadius: 15,
              }}
            >
              <Text style={{ paddingLeft: 20, fontSize: 50 }}> 🤒</Text>
              <Text style={{ paddingLeft: 20, fontSize: 50 }}> 🤒</Text>
              <Text style={{ paddingLeft: 20, fontSize: 50 }}> 🤒</Text>
            </View>

            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                marginLeft: "10%",
                marginTop: 10,
                width: "80%",
                height: 80,
                backgroundColor: "#e0d1ff",
                borderRadius: 15,
              }}
            >
              <Text style={{ paddingLeft: 20, fontSize: 50 }}> 🤒</Text>
              <Text style={{ paddingLeft: 20, fontSize: 50 }}> 🤒</Text>
              <Text style={{ paddingLeft: 20, fontSize: 50 }}> 🤒</Text>
            </View>

            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                marginLeft: "10%",
                marginTop: 10,
                width: "80%",
                height: 80,
                backgroundColor: "#d1ebbc",
                borderRadius: 15,
              }}
            >
              <Text style={{ paddingLeft: 20, fontSize: 50 }}> 🤒</Text>
              <Text style={{ paddingLeft: 20, fontSize: 50 }}> 🤒</Text>
              <Text style={{ paddingLeft: 20, fontSize: 50 }}> 🤒</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: "#A1E6EB",
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
