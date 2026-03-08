import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HotelSato from "./pages/HotelSato";
import AnnexInn from "./pages/AnnexInn";
import CoinLaundry from "./pages/CoinLaundry";
import Recruit from "./pages/Recruit";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/hotel-sato" element={<HotelSato />} />
          <Route path="/annex-inn" element={<AnnexInn />} />
          <Route path="/coin-laundry" element={<CoinLaundry />} />
          <Route path="/recruit" element={<Recruit />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
