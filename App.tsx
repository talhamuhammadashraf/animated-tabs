import {StatusBar} from 'react-native';
import Navigator from './src/Navigator';

function App(): JSX.Element {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Navigator />
    </>
  );
}
export default App;
