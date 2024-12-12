import { Button } from "@/components/ui/button";
export default function page() {
  return (
    <div className="text-center container my-4 mx-auto">
      <h1 className="text-3xl">Next Scheduler</h1>
      <div className="flex gap-2 justify-center">
        <Button>Sign In</Button>
        <Button>Sign Up</Button>
      </div>
    </div>
  );
}
