
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AppPermission from "./pages/AppPermission";
import InternetError from "./pages/InternetError";
import ErrorPage from "./pages/ErrorPage";
import Loading from "./pages/Loading";
import AttendanceCheck from "./pages/AttendanceCheck";
import FindId from "./pages/FindId";
import FindIdPhone from "./pages/FindIdPhone";
import FindIdResult from "./pages/FindIdResult";
import FindPassword from "./pages/FindPassword";
import FindPasswordVerify from "./pages/FindPasswordVerify";
import FindPasswordReset from "./pages/FindPasswordReset";
import SignupTerms from "./pages/SignupTerms";
import TermDetail from "./pages/TermDetail";
import Signup from "./pages/Signup";
import SignupComplete from "./pages/SignupComplete";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/permission" element={<AppPermission />} />
          <Route path="/internet-error" element={<InternetError />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/attendance" element={<AttendanceCheck />} />
          <Route path="/find-id" element={<FindId />} />
          <Route path="/find-id/phone" element={<FindIdPhone />} />
          <Route path="/find-id/result" element={<FindIdResult />} />
          <Route path="/find-password" element={<FindPassword />} />
          <Route path="/find-password/verify" element={<FindPasswordVerify />} />
          <Route path="/find-password/reset" element={<FindPasswordReset />} />
          <Route path="/signup/terms" element={<SignupTerms />} />
          <Route path="/terms/:type" element={<TermDetail />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup/complete" element={<SignupComplete />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
