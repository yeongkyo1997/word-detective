import { View, Text, Image } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Header from "../etc/Header";
import { Container, ContainerBg } from "../../styles/globalStyles";

// 이미지 파일 경로
const wordNoteImage = require("../../assets/etc/wordNote.png");
type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const WordNoteMain = () => {
  const navigation = useNavigation<RootStackNavigationProp>();

  return (
    <Container>
      <ContainerBg source={require("../../assets/background/wordNoteBg.png")}>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        <WordNoteWrap>
          <WordNoteImage source={wordNoteImage} resizeMode="stretch" />
        </WordNoteWrap>
        {/* 나머지 컨텐츠 추가 */}
      </ContainerBg>
    </Container>
  );
};
export default WordNoteMain;

// 헤더
const HeaderContainer = styled.View`
  flex: 1;
`;

// 이미지 컴포넌트
const WordNoteImage = styled.Image`
  width: 100%;
`;

// 나머지 컨텐츠 스타일을 추가하세요.
const WordNoteWrap = styled.View`
  width: 10dp;
  height: 100dp;
  justify-content: center;
  align-items: center;
`;
