import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle, AlertTriangle } from "lucide-react";

interface HeroBannerProps {
  title: string;
  subtitle: string;
  ctaPrimary: {
    label: string;
    href: string;
  };
}

export default function HeroBanner({ title, subtitle, ctaPrimary }: HeroBannerProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary to-primary/90 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
          alt="Modern office building with glass facade" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-neutral">
              <Link href={ctaPrimary.href}>
                <CheckCircle className="mr-2 h-5 w-5" />
                {ctaPrimary.label}
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="bg-accent text-white hover:bg-accent/90">
              <Link href="/emergency">
                <AlertTriangle className="mr-2 h-5 w-5" />
                Emergency Info
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
