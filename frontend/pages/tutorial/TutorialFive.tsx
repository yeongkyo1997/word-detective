import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import useCachedResources from "../../hooks/useCachedResources";
import { RootStackParamList } from "../../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Container, ContainerBg } from "../../styles/globalStyles";
import StageCard from "../components/StageCard";
import { IStage } from "../../types/types";
import { initialStage } from "../../common/initialType";
import Header from "../etc/Header";
import { Audio } from "expo-av";
import useAppSelector from "../../store/useAppSelector";

type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;
type StagePageRouteProp = RouteProp<RootStackParamList, "Stage">;

//TODO: 배경이 스크롤되도록 변경
const Stage = () => {
  const isLoaded = useCachedResources();
  // const navigation = useNavigation<RootStackNavigationProp>();
  const route = useRoute<StagePageRouteProp>();
  // 네비게이션 사이를 넘어가며 전달한 param
  //gameType = letter OR word OR picture(string)
  const gameType = "picture";
  const words = useAppSelector(state => state.wordList.value);

  //TODO: api 호출해야, 현재는 임시 데이터로 사용중
  // const [stageList, setStageList] = useState<IStage[]>([initialStage]); //모임 데이터
  const stage: IStage = {
    word: words[0][0],
    clear: false,
    canStart: true,
  };

  useEffect(() => {
    // 페이지가 렌더링될 때 소리를 자동으로 재생
    const playSound = async () => {
      const soundObject = new Audio.Sound();
      try {
        await soundObject.loadAsync(require("../../assets/wav/05_사과를_눌러보자.wav"));
        await soundObject.playAsync();
      } catch (error) {
        console.error("소리 재생 중 오류 발생:", error);
      }
    };

    // 컴포넌트가 마운트될 때 소리를 재생
    playSound();
  }, []);

  if (isLoaded) {
    return (
      <Container>
        <ContainerBg
          source={require("../../assets/background/stage/fruit.png")}
          resizeMode="stretch"
        >
          <HeaderContainer>
            <Header />
          </HeaderContainer>
          <ContentContainer>
            <CharacterContainer>
              <Image source={require("../../assets/character/fruitCharacter.png")} />
            </CharacterContainer>
            <StageListContainer>
              <StageCard stage={stage} gameType={gameType} />
            </StageListContainer>
            <SpeechBubbleImg
              source={require("../../assets/etc/tutoThree.png")}
              resizeMode="contain"
            >
              <TextTotutial>사과를 {"\n"} 눌러보자</TextTotutial>
            </SpeechBubbleImg>
          </ContentContainer>
        </ContainerBg>
      </Container>
    );
  } else {
    return null;
  }
};
export default Stage;

//헤더 컨테이너
const HeaderContainer = styled.View`
  flex: 1;
`;

//하단내용 컨테이너
const ContentContainer = styled.View`
  flex: 8;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

//캐릭터 영역
const CharacterContainer = styled.View`
  flex: 1;
  padding-left: 50px;
`;

//스테이지 영역
const StageListContainer = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const SpeechBubbleImg = styled.ImageBackground`
  flex: 3;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const TextTotutial = styled.Text`
  font-family: "BMJUA";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  color: #000000;
  top: -5%;
  right: 10%;
`;
