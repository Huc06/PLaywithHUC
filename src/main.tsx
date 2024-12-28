import ReactDOM from "react-dom/client";
import Provider from "./providers/provider";
import './index.css';
import { AppRouter } from "./router";

const root = document.getElementById("root");

if (root) {
  ReactDOM.createRoot(root).render(
      <Provider>
        <AppRouter/>
      </Provider>
  );
} else {
  console.error("Root element not found");
}