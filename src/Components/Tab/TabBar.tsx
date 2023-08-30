import {FC, forwardRef, useMemo} from 'react';
import {
  FlatList,
  FlatListProps,
  ListRenderItem,
  TouchableOpacity,
} from 'react-native';

import {type Route} from 'react-native-tab-view';
import styles from './styles';
import {TabProps} from './types';
import TabBarLabel from './TabBarLabel';

export type TabbarProps = TabProps & {
  handleIndexChange(index: number): void;
};

const TabItem: FC<
  {
    item: Route;
    index: number;
  } & TabbarProps
> = ({item: {title = ''}, index, handleIndexChange, navigationState}) => {
  const active = useMemo(
    () => navigationState.index === index,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [navigationState.index],
  );

  return (
    <TouchableOpacity
      style={styles.tabItem}
      onPress={() => handleIndexChange(index)}>
      <TabBarLabel {...{title, active}} />
    </TouchableOpacity>
  );
};

const TabBar = forwardRef<
  FlatList<Route>,
  TabbarProps & Partial<FlatListProps<Route>>
>(({contentContainerStyle, ...props}, ref) => {
  const renderItem: ListRenderItem<Route> = ({item, index}) => (
    <TabItem {...{item, index, ...props}} />
  );

  return (
    <FlatList
      horizontal
      {...{ref, renderItem, contentContainerStyle}}
      style={styles.tabBar}
      showsHorizontalScrollIndicator={false}
      data={props.navigationState.routes}
      keyExtractor={({key}) => key}
    />
  );
});

export default TabBar;
