import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import CandidateSearch from "./components/CandidateSearch.tsx";
import SavedCandidates from "./components/SavedCandidates.tsx";
import ErrorPage from "./components/ErrorPage.tsx";
import Nav from "./components/Nav.tsx";

// ROOT LAYOUT COMPONENT
const RootLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />
      <Outlet />
    </div>
  );
};

// ROUTER CONFIGURATION WITH FUTURE FLAGS
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index element={<CandidateSearch />} />
      <Route path="saved" element={<SavedCandidates />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  ),
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true
    }
  }
);