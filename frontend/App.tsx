import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import store from "./store/store"; // 리덕스 스토어를 생성한 파일의 경로를 사용하세요.
import Header from "./pages/etc/Header";
import Login from "./pages/etc/Login";
import Main from "./pages/home/Main";
import PictureLobby from "./pages/pictureGame/PictureLobby";
import PictureGame1 from "./pages/pictureGame/PictureGame1";
import PictureGame2 from "./pages/pictureGame/PictureGame2";
import PictureGame3 from "./pages/pictureGame/PictureGame3";

import WordLobby from "./pages/wordGame/WordLobby";
import WordGame1 from "./pages/wordGame/WordGame1";
import WordGame2 from "./pages/wordGame/WordGame2";
import WordGame3 from "./pages/wordGame/WordGame3";

import LetterLobby from "./pages/letterGame/LetterLobby";
import LetterGame1 from "./pages/letterGame/LetterGame1";
import LetterGame2 from "./pages/letterGame/LetterGame2";
import LetterGame3 from "./pages/letterGame/LetterGame3";
import LetterGame4 from "./pages/letterGame/LetterGame4";

import WordNoteMain from "./pages/wordNote/WordNoteMain";
import Stage from "./pages/etc/Stage";
import TutorialOne from "./pages/tutorial/TutorialOne";
import TutorialTwo from "./pages/tutorial/TutorialTwo";
import { IWord } from "./types/types";
import TutorialThree from "./pages/tutorial/TutorialThree";
import TutorialHome from "./pages/tutorial/TutorialHome";
import TutorialFour from "./pages/tutorial/TutorialFour";
import TutorialFive from "./pages/tutorial/TutorialFive";
import CameraCon from "./pages/camera/CameraCon";
import PhotoSelect from "./pages/camera/PhotoSelect";
import TutorialWordNote from "./pages/tutorial/TutorialWordNote";

type DataItem = {
  [key: string]: string[];
};

//네비게이션 관련 타입. 넘겨줄 인자가 없으면 undefined, 있으면 객체로 써주기
export type RootStackParamList = {
  Home: undefined;
  Main: undefined;
  Login: undefined;
  Stage: {
    gameType: string;
  };
  PictureLobby: undefined;
  PictureGame1: {
    word: IWord;
  };
  PictureGame2: {
    word: IWord;
  };
  PictureGame3: {
    word: IWord;
  };
  WordLobby: undefined;
  WordGame1: {
    word: IWord;
  };
  WordGame2: {
    word: IWord;
  };
  WordGame3: {
    word: IWord;
  };
  LetterLobby: undefined;
  LetterGame1: {
    word: IWord;
  };
  LetterGame2: {
    word: IWord;
  };
  LetterGame3: {
    word: IWord;
  };
  LetterGame4: {
    word: IWord;
  };
  MiniCard: {
    word: IWord;
    isFront: boolean;
  };
  WordNoteMain: undefined;
  TutorialOne: undefined;
  TutorialTwo: undefined;
  TutorialThree: {
    cameFromTutorialTwo: boolean;
  };
  TutorialHome: undefined;
  TutorialFour: {
    cameFromTutorialThree: boolean;
  };

  TutorialFive: {
    cameFromTutorialFour: boolean;
  };

  CameraCon: undefined;

  PhotoSelect: { origin: string; data: any };

  LetterCanvas: {
    list: string[];
  };

  WordCanvas: undefined;
  TutorialWordNote: undefined;
};

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar hidden={true} />
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
            animation: "fade",
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Stage" component={Stage} />
          <Stack.Screen name="PictureLobby" component={PictureLobby} />
          <Stack.Screen name="PictureGame1" component={PictureGame1} />
          <Stack.Screen name="PictureGame2" component={PictureGame2} />
          <Stack.Screen name="PictureGame3" component={PictureGame3} />
          <Stack.Screen name="WordLobby" component={WordLobby} />
          <Stack.Screen name="WordGame1" component={WordGame1} />
          <Stack.Screen name="WordGame2" component={WordGame2} />
          <Stack.Screen name="WordGame3" component={WordGame3} />
          <Stack.Screen name="LetterLobby" component={LetterLobby} />
          <Stack.Screen name="LetterGame1" component={LetterGame1} />
          <Stack.Screen name="LetterGame2" component={LetterGame2} />
          <Stack.Screen name="LetterGame3" component={LetterGame3} />
          <Stack.Screen name="LetterGame4" component={LetterGame4} />
          <Stack.Screen name="WordNoteMain" component={WordNoteMain} />
          <Stack.Screen name="TutorialOne" component={TutorialOne} />
          <Stack.Screen name="TutorialTwo" component={TutorialTwo} />
          <Stack.Screen name="TutorialThree" component={TutorialThree} />
          <Stack.Screen name="TutorialFour" component={TutorialFour} />
          <Stack.Screen name="TutorialFive" component={TutorialFive} />
          <Stack.Screen name="TutorialHome" component={TutorialHome} />
          <Stack.Screen name="CameraCon" component={CameraCon} />
          <Stack.Screen name="PhotoSelect" component={PhotoSelect} />
          <Stack.Screen name="TutorialWordNote" component={TutorialWordNote} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
