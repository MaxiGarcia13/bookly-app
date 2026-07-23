import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@/hooks/theme';
import '@/global.css';

export default function RootLayout() {
  const { vars, colors } = useTheme();

  return (
    <SafeAreaView
      className="flex-1 bg-background"
      style={vars}
      edges={['top', 'left', 'right']}
    >
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            flex: 1,
            padding: 16,
            maxWidth: 900,
            width: '100%',
            margin: 'auto',
            backgroundColor: colors.background,
          },
        }}
      />
    </SafeAreaView>
  );
}
