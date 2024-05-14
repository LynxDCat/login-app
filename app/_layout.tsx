import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "",
          headerShown: false,
        }}
      />
    </Stack>
  );
}
