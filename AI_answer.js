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
        <Text
          style={{
            marginTop: 140,
            alignSelf: "center",
            fontSize: 16,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          **알레르기와 감기증상이 있는 아이에게는
        </Text>
        <Text style={{ fontSize: 13, fontWeight: "bold", marginLeft: 53 }}>
          <Text style={{ fontSize: 8 }}>{"\n"}</Text>
          1. 시럽약과 이온음료를 섞어서 복용 {"\n"}
          <Text style={{ fontSize: 5 }}>{"\n"}</Text>
          2. 묽은 과일 주스에 섞어서 복용{"\n"}
          <Text style={{ fontSize: 5 }}>{"\n"}</Text>
          3. 우유, 요거트와 같이 유제품류랑 절대 같이 복용 금지{"\n"}
          <Text style={{ fontSize: 5 }}>{"\n"}</Text>
          4. 약을 먹인 다음, 보상으로 아이게 사탕 주기{"\n"}
          <Text style={{ fontSize: 5 }}>{"\n"}</Text>
        </Text>

        <View style={{ alignItems: "center" }}>
          <Image
            source={require("./assets/heart_cat.png")}
            style={{ width: 165, height: 195, marginTop: -8 }}
          />
        </View>

        <Text
          style={{
            marginTop: 23,
            marginBottom: 85,
            fontSize: 14,
            textAlign: "center",
            color: "#9A9A9A",
          }}
        >
          더 궁금한 점이 있다면, 물어보세요 !
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
});
