import {FC, useContext, useEffect} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
} from 'react-native-reanimated';
import {mortarGrey, white} from '../../Theme/color';
import {DefaultFontTabLabelSize, FontContext, LabelStyleContext} from '.';

type P = {
  title: string;
  active: boolean;
};

const TabBarLabel: FC<P> = props => {
  const {title, active} = props;

  const fontSizeRange = useContext(FontContext) ?? DefaultFontTabLabelSize;
  const style = useContext(LabelStyleContext) ?? {};

  const _fontSize = useSharedValue(
    active ? fontSizeRange.upperLimit : fontSizeRange.lowerLimit,
  );
  const opacity = useSharedValue(active ? 1 : 0.5);
  const color = useSharedValue(active ? white : mortarGrey);

  useEffect(() => {
    _fontSize.value = withTiming(
      interpolate(
        active ? fontSizeRange.lowerLimit : fontSizeRange.upperLimit,
        [fontSizeRange.lowerLimit, fontSizeRange.upperLimit],
        [fontSizeRange.upperLimit, fontSizeRange.lowerLimit],
      ),
      {duration: 200},
    );
    opacity.value = withTiming(active ? 1 : 0.5, {duration: 200});
    color.value = active ? white : mortarGrey;
  }, [
    active,
    _fontSize,
    opacity,
    color,
    fontSizeRange.upperLimit,
    fontSizeRange.lowerLimit,
  ]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      fontSize: _fontSize.value,
      opacity: opacity.value,
      color: color.value,
    };
  });

  return <Animated.Text style={[animatedStyle, style]}>{title}</Animated.Text>;
};

export default TabBarLabel;
