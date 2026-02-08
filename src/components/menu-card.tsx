import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { MenuItem } from '@/app/lib/menu-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type MenuCardProps = {
  item: MenuItem;
};

export function MenuCard({ item }: MenuCardProps) {
  const image = PlaceHolderImages.find((img) => img.id === item.imageId);

  return (
    <Card className="group flex flex-col overflow-hidden border-accent/20 bg-card shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-primary/20">
      <CardHeader className="p-0">
        {image && (
          <div className="aspect-video overflow-hidden">
            <Image
              src={image.imageUrl}
              alt={item.name}
              width={600}
              height={400}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              data-ai-hint={image.imageHint}
            />
          </div>
        )}
      </CardHeader>
      <CardContent className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-4">
          <item.icon className="h-8 w-8 shrink-0 text-primary" />
          <CardTitle className="font-headline text-3xl text-primary">{item.name}</CardTitle>
        </div>
        <p className="mt-4 flex-1 text-muted-foreground">
          Deliciously prepared {item.name.toLowerCase()}, a perfect bite for any time of the day.
        </p>
      </CardContent>
      <CardFooter className="flex justify-end gap-6 bg-black/10 px-6 py-4">
        {item.priceSingle && (
          <div className="text-right">
            <p className="text-sm font-bold uppercase tracking-wider text-accent">Single</p>
            <p className="font-headline text-2xl font-bold">₹{item.priceSingle}</p>
          </div>
        )}
        {item.priceFull && (
          <div className="text-right">
            <p className="text-sm font-bold uppercase tracking-wider text-accent">Full</p>
            <p className="font-headline text-2xl font-bold">₹{item.priceFull}</p>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
