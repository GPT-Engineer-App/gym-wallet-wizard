import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dumbbell, DollarSign, Users, CreditCard, BarChart } from 'lucide-react';

const Index = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e, role) => {
    e.preventDefault();
    // Here you would typically validate the credentials
    // For now, we'll just navigate to the appropriate dashboard
    if (role === 'admin') {
      navigate('/admin-dashboard');
    } else {
      navigate('/client-dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <div className="flex items-center justify-center mb-6">
          <Dumbbell className="h-12 w-12 text-blue-600 mr-2" />
          <h1 className="text-3xl font-bold text-gray-800">Gym Pay</h1>
        </div>
        <form>
          <div className="mb-4">
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="mb-6">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="flex space-x-4">
            <Button onClick={(e) => handleLogin(e, 'admin')} className="flex-1 bg-blue-600 hover:bg-blue-700">
              Admin Login
            </Button>
            <Button onClick={(e) => handleLogin(e, 'client')} className="flex-1 bg-green-600 hover:bg-green-700">
              Client Login
            </Button>
          </div>
        </form>
        <div className="mt-6 flex justify-around text-gray-600">
          <div className="flex flex-col items-center">
            <DollarSign className="h-6 w-6 mb-1" />
            <span className="text-sm">Easy Payments</span>
          </div>
          <div className="flex flex-col items-center">
            <Users className="h-6 w-6 mb-1" />
            <span className="text-sm">Member Management</span>
          </div>
          <div className="flex flex-col items-center">
            <BarChart className="h-6 w-6 mb-1" />
            <span className="text-sm">Progress Tracking</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
