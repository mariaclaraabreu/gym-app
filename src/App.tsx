import { BrowserRouter } from "react-router-dom";
import Router from "./routes/routes";
import { ConfigProvider } from "antd";

const App = () => {
  return (
    <BrowserRouter>
      <ConfigProvider
        theme={{ hashed: false }}
      >
        <Router />
      </ConfigProvider>
    </BrowserRouter>
  );
};

export default App;