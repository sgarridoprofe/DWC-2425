import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";
import ProductGrid  from '@/app/components/ProductGrid'

export default function Productos() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Productos...</Text>
      {/* <Link href="/about">About</Link>
      <Link href="/productos" asChild>
      <Pressable>
        <Text>productos</Text>
      </Pressable>
    </Link> */}
    <ProductGrid/>
    </View>
  );
}
