import { useRouter } from 'expo-router';
import { Text, View } from 'react-native';
import { MessagesIcon } from '@/assets/icons/messages';
import { ProfileIcon } from '@/assets/icons/profile';
import Button from '@/components/button';

export default function Index() {
  const router = useRouter();

  return (
    <View className="flex-1 gap-4">
      <View className="justify-end items-center flex-row gap-2">
        <Button
          onPress={() => {
            router.navigate('/chat');
          }}
        >
          <MessagesIcon color="white" />
        </Button>
        <Button
          onPress={() => {
            router.navigate('/profile');
          }}
        >
          <ProfileIcon color="white" />
        </Button>
      </View>

      <Text className="text-2xl font-bold text-red-500">
        Edit src/app/index.tsx to edit this screen.
      </Text>
    </View>
  );
}
