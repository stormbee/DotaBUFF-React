import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import HeroScreen from './screens/HeroScreen';
import HeroesScreen from './screens/HeroesScreen';
import NotFoundScreen from './screens/NotFoundScreen';
import ProfileScreen from './screens/ProfileScreen';
import MatchesScreen from './screens/MatchesScreen';
import MatchScreen from './screens/MatchScreen';
import ItemsScreen from './screens/ItemsScreen';
function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<HeroesScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/heroes" element={<HeroesScreen />} />
        <Route path="/hero/:id" element={<HeroScreen />} />
        <Route path="/items" element={<ItemsScreen />} />
        <Route path="/matches" element={<MatchesScreen />} />
        <Route path="/matches/:id" element={<MatchScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </Provider>
  );
}

export default App;
