

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Hi, this is Valentino 
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md mx-auto">
          Welcome to my portfolio! Tailwind CSS and shadcn/ui are now set up and ready to use.
        </p>
        <div className="flex gap-4 justify-center">
          <Button>Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>
    </div>
  );
}
