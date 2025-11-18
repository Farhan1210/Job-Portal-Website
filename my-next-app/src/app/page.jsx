"use client";

import Image from "next/image";
import { useRouter } from "nextjs-toploader/app";

export default function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  return (
    <main>
      <div className="text-indigo-500">
        <div className="mx-5 mt-14 flex items-center justify-around lg:mx-25">
          <div>
            <h3 className="mb-5 text-xl font-bold text-gray-900 text-shadow-lg md:text-3xl">
              Find freelance and fulltime developer jobs.
            </h3>
            <p className="mb-6 font-medium text-gray-400 text-shadow-md">
              Jobs is your one-stop-centre for thousands of digital freelance
              and fulltime jobs.
            </p>
            <button
              className="cursor-pointer rounded-md bg-indigo-500 px-6 py-2 text-lg font-semibold text-white hover:bg-indigo-700"
              onClick={() => router.push("/form")}
            >
              Apply Now
            </button>
          </div>
          <div>
            <Image
              src="/image 138.png"
              alt="man"
              width={400}
              height={400}
              style={{ width: "auto", height: "auto" }}
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}
