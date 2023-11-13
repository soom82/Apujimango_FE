import React from "react";
import { Text, Image, View } from "react-native";
import { Iconify } from "react-native-iconify";

export const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          width: 395,
          height: 130,
          backgroundColor: "red",
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Image
            source={require("../assets/cat.png")}
            style={{ width: 50, height: 50 }}
          />
          <View>
            <View>
              <Text>1:1 실시간으로</Text>
              <Text>고민을 해결해드릴게요.</Text>
            </View>
            <View>
              <Text>ChatGPT에게 물어보는</Text>
              <Text>복약지도 및 건강관리 노하우!</Text>
            </View>
          </View>
        </View>
        <Text>>> AI 질문하러 가기</Text>
        <Text>
          망고냥이는 의약품안전사용서비스(DUR) DB를 학습한 ChatGPT임을
          알려드립니다.
        </Text>
      </View>
      <View
        style={{
          width: 395,
          height: 130,
          backgroundColor: "green",
        }}
      >
        <View>
          <Text>우리 아이를 등록하고,</Text>
          <Text>맞춤형 건강관리를 해보세요!</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text>>> 아이 등록하기</Text>
          <Image
            source={require("../assets/bag.png")}
            style={{ width: 50, height: 50 }}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: 395,
          height: 130,
          backgroundColor: "yellow",
        }}
      >
        <Image
          source={require("../assets/bell.png")}
          style={{ width: 50, height: 50 }}
        />
        <View>
          <Text>언제든, 바로 물어보세요!</Text>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Iconify icon="ep:bowl" />
            <Text>복약 중인데 먹으면 안되는 음식이 뭘까요?</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Iconify icon="healthicons:medicines-outline" />
            <Text>우리 아이가 어떤 약을 먹는지 궁금해요!</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Iconify icon="solar:cat-linear" />
            <View>
              <Text>아이가 약을 잘 안 먹어요.</Text>
              <Text>재미있게 먹을 수 있는 방법은 없을까요?</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;
