import { useLocation, useOutlet } from "react-router";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import { AnimatePresence, motion } from "motion/react";
import React from "react";

export function Layout() {
  const location = useLocation();
  const outlet = useOutlet();

  return (
    <div className="relative min-h-screen flex flex-col">
      <Navigation />
      <main id="main-content" className="relative flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo({ top: 0, left: 0, behavior: "instant" })}>
            <motion.div key={location.pathname} className="h-full">
              {outlet && React.cloneElement(outlet, { key: location.pathname })}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}