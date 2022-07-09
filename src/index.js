import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { Dashboard, Landing, Authentication } from './pages';

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="/welcome" element={<Landing />} />
          <Route path='/auth' element={<Authentication type="existing" title="Welcome Back"/>} />
          <Route path='/auth/new' element={<Authentication type="new" title="Create New Account"/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="*"
            element={
              <main>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
    </Routes>
  </BrowserRouter>
);
