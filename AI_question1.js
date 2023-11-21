// Paste files to run
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import { SearchBar } from "react-native-elements";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <View
          style={{
            alignItems: "center",
            marginTop: 88,
            marginHorizontal: 60,
            height: 32,
            paddingVertical: 2,
            borderRadius: 50,
            backgroundColor: "#FDB446",
            elevation: 10,
          }}
        >
          <Text
            style={{
              paddingVertical: 7,
              paddingHorizontal: 8,
              fontSize: 12.5,
              fontWeight: "bold",
              color: "white",
            }}
          >
            ❓ &nbsp;감기 시럽약은 어떻게 먹이는 게 좋을까?
          </Text>
        </View>
        <Text
          style={{
            marginTop: 20,
            alignSelf: "center",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          어떤 시럽약이냥? {"\n"}
          <Text style={{ color: "#F49C1A" }}>
            &nbsp;&nbsp;&nbsp;모든 유효성분
          </Text>
          &nbsp; or &nbsp;
          <Text style={{ color: "#F49C1A" }}>의약품명(제약회사) {"\n"}</Text>
          말해줘냥!
        </Text>

        <View style={{ alignItems: "center" }}>
          <Image
            source={require("./assets/question_cat.png")}
            style={{ width: 181, height: 220, marginTop: 35 }}
          />
        </View>

        <Text
          style={{
            marginTop: 20,
            marginBottom: 85,
            fontSize: 14,
            textAlign: "center",
            color: "#9A9A9A",
          }}
        >
          채팅창에 입력해주세요.
        </Text>
      </View>

      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View
            style={{
              flexDirection: "row",
              marginLeft: 15,
              marginTop: 20,
              marginBottom: 20,
              height: 30,
            }}
          >
            <TouchableOpacity>
              <View
                style={{
                  alignItems: "center",
                  marginHorizontal: 5,
                  height: 24,
                  paddingVertical: 2,
                  borderRadius: 50,
                  backgroundColor: "#FAA629",
                }}
              >
                <Text
                  style={{
                    paddingVertical: 3,
                    paddingHorizontal: 8,
                    fontSize: 10,
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  ❓ 감기 시럽약은 어떻게 먹이는 게 좋을까?
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  alignItems: "center",
                  marginHorizontal: 8,
                  height: 24,
                  paddingVertical: 3,
                  borderRadius: 50,
                  backgroundColor: "#DFDFDF",
                }}
              >
                <Text
                  style={{
                    paddingVertical: 2,
                    paddingHorizontal: 8,
                    fontSize: 10,
                    fontWeight: "bold",
                    color: "#515151",
                  }}
                >
                  ❓ 아이가 탕후루를 너무 많이 먹어요
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <View style={{ elevation: 100 }}>
        <View
          style={{
            width: "100%",
            height: 85,
            backgroundColor: "#F6F6F6",
            elevation: 40,
            flexDirection: "row",
          }}
        >
          <Image
            source={require("./assets/plus.png")}
            style={{ width: 18, height: 18, marginLeft: 10, marginTop: 15 }}
          />

          <TextInput
            placeholder="입력하세요."
            placeholderTextColor={"#BCBCBC"}
            style={{
              color: "black",
              fontSize: 13,
              marginLeft: 15,
              marginTop: -35,
            }}
          />

          <TouchableOpacity>
            <Image
              source={require("./assets/send.png")}
              style={{
                width: 30,
                height: 30,
                marginLeft: 240,
                marginTop: 8,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "10%",
    backgroundColor: "#F6F6F6",
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
