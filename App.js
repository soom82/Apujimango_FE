// Paste files to run
// Paste files to run
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";

export default function App() {
  const [text, setText] = useState("키워드를 입력하세요.");

  return (
    <View style={styles.container}>
      <ScrollView style={{ height: 1100 }}>
        <View
          style={{ marginLeft: "10%", marginTop: 80, flexDirection: "row" }}
        >
          <View
            style={{
              backgroundColor: "#EDEBE8",
              borderRadius: 20,
              padding: 5,
            }}
          >
            <Image
              style={{ width: 40, height: 40 }}
              source={require("./assets/cat.png")}
            />
          </View>
          <View style={{ alignItems: "center", marginHorizontal: 12 }}>
            <Text
              style={{
                marginTop: 12,
                marginBottom: 10,
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              망고냥이
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            width: 280,
            marginHorizontal: "10%",
            marginTop: 20,
            borderRadius: 15,
            backgroundColor: "#edebe8",
          }}
        >
          <Text
            style={{
              paddingVertical: 15,
              paddingHorizontal: 20,
              fontSize: 12,
            }}
          >
            {" "}
            아이에게 나타난 증상이 무엇인가요? {"\n"}
            증상별
            <Text
              style={{
                paddingVertical: 5,
                paddingLeft: 1,
                fontSize: 12,
                fontWeight: "bold",
              }}
            >
              🚫주의해야할 음식🚫
            </Text>
            이 어떤 것이 있는지 {"\n"}
            궁금하신가요? {"\n"}
            {"\n"}
            제가 도와드릴게요!
          </Text>
        </View>

        <Text
          style={{
            marginHorizontal: "30%",
            color: "#FAA629",
            marginTop: 15,
            fontWeight: "bold",
            fontSize: 14,
          }}
        >
          우리 아이의 주의케어 점수{" "}
        </Text>

        <View style={{ alignItems: "center", marginVertical: 10 }}>
          <Image source={require("./assets/report_score.png")} />
        </View>

        <View
          style={{
            flexDirection: "row",
            width: "70%",
            marginHorizontal: "15%",
            height: 25,
            borderRadius: 40,
            backgroundColor: "#ffeacc",
          }}
        >
          <Text
            style={{
              paddingVertical: 2,
              paddingLeft: 30,
              paddingRight: 1,
              fontSize: 15,
            }}
          >
            {" "}
            🍵
          </Text>
          <Text
            style={{
              paddingVertical: 5,
              paddingLeft: 1,
              fontSize: 12,
              fontWeight: "bold",
            }}
          >
            {" "}
            규칙적인 식생활과 휴식이 필요해요.
          </Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              marginLeft: "15%",
              marginTop: 30,
              width: 15,
              height: 15,
              backgroundColor: "#FAA629",
              borderRadius: 40,
            }}
          ></View>
          <View
            style={{
              marginLeft: 8,
              marginTop: 30,
              width: 15,
              height: 15,
              backgroundColor: "#F1B8FF",
              borderRadius: 40,
            }}
          ></View>
          <View
            style={{
              marginLeft: 8,
              marginTop: 30,
              width: 15,
              height: 15,
              backgroundColor: "#A3D779",
              borderRadius: 40,
            }}
          ></View>
          <Text style={{ marginHorizontal: 10, marginTop: 28, color: "gray" }}>
            {" "}
            입력한 약 3개를 분석한 결과예요.{" "}
          </Text>
        </View>
        <View
          style={{
            width: "80%",
            marginBottom: 22,
            marginTop: 50,
            borderColor: "#D3D3D3",
            marginLeft: 40,
            borderWidth: 0.3,
          }}
        />

        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              marginLeft: "15%",
              width: 25,
              height: 25,
              backgroundColor: "#FFB957",
              borderRadius: 40,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 20,
                textAlign: "center",
                marginTop: -2,
              }}
            >
              {" "}
              1{" "}
            </Text>
          </View>
          <Text
            style={{
              marginHorizontal: 10,
              fontWeight: "bold",
              backgroundColor: "#ffeacc",
              fontSize: 15,
            }}
          >
            배포탄정 - 항히스타민제{" "}
          </Text>
        </View>

        <View
          style={{
            marginRight: 30,
            alignItems: "center",
            marginVertical: 15,
          }}
        >
          <Image
            source={require("./assets/BDT_medicine.png")}
            style={{ width: 190, height: 105 }}
          />
        </View>

        <View style={{ marginLeft: "5%", flexDirection: "row" }}>
          <View
            style={{
              marginTop: 6,
              marginBottom: 10,
              marginLeft: 40,
              width: 5,
              height: 12,
              backgroundColor: "#ffeacc",
            }}
          ></View>
          <Text style={{ marginTop: 5, fontWeight: "bold", fontSize: 12 }}>
            {" "}
            투약량/횟수/일수{" "}
          </Text>
        </View>

        <View
          style={{
            alignItems: "center",
            marginLeft: "5%",
            flexDirection: "row",
          }}
        >
          <Text style={{ marginVertical: 3, marginLeft: 50, fontSize: 9 }}>
            1회투약량
          </Text>
          <View
            style={{
              marginVertical: 3,
              marginLeft: 5,
              width: 23,
              height: 14,
              backgroundColor: "#E7E7E7",
              borderRadius: 3,
            }}
          >
            <Text
              style={{
                marginTop: -2,
                fontWeight: "bold",
                fontSize: 11,
                textAlign: "center",
              }}
            >
              {" "}
              1{" "}
            </Text>
          </View>
          <Text style={{ marginVertical: 3, marginLeft: 20, fontSize: 9 }}>
            1일투여횟수
          </Text>
          <View
            style={{
              marginVertical: 3,
              marginLeft: 5,
              width: 23,
              height: 14,
              backgroundColor: "#E7E7E7",
              borderRadius: 3,
            }}
          >
            <Text
              style={{
                marginTop: -2,
                fontWeight: "bold",
                fontSize: 11,
                textAlign: "center",
              }}
            >
              {" "}
              2{" "}
            </Text>
          </View>
          <Text style={{ marginVertical: 3, marginLeft: 20, fontSize: 9 }}>
            총투약일수
          </Text>
          <View
            style={{
              marginVertical: 3,
              marginLeft: 5,
              width: 23,
              height: 14,
              backgroundColor: "#E7E7E7",
              borderRadius: 3,
            }}
          >
            <Text
              style={{
                marginTop: -2,
                fontWeight: "bold",
                fontSize: 11,
                textAlign: "center",
              }}
            >
              {" "}
              4{" "}
            </Text>
          </View>
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
              marginBottom: 7,
              marginLeft: 40,
              width: 5,
              height: 12,
              backgroundColor: "#ffeacc",
            }}
          ></View>
          <Text style={{ marginTop: 3, fontWeight: "bold", fontSize: 12 }}>
            {" "}
            효능군{" "}
          </Text>
        </View>

        <View style={{ marginLeft: "18%" }}>
          <Text style={{ marginBottom: 3, fontSize: 10 }}>항히스타민제</Text>

          <Text style={{ marginBottom: 3, fontSize: 10 }}>
            알레르기 반응 완화, 염증 및 발진 완화 효과가 있어요.
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
              marginBottom: 7,
              marginLeft: 40,
              width: 5,
              height: 12,
              backgroundColor: "#ffeacc",
            }}
          ></View>
          <Text style={{ marginTop: 3, fontWeight: "bold", fontSize: 12 }}>
            {" "}
            약 주의사항{" "}
          </Text>
        </View>

        <View style={{ marginLeft: "18%" }}>
          <Text style={{ marginVertical: 3, fontSize: 10 }}>
            졸음, 두통, 어지러움, 피로 증상이 나타날 수 있어요.
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
              marginBottom: 7,
              marginLeft: 40,
              width: 5,
              height: 12,
              backgroundColor: "#ffeacc",
            }}
          ></View>
          <Text style={{ marginTop: 5, fontWeight: "bold", fontSize: 12 }}>
            {" "}
            용량 제한{" "}
          </Text>
        </View>

        <View style={{ marginLeft: "18%" }}>
          <Text style={{ marginVertical: 3, fontSize: 10 }}>X</Text>
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
              marginBottom: 7,
              marginLeft: 40,
              width: 5,
              height: 12,
              backgroundColor: "#ffeacc",
            }}
          ></View>
          <Text style={{ marginTop: 5, fontWeight: "bold", fontSize: 12 }}>
            {" "}
            상세 보관 방법{" "}
          </Text>
        </View>

        <View style={{ marginLeft: "18%" }}>
          <Text style={{ marginVertical: 3, fontSize: 10 }}>
            기밀용기,실온(1-30℃)보관
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
              marginLeft: 40,
              width: 5,
              height: 12,
              backgroundColor: "#ffeacc",
            }}
          ></View>
          <Text style={{ marginTop: 5, fontWeight: "bold", fontSize: 12 }}>
            {" "}
            복용 지도{" "}
          </Text>
        </View>

        <View style={{ marginLeft: 60, marginBottom: 7 }}>
          <Image
            style={{ width: 150, height: 60 }}
            source={require("./assets/eat_guide1.png")}
          />
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
              marginLeft: 40,
              width: 5,
              height: 12,
              backgroundColor: "#ffeacc",
            }}
          ></View>
          <Text style={{ marginTop: 5, fontWeight: "bold", fontSize: 12 }}>
            {" "}
            이런 음식들은 조심해주세요!{" "}
          </Text>
        </View>
      </ScrollView>

      <View style={{ elevation: 100 }}>
        <View
          style={{
            width: "100%",
            height: 50,
            backgroundColor: "#F6F6F6",
            elevation: 40,
            flexDirection: "row",
          }}
        >
          <TextInput
            placeholder="망고냥이에게 질문하세요."
            placeholderTextColor={"#BCBCBC"}
            style={{
              color: "black",
              fontSize: 13,
              marginLeft: 20,
              marginTop: 3,
            }}
          />

          <TouchableOpacity>
            <Image
              source={require("./assets/send.png")}
              style={{
                position: "absolute",
                left: 80,
                width: 32,
                height: 31,
                marginRight: "5%",
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
