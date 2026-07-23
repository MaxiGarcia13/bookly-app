import { useRouter } from 'expo-router';
import { Text, View } from 'react-native';
import { MessagesIcon } from '@/assets/icons/messages';
import { ProfileIcon } from '@/assets/icons/profile';
import Button from '@/components/button';
import { useTheme } from '@/hooks/theme';

export default function Index() {
  const router = useRouter();
  const { colors } = useTheme();

  return (
    <View className="flex-1 gap-4 bg-background">
      <View className="flex-row items-center justify-end gap-2">
        <Button
          variant="ghost"
          size="icon"
          onPress={() => {
            router.navigate('/chat');
          }}
        >
          <MessagesIcon color={colors.foreground} />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onPress={() => {
            router.navigate('/profile');
          }}
        >
          <ProfileIcon color={colors.foreground} />
        </Button>
      </View>

      <Text className="text-2xl font-bold text-foreground">
        Edit src/app/index.tsx to edit this screen.
      </Text>
    </View>
  );
}
