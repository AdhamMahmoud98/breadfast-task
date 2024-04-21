import React, { useState } from "react";
import {
  Animated,
  ViewStyle,
  StyleProp,
  Pressable,
  PressableProps,
} from "react-native";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

export interface IBouncableViewProps extends PressableProps {
  onPress?: () => void;
  bounceEffectIn?: number;
  bounceEffectOut?: number;
  bounceVelocityIn?: number;
  bounceVelocityOut?: number;
  bouncinessIn?: number;
  bouncinessOut?: number;
  useNativeDriver?: boolean;
  children?: React.ReactNode;
  style?: CustomStyleProp;
}

const BouncableView: React.FC<IBouncableViewProps> = (props) => {
  const {
    bounceEffectIn = 0.93,
    bounceEffectOut = 1,
    bounceVelocityIn = 0.1,
    bounceVelocityOut = 0.4,
    bouncinessIn = 0,
    bouncinessOut = 0,
    children,
    style,
    onPress,
    useNativeDriver = true,
    ...otherProps
  } = props;

  const [bounceValue] = useState(new Animated.Value(1));

  const bounceAnimation = (
    value: number,
    velocity: number,
    bounciness: number
  ) => {
    Animated.spring(bounceValue, {
      toValue: value,
      velocity,
      bounciness,
      useNativeDriver,
    }).start();
  };

  return (
    <AnimatedPressable
      {...otherProps}
      style={[{ transform: [{ scale: bounceValue }] }, style]}
      onPressIn={() => {
        bounceAnimation(bounceEffectIn, bounceVelocityIn, bouncinessIn);
      }}
      onPressOut={() => {
        bounceAnimation(bounceEffectOut, bounceVelocityOut, bouncinessOut);
      }}
      onPress={onPress}
    >
      {children}
    </AnimatedPressable>
  );
};

export default BouncableView;
