import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import StudentList from "./pages/StudentList";
import FavouriteStudents from "./pages/FavouriteStudents";

import {
  StudentProvider
} from "./context/StudentContext";

function App() {
  return (
    <BrowserRouter>

      <StudentProvider>

        <Navbar />

        <Routes>

          <Route
            path="/"
            element={<StudentList />}
          />

          <Route
            path="/favourites"
            element={<FavouriteStudents />}
          />

        </Routes>

      </StudentProvider>

    </BrowserRouter>
  );
}

export default App;
