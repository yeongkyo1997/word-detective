import React from "react";
import { View, Text, Button } from "react-native";
import styled from "styled-components/native";
import {MenuBtn} from "../../styles/globalStyles";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../App";

type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const MyModal = ({ onClose }: any) => {
    const navigation = useNavigation<RootStackNavigationProp>();
    return (

        <View>
            <ModalMenuBtn onPress={() => navigation.navigate("PictureLobby",{ cameFromMainModal: true })}>
                <BtnImg
                    source={require("../../assets/button/gameMode/stageModeBtn.png")}
                    resizeMode="contain"
                />
                <BtnText>스테이지</BtnText>
            </ModalMenuBtn>

            <SpeechBubbleImg
                source={require("../../assets/etc/toturialBallonLeft.png")}
                            resizeMode="contain"
            />
            <TextTotutial>
                스테이지를 눌러보자!
            </TextTotutial>

            <GirlImg source={require("../../assets/character/miniCharacterRight.png")}
                     resizeMode="contain"
            />
            <ArrowBtnImg source={require("../../assets/etc/arrowTuto.png")}
                            resizeMode="contain"/>

        </View>

    );
};

export default MyModal;


const TouchableWithoutFeedback = styled.TouchableOpacity`
  flex: 1;
`;

//버튼 컨테이너
const SpeechBubbleImg = styled.Image`
  position: absolute;
  width: 350px;
  height: 222.65px;
  left: 150px;
  top: 30px;
`;

//버튼 안의 이미지(사이즈 제한)
const GirlImg = styled.Image`
  position: absolute;
  width: 146px;
  height: 133px;
  left: 1px;
  top: 154px;

`;

const ArrowBtnImg = styled.Image`
  position: absolute;
  width: 30px;
  height: 30px;
  left: 300px;
  top: 150px;
`;

const TextTotutial = styled.Text`
  position: absolute;
  width: 321px;
  height: 160px;
  left: 170px;
  top: 108px;
  font-family: "BMJUA";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 31px;
  text-align: center;
  color: #000000;
`;

const AppleText = styled.Text`
  color: red; /* 빨간색으로 변경 */
`;

//버튼 안의 이미지(사이즈 제한)
const BtnImg = styled.Image`
  max-width: 120px;
  max-height: 120px;
  margin-bottom: 5px;
`;

//버튼의 글씨
const BtnText = styled.Text`
  font-family: "BMJUA";
  font-size: 32px;
  color: #945023;
`;

const ModalMenuBtn = styled.TouchableOpacity`
  align-items: center;
  width: 200px;
  height: 200px;
  top: 20px;
  left: 500px;
  background-color: #f3ca85;
  border: 10px solid #FE6969; /* 빨간 테두리 색상 */
  border-radius: 20px;
  margin: 10px;
`;
