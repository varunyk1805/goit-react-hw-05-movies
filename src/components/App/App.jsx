import { Routes, Route } from "react-router-dom";
import { Layout } from "components/Layout/Layout";
import { HomePage } from "pages/HomePage";
import { MoviesPage } from "pages/MoviesPage";

export const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<HomePage/>} />
            <Route path='movies' element={<MoviesPage/>} />
            {/* <Route path='movies/:movieId' element={MovieDetailsPage}>
                <Route path='movies/:movieId/cast' element={Cast} />
                <Route path='movies/:movieId/reviews' element={Reviews} />
            </Route> */}
        </Route>
    </Routes>
  );
};
