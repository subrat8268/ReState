import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="mb-10 text-3xl text-red-800 font-rubik">
        Welcome to ReState
      </Text>
    </View>
  );
}
