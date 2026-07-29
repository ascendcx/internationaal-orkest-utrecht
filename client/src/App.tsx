import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";
import Home from "./pages/Home";
import About from "./pages/About";
import SchoolConcerts from "./pages/SchoolConcerts";
import YouthEnsembles from "./pages/YouthEnsembles";
import ConductorWorkshops from "./pages/ConductorWorkshops";
import Support from "./pages/Support";
import Sponsors from "./pages/Sponsors";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/school-concerts" component={SchoolConcerts} />
      <Route path="/youth-ensembles" component={YouthEnsembles} />
      <Route path="/conductor-workshops" component={ConductorWorkshops} />
      <Route path="/support" component={Support} />
      <Route path="/sponsors" component={Sponsors} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Navigation />
            <main>
              <Router />
            </main>
            <Footer />
            <CookieBanner />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
