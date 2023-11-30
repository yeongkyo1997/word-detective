import React, { useEffect } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackActions } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { Audio } from "expo-av";
type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const GameClearModal = ({ word, onClose, nextScreen }: any) => {
  const click = () => {
    // if (nextScreen) {
    //   navigation.navigate(nextScreen, { word });
    // }
    if (nextScreen) {
      navigation.dispatch(StackActions.replace(nextScreen, { word }));
    }
  };

  useEffect(() => {
    // 페이지가 렌더링될 때 소리를 자동으로 재생
    const playSound = async () => {
      const soundObject = new Audio.Sound();
      try {
        await soundObject.loadAsync(require("../../assets/sound/tada.mp3"));
        await soundObject.playAsync();
      } catch (error) {
        console.error("소리 재생 중 오류 발생:", error);
      }
    };

    // 컴포넌트가 마운트될 때 소리를 재생
    playSound();
  }, []);

  const navigation = useNavigation<RootStackNavigationProp>();
  return (
    <ModelView>
      <ChalkBoard source={require("../../assets/character/resultCharacter.png")}></ChalkBoard>
      <NextFlex>
        <Travel onPress={click}>
          <NextButton source={require("../../assets/button/resultNext.png")} />
        </Travel>
        <SubText>다음으로</SubText>
      </NextFlex>
    </ModelView>
  );
};

export default GameClearModal;
const SubText = styled.Text`
  color: white;

  font-family: "Hayanbunpil";
  letter-spacing: 2px;
  font-size: 18px;
  flex: 1;
`;

const NextFlex = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Travel = styled.TouchableOpacity`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;
const ChalkBoard = styled.Image`
  position: absolute;
  height: 100%;
  resize-mode: contain;
`;

const ModelView = styled.View`
  align-items: center;
  justify-content: center;
`;

const NextButton = styled.Image``;
