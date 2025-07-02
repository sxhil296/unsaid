import Link from "next/link";
import { Button } from "../ui/button";

async function Header() {
  return (
    <nav className="fixed left-0 top-0 z-20 mx-auto flex h-[70px] w-full items-center border-b-4 border-border bg-secondary-background px-5">
      <div className="mx-auto flex w-[1300px] text-foreground max-w-full items-center justify-between">
        <div className="flex items-center xl:gap-10 gap-10">
          <Link
            className="text-[22px] w-fit px-4   flex bg-main text-main-foreground border-2 border-black items-center justify-center font-heading"
            href={"/"}
          >
            Unsaid
          </Link>

          <div className="items-center text-base font-base xl:gap-10 lg:flex gap-10 hidden">
            <Link href="/archives">Archives</Link>

            <Link href="/about">About</Link>

            <Link href="/terms-and-conditions">Terms & Conditions</Link>
          </div>
        </div>

        <div className="flex items-center gap-4 justify-end">
          <Button asChild>
            <Link href="/submit">Submit</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
