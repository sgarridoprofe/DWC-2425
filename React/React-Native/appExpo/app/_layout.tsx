import { Slot, Stack, Tabs } from "expo-router";


export default function RootLayout() {
  // return <Stack />;
  // return (
  //   <Stack>
  //     <Stack.Screen name="index" options={{ title: 'Home' }} />
  //     <Stack.Screen name="about" options={{ title: 'ABOUT' }} />
  //   </Stack>
  // );
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
