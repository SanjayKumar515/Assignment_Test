import {
  ActivityIndicator,
  TouchableOpacity,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import styles from "./styles";
import { FC } from "react";
import { TextView } from "../index";
import _ from "lodash";

interface ButtonProps {
  onPress?: () => void;
  style?: ViewStyle;
  title?: string | null;
}

const Button: FC<ButtonProps> = ( {
  onPress,
  style,
  title,
} ) => {
  const { buttonContainer, buttonView, touchableOpacityStyle, buttonText } =
    styles;
  const handleClick = () => {
    try {
      if ( onPress ) {
        _.debounce( onPress, 500 )();
      }
    } catch ( error ) {
      console.warn( "handleClick", error );
    }
  };

  return (
    <TouchableOpacity style={ style } onPress={ () => handleClick() }>
      <View style={ buttonContainer }>
        <View style={ touchableOpacityStyle }>


          <View style={ buttonView }>
            <TextView style={ buttonText }>{ title }</TextView>
          </View>


        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
