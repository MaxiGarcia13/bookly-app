import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import '@/global.css';

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top', 'left', 'right']}>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            flex: 1,
            padding: 16,
            maxWidth: 900,
            width: '100%',
            margin: 'auto',
          },
        }}
      />
    </SafeAreaView>
  );
}
