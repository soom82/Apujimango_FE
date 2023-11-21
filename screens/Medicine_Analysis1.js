import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";

export const Medicine_Analysis1 = ({ navigation }) => {
  const [image, setImage] = useState(null);

  const changeImage = () => {
    if (image == null) {
      return (
        <Image
          source={require("../assets/choosePicture.png")}
          style={{
            width: 45,
            height: 45,
          }}
        />
      );
    } else {
      return (
        <Image
          source={{ uri: image }}
          style={{ width: 330, height: 470, borderRadius: 25 }}
        />
      );
    }
  };

  const changeButton = () => {
    if (image == null) {
      return (
        <View
          style={{
            marginTop: 20,
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("직접 등록")}>
            <View
              style={{
                width: 45,
                height: 45,
                backgroundColor: "#D9D9D9",
                borderRadius: 50,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../assets/keyboard.png")}
                style={{ width: 30, height: 18 }}
              />
            </View>
          </TouchableOpacity>
          <Text
            style={{
              marginTop: 5,
              marginLeft: 3,
              fontSize: 10,
              color: "#FFFFFF",
            }}
          >
            직접 입력
          </Text>
        </View>
      );
    } else {
      return (
        <View
          style={{
            marginTop: 20,
            marginLeft: 120,
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              marginTop: 5,
              marginLeft: 3,
              fontSize: 15,
              fontWeight: "bold",
              color: "#FFFFFF",
            }}
          >
            약성분 분석 레포트 받기
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("약 선택")}>
            <View
              style={{
                marginLeft: 5,
                marginTop: 7,
                width: 40,
                height: 40,
                backgroundColor: "#FAA629",
                borderRadius: 50,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../assets/rightarrow.png")}
                style={{ width: 18, height: 15 }}
              />
            </View>
          </TouchableOpacity>
        </View>
      );
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View
      style={{
        backgroundColor: "#000000A1",
        height: 730,
        alignItems: "center",
      }}
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
        처방전, 약봉투의 전체가 보이는 사진 1장만 첨부해주세요.
      </Text>

      <TouchableOpacity onPress={pickImage}>
        <View
          style={{
            marginTop: 20,
            width: 330,
            height: 470,
            backgroundColor: "#D9D9D94A",
            borderRadius: 25,
            borderWidth: 2,
            borderColor: "#FFFFFF",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <Image
            source={require("../assets/choosePicture.png")}
            style={{
              width: 45,
              height: 45,
            }}
          /> */}
          {changeImage()}
        </View>
      </TouchableOpacity>

      {changeButton()}
    </View>
  );
};

export default Medicine_Analysis1;
