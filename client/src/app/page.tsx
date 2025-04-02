import TopBanquets from "@/components/TopBanquets";


export default function Home() {

  return (
    <div className="">
      <div
        className="mx-auto h-screen w-full bg-cover bg-fixed bg-center bg-no-repeat shadow-lg bg-[url('https://www.anoush.com/img/landmark/Landmark_new.jpeg')]">
        <div className=" flex justify-center items-center h-full w-full">
          <div className="backdrop-blur-lg rounded-lg p-6 flex flex-row justify-center items-center">

            <div className="relative flex h-10 m-2">
              <input
                type="search"
                className="relative m-0 -me-0.5 block flex-auto dark:bg-[#121212] rounded-md border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
                placeholder="Search"
                aria-label="Search"
                id="exampleFormControlInput3"
                aria-describedby="button-addon3" />

            </div>

          </div>
        </div>
      </div>

      <div className="flex w-full justify-center items-center text-4xl font-bold m-2">OUR TOP BANQUETS</div>
      <TopBanquets />
    </div>
  );
}
