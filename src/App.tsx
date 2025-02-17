import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode, useState } from "react";
import Splash from "./components/Splash";
import Index from "./pages/Index";
import Login from "./pages/Login";
import CoffeeStamp from "./pages/CoffeeStamp";
import Passport from "./pages/Passport";
import AddressList from "./pages/AddressList";
import AddressForm from "./pages/AddressForm";
import Checkout from "./pages/Checkout";
import GiftCheckout from "./pages/GiftCheckout";
import NotFound from "./pages/NotFound";
import InternetError from "./pages/InternetError";
import ErrorPage from "./pages/ErrorPage";
import UnderConstruction from "./pages/UnderConstruction";
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
import GiftRefuse from "./pages/GiftRefuse";
import OrderReturn from "./pages/OrderReturn";
import RecentProducts from "./pages/RecentProducts";
import OrderStatusHistory from "./pages/OrderStatusHistory";
import OrderCancelDetail from "./pages/OrderCancelDetail";
import OrderExchangeDetail from "./pages/OrderExchangeDetail";
import OrderReturnDetail from "./pages/OrderReturnDetail";
import FindId from "./pages/FindId";
import FindIdPhone from "./pages/FindIdPhone";
import FindIdResult from "./pages/FindIdResult";
import FindPassword from "./pages/FindPassword";
import FindPasswordVerify from "./pages/FindPasswordVerify";
import FindPasswordReset from "./pages/FindPasswordReset";
import Signup from "./pages/Signup";
import SignupTerms from "./pages/SignupTerms";
import SignupVerify from "./pages/SignupVerify";
import SignupComplete from "./pages/SignupComplete";
import TermDetail from "./pages/TermDetail";
import MemberGeneralInfo from "./pages/MemberGeneralInfo";
import MemberSocialInfo from "./pages/MemberSocialInfo";
import Withdraw from "./pages/Withdraw";
import CustomerService from "./pages/CustomerService";
import FAQ from "./pages/FAQ";
import ChatSupport from "./pages/ChatSupport";
import Partnership from "./pages/Partnership";
import Notice from "./pages/Notice";
import Terms from "./pages/Terms";
import LanguageSettings from "./pages/LanguageSettings";
import NotificationSettings from "./pages/NotificationSettings";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import Challenge from "./pages/Challenge";
import ChallengeSeasons from "./pages/ChallengeSeasons";
import GiftSetDetail from "./pages/GiftSetDetail";
import PerfumeDetail from "./pages/PerfumeDetail";
import WishList from "./pages/WishList";
import OrderDetailNew from "./pages/OrderDetailNew";
import OrderDetailNew2 from "./pages/OrderDetailNew2";

const queryClient = new QueryClient();

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <Splash onComplete={() => setShowSplash(false)} />;
  }

  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/coffee-stamp" element={<CoffeeStamp />} />
              <Route path="/passport" element={<Passport />} />
              <Route path="/wishlist" element={<WishList />} />
              <Route path="/address/list" element={<AddressList />} />
              <Route path="/address/new" element={<AddressForm />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/gift-checkout" element={<GiftCheckout />} />
              <Route path="/journal" element={<JournalDetail />} />
              <Route path="/event" element={<EventDetail />} />
              <Route path="/awards" element={<Awards />} />
              <Route path="/stores" element={<Stores />} />

              {/* Error Pages */}
              <Route path="/internet-error" element={<InternetError />} />
              <Route path="/error" element={<ErrorPage />} />
              <Route path="/notfound" element={<NotFound />} />
              <Route path="/under-construction" element={<UnderConstruction />} />

              <Route path="/guide" element={<Guide />} />
              <Route path="/guide/result" element={<GuideResult />} />
              <Route path="/journal/:id" element={<JournalDetail />} />
              <Route path="/event/:id" element={<EventDetail />} />
              <Route path="/granshop" element={<GranShop />} />
              <Route path="/granshop/giftset" element={<GranShop />} />
              <Route path="/granshop/giftset/:id" element={<GiftSetDetail />} />
              <Route path="/granshop/perfume" element={<GranShop />} />
              <Route path="/granshop/perfume/:id" element={<PerfumeDetail />} />
              <Route path="/granshop/space" element={<GranShop />} />
              <Route path="/granshop/body" element={<GranShop />} />
              <Route path="/mypage" element={<MyPage />} />
              <Route path="/grade-guide" element={<GradeGuide />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/settings/language" element={<LanguageSettings />} />
              <Route path="/settings/notification" element={<NotificationSettings />} />
              <Route path="/my-coupon" element={<MyCoupon />} />
              <Route path="/coupon-register" element={<CouponRegister />} />
              <Route path="/points" element={<Points />} />
              <Route path="/attendance" element={<AttendanceCheck />} />
              <Route path="/order-history" element={<OrderHistory />} />
              <Route path="/order-history/:id" element={<OrderDetail />} />
              <Route path="/gift-box" element={<GiftBox />} />
              <Route path="/order/refuse" element={<GiftRefuse />} />
              <Route path="/order/return" element={<OrderReturn />} />
              <Route path="/recent-products" element={<RecentProducts />} />
              <Route path="/order-status-history" element={<OrderStatusHistory />} />
              <Route path="/order-cancel-detail" element={<OrderCancelDetail />} />
              <Route path="/order-exchange-detail" element={<OrderExchangeDetail />} />
              <Route path="/order-return-detail" element={<OrderReturnDetail />} />
              <Route path="/find-id" element={<FindId />} />
              <Route path="/find-id/phone" element={<FindIdPhone />} />
              <Route path="/find-id/result" element={<FindIdResult />} />
              <Route path="/find-password" element={<FindPassword />} />
              <Route path="/find-password/verify" element={<FindPasswordVerify />} />
              <Route path="/find-password/reset" element={<FindPasswordReset />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/signup/terms" element={<SignupTerms />} />
              <Route path="/signup/verify" element={<SignupVerify />} />
              <Route path="/signup/complete" element={<SignupComplete />} />
              <Route path="/term-detail" element={<TermDetail />} />
              <Route path="/member-general-info" element={<MemberGeneralInfo />} />
              <Route path="/member-social-info" element={<MemberSocialInfo />} />
              <Route path="/withdraw" element={<Withdraw />} />
              <Route path="/customer-service" element={<CustomerService />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/chat-support" element={<ChatSupport />} />
              <Route path="/partnership" element={<Partnership />} />
              <Route path="/notice" element={<Notice />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/search" element={<Search />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/challenge" element={<Challenge />} />
              <Route path="/challenge/seasons" element={<ChallengeSeasons />} />
              <Route path="/internet-error" element={<InternetError />} />
              <Route path="/error" element={<ErrorPage />} />
              
              {/* 404 catch-all route should always be last */}
              <Route path="*" element={<NotFound />} />
              <Route path="/signup/terms" element={<SignupTerms />} />
              <Route path="/terms/:type" element={<TermDetail />} />
              <Route path="/orders/detail/:id" element={<OrderDetailNew />} />
              <Route path="/orders/detail2/:id" element={<OrderDetailNew2 />} />
            </Routes>
          </TooltipProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </StrictMode>
  );
};

export default App;
