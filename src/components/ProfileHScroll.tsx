import Link from "next/link";
import { Albums } from "./albums";

export function ProfileHScroll({
  path = "/",
  title,
  description,
  profiles = [],
}: any) {
  return (
    <div className="col-span-3 lg:col-span-4 lg:border-l">
      <div className="px-0 md:px-12 py-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">
              {title?.replaceAll("-", " ")}
              <Link
                href={path}
                className="text-sm text-muted-foreground font-normal ml-4"
              >
                ( view all )
              </Link>
            </h2>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
        <Albums items={profiles} />
      </div>
    </div>
  );
}
