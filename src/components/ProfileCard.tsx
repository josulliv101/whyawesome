import { Profile, Reason } from "@/types";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Sparkle } from "lucide-react";
import { Separator } from "./ui/separator";
import { Switch } from "./ui/switch";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function ProfileCard({ name, pic, description, reasons }: Profile) {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <div className="flex items-start space-x-8">
          <Image
            className="aspect-square object-cover rounded-sm"
            alt={name}
            src={pic}
            width="120"
            height="120"
          />
          <div>
            <CardTitle className="mb-2">{name}</CardTitle>
            <CardDescription>{description}</CardDescription>
            <div className="flex justify-end">
              <Button size="sm" variant="outline">
                View full profile
              </Button>
            </div>
          </div>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="pt-8 bg-gray-50">
        <p className="pb-8 text-lg">Why Awesome?</p>
        {reasons.map((reason, index) => (
          <Reason key={index} {...reason} />
        ))}
      </CardContent>
    </Card>
  );
}

function Reason({ reason, votes }: Reason) {
  return (
    <div className="flex items-center mb-10">
      <div className=" flex items-center justify-center w-8 h-8 rounded-sm bg-gray-200 text-brand-foreground mr-4">
        <Sparkle />
      </div>
      <div className="flex-1 mx-4">
        <p className="text-sm font-medium">{reason}</p>
      </div>
      <Badge>
        {votes} vote{votes === 1 ? "" : "s"}
      </Badge>
      <Separator orientation="vertical" className="h-6 mx-8 bg-gray-300" />
      <div className="">
        <Switch />
      </div>
    </div>
  );
}
