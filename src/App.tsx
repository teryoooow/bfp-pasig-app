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
import ServiceDetail from "./pages/ServiceDetail";
import ApplicationGuide from "./pages/ApplicationGuide";
import Substations from "./pages/Substations";
import SubstationDetail from "./pages/SubstationDetail";
import EmsSrf from "./pages/EmsSrf";
import More from "./pages/More";
import NotFound from "./pages/NotFound";
import Complaint from "./pages/Complaint";
import EReklamo from "./pages/EReklamo";
import Education from "./pages/Education";

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
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/application-guide" element={<ApplicationGuide />} />
          <Route path="/substations" element={<Substations />} />
          <Route path="/substations/:id" element={<SubstationDetail />} />
          <Route path="/ems-srf" element={<EmsSrf />} />
          <Route path="/contacts" element={<Substations />} />
          <Route path="/more" element={<More />} />
          <Route path="/complaint" element={<Complaint />} />
          <Route path="/e-reklamo" element={<EReklamo />} />
          <Route path="/education" element={<Education />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
