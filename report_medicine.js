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
  const [searchText, setSearchText] = useState("");

  const tableData = {
    tableHead: ["Head", "Head2", "Head3", "Head4", "Head5"],
    tableData: [
      ["감염성질환", "건강증진", "귀코목질환", "근골격질환", "눈질환"],
      ["뇌신경정신질환", "소아청소년질환", "소화기질환", "순환기질환"],
      ["신장비뇨기질환", "여성질환", "유방내분비질환", "유전질환", "응급질환"],
      ["종양혈액질환", "치과질환", "피부질환", "호흡기질환", "기타"],
    ],
  };

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
                paddingLeft: 15,
                paddingTop: 15,
                color: "#FFFFFF",
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
                paddingLeft: 20,
                paddingTop: 15,
                color: "#959595",
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
              <Text
                style={{ marginHorizontal: 10, marginTop: 28, color: "gray" }}
              >
                {" "}
                입력한 약 3개를 분석한 결과예요.{" "}
              </Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  flexDirection: "row",
                  marginLeft: "15.5%",
                  marginTop: 30,
                  width: 130,
                  height: 35,
                  backgroundColor: "#ECF8F9",
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{
                    color: "gray",
                    fontSize: 13,
                    fontWeight: "bold",
                    marginLeft: 10,
                    marginTop: 8,
                  }}
                >
                  {" "}
                  이상 반응{" "}
                </Text>
                <View
                  style={{
                    marginLeft: 5,
                    marginTop: 14,
                    width: 8,
                    height: 8,
                    backgroundColor: "#FAA629",
                    borderRadius: 40,
                  }}
                ></View>
                <View
                  style={{
                    marginLeft: 5,
                    marginTop: 14,
                    width: 8,
                    height: 8,
                    backgroundColor: "#FAA629",
                    borderRadius: 40,
                  }}
                ></View>
                <View
                  style={{
                    marginLeft: 5,
                    marginTop: 14,
                    width: 8,
                    height: 8,
                    backgroundColor: "#FAA629",
                    borderRadius: 40,
                  }}
                ></View>
                <View
                  style={{
                    marginLeft: 5,
                    marginTop: 14,
                    width: 8,
                    height: 8,
                    backgroundColor: "#FAA629",
                    borderRadius: 40,
                  }}
                ></View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  marginLeft: 8,
                  marginTop: 30,
                  width: 130,
                  height: 35,
                  backgroundColor: "#ECF8F9",
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{
                    color: "gray",
                    fontSize: 13,
                    fontWeight: "bold",
                    marginLeft: 10,
                    marginTop: 8,
                  }}
                >
                  {" "}
                  주의 음식{" "}
                </Text>
                <View
                  style={{
                    marginLeft: 5,
                    marginTop: 14,
                    width: 8,
                    height: 8,
                    backgroundColor: "#FAA629",
                    borderRadius: 40,
                  }}
                ></View>
                <View
                  style={{
                    marginLeft: 5,
                    marginTop: 14,
                    width: 8,
                    height: 8,
                    backgroundColor: "#FAA629",
                    borderRadius: 40,
                  }}
                ></View>
                <View
                  style={{
                    marginLeft: 5,
                    marginTop: 14,
                    width: 8,
                    height: 8,
                    backgroundColor: "#FAA629",
                    borderRadius: 40,
                  }}
                ></View>
                <View
                  style={{
                    marginLeft: 5,
                    marginTop: 14,
                    width: 8,
                    height: 8,
                    backgroundColor: "#FAA629",
                    borderRadius: 40,
                  }}
                ></View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignSelf: "center",
                marginTop: 10,
                width: 270,
                height: 35,
                backgroundColor: "#ECF8F9",
                borderRadius: 5,
              }}
            >
              <Text
                style={{
                  color: "gray",
                  fontSize: 13,
                  fontWeight: "bold",
                  marginLeft: 10,
                  marginTop: 8,
                }}
              >
                {" "}
                복용 시간 난이도{" "}
              </Text>
              <View
                style={{
                  marginLeft: 5,
                  marginTop: 14,
                  width: 8,
                  height: 8,
                  backgroundColor: "#FAA629",
                  borderRadius: 40,
                }}
              ></View>
              <View
                style={{
                  marginLeft: 5,
                  marginTop: 14,
                  width: 8,
                  height: 8,
                  backgroundColor: "#FAA629",
                  borderRadius: 40,
                }}
              ></View>
              <View
                style={{
                  marginLeft: 5,
                  marginTop: 14,
                  width: 8,
                  height: 8,
                  backgroundColor: "#FAA629",
                  borderRadius: 40,
                }}
              ></View>
              <View
                style={{
                  marginLeft: 5,
                  marginTop: 14,
                  width: 8,
                  height: 8,
                  backgroundColor: "#FAA629",
                  borderRadius: 40,
                }}
              ></View>
            </View>

            <View
              style={{
                width: "80%",
                marginBottom: 30,
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
                }}
              >
                씨잘정 - 항히스타민제{" "}
              </Text>
            </View>

            <View
              style={{
                marginHorizontal: 10,
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <Image source={require("./assets/report_medicine.png")} />
            </View>

            <View style={{ marginLeft: "5%", flexDirection: "row" }}>
              <View
                style={{
                  marginTop: 22,
                  marginBottom: 10,
                  marginLeft: 40,
                  width: 5,
                  height: 12,
                  backgroundColor: "#ffeacc",
                  borderRadius: 40,
                }}
              ></View>
              <Text style={{ marginTop: 20, fontWeight: "bold", fontSize: 12 }}>
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
                  height: 12,
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
                  height: 12,
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
                총투약일수
              </Text>
              <View
                style={{
                  marginVertical: 3,
                  marginLeft: 5,
                  width: 23,
                  height: 12,
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
                  borderRadius: 40,
                }}
              ></View>
              <Text style={{ marginTop: 5, fontWeight: "bold", fontSize: 12 }}>
                {" "}
                효능군{" "}
              </Text>
            </View>

            <View style={{ marginLeft: "18%" }}>
              <Text style={{ marginVertical: 3, fontSize: 10 }}>
                항히스타민제
              </Text>

              <Text style={{ marginVertical: 3, fontSize: 10 }}>
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
                  marginBottom: 10,
                  marginLeft: 40,
                  width: 5,
                  height: 12,
                  backgroundColor: "#ffeacc",
                  borderRadius: 40,
                }}
              ></View>
              <Text style={{ marginTop: 5, fontWeight: "bold", fontSize: 12 }}>
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
                  marginBottom: 10,
                  marginLeft: 40,
                  width: 5,
                  height: 12,
                  backgroundColor: "#ffeacc",
                  borderRadius: 40,
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
                  marginBottom: 10,
                  marginLeft: 40,
                  width: 5,
                  height: 12,
                  backgroundColor: "#ffeacc",
                  borderRadius: 40,
                }}
              ></View>
              <Text style={{ marginTop: 5, fontWeight: "bold", fontSize: 12 }}>
                {" "}
                상세 보관 방법{" "}
              </Text>
            </View>

            <View style={{ marginLeft: "18%" }}>
              <Text style={{ marginVertical: 3, fontSize: 10 }}>
                차광기밀용기,실온(1-30℃)보관
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
                  borderRadius: 40,
                }}
              ></View>
              <Text style={{ marginTop: 5, fontWeight: "bold", fontSize: 12 }}>
                {" "}
                상세 보관 방법{" "}
              </Text>
            </View>

            <View style={{ marginLeft: "18%", flexDirection: "row" }}>
              <View style={{ alignItems: "center" }}>
                <Image
                  style={{ width: 60, height: 60 }}
                  source={require("./assets/report_score.png")}
                />
                <Text style={{ marginTop: 5, marginBottom: 40, fontSize: 10 }}>
                  우유
                </Text>
              </View>
              <View style={{ alignItems: "center", marginHorizontal: 15 }}>
                <Image
                  style={{ width: 60, height: 60 }}
                  source={require("./assets/report_score.png")}
                />
                <Text style={{ marginTop: 5, marginBottom: 40, fontSize: 10 }}>
                  우유
                </Text>
              </View>
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
