import type { PressableProps } from 'react-native';
import { cn } from '@maxigarcia/js-utils';
import { Pressable, Text } from 'react-native';

const variants = {
  primary: 'bg-accent hover:bg-accent-hover active:bg-accent-hover active:opacity-90',
  ghost: 'bg-transparent hover:bg-muted active:bg-muted',
};

const textVariants = {
  primary: 'text-accent-foreground',
  ghost: 'text-accent',
};

const sizes = {
  default: 'rounded-md px-4 py-3',
  icon: 'size-10 items-center justify-center rounded-md',
};

interface ButtonProps extends PressableProps {
  children: React.ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
}

export default function Button({
  onPress,
  variant = 'primary',
  size = 'default',
  children,
  className,
}: ButtonProps) {
  return (
    <Pressable
      className={cn(sizes[size], variants[variant], className)}
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
