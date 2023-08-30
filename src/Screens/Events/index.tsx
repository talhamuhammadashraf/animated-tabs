import AnimatedTab from '../../Components/Tab';
import styles from './styles';
import Explore from '../../Components/Explore';
import ForYou from '../../Components/ForYou';

export default function EventsScreen() {
  return (
    <AnimatedTab
      scenes={[
        {key: 'explore', title: 'Explore', component: Explore},
        {key: 'forYou', title: 'For You', component: ForYou},
      ]}
      tabbarContainerStyle={styles.tabbarContainerStyle}
      fontSizeRange={{upperLimit: 22, lowerLimit: 22}}
      labelStyle={styles.labelStyle}
    />
  );
}
