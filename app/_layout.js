import { Stack } from "expo-router";
import { Slot } from "expo-router";
import { SessionProvider } from "../store/auth-context";

{
  /*
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
}*/
}

export default function RootLayout() {
  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
}
