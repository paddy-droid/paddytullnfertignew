
import React, { lazy, Suspense } from 'react';

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const StPoelten = lazy(() => import("./pages/StPoelten"));
const Wien = lazy(() => import("./pages/Wien"));
const Tulln = lazy(() => import("./pages/Tulln"));
const Krems = lazy(() => import("./pages/Krems"));
const BadenBeiWien = lazy(() => import("./pages/BadenBeiWien"));
const Klosterneuburg = lazy(() => import("./pages/Klosterneuburg"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/st-poelten" element={<StPoelten />} />
            <Route path="/wien" element={<Wien />} />
            <Route path="/tulln" element={<Tulln />} />
            <Route path="/krems" element={<Krems />} />
            <Route path="/baden-bei-wien" element={<BadenBeiWien />} />
            <Route path="/klosterneuburg" element={<Klosterneuburg />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        
        {/* WhatsApp Fixed Button */}
        <a
          href="https://wa.me/436644351622"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 z-50 hover:scale-110 transition-transform"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"
            alt="WhatsApp Chat"
            className="h-14 w-14 rounded-full shadow-lg"
            loading="lazy"
          />
        </a>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
