import { ProviderWrapper as CountProviderWrapper } from "../../contexts/countersContext";
import App from "../../App";

const AppLoader= () => {
  return (
    <CountProviderWrapper >
        <App />
      </CountProviderWrapper >
  )
}

export default AppLoader;
