import LeftSidebar from "@/components/sidebar/LeftSidebar";
import MobileSidebar from "@/components/sidebar/MobileSidebar";
import RightSidebar from "@/components/sidebar/RightSidebar";
import { icons } from "@/constants/icons";
import Image from "next/image";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="relative flex flex-col">
      <main className="relative flex bg-black-3">
        <LeftSidebar />
        <section className=" flex min-h-screen flex-1 flex-col px-4 sm:px-14">
          <div
            className="mx-auto flex w-full max-w-5xl 
           flex-col max-sm:px-4 "
          >
            <div
              className="flex h-16 items-center 
            justify-between md:hidden"
            >
              <Image
                src={icons.logo}
                alt="Logo"
                width={30}
                height={30}
                className="menu icon"
              />
              <MobileSidebar />
            </div>
            <div className="flex flex-col mb:pb-14">Toaster</div>
            {children}
          </div>
        </section>

        <RightSidebar />
      </main>
    </div>
  );
};

export default RootLayout;
