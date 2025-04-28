import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hola Mundo...</Text>
      <Link href="/about">About</Link>
      <Link href="/productos" asChild>
      <Pressable>
        <Text>productos</Text>
      </Pressable>
    </Link>
    </View>
  );
}
