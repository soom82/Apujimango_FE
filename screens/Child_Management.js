import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";

export const Child_Management = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 40,
          marginLeft: 10,
          //   textAlign: "center",
        }}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={{ width: 20, height: 20 }}
          source={require("../assets/lessthan_image.png")}
        />
        <Text
          style={{
            fontSize: 15,
            color: "#818181",
            // paddingBottom: "10%",
            // paddingTop: 2,
          }}
        >
          {" "}
          홈
        </Text>
      </TouchableOpacity>
      <View
        style={{
          marginTop: 30,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: 65,
            height: 30,
            marginLeft: 20,
            marginBottom: 5,
            borderRadius: 30,
            backgroundColor: "#ffb9576e",
            alignItems: "center",
            // elevation: 1,
          }}
        >
          <Text
            style={{
              marginLeft: 2,
              fontSize: 15,
            }}
          >
            {" "}
            👶🏻
          </Text>
          <Text
            style={{
              fontSize: 10,
              fontWeight: "bold",
            }}
          >
            {" "}
            아이 1
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            width: 30,
            height: 30,
            marginLeft: 10,
            borderRadius: 30,
            backgroundColor: "#D5D5D540",
            // elevation: 1,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              marginLeft: 5,
              fontWeight: "bold",
              color: "#8CDCE2",
            }}
          >
            {" "}
            +
          </Text>
        </View>
      </View>

      <View
        style={{
          position: "absolute",
          top: 150,
          bottom: 400,
          left: 110,
          right: 110,
          borderRadius: 600,
          backgroundColor: "#FFE1B7",
        }}
      ></View>
      <View style={{ alignItems: "center" }}>
        <Image
          style={{ marginTop: 40, width: 160, height: 160, borderRadius: 100 }}
          source={require("../assets/picture.png")}
        />
      </View>

      {/* <View
        style={{
          position: "absolute",
          top: 322,
          bottom: 430,
          left: 152,
          right: 152,
          backgroundColor: "#8CDCE2",
        }}
      ></View> */}
      {/* <View
        style={{
          position: "absolute",
          top: 329,
          bottom: 410,
          left: 152,
          right: 152,
          backgroundColor: "white",
        }}
      ></View> */}
      <Text
        style={{
          marginTop: 10,
          fontSize: 20,
          fontWeight: "bold",
          alignSelf: "center",
        }}
      >
        김꾸꾸
      </Text>

      <View
        style={{
          width: "80%",
          marginTop: 15,
          borderColor: "#DEDEDE",
          borderWidth: 0.3,
          alignSelf: "center",
        }}
      />

      <View
        style={{
          marginTop: 5,
          alignSelf: "center",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            // marginLeft: 15,
            fontWeight: "bold",
            fontSize: 12,
          }}
        >
          2008.02.13 {"\n"} &nbsp;&nbsp; (만 6세)
        </Text>
        <View
          style={{
            marginLeft: 20,
            marginRight: 20,
            width: 0.7,
            height: 60,
            backgroundColor: "#CDCDCD",
            borderRadius: 40,
          }}
        ></View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 12,
          }}
        >
          키 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 125 cm{"\n"}
          몸무게 &nbsp;&nbsp;&nbsp; 14 kg
        </Text>
      </View>

      <ScrollView>
        <View
          style={{
            marginTop: 20,
            marginLeft: 40,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              marginTop: 2,
              width: 5,
              height: 15,
              backgroundColor: "#FBB144",
            }}
          />
          <Text style={{ fontWeight: "bold", fontSize: 13, color: "#646464" }}>
            {" "}
            진료 기록{" "}
          </Text>
          <Image
            style={{
              marginLeft: 3,
              width: 10,
              height: 10,
            }}
            source={require("../assets/Edit.png")}
          />
        </View>

        <View
          style={{
            alignItems: "center",
            marginTop: 10,
            marginLeft: 40,
            flexDirection: "row",
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 11,
                fontWeight: "bold",
                marginLeft: 10,
              }}
            >
              • 아동 구내염
            </Text>
          </View>
          <View
            style={{
              width: 150,
              borderColor: "#ABABAB",
              marginLeft: 5,
              borderWidth: 0.3,
            }}
          />
          <Text
            style={{
              fontSize: 9,
              color: "#727272",
              marginLeft: 5,
            }}
          >
            2023.08.10 진료
          </Text>
        </View>

        <View
          style={{
            width: "80%",
            marginTop: 15,
            borderColor: "#CDCDCD",
            marginLeft: 40,
            borderWidth: 0.3,
          }}
        />

        <View
          style={{
            marginTop: 15,
            marginLeft: 40,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              marginTop: 2,
              width: 5,
              height: 15,
              backgroundColor: "#FBB144",
            }}
          />
          <Text style={{ fontWeight: "bold", fontSize: 13, color: "#646464" }}>
            {" "}
            예방 접종{" "}
          </Text>
          <Image
            style={{
              marginLeft: 3,
              width: 10,
              height: 10,
            }}
            source={require("../assets/Edit.png")}
          />
        </View>

        <View
          style={{
            alignItems: "center",
            marginTop: 10,
            marginLeft: 40,
            flexDirection: "row",
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 11,
                fontWeight: "bold",
                marginLeft: 10,
              }}
            >
              • 독감 예방 접종
            </Text>
          </View>
          <View
            style={{
              width: 150,
              borderColor: "#ABABAB",
              marginLeft: 5,
              borderWidth: 0.3,
            }}
          />
          <Text
            style={{
              fontSize: 9,
              color: "#727272",
              marginLeft: 5,
            }}
          >
            2022.12.10 완료
          </Text>
        </View>

        <View
          style={{
            width: "80%",
            marginTop: 15,
            borderColor: "#CDCDCD",
            marginLeft: 40,
            borderWidth: 0.3,
          }}
        />

        <View
          style={{
            marginTop: 15,
            marginLeft: 40,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              marginTop: 2,
              width: 5,
              height: 15,
              backgroundColor: "#FBB144",
            }}
          />
          <Text style={{ fontWeight: "bold", fontSize: 13, color: "#646464" }}>
            {" "}
            특이 사항{" "}
          </Text>
          <Image
            style={{
              marginLeft: 3,
              width: 10,
              height: 10,
            }}
            source={require("../assets/Edit.png")}
          />
        </View>

        <View style={{ marginTop: 10, marginLeft: 40, marginRight: 40 }}>
          <Text style={{ marginLeft: 10, fontSize: 10, color: "#4C4C4C" }}>
            5살 때 인플루엔자균 뇌수막염에 의한 소아뇌전증 합병증을 겪어 2달 전
            완치하였음. 다만, 재발 가능성을 염두하여 1세대 항히스타민제의 섭취를
            피할 것을 의사 소견으로 받음.
          </Text>
        </View>

        <View
          style={{
            width: "80%",
            marginTop: 15,
            borderColor: "#CDCDCD",
            marginLeft: 40,
            borderWidth: 0.3,
          }}
        />

        <View
          style={{
            marginTop: 15,
            marginLeft: 40,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              marginTop: 2,
              width: 5,
              height: 15,
              backgroundColor: "#FBB144",
            }}
          />
          <Text style={{ fontWeight: "bold", fontSize: 13, color: "#646464" }}>
            {" "}
            알레르기{" "}
          </Text>
          <Image
            style={{
              marginLeft: 3,
              width: 10,
              height: 10,
            }}
            source={require("../assets/Edit.png")}
          />
        </View>

        <View
          style={{
            marginTop: 10,
            marginLeft: 40,
            flexDirection: "row",
          }}
        >
          <View style={{ marginLeft: 10, alignItems: "center" }}>
            <Image
              style={{ width: 50, height: 50, borderRadius: 10 }}
              source={require("../assets/food_egg.png")}
            />
          </View>
          <View style={{ marginLeft: 10, alignItems: "center" }}>
            <Image
              style={{ width: 50, height: 50, borderRadius: 10 }}
              source={require("../assets/milk.png")}
            />
          </View>
          <View
            style={{ marginLeft: 10, marginBottom: 15, alignItems: "center" }}
          >
            <View
              style={{
                width: 43,
                height: 43,
                borderRadius: 10,
                backgroundColor: "#89D4DABA",
              }}
            >
              <Text
                style={{
                  marginLeft: 13,
                  marginTop: 10,
                  fontSize: 15,
                  color: "white",
                  elevation: 3,
                }}
              >
                {" "}
                +
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Child_Management;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: "26%",
    backgroundColor: "#f6f6f6",
  },
  text: {
    color: "#616161",
    fontSize: 10, // 폰트 크기 설정
    textAlign: "center",
    // margin: 5,
    // borderWidth: 1,
  },
});
