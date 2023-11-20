import React, { useState, useEffect, useCallback } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();

export const Medicine_Analysis3 = ({ navigation }) => {
  const [appIsReady, setAppIsReady] = useState(false);

  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 5000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return (
      <View
        style={{
          backgroundColor: "#FFFFFFF2",
          height: 730,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            color: "#878787",
          }}
        >
          잠시만요
        </Text>
        <Image
          source={require("../assets/3dcat.png")}
          style={{ marginTop: 15, width: 180, height: 205 }}
        />
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            color: "#878787",
          }}
        >
          분석 중이에요!
        </Text>
      </View>
    );
  }

  return (
    <View
      style={{
        backgroundColor: "#000000A1",
        height: 730,
        alignItems: "center",
      }}
      onLayout={onLayoutRootView}
    >
      <Text
        style={{
          fontSize: 14,
          color: "#FFFFFF",
          marginTop: 60,
          fontWeight: "bold",
        }}
      >
        우리 아이가 먹고 있는 약 성분이 굼금하세요?
      </Text>
      <Text
        style={{
          fontSize: 14,
          color: "#FFFFFF",
          marginTop: 30,
          fontWeight: "bold",
        }}
      >
        스캔한 처방전이 맞나요?
      </Text>

      <View
        style={{
          marginTop: 20,
          width: 330,
          height: 445,
          backgroundColor: "#FFFFFF",
          borderRadius: 25,
        }}
      >
        <View
          style={{
            width: 330,
            height: 60,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            backgroundColor: "#B1B1B140",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
            }}
          >
            조제일자
          </Text>
          <View
            style={{
              width: 180,
              height: 20,
              marginTop: 5,
              marginLeft: 10,
              backgroundColor: "#D9D9D980",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 11,
                color: "#686868",
              }}
            >
              2023 / 10 / 20 월요일
            </Text>
          </View>
          <View
            style={{
              marginTop: 5,
              width: 25,
              height: 20,
              backgroundColor: "#C6EDEF",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../assets/triangle.png")}
              style={{ width: 10, height: 10 }}
            />
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={{
              marginTop: 15,
              fontSize: 12,
              fontWeight: "bold",
            }}
          >
            자세한 약 성분 분석 리포트로 받고싶은 항목을 선택해주세요.
          </Text>
          <Text
            style={{
              marginTop: 3,
              fontSize: 12,
            }}
          >
            아이를 위한 케어 주의척도를 확인해보세요!
          </Text>

          <View
            style={{
              width: "90%",
              marginTop: 15,
              borderColor: "#CDCDCD",
              borderWidth: 0.2,
            }}
          />

          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                marginTop: 15,
                fontSize: 10,
                color: "#868686",
              }}
            >
              **표기가 틀린 성분명이 있다면,
            </Text>
            <Text
              style={{
                marginTop: 15,
                fontSize: 10,
                fontWeight: "bold",
                color: "#FAA629",
              }}
            >
              &nbsp;수정 / 뒤로가기
            </Text>
            <Text
              style={{
                marginTop: 15,
                fontSize: 10,
                color: "#868686",
              }}
            >
              **
            </Text>
          </View>

          <TouchableOpacity onPress={() => setChecked1(true)}>
            <View
              style={{
                marginTop: 10,
                width: 290,
                height: 35,
                backgroundColor: checked1 ? "#EAFAFB" : "#EFF3F4B0",
                borderRadius: 5,
                borderWidth: 1,
                borderColor: "#E7E7E7",
                flexDirection: "row",
                //   alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  marginTop: 10,
                  width: 15,
                  height: 15,
                  borderRadius: 5,
                  backgroundColor: checked1 ? "#98E0E5" : "#E1F4F5",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={checked1 ? require("../assets/check.png") : null}
                  style={{ width: 9, height: 7 }}
                />
              </View>
              <Text
                style={{
                  marginLeft: 5,
                  marginTop: 7,
                  fontSize: 12,
                  fontWeight: "bold",
                  color: "#818181",
                  textAlign: "center",
                }}
              >
                배포탄정
              </Text>
              <Text
                style={{
                  marginTop: 9,
                  marginLeft: 30,
                  fontSize: 9,
                  color: "#4E4E4E",
                }}
              >
                1일투여횟수
              </Text>
              <View
                style={{
                  marginTop: 9,
                  marginLeft: 3,
                  width: 15,
                  height: 15,
                  backgroundColor: "#E7E7E7",
                  borderRadius: 3,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 9,
                  }}
                >
                  2
                </Text>
              </View>
              <Text
                style={{
                  marginTop: 9,
                  marginLeft: 10,
                  fontSize: 9,
                  color: "#4E4E4E",
                }}
              >
                총투약일수
              </Text>
              <View
                style={{
                  marginTop: 9,
                  marginLeft: 3,
                  width: 15,
                  height: 15,
                  backgroundColor: "#E7E7E7",
                  borderRadius: 3,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 9,
                  }}
                >
                  4
                </Text>
              </View>
              <Image
                source={require("../assets/pencil.png")}
                style={{
                  marginTop: 10,
                  marginLeft: 20,
                  width: 13,
                  height: 13,
                }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setChecked2(true)}>
            <View
              style={{
                marginTop: 10,
                width: 290,
                height: 35,
                backgroundColor: checked2 ? "#EAFAFB" : "#EFF3F4B0",
                borderRadius: 5,
                borderWidth: 1,
                borderColor: "#E7E7E7",
                flexDirection: "row",
                //   alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  marginTop: 10,
                  width: 15,
                  height: 15,
                  borderRadius: 5,
                  backgroundColor: checked2 ? "#98E0E5" : "#E1F4F5",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={checked2 ? require("../assets/check.png") : null}
                  style={{ width: 9, height: 7 }}
                />
              </View>
              <Text
                style={{
                  marginLeft: 5,
                  marginTop: 7,
                  fontSize: 12,
                  fontWeight: "bold",
                  color: "#818181",
                  textAlign: "center",
                }}
              >
                슈다펜정
              </Text>
              <Text
                style={{
                  marginTop: 9,
                  marginLeft: 30,
                  fontSize: 9,
                  color: "#4E4E4E",
                }}
              >
                1일투여횟수
              </Text>
              <View
                style={{
                  marginTop: 9,
                  marginLeft: 3,
                  width: 15,
                  height: 15,
                  backgroundColor: "#E7E7E7",
                  borderRadius: 3,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 9,
                  }}
                >
                  2
                </Text>
              </View>
              <Text
                style={{
                  marginTop: 9,
                  marginLeft: 10,
                  fontSize: 9,
                  color: "#4E4E4E",
                }}
              >
                총투약일수
              </Text>
              <View
                style={{
                  marginTop: 9,
                  marginLeft: 3,
                  width: 15,
                  height: 15,
                  backgroundColor: "#E7E7E7",
                  borderRadius: 3,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 9,
                  }}
                >
                  4
                </Text>
              </View>
              <Image
                source={require("../assets/pencil.png")}
                style={{
                  marginTop: 10,
                  marginLeft: 20,
                  width: 13,
                  height: 13,
                }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setChecked3(true)}>
            <View
              style={{
                marginTop: 10,
                width: 290,
                height: 35,
                backgroundColor: checked3 ? "#EAFAFB" : "#EFF3F4B0",
                borderRadius: 5,
                borderWidth: 1,
                borderColor: "#E7E7E7",
                flexDirection: "row",
                //   alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  marginTop: 10,
                  width: 15,
                  height: 15,
                  borderRadius: 5,
                  backgroundColor: checked3 ? "#98E0E5" : "#E1F4F5",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={checked3 ? require("../assets/check.png") : null}
                  style={{ width: 9, height: 7 }}
                />
              </View>
              <Text
                style={{
                  marginLeft: 5,
                  marginTop: 7,
                  fontSize: 12,
                  fontWeight: "bold",
                  color: "#818181",
                  textAlign: "center",
                }}
              >
                프레나정
              </Text>
              <Text
                style={{
                  marginTop: 9,
                  marginLeft: 30,
                  fontSize: 9,
                  color: "#4E4E4E",
                }}
              >
                1일투여횟수
              </Text>
              <View
                style={{
                  marginTop: 9,
                  marginLeft: 3,
                  width: 15,
                  height: 15,
                  backgroundColor: "#E7E7E7",
                  borderRadius: 3,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 9,
                  }}
                >
                  2
                </Text>
              </View>
              <Text
                style={{
                  marginTop: 9,
                  marginLeft: 10,
                  fontSize: 9,
                  color: "#4E4E4E",
                }}
              >
                총투약일수
              </Text>
              <View
                style={{
                  marginTop: 9,
                  marginLeft: 3,
                  width: 15,
                  height: 15,
                  backgroundColor: "#E7E7E7",
                  borderRadius: 3,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 9,
                  }}
                >
                  4
                </Text>
              </View>
              <Image
                source={require("../assets/pencil.png")}
                style={{
                  marginTop: 10,
                  marginLeft: 20,
                  width: 13,
                  height: 13,
                }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setChecked4(true)}>
            <View
              style={{
                marginTop: 10,
                width: 290,
                height: 35,
                backgroundColor: checked4 ? "#EAFAFB" : "#EFF3F4B0",
                borderRadius: 5,
                borderWidth: 1,
                borderColor: "#E7E7E7",
                flexDirection: "row",
                //   alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  marginTop: 10,
                  width: 15,
                  height: 15,
                  borderRadius: 5,
                  backgroundColor: checked4 ? "#98E0E5" : "#E1F4F5",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={checked4 ? require("../assets/check.png") : null}
                  style={{ width: 9, height: 7 }}
                />
              </View>
              <Text
                style={{
                  marginLeft: 5,
                  marginTop: 7,
                  fontSize: 12,
                  fontWeight: "bold",
                  color: "#818181",
                  textAlign: "center",
                }}
              >
                오논캅셀
              </Text>
              <Text
                style={{
                  marginTop: 9,
                  marginLeft: 30,
                  fontSize: 9,
                  color: "#4E4E4E",
                }}
              >
                1일투여횟수
              </Text>
              <View
                style={{
                  marginTop: 9,
                  marginLeft: 3,
                  width: 15,
                  height: 15,
                  backgroundColor: "#E7E7E7",
                  borderRadius: 3,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 9,
                  }}
                >
                  2
                </Text>
              </View>
              <Text
                style={{
                  marginTop: 9,
                  marginLeft: 10,
                  fontSize: 9,
                  color: "#4E4E4E",
                }}
              >
                총투약일수
              </Text>
              <View
                style={{
                  marginTop: 9,
                  marginLeft: 3,
                  width: 15,
                  height: 15,
                  backgroundColor: "#E7E7E7",
                  borderRadius: 3,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 9,
                  }}
                >
                  4
                </Text>
              </View>
              <Image
                source={require("../assets/pencil.png")}
                style={{
                  marginTop: 10,
                  marginLeft: 20,
                  width: 13,
                  height: 13,
                }}
              />
            </View>
          </TouchableOpacity>

          <View
            style={{
              marginTop: 15,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              총 &nbsp;
            </Text>
            <View
              style={{
                width: 25,
                height: 25,
                borderRadius: 50,
                backgroundColor: "#E1F4F5",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "#7DC4C9",
                }}
              >
                4
              </Text>
            </View>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              &nbsp; 개 약이 확인되었습니다.
            </Text>
          </View>

          <View
            style={{
              width: "90%",
              marginTop: 15,
              borderColor: "#B9B9B9",
              borderWidth: 0.2,
            }}
          />

          <View
            style={{
              marginTop: 5,
              marginLeft: 70,
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                marginTop: 5,
                marginLeft: 3,
                fontSize: 12,
                fontWeight: "bold",
                color: "#868686",
              }}
            >
              선택을 완료하면, 다음을 눌러주세요.
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("중간 알림")}>
              <View
                style={{
                  marginLeft: 5,
                  marginTop: 7,
                  width: 25,
                  height: 25,
                  backgroundColor: "#FAA629",
                  borderRadius: 50,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../assets/rightarrow.png")}
                  style={{ width: 16, height: 13 }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Medicine_Analysis3;
