import Create from "./Pages/create/Create";
import Home from "./Pages/home/Home";
import Root from "./Pages/Root";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="create" element={<Create />} />
      {/* ... etc. */}
    </Route>
  )
);
export default function App() {
  return <RouterProvider router={router} />;
}
