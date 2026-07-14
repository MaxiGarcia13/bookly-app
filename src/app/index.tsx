import { Pressable, Text, View } from 'react-native';

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Pressable
        className="bg-blue-500 p-4 rounded-md hover:bg-blue-600 touch-auto"
        onPress={() => {
          console.warn('Pressed');
        }}
      >
        <Text>Press me</Text>
      </Pressable>

      <Text className="text-2xl font-bold text-red-500">
        Edit src/app/index.tsx to edit this screen.
      </Text>
    </View>
  );
}
