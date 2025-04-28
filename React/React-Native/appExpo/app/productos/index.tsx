import { Link } from "expo-router";
import { Text, View } from "react-native";
import ProductGrid from "../components/ProductGrid";



export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Mostrando productos</Text>
      <ProductGrid />
    
    </View>
  );
}
