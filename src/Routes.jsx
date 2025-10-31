import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import Contact from "./pages/Contact.jsx";
import ServicesOverview from "./pages/services-overview/components/index.jsx";
import About from "./pages/about";
import Homepage from "./pages/homepage";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services-overview" element={<ServicesOverview />} />
          <Route path="/about" element={<About />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;

