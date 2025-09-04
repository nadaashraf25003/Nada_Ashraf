// Style
import "./index.css";

// React
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Components
import App from "./App.jsx";
import ThemeProvider from "./Context/ThemeContext.jsx";
import Home from "./Home.jsx";

let router = createBrowserRouter([
  {
    path:"/",
    Component:App,
    children:[
      {
        index:true,
        Component:Home,
      },
    ]
  }
])
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}/>
    </ThemeProvider>
  </StrictMode>
);

// 4. Alias (shortcuts for imports)
// import { fileURLToPath, URL } from 'node:url';

// export default defineConfig({
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url)),
//     },
//   },
// });

// 👉 Now instead of:

// import Button from '../../components/Button
// You can do:

// import Button from '@/components/Button'
