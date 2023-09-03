import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./layout/RootLayout";

import { HomePage, CryptoDetails, Cryptocurrencies, CryptoNews } from "./conponents";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage/>}/>
      <Route path="cryptocurrencies" element={<Cryptocurrencies/>}/>
      <Route path="cryptocoin/:id" element={<CryptoDetails/>}/>
      <Route path="cryptonews" element={<CryptoNews/>}/>
    </Route>)
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
