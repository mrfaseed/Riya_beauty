import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function SiteSelector({ onClose }) {
  const navigate = useNavigate();
  const [showSelector, setShowSelector] = useState(false);

  useEffect(() => {
    const preference = Cookies.get("userPreference");

    if (preference === "beauty") {
      navigate("/");
    } else if (preference === "tattoo") {
      navigate("/tattoo");
    } else {
      // No cookie found — show selector
      setShowSelector(true);
    }
  }, [navigate]);

  const handleChoice = (path, type) => {
    Cookies.set("userPreference", type, { expires: 7 });
    onClose();
    navigate(path);
  };

  if (!showSelector) return null; // Prevent rendering the modal if preference exists

  return (
    <>
      {/* Import font */}
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&display=swap"
        rel="stylesheet"
      />

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex flex-col sm:flex-row overflow-hidden bg-black"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {/* HEADING */}
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-center z-30">
            <h1 className="text-white text-2xl sm:text-4xl font-semibold tracking-wide">
              Choose a Service
            </h1>
          </div>

          {/* LEFT – BEAUTY PARLOUR */}
          <div className="relative w-full sm:w-1/2 h-1/2 sm:h-full overflow-hidden">
            <iframe
              src="https://assets.pinterest.com/ext/embed.html?id=212021095123910486"
              title="beauty-board"
              className="absolute inset-0 w-full h-full scale-125 pointer-events-none"
              style={{ border: "none" }}
            ></iframe>

            <div className="absolute inset-0 bg-gradient-to-tr from-rose-100/40 via-pink-100/20 to-transparent" />
            <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black/40 to-transparent" />

            <div className="absolute inset-0 flex flex-col items-center justify-end text-center pb-12 sm:pb-20">
              <h2
                onClick={() => handleChoice("/", "beauty")}
                className="text-white text-3xl sm:text-6xl font-bold cursor-pointer drop-shadow-xl leading-tight"
              >
                Beauty Parlour
              </h2>
            </div>
          </div>

          {/* RIGHT – TATTOO STUDIO */}
          <div className="relative w-full sm:w-1/2 h-1/2 sm:h-full overflow-hidden">
            <iframe
              src="https://assets.pinterest.com/ext/embed.html?id=335447872272010618"
              title="tattoo-board"
              className="absolute inset-0 w-full h-full scale-125 pointer-events-none"
              style={{ border: "none" }}
            ></iframe>

            <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/70 via-black/60 to-transparent" />
            <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black/40 to-transparent" />

            <div className="absolute inset-0 flex flex-col items-center justify-end text-center pb-12 sm:pb-20">
              <h2
                onClick={() => handleChoice("/tattoo", "tattoo")}
                className="text-white text-3xl sm:text-6xl font-bold cursor-pointer drop-shadow-xl leading-tight"
              >
                Tattoo Studio
              </h2>
            </div>
          </div>

          {/* CLOSE BUTTON */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => handleChoice("/", "beauty")}
            className="absolute top-6 right-6 text-white text-3xl font-bold drop-shadow-lg hover:text-rose-400 z-30"
          >
            ✕
          </motion.button>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
