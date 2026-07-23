import { Text, View } from 'react-native';

export default function ChatView() {
  return (
    <View className="flex-1 gap-4 bg-background">
      <Text className="text-2xl font-bold text-foreground">Chat</Text>
    </View>
  );
}
