import { OpinionsProvider } from '../../contexts/OpinionContext';
import App from '../../App';

const AppLoader = () => {
  return (
    <OpinionsProvider>
      <App />
    </OpinionsProvider>
  );
};

export default AppLoader;
