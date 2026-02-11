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
    <Card className="group flex flex-col overflow-hidden rounded-xl bg-gradient-to-br from-card to-card/80 shadow-lg card-glow-border">
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
          <CardTitle className="font-headline text-3xl text-primary drop-shadow-sm text-glow-hover">{item.name}</CardTitle>
        </div>
        <p className="mt-4 flex-1 text-muted-foreground text-glow-hover">
          Deliciously prepared {item.name.toLowerCase()}, a perfect bite for any time of the day.
        </p>
      </CardContent>
      <CardFooter className="flex justify-end gap-6 border-t border-accent/20 bg-card/50 px-6 py-4">
        {item.priceSingle && (
          <div className="text-right">
            <p className="text-sm font-bold uppercase tracking-wider text-accent text-glow-hover">Single</p>
            <p className="font-headline text-2xl font-bold">₹{item.priceSingle}{item.singleServing ? ` ${item.singleServing}` : ''}</p>
          </div>
        )}
        {item.priceFull && (
          <div className="text-right">
            <p className="text-sm font-bold uppercase tracking-wider text-accent text-glow-hover">Full</p>
            <p className="font-headline text-2xl font-bold">₹{item.priceFull}{item.fullServing ? ` ${item.fullServing}` : ''}</p>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
