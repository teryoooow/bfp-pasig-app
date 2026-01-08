import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Officers from "./pages/Officers";
import VisionMission from "./pages/VisionMission";
import Prayer from "./pages/Prayer";
import Services from "./pages/Services";
import ApplicationGuide from "./pages/ApplicationGuide";
import Substations from "./pages/Substations";
import EmsSrf from "./pages/EmsSrf";
import More from "./pages/More";
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
          <Route path="/officers" element={<Officers />} />
          <Route path="/vision-mission" element={<VisionMission />} />
          <Route path="/prayer" element={<Prayer />} />
          <Route path="/services" element={<Services />} />
          <Route path="/application-guide" element={<ApplicationGuide />} />
          <Route path="/substations" element={<Substations />} />
          <Route path="/ems-srf" element={<EmsSrf />} />
          <Route path="/contacts" element={<Substations />} />
          <Route path="/more" element={<More />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
