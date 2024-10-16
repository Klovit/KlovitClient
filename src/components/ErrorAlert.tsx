import React, { useEffect, useState } from "react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react"; // Ensure this is correctly imported based on your project setup

const ErrorAlert: React.FC = () => {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Retrieve the 'error' query parameter from the URL
    const searchParams = new URLSearchParams(window.location.search);
    const errorMessage = searchParams.get("error");
    setError(errorMessage);
  }, []); // Empty dependency array to ensure this only runs once when the component mounts

  return (
    <>
      {error && (
        <Alert className="ml-4 p-4" variant="destructive">
          <div className="flex items-center">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
          </div>
          <AlertDescription>{error}.</AlertDescription>
        </Alert>
      )}
    </>
  );
};

export default ErrorAlert;
