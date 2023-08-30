import {StyleProp, TextStyle} from 'react-native';
import {
  type NavigationState,
  Route,
  SceneRendererProps,
} from 'react-native-tab-view';

export type RouteState = NavigationState<Route>;
export type TabProps = SceneRendererProps & {
  navigationState: RouteState;
};
export type FontSizeRange = {
  upperLimit: number;
  lowerLimit: number;
};

export type TextStyleProp = StyleProp<TextStyle> | undefined;
