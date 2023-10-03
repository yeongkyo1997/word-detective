import { View, Text, Image } from "react-native";
import useCachedResources from "../../hooks/useCachedResources";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Header from "./Header";
import { MenuBtn } from "../../styles/globalStyles";
import { Container, ContainerBg } from "../../styles/globalStyles";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserAPI } from "../../utils/api";

type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Login = () => {
  const isLoaded = useCachedResources();
  const navigation = useNavigation<RootStackNavigationProp>();

  //로컬 스토리지에서 가져오기
  const getData = () => AsyncStorage.getItem("wd-user-id");

  //로컬 스토리지에서 가져오기
  const setData = () => AsyncStorage.getItem("wd-user-id");

  //로그인 함수
  const loginFunc = () => {
    let userId = null;
    //로컬 스토리지에 userId가 있는지 확인
    const promise = getData();
    promise.then(res => {
      // console.log(res);
      userId = res;
    });
    //있으면: 해당 userId로 api 호출 -> 유저 정보(클리어 기록 등)를 가져오기
    if (userId !== null) {
      // console.log(userId);
    }
    //없으면: api 호출해서 UUID 받아오기 -> 다시 api 호출해서 유저 정보 가져오기
    else {
      // console.log("id없음");
      const promise = UserAPI.getById();
      promise.then(res => {
        console.log(res.data.id);
        userId = res.data.id; //api 호출 결과로 UUID 받아옴
        //uuid를 로컬 스토리지에 저장

        //저장한 uuid로 다시 api 호출해서 유저 정보 가져오기
      });
    }
    console.log(userId);
    //모든 처리 후 튜토리얼 또는 메인 화면으로 이동
    // navigation.navigate("TutorialOne")
  };

  if (isLoaded) {
    return (
      <Container>
        <ContainerBg source={require("../../assets/background/main/mainBackground.png")}>
          <TouchableWithoutFeedback onPress={() => navigation.navigate("Main", {})}>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View style={{ flex: 1 }} />
              <View style={{ flex: 20 }}>
                <LoginGroupImg
                  source={require("../../assets/etc/loginGroup.png")}
                  resizeMode="contain"
                />
                <MainLogo source={require("../../assets/etc/mianLogo.png")} resizeMode="contain" />
              </View>
              <View style={{ flex: 1 }} />
            </View>
          </TouchableWithoutFeedback>
        </ContainerBg>
      </Container>
    );
  } else {
    return null;
  }
};
export default Login;

const TouchableWithoutFeedback = styled.TouchableOpacity`
  flex: 1;
`;

const LoginGroupImg = styled.Image`
  position: absolute;
  width: 800px;
  height: 360px;
  left: 0px;
  top: 0px;
`;

const MainLogo = styled.Image`
  position: absolute;
  width: 291px;
  height: 204px;
  left: 247px;
  top: 105px;
`;
