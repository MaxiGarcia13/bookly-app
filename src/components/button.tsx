import type { PressableProps } from 'react-native';
import { cn } from '@maxigarcia/js-utils';
import { Pressable, Text } from 'react-native';

const variants = {
  primary: 'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 active:opacity-90',
};

const textVariants = {
  primary: 'text-white',
};

interface ButtonProps extends PressableProps {
  children: React.ReactNode;
  variant?: keyof typeof variants;
}

export default function Button({ onPress, variant = 'primary', children, className }: ButtonProps) {
  return (
    <Pressable
      className={cn(`rounded-md px-4 py-3`, variants[variant], className)}
      onPress={onPress}
    >
      {typeof children === 'string' || typeof children === 'number' ? (
        <Text className={cn('text-center font-semibold', textVariants[variant])}>{children}</Text>
      ) : (
        children
      )}
    </Pressable>
  );
}
