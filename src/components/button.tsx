import type { PressableProps } from 'react-native';
import { cn } from '@maxigarcia/js-utils';
import { Pressable, Text } from 'react-native';

interface ButtonProps extends PressableProps {
  children: React.ReactNode;
}

export default function Button({ onPress, children, className }: ButtonProps) {
  return (
    <Pressable
      className={cn(`rounded-md bg-blue-500 px-4 py-3 hover:bg-blue-600 active:bg-blue-700 active:opacity-90`, className)}
      onPress={onPress}
    >
      <Text className="text-center font-semibold text-white">{children}</Text>
    </Pressable>
  );
}
