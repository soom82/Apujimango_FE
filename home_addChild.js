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

export default function App() {
  // const [record, setRecord] = useState("• 아동 구내염");
  const [record, setRecord] = useState("");

  return (
    <View style={styles.container}>
      <View
        style={{
          paddingHorizontal: "3%",
          paddingTop: "1%",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("app2.js")}>
          <Image
            style={{ width: 10, height: 16 }}
            source={require("./assets/Vectorlessthan2.png")}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 10,
            color: "gray",
            paddingBottom: "10%",
            paddingTop: 2,
            paddingLeft: 3,
          }}
        >
          {" "}
          홈
        </Text>
      </View>

      <View
        style={{
          width: "100%",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("app2.js")}>
          <View
            style={{
              flexDirection: "row",
              width: 50,
              marginLeft: 20,
              marginBottom: 5,
              height: 27,
              borderRadius: 40,
              backgroundColor: "#E6E6E6",
              elevation: 3,
            }}
          >
            <Text
              style={{
                paddingTop: 5,
                fontSize: 12,
              }}
            >
              {" "}
              👶🏻
            </Text>
            <Text
              style={{
                paddingTop: 8,
                fontSize: 8,
                fontWeight: "bold",
              }}
            >
              {" "}
              아이 1
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("app2.js")}>
          <View
            style={{
              flexDirection: "row",
              width: 50,
              marginLeft: 10,
              marginBottom: 5,
              height: 27,
              borderRadius: 40,
              backgroundColor: "#ffeacc",
              elevation: 3,
            }}
          >
            <Text
              style={{
                paddingTop: 5,
                fontSize: 12,
              }}
            >
              {" "}
              👶🏻
            </Text>
            <Text
              style={{
                paddingTop: 8,
                fontSize: 8,
                fontWeight: "bold",
              }}
            >
              {" "}
              아이 2
            </Text>
          </View>
        </TouchableOpacity>

        {/* 클릭시 새로운 아이 페이지 생성  */}
        <TouchableOpacity onPress={() => navigation.navigate("app2.js")}>
          <View
            style={{
              flexDirection: "row",
              width: 30,
              marginLeft: 10,
              marginBottom: 5,
              height: 27,
              borderRadius: 40,
              backgroundColor: "#F1F1F1",
              elevation: 3,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                marginHorizontal: 4,
                fontWeight: "bold",
                alignSelf: "center",
                color: "#8CDCE2",
              }}
            >
              {" "}
              +
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          position: "absolute",
          top: 165,
          bottom: 540,
          left: 108,
          right: 108,
          borderColor: "#FDFDFF",
          borderTopStartRadius: 100,
          borderTopEndRadius: 100,
          backgroundColor: "#FFE1B7",
        }}
      ></View>
      <View style={{ alignItems: "center" }}>
        <Image
          style={{ marginTop: 26, width: 160, height: 160, borderRadius: 100 }}
          source={require("./assets/picture_subtitude.png")} // 사진
        />
      </View>
      <View
        style={{
          position: "absolute",
          top: 323,
          bottom: 477,
          left: 152,
          right: 152,
          backgroundColor: "#8CDCE2",
        }}
      ></View>

      <Text
        style={{
          alignSelf: "center",
          fontSize: 15,
          marginTop: 15,
          color: "#AEAEAE",
        }}
      >
        이름입력
      </Text>

      <View
        style={{
          alignSelf: "center",
          width: "80%",
          marginBottom: 8,
          marginTop: 15,
          borderColor: "#D3D3D3",
          borderWidth: 0.3,
        }}
      />

      <View style={{ alignSelf: "center", flexDirection: "row" }}>
        <Text
          style={{
            marginTop: 10,
            marginLeft: 15,
            fontWeight: "bold",
            fontSize: 12,
            color: "#AEAEAE",
          }}
        >
          0000.00.00 {"\n"} &nbsp;&nbsp; (만 0세)
        </Text>
        <View
          style={{
            marginBottom: 10,
            marginLeft: 25,
            marginRight: 25,
            width: 0.7,
            height: 50,
            backgroundColor: "#D3D3D3",
            borderRadius: 40,
          }}
        ></View>
        <Text
          style={{
            marginTop: 10,

            fontSize: 12,
          }}
        >
          키 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          {/*125 cm*/}
          <Text style={{ color: "#AEAEAE", fontSize: 17.5 }}>------</Text>
          {"\n"}
          몸무게 &nbsp;&nbsp; {/*14 kg*/}
          <Text style={{ color: "#AEAEAE", fontSize: 18 }}>------</Text>
        </Text>
      </View>

      <ScrollView style={{ height: 500 }}>
        <View style={{ marginLeft: "5%", flexDirection: "row" }}>
          <View
            style={{
              marginTop: 20,
              marginBottom: 10,
              marginLeft: 20,
              width: 5,
              height: 14,
              backgroundColor: "#FBB144",
            }}
          ></View>
          <Text style={{ marginTop: 20, fontWeight: "bold", fontSize: 12 }}>
            {" "}
            진료 기록{" "}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("app2.js")}>
            <Image
              style={{
                marginTop: 23,
                width: 10,
                height: 10,
              }}
              source={require("./assets/Edit.png")}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 1,
            alignItems: "center",
            marginLeft: "5%",
            flexDirection: "row",
          }}
        >
          <SafeAreaView>
            <TextInput
              style={{
                marginLeft: 35,
                fontSize: 10,
                fontWeight: "bold",
              }}
              placeholderTextColor="#9a73ef"
              onChangeText={(text) => setRecord(text)}
              value={record}
            />
          </SafeAreaView>

          {/* 진료 내용
          <View
            style={{
              flex: 0.66,
              width: 280,
              marginVertical: 8,
              borderColor: "#D3D3D3",
              marginLeft: 5,
              borderWidth: 0.3,
            }}
          /> */}

          <Text
            style={{
              flex: 0.22,
              marginVertical: 3,
              fontSize: 8,
              color: "gray",
              marginLeft: 5,
              marginRight: 15,
            }}
          >
            {/* 진료 날짜 */}
          </Text>
        </View>

        <View
          style={{
            width: "80%",
            marginVertical: 8,
            borderColor: "#D3D3D3",
            marginLeft: 40,
            borderWidth: 0.3,
          }}
        />

        <View style={{ marginLeft: "5%", flexDirection: "row" }}>
          <View
            style={{
              marginTop: 6,
              marginBottom: 10,
              marginLeft: 20,
              width: 5,
              height: 14,
              backgroundColor: "#FBB144",
            }}
          ></View>

          <Text style={{ marginTop: 5, fontWeight: "bold", fontSize: 12 }}>
            {" "}
            예방 접종{" "}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("app2.js")}>
            <Image
              style={{
                marginTop: 8,
                width: 10,
                height: 10,
              }}
              source={require("./assets/Edit.png")}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            alignItems: "center",
            marginLeft: "5%",
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              marginVertical: 3,
              marginLeft: 35,
              fontSize: 10,
              fontWeight: "bold",
            }}
          >
            {/* 접종 종류 */}
          </Text>

          {/* 
          중간선
          <View
            style={{
              width: "42%",
              marginVertical: 8,
              borderColor: "#D3D3D3",
              marginLeft: 5,
              borderWidth: 0.3,
            }}
          /> */}

          <Text
            style={{
              marginVertical: 3,
              fontSize: 8,
              color: "gray",
              marginLeft: 5,
            }}
          >
            {/* 접종 날짜 */}
          </Text>
        </View>

        <View
          style={{
            width: "80%",
            marginVertical: 8,
            borderColor: "#D3D3D3",
            marginLeft: 40,
            borderWidth: 0.3,
          }}
        />

        <View style={{ marginLeft: "5%", flexDirection: "row" }}>
          <View
            style={{
              marginTop: 6,
              marginBottom: 10,
              marginLeft: 20,
              width: 5,
              height: 14,
              backgroundColor: "#FBB144",
            }}
          ></View>

          <Text style={{ marginTop: 5, fontWeight: "bold", fontSize: 12 }}>
            {" "}
            특이사항{" "}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("app2.js")}>
            <Image
              style={{
                marginTop: 8,
                width: 10,
                height: 10,
              }}
              source={require("./assets/Edit.png")}
            />
          </TouchableOpacity>
        </View>

        <View style={{ marginHorizontal: "12%" }}>
          <Text style={{ marginVertical: 3, fontSize: 8.5 }}>
            {/* 특이사항 내용 */}
          </Text>
        </View>

        <View
          style={{
            width: "80%",
            marginVertical: 8,
            borderColor: "#D3D3D3",
            marginLeft: 40,
            borderWidth: 0.3,
          }}
        />

        <View style={{ marginLeft: "5%", flexDirection: "row" }}>
          <View
            style={{
              marginTop: 6,
              marginBottom: 10,
              marginLeft: 20,
              width: 5,
              height: 14,
              backgroundColor: "#FBB144",
            }}
          ></View>
          <Text style={{ marginTop: 5, fontWeight: "bold", fontSize: 12 }}>
            {" "}
            알레르기{" "}
          </Text>
        </View>

        <View
          style={{ marginLeft: "12%", flexDirection: "row", marginBottom: 20 }}
        >
          <View
            style={{
              width: 42,
              height: 42,
              borderRadius: 12,
              backgroundColor: "#fbfbfb",
              elevation: 3,
            }}
          >
            <Image
              style={{
                width: 30,
                height: 30,
                borderRadius: 12,
                marginHorizontal: 5,
                marginVertical: 5,
              }}
              source={require("./assets/x.png")}
            />
          </View>
          <View style={{ alignItems: "center", marginLeft: 13 }}>
            <TouchableOpacity onPress={() => navigation.navigate("app2.js")}>
              <View
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 12,
                  backgroundColor: "#8CDCE2",
                  elevation: 3,
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    marginLeft: 13,
                    marginVertical: 10,
                    color: "white",
                    elevation: 3,
                  }}
                >
                  {" "}
                  +
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: "white",
  },
  text: {
    height: 40,
    fontSize: 12, // 폰트 크기 설정
  },
});
