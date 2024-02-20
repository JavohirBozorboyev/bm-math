import LogoGroup from "./assets/LogoGroup.png";

function App() {
  return (
    <>
      <main className="bg-[#2F3A47] ">
        <div className="container px-4 mx-auto py-12  min-h-screen flex flex-col-reverse lg:flex-row justify-between items-center gap-12 lg:gap-28">
          <article className="w-full lg:w-[30%]">
            <div>
              <img
                src={LogoGroup}
                alt="Boborahim Mashrab Maktabi "
                className="w-full object-cover hidden lg:block"
              />
            </div>
            <div className="mt-12 flex flex-col gap-5">
              <div>
                <label htmlFor="" className="text-gray-200 mb-1 block ml-1">
                  Ism Familiya
                </label>
                <input
                  type="text"
                  placeholder="Ism Familiya"
                  className="p-2 px-3 w-full text-sm rounded-full bg-[#515a66e5] outline-none text-white active:bg-[#DEEDFF] hover:bg-[#DEEDFF] active:text-gray-700 hover:text-gray-700 duration-300"
                />
              </div>
              <div>
                <label htmlFor="" className="text-gray-200 mb-1 block ml-1">
                  Maktab
                </label>
                <input
                  type="text"
                  placeholder="Maktab"
                  className="p-2 px-3 w-full text-sm rounded-full bg-[#515a66e5] outline-none text-white active:bg-[#DEEDFF] hover:bg-[#DEEDFF] active:text-gray-700 hover:text-gray-700 duration-300"
                />
              </div>
              <div>
                <label htmlFor="" className="text-gray-200 mb-1 block ml-1">
                  Sinf
                </label>
                <select className="p-2 px-3 text-sm w-full rounded-full bg-[#515a66e5] outline-none text-white active:bg-[#DEEDFF] hover:bg-[#DEEDFF] active:text-gray-700 hover:text-gray-700 duration-300">
                  <option value="">Sinfingizni tanlang!</option>
                  <option value="">3-sinf</option>
                  <option value="">4-sinf</option>
                  <option value="">5-sinf</option>
                  <option value="">6-sinf</option>
                  <option value="">7-sinf</option>
                  <option value="">8-sinf</option>
                  <option value="">9-sinf</option>
                  <option value="">10-sinf</option>
                  <option value="">11-sinf</option>
                </select>
              </div>
              <div>
                <label htmlFor="" className="text-gray-200 mb-1 block ml-1">
                  Telefon raqam
                </label>
                <input
                  type="text"
                  defaultValue={"+998"}
                  className="p-2 px-3 w-full text-sm rounded-full bg-[#515a66e5] outline-none text-white active:bg-[#DEEDFF] hover:bg-[#DEEDFF] active:text-gray-700 hover:text-gray-700 duration-300"
                />
              </div>
              <div className="mt-4">
                <button className="p-2 px-5 w-full btn rounded-full hover:bg-[#1F436D] hover:text-white outline-none text-[#2F3A47] bg-[#DEEDFF] duration-300 flex gap-5 justify-between items-center active:scale-95 ">
                  <span>Ro'yhatdan O'tish</span>
                  <div className=" w-6 overflow-hidden ">
                    <span className="flex gap-2 w-12 translate-x-[-26px]  duration-500 relative">
                      <svg
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        className="scale-[0.6] fill-white duration-500"
                      >
                        <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
                      </svg>
                      <svg
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        className="scale-[0.6] fill-[#2F3A47] duration-500 block "
                      >
                        <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
                      </svg>
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </article>
          <article className="w-full lg:w-[70%]">
            <img
              src={LogoGroup}
              alt="Boborahim Mashrab Maktabi "
              className="w-full object-cover  lg:hidden mb-10"
            />
            <h1 className="text-xl text-white text-center">
              Namangan viloyatida ilk marotaba umumiy o'rta ta'lim maktab
              o'quvchilari uchun an'anaviy olimpiadasi tashkil etilmoqda.
            </h1>
            <div
              className={`bg-[url('./assets/bm.png')] h-[400px] mt-12 lg:mt-20 object-cover bg-cover rounded-[50px] overflow-hidden`}
            ></div>
          </article>
        </div>
      </main>
    </>
  );
}

export default App;
