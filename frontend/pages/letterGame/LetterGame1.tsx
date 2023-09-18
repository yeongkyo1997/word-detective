import { View, Text, Image, ImageBackground, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import useCachedResources from "../../hooks/useCachedResources";
import { useNavigation, RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Container, ContainerBg, MenuBtn } from "../../styles/globalStyles";
import QuestionCard from "../components/QuestionCard";
import { ICard } from "../../types/types";

type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;
type StagePageRouteProp = RouteProp<RootStackParamList, "WordGame1">;

//통글씨인식 첫번째문제 : 그림 맞추기
const Word1Type: ICard = {
  pictureHidden: false, //그림 숨기기
  wordHidden: true, //글씨는 숨기지 않음
  wordHiddenIndx: 1, //글씨를 숨긴다면 몇번째 인덱스의 글씨를 숨기는지(0부터시작)
};
const number=Word1Type.wordHiddenIndx;
const LetterGame1 = () => {
  const isLoaded = useCachedResources();
  const navigation = useNavigation<RootStackNavigationProp>();
  const route = useRoute<StagePageRouteProp>();
  const { word } = route.params;
  const handleCardClick = (choice: string) => {
    // Do something with the choice
    const characters = [...word.name];
    if(choice===characters[number]){
      console.log("성공");
    }else{
      console.log("실패");
    }
  };
  //선지 8개의 배열
  //TODO: api 로 랜덤 뽑는 기능 받아와서 채우기
  const choiceList = ["슴", "진", "과", "자", "고", "람", "막", "골"];
  if (isLoaded) {
    return (
      <Container>
        <ContainerBg source={require("../../assets/background/game/fruit.png")}>
          <ContentContainer>
            <QCardContainer>
              <QuestionCard word={word} type={Word1Type} />
            </QCardContainer>
            <ACardContainer>
              {choiceList.map((choice, index) => {
                return (
                  <TouchableOpacity onPress={() => handleCardClick(choice)}>
                  <ACard key={index}>
                    <StyledText>{choice}</StyledText>
                  </ACard>
                  </TouchableOpacity>
                );
              })}
            </ACardContainer>
          </ContentContainer>
        </ContainerBg>
      </Container>
    );
  } else {
    return null;
  }
};
export default LetterGame1;

const ContentContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const QCardContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ACardContainer = styled.View`
  flex: 2;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  
`;

const ACard = styled.View`
  width: 20%;
  aspect-ratio: 1;
  background-color: white;
  margin: 2%;
  elevation: 5;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.Text`
  font-size: 70px;
  font-family: "BMJUA";
  text-align: center;
  justify-content: center;
`;
