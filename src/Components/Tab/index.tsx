import {TabView, SceneMap, type Route} from 'react-native-tab-view';
import TabBar from './TabBar';
import {FontSizeRange, RouteState, TabProps, TextStyleProp} from './types';
import {createContext, useRef, useState} from 'react';
import {FlatList, StyleProp, Vibration, ViewStyle} from 'react-native';

export const DefaultFontTabLabelSize = {
  upperLimit: 22,
  lowerLimit: 14,
};

export const FontContext = createContext<FontSizeRange>(
  DefaultFontTabLabelSize,
);

export const LabelStyleContext = createContext<TextStyleProp>({});

type AnimatedTabProps = {
  fontSizeRange?: FontSizeRange;
  scenes: {key: string; title: string; component: () => React.JSX.Element}[];
  tabbarContainerStyle?: StyleProp<ViewStyle> | undefined;
  labelStyle?: TextStyleProp;
};

export default function AnimatedTab(props: AnimatedTabProps): JSX.Element {
  const {
    fontSizeRange = DefaultFontTabLabelSize,
    scenes,
    tabbarContainerStyle,
    labelStyle,
  } = props;

  const routes = scenes.map<Route>(({key, title}) => ({key, title}));

  const [state, setState] = useState<RouteState>({
    index: 0,
    routes,
  });

  const tabbarListRef = useRef<FlatList<Route>>(null);

  const handleIndexChange = (index: number) => {
    setState(s => ({...s, index}));

    tabbarListRef.current?.scrollToIndex({
      animated: true,
      index,
      viewPosition: 0.5,
    });

    Vibration.vibrate();
  };

  const renderTabBar = (p: TabProps) => (
    <TabBar
      {...p}
      {...{handleIndexChange}}
      ref={tabbarListRef}
      contentContainerStyle={tabbarContainerStyle}
    />
  );

  const renderScene = SceneMap(
    scenes.reduce((obj, item) => ({...obj, [item.key]: item.component}), {}),
  );

  return (
    <FontContext.Provider value={fontSizeRange}>
      <LabelStyleContext.Provider value={labelStyle}>
        <TabView
          navigationState={state}
          {...{renderScene, renderTabBar}}
          onIndexChange={handleIndexChange}
        />
      </LabelStyleContext.Provider>
    </FontContext.Provider>
  );
}
