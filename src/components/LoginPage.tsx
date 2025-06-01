import React from 'react';
import Logo from './Logo';
import LoginForm from './LoginForm';
import { MapPin, Navigation, Compass, Armchair as Wheelchair, Map } from 'lucide-react';

const LoginPage: React.FC = () => {
  const handleLogin = (email: string, password: string, remember: boolean) => {
    console.log('Login attempt:', { email, password, remember });
    // In a real app, you would handle authentication here
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left side - Features */}
      <div className="hidden lg:flex lg:flex-1 relative bg-gradient-to-br from-purple-50 to-violet-50">
        <div className="absolute inset-0 p-16 flex flex-col justify-between">
          <div className="flex justify-start">
            <Logo size="lg" className="scale-125" />
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Building Smarter, Accessible Cities
              </h2>
              <div className="space-y-6">
                <Feature 
                  icon={<Map className="h-7 w-7 text-violet-600" />}
                  title="Disability-Friendly Route Mapping"
                  description="Navigate with wheelchair-accessible paths, elevators, and safe walkways."
                />
                <Feature 
                  icon={<Navigation className="h-7 w-7 text-violet-600" />}
                  title="Accessible Public Transport Tracking"
                  description="Track transportation with accessibility features and live ETA updates."
                />
                <Feature 
                  icon={<Compass className="h-7 w-7 text-violet-600" />}
                  title="Community-Driven Accessibility Ratings"
                  description="User ratings and reviews of public place accessibility."
                />
                <Feature 
                  icon={<MapPin className="h-7 w-7 text-violet-600" />}
                  title="Emergency SOS Button"
                  description="One-tap emergency feature that shares your live location."
                />
              </div>
            </div>
          </div>
          
          <div className="flex justify-end">
            <div className="bg-white p-4 rounded-full shadow-md">
              <Wheelchair className="h-8 w-8 text-violet-600" />
            </div>
          </div>
        </div>
        
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-grid-pattern"></div>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-24 xl:px-32 bg-gradient-to-br from-violet-50 to-purple-50">
        <div className="mx-auto w-full max-w-lg">
          <div className="lg:hidden mb-10">
            <Logo size="lg" />
          </div>
          <LoginForm onLogin={handleLogin} />
        </div>
      </div>
    </div>
  );
};

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="flex">
      <div className="flex-shrink-0">
        {icon}
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className="mt-2 text-base text-gray-500 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default LoginPage;