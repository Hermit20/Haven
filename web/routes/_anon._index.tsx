import { useOutletContext, Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RootOutletContext } from "../root";

export default function() {
  const { gadgetConfig } = useOutletContext<RootOutletContext>();

  return (
    <Card className="p-8">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">👋 Hey, Developer!</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          <p className="text-bas">
           This app requires an invite to sign in. An existing user can invite you, or you can get access yourself.
          </p>
          <a
            href="/edit"
            target="_blank"
            rel="noreferrer"
            className="font-medium hover:underline"
          >
            Get an invite
          </a>
        </div>
        <Button
          variant="default"
          size="lg"
          className="w-full"
          asChild
        >
          <Link to="/sign-up">Sign up</Link>
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="w-full"
          asChild
        >
          <Link to="/sign-in">Sign in</Link>
        </Button>
        <p className="text-base">
          Edit this page here:{" "}
          <a
            href="/edit/files/web/routes/_anon._index.tsx"
            target="_blank"
            rel="noreferrer"
            className="font-medium hover:underline"
          >
            web/routes/_anon._index.tsx
          </a>
        </p>
      </CardContent>
    </Card>
  );
}
