import { images } from "@/constants/images";
import Image from "next/image";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="relative h-screen w-full ">
      <div className="absolute size-full">
        <Image src={images.bg_img} alt="back" fill className="size-full" />
        {children}
      </div>
    </main>
  );
};

export default AuthLayout;
