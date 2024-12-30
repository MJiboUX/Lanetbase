import Link from 'next/link';
import { CircuitBoard } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-primary text-primary-foreground">
      <div className="container py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <div className="flex items-center space-x-2">
              <CircuitBoard className="h-6 w-6" />
              <span className="font-bold">LanetBase</span>
            </div>
            <p className="mt-4 text-sm">
              Empowering individuals and businesses through innovative digital solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/hub" className="text-sm hover:underline">
                  Business Hub
                </Link>
              </li>
              <li>
                <Link href="/marketplace" className="text-sm hover:underline">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link href="/internship" className="text-sm hover:underline">
                  Virtual Internship
                </Link>
              </li>
              <li>
                <Link href="/smart-school" className="text-sm hover:underline">
                  Smart School
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-sm hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-sm hover:underline">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/privacy" className="text-sm hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm hover:underline">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-primary-foreground/10 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} LanetBase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}