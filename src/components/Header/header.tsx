import { Image, TouchableOpacity, View } from "react-native";
import React, { FC } from "react";
import style from "./styles";
import TextView from "../TextView/textView";
import { Images } from "../../constant";
import { useNavigation } from "@react-navigation/native";



interface HeaderProps {
  headerTitle?: string;
  backButtonEnable?: boolean;
   

}


const Header: FC<HeaderProps> = ( {
  headerTitle,
  backButtonEnable
} ) => {

  const navigation = useNavigation()

  return (
    <View style={ style.headerContainer }>
      <View>
        { backButtonEnable && (
          <TouchableOpacity
            activeOpacity={ 0.5 }
            onPress={ () => navigation.goBack() }
          >
            <Image
              source={ Images.ic_back }
              style={ style.headerBackImage }
            />
          </TouchableOpacity>
        ) }
        <TextView style={ style.headerTitle }>
          { headerTitle }
        </TextView>
      </View>
    </View>
  );
};

export default Header;


