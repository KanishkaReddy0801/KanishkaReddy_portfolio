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
      <main className="relative flex-1">
        <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo({ top: 0, left: 0, behavior: "instant" })}>
          <motion.div key={location.pathname} className="h-full">
            {outlet && React.cloneElement(outlet, { key: location.pathname })}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}