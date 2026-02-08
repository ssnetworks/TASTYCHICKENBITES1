import { Instagram, Phone, UtensilsCrossed } from 'lucide-react';
import { menuItems } from '@/app/lib/menu-data';
import { MenuCard } from '@/components/menu-card';

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <header className="sticky top-0 z-10 border-b border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-3">
            <UtensilsCrossed className="h-8 w-8 text-primary" />
            <h1 className="font-headline text-3xl font-bold tracking-wider text-primary">
              TASTY CHICKEN BITES
            </h1>
          </div>
          <a
            href="tel:+918331988366"
            className="flex items-center gap-2 rounded-full border border-primary/50 bg-primary/20 px-4 py-2 text-primary transition-colors hover:bg-primary/30"
            aria-label="Call to order"
          >
            <Phone className="h-5 w-5" />
            <span className="hidden font-headline text-lg font-semibold md:inline">
              +91 8331988366
            </span>
          </a>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-12 md:px-6 md:py-16">
        <div className="text-center">
          <h2 className="font-headline text-5xl font-extrabold tracking-tight text-primary sm:text-6xl lg:text-7xl">
            Our Menu
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
            Savor the flavor of our expertly crafted chicken delights and sides. Freshly prepared, perfectly seasoned.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </main>

      <footer className="mt-20 border-t border-border/50 bg-card">
        <div className="container mx-auto px-4 py-6 text-center text-muted-foreground md:px-6">
          <div className="mb-4 flex justify-center gap-4">
            <a
              href="https://www.instagram.com/tasty_chicken_bites?igsh=MXB4bDM4ZDUxZWQ5MQ%3D"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition-colors hover:text-primary"
            >
              <Instagram className="h-6 w-6" />
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()} TASTY CHICKEN BITES. All rights reserved.</p>
          <p className="mt-1 text-sm">Deliciously Yours</p>
        </div>
      </footer>
    </div>
  );
}
