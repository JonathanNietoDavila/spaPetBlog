import { AppTheme } from './theme/AppTheme';
import { AppRouter } from './router/AppRouter';

import './sass/style.scss';

function App() {
  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  );
}

export default App;
