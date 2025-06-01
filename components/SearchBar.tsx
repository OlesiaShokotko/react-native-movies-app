import { View, TextInput, Image, TouchableOpacity } from "react-native";
import { icons } from "@/constants/icons";

interface Props {
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onPress?: () => void;
  inputRef?: React.RefObject<TextInput | null>;
}

const SearchBar = ({
  placeholder,
  value,
  onChangeText,
  onPress,
  inputRef,
}: Props) => {
  if (onPress) {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
        className="flex-row items-center bg-dark-200 rounded-full px-5 py-4"
      >
        <Image
          source={icons.search}
          className="w-5 h-5"
          resizeMode="contain"
          tintColor="#AB8BFF"
        />
        <TextInput
          pointerEvents="none"
          placeholder={placeholder}
          value={value}
          editable={false}
          className="flex-1 ml-2 text-white"
          placeholderTextColor="#A8B5DB"
        />
      </TouchableOpacity>
    );
  }

  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <Image
        source={icons.search}
        className="w-5 h-5"
        resizeMode="contain"
        tintColor="#AB8BFF"
      />
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        className="flex-1 ml-2 text-white"
        placeholderTextColor="#A8B5DB"
        ref={inputRef}
      />
    </View>
  );
};

export default SearchBar;
