import { Text, View } from 'react-native';
import Button from '@/components/button';

export default function Index() {
  return (
    <View className="flex-1 bg-red-500">
      <Button
        onPress={() => {
          console.warn('Pressed');
        }}
      >
        Hola
      </Button>

      <Text className="text-2xl font-bold text-red-500">
        Edit src/app/index.tsx to edit this screen.
      </Text>
    </View>
  );
}
