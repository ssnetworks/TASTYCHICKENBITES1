import { CheckCircle } from 'lucide-react';

const highlights = [
  { text: 'HYGIENIC FOOD' },
  { text: 'NO ADDED FOOD COLOUR' },
  { text: 'NO ADDED TASTING SALT' },
  { text: 'HOME MADE MAYONNAISE' },
  { text: 'WE USE ONLY FREEDOM RICE BRAND OIL' },
];

export function Highlights() {
  return (
    <div className="mt-16 text-center">
      <h3 className="font-headline text-4xl font-extrabold tracking-tight text-primary sm:text-5xl lg:text-6xl transition-all duration-300 ease-in-out hover:scale-110 hover:drop-shadow-lg">
        Our Promise
      </h3>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        {highlights.map((highlight, index) => (
          <div key={index} className="flex items-center gap-2 rounded-full border border-primary/50 bg-primary/20 px-4 py-2 text-primary transition-all duration-300 ease-in-out hover:scale-110 hover:drop-shadow-lg">
            <CheckCircle className="h-5 w-5" />
            <span className="font-semibold">{highlight.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
