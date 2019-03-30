import React from "react";
import { View, Text } from "react-native";
import { Input } from "./";
import Styles from "../styles/Styles";
import { GRAY_OPACITY } from "../styles/Colors";

const LabelInput = ({
  value,
  wrapperStyle,
  textInputStyle,
  onChangeText,
  label,
  secureTextEntry,
  keyboardType,
  placeholder,
  isSearchBar,
  onFocus,
  onBlur,
  maxLength,
  multiline,
  isEditable,
  labelStyle
}) => {
  const {
    colorGray,
    fontSize16,
    baseFont,
    justifyContentSpaceBetween,
    flexDirectionRow
  } = Styles;
  return (
    <View>
      <View style={[flexDirectionRow, justifyContentSpaceBetween]}>
        <Text style={[colorGray, fontSize16, baseFont, labelStyle]}>
          {label}
        </Text>
      </View>
      <Input
        onChangeText={onChangeText}
        value={value}
        wrapperStyle={[wrapperStyle]}
        editable={isEditable ? false : true}
        autoCapitalize="none"
        textInputStyle={[fontSize16, textInputStyle]}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        placeholder={placeholder}
        placeholderTextColor={GRAY_OPACITY}
        isSearchBar={isSearchBar}
        onFocus={onFocus}
        onBlur={onBlur}
        maxLength={maxLength}
        multiline={multiline}
      />
    </View>
  );
};

const styles = {};

export { LabelInput };
