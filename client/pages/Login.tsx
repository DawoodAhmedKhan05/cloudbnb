import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Mail, Lock } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual authentication with Supabase
    navigate("/dashboard");
  };

  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
            <p className="text-muted-foreground">
              Sign in to your Cloudbnb account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-3 text-muted-foreground"
                  size={20}
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="cloudbnb-input w-full pl-10"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Password
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-3 text-muted-foreground"
                  size={20}
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="cloudbnb-input w-full pl-10"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 h-12 font-semibold rounded-lg"
            >
              Sign In
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-muted-foreground">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-primary font-semibold hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground text-center mb-4">
              Or continue with
            </p>
            <Button variant="outline" className="w-full">
              Google
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
