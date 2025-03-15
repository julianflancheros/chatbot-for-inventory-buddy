
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background">
      <div className="max-w-md text-center space-y-6 px-4">
        <div className="space-y-2">
          <h1 className="text-9xl font-bold tracking-tighter text-primary/30">404</h1>
          <h2 className="text-2xl font-medium">Page not found</h2>
          <p className="text-muted-foreground">
            Sorry, the page you're looking for doesn't seem to exist.
          </p>
        </div>
        
        <Button asChild className="mt-6 rounded-full px-6">
          <a href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
