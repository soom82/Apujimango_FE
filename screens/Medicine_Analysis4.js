import React, { useState, useEffect, useCallback } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import * as SplashScreen from "expo-splash-screen";

export const Medicine_Analysis4 = ({ navigation }) => {
  return (
    <View
      style={{
        backgroundColor: "#000000A1",
        height: 730,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          width: 330,
          height: 160,
          backgroundColor: "#FFFFFF",
          borderRadius: 25,
        }}
      >
        <View
          style={{
            width: 330,
            height: 40,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            backgroundColor: "#FAA629",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              color: "#FFFFFF",
            }}
          >
            알림
          </Text>
        </View>

        <View
          style={{
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
            }}
          >
            해당 분석 리포트는
          </Text>
          <View
            style={{
              marginTop: 3,
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "bold",
                color: "#62CED6",
              }}
            >
              [홈 -&nbsp;
            </Text>
            <Image
              source={require("../assets/colorbell.png")}
              style={{ marginTop: 5, width: 11, height: 13 }}
            />
            <Text
              style={{
                fontSize: 14,
                fontWeight: "bold",
                color: "#62CED6",
              }}
            >
              알림]
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              에서 다시 볼 수 있어요.
            </Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("약 분석")}>
            <View
              style={{
                marginTop: 15,
                width: 43,
                height: 24,
                backgroundColor: "#FFB957",
                borderRadius: 20,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  marginTop: 3,
                  fontSize: 12,
                  fontWeight: "bold",
                  color: "#FFFFFF",
                }}
              >
                네!
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Medicine_Analysis4;
