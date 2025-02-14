
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import JournalDetail from "./pages/JournalDetail";
import EventDetail from "./pages/EventDetail";
import Awards from "./pages/Awards";
import Stores from "./pages/Stores";
import Guide from "./pages/Guide";
import GuideResult from "./pages/GuideResult";
import GiftSet from "./pages/GiftSet";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/main" replace />} />
          <Route path="/main" element={<Main />} />
          <Route path="/journal" element={<Navigate to="/main" />} />
          <Route path="/event" element={<Navigate to="/main" />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/guide/result" element={<GuideResult />} />
          <Route path="/journal/:id" element={<JournalDetail />} />
          <Route path="/event/:id" element={<EventDetail />} />
          <Route path="/granshop" element={<GiftSet />} />
          <Route path="/granshop/gift-set" element={<GiftSet />} />
          <Route path="/granshop/perfume" element={<GiftSet />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

