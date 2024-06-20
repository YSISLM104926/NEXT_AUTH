import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  console.log(session)
  return (
    <div>
      <h1 className="text-4xl text-center mt-10">Welcome To Dashboard Page</h1>
      <div className="flex justify-center">
        <Image src={session?.user?.image as string}
          height={70} width={70} alt="user image"
          className="rounded-full"
        />
      </div>
      <h1 className="text-2xl text-center">{session?.user?.name}</h1>
    </div>
  );
};

export default DashboardPage;
