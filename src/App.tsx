
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
import GranShop from "./pages/GranShop";
import MyPage from "./pages/MyPage";
import GradeGuide from "./pages/GradeGuide";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import MyCoupon from "./pages/MyCoupon";
import CouponRegister from "./pages/CouponRegister";
import Points from "./pages/Points";
import AttendanceCheck from "./pages/AttendanceCheck";
import OrderHistory from "./pages/OrderHistory";
import OrderDetail from "./pages/OrderDetail";
import GiftBox from "./pages/GiftBox";

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
          <Route path="/granshop" element={<GranShop />} />
          <Route path="/granshop/giftset" element={<GranShop />} />
          <Route path="/granshop/perfume" element={<GranShop />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/grade-guide" element={<GradeGuide />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/my-coupon" element={<MyCoupon />} />
          <Route path="/coupon-register" element={<CouponRegister />} />
          <Route path="/points" element={<Points />} />
          <Route path="/attendance" element={<AttendanceCheck />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/order-history/:id" element={<OrderDetail />} />
          <Route path="/gift-box" element={<GiftBox />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
