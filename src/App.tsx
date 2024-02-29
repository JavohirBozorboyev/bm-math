import LogoGroup from "./assets/LogoGroup.png";

import { useState, useRef, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { InfoData } from "./data/InfoData";

function App() {
  const [info, setInfo] = useState([]);
  const snif = useRef<any | null>(null);
  const name = useRef<any | null>(null);
  const maktab = useRef<any | null>(null);
  const tel = useRef<any | null>(null);

  const [errName, setErrName] = useState(false);
  const [errMaktab, setErrMaktab] = useState(false);
  const [errSinf, setErrSinf] = useState(false);
  const [errTel, setErrTel] = useState(false);

  useEffect(() => {
    axios
      .get("https://bmschool.pythonanywhere.com/statistics/")
      .then((res) => {
        if (res.status == 200) {
          setInfo(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      name: name.current.value,
      maktab: maktab.current.value,
      sinf: snif.current.value,
      phone: tel.current.value,
    };
    setErrName(data.name === "");
    setErrMaktab(data.maktab === "");
    setErrSinf(data.sinf === "0");
    setErrTel(data.phone === "");

    if (
      data.name === "" ||
      data.maktab === "" ||
      data.sinf == "0" ||
      data.phone === ""
    ) {
      setErrName(name.current.value === "");
      setErrMaktab(maktab.current.value === "");
      setErrSinf(snif.current.value === "0");
      setErrTel(tel.current.value === "");
    } else {
      axios
        .post("https://bmschool.pythonanywhere.com/contact/", {
          full_name: data.name,
          group: data.sinf,
          school: data.maktab,
          phone_number: data.phone,
        })
        .then((res) => {
          if (res.status == 201) {
            toast.success("Ro'yhatdan o'tdingiz.", {
              position: "top-center",
            });
            name.current.value = "";
            maktab.current.value = "";
            snif.current.value = "0";
            tel.current.value = "";
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  console.log(info, InfoData);

  return (
    <>
      <main className="bg-gradient-to-r from-[#2F3A47] to-[#364250E5]">
        <div className="container max-w-7xl px-4 mx-auto py-6  min-h-screen flex flex-col-reverse lg:flex-row justify-between items-center gap-6 lg:gap-10">
          <form onSubmit={handleSubmit} className="w-full lg:w-[30%]">
            <div>
              <img
                src={LogoGroup}
                alt="Boborahim Mashrab Maktabi "
                className="h-16 object-cover hidden lg:block"
              />
            </div>
            <div className="mt-12 flex flex-col gap-5">
              <div>
                <label
                  htmlFor="name"
                  className={`text-gray-200 mb-1 block ml-1 ${
                    errName ? "text-red-400" : ""
                  }`}
                >
                  Ism Familiya
                </label>
                <input
                  ref={name}
                  name="name"
                  type="text"
                  id="name"
                  placeholder="Ism Familiya"
                  className={`p-3 px-3 w-full text-sm rounded-full bg-[#515a66e5] outline-none text-white active:bg-[#DEEDFF] hover:bg-[#DEEDFF] active:text-gray-700 hover:text-gray-700 duration-300 ${
                    errName ? "placeholder-red-400" : ""
                  }`}
                />
              </div>
              <div>
                <label
                  htmlFor="maktab"
                  className={`text-gray-200 mb-1 block ml-1 ${
                    errMaktab ? "text-red-400" : ""
                  }`}
                >
                  Maktab
                </label>
                <input
                  ref={maktab}
                  name="maktab"
                  id="maktab"
                  type="text"
                  placeholder="Maktab"
                  className={`p-3 px-3 w-full text-sm rounded-full bg-[#515a66e5] outline-none text-white active:bg-[#DEEDFF] hover:bg-[#DEEDFF] active:text-gray-700 hover:text-gray-700 duration-300 ${
                    errMaktab ? "placeholder-red-400" : ""
                  }`}
                />
              </div>
              <div>
                <label
                  htmlFor="snif"
                  className={`text-gray-200 mb-1 block ml-1 ${
                    errSinf ? "text-red-400" : ""
                  }`}
                >
                  Sinf
                </label>
                <select
                  name="snif"
                  ref={snif}
                  id="snif"
                  className={`p-3 px-3 text-sm w-full rounded-full bg-[#515a66e5] outline-none text-white active:bg-[#DEEDFF] hover:bg-[#DEEDFF] active:text-gray-700 hover:text-gray-700 duration-300 ${
                    errSinf ? "placeholder-red-400" : ""
                  }`}
                >
                  <option value={"0"}>Sinfingizni tanlang!</option>
                  {info
                    .filter(
                      (fil: any, i: number) =>
                        fil.aplications_count < InfoData[i].total
                    )
                    .map((item: any, id) => {
                      return (
                        <option key={id} value={item.class_number}>
                          {item.class_number}-Sinf
                        </option>
                      );
                    })}
                </select>
              </div>
              <div>
                <label
                  htmlFor="tel"
                  className={`text-gray-200 mb-1 block ml-1 ${
                    errTel ? "text-red-400" : ""
                  }`}
                >
                  Telefon raqam
                </label>
                <input
                  ref={tel}
                  name="tel"
                  id="tel"
                  type="tel"
                  placeholder="+998 90 123 45 67"
                  className={`p-3 px-3 w-full text-sm rounded-full bg-[#515a66e5] outline-none text-white active:bg-[#DEEDFF] hover:bg-[#DEEDFF] active:text-gray-700 hover:text-gray-700 duration-300 ${
                    errTel ? "placeholder-red-400" : ""
                  }`}
                />
              </div>
              <div className="mt-4">
                <button className="p-3 px-5 w-full btn rounded-full hover:bg-[#1F436D] hover:text-white outline-none text-[#2F3A47] bg-[#DEEDFF] duration-300 flex gap-5 justify-between items-center active:scale-95 ">
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
              <article className="w-full mt-10  flex lg:w-[30%]  flex-col gap-4 lg:hidden">
                <h1 className="text-white italic font-light mb-1">
                  Qolgan o'rinlar soni:{" "}
                </h1>
                {info?.map((item: any, i) => {
                  let foiz: any = Math.round(
                    (100 * item.aplications_count) / InfoData[i].total
                  );

                  return (
                    <div key={i} className="flex flex-col gap-1">
                      <div className="flex justify-between gap-2 items-center">
                        <span className="text-white text-sm">
                          {item?.class_number}-sinf
                        </span>
                        <span className="text-white text-sm">
                          {item.aplications_count}/{InfoData[i].total}
                        </span>
                      </div>
                      <div className="overflow-hidden bg-gray-500 h-1.5 rounded-full w-full">
                        <span
                          className={`h-full bg-gray-200  block rounded-full w-[0%]`}
                          style={{ width: `${foiz}%` }}
                        ></span>
                      </div>
                    </div>
                  );
                })}
              </article>
            </div>
          </form>
          <article className="w-full lg:w-[70%]">
            <img
              src={LogoGroup}
              alt="Boborahim Mashrab Maktabi "
              className=" object-cover h-20  mx-auto lg:hidden mb-10"
            />
            <h1
              style={{ lineHeight: "1.5" }}
              className="text-md text-white text-center lg:text-left lg:text-xl font-light"
            >
              Namangan viloyatida ilk marotaba umumiy o'rta ta'lim maktab
              o'quvchilari uchun an'anaviy
              <span className="uppercase  px-1 inline-block text-[#FBB90F]">
                " BM Matematika "
              </span>
              olimpiadasi tashkil etilmoqda.
            </h1>
            <div className="flex flex-col mt-14 lg:mt-20 gap-5 lg:flex-row">
              <div
                className={`bg-[url('./assets/bm2.png')] h-[300px] w-full lg:w-[70%] bg-center lg:h-[420px]   object-cover bg-cover rounded-[30px] overflow-hidden`}
              ></div>
              <article className="w-full hidden lg:flex lg:w-[30%]  flex-col gap-3">
                <h1 className="text-white italic font-light mb-1">
                  Qolgan o'rinlar soni:{" "}
                </h1>

                {info?.map((item: any, i) => {
                  let foiz: any = Math.round(
                    (100 * item.aplications_count) / InfoData[i].total
                  );

                  return (
                    <div key={i} className="flex flex-col gap-1">
                      <div className="flex justify-between gap-2 items-center">
                        <span className="text-white text-sm">
                          {item?.class_number}-sinf
                        </span>
                        <span className="text-white text-sm">
                          {item.aplications_count}/{InfoData[i].total}
                        </span>
                      </div>
                      <div className="overflow-hidden bg-gray-500 h-1.5 rounded-full w-full">
                        <span
                          className={`h-full bg-gray-200  block rounded-full `}
                          style={{ width: `${foiz}%` }}
                        ></span>
                      </div>
                    </div>
                  );
                })}
              </article>
            </div>
          </article>
        </div>
      </main>

      <ToastContainer />
    </>
  );
}

export default App;
