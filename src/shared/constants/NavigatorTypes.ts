import {NativeStackScreenProps} from 'react-native-screens/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Menu: undefined;
};

export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
