import { Home, LayoutDashboard, User, Dumbbell, BarChart } from "lucide-react";
import Index from "./pages/Index.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import ClientDashboard from "./pages/ClientDashboard.jsx";
import ExerciseLog from "./pages/ExerciseLog.jsx";
import ClientStats from "./pages/ClientStats.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Admin Dashboard",
    to: "/admin-dashboard",
    icon: <LayoutDashboard className="h-4 w-4" />,
    page: <AdminDashboard />,
    role: "admin",
  },
  {
    title: "Client Dashboard",
    to: "/client-dashboard",
    icon: <User className="h-4 w-4" />,
    page: <ClientDashboard />,
    role: "client",
  },
  {
    title: "Exercise Log",
    to: "/exercise-log",
    icon: <Dumbbell className="h-4 w-4" />,
    page: <ExerciseLog />,
    role: "client",
  },
  {
    title: "My Stats",
    to: "/stats",
    icon: <BarChart className="h-4 w-4" />,
    page: <ClientStats />,
    role: "client",
  },
];
