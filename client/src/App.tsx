import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Resources from "@/pages/Resources";
import News from "@/pages/News";
import NewsPost from "@/pages/NewsPost";
import Emergency from "@/pages/Emergency";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/resources" component={Resources} />
      <Route path="/news" component={News} />
      <Route path="/news/:slug" component={NewsPost} />
      <Route path="/emergency" component={Emergency} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
