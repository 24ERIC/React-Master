import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Welcome from "./components/Wix/Welcome/Welcome";
import Team from "./components/Wix/Team/Team"
import Contact from "./components/Wix/Contact/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="welcome" element={<Welcome />} />
          <Route path="team" element={<Team />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);