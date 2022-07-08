// routes
import Content from './routes';
// theme
import ThemeProvider from './theme';
import {AuthProvider} from  './components/auth'
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/chart/BaseOptionChart';

// ----------------------------------------------------------------------

export default function App() {
  return (
      <AuthProvider>
          <ThemeProvider>
              <ScrollToTop />
              <BaseOptionChartStyle />
              <Content />
          </ThemeProvider>
      </AuthProvider>
  );
}
