import logo from "../assets/favicon.png";



const Contact = () => {

  return (
    <div id="contact" className="p-4 py-20 relative">
      <div className="w-[1px] h-20 bg-gray-400 absolute left-[50%] top-[-30px] mt-2 animate-bounce z-30"></div>

      <div className="container max-w-xl bg-gray-100  mx-auto rounded-md border-2 border-gray-300 p-5 py-10">
        <div className="flex flex-col items-center justify-center">
          <img src={logo} alt="" className="w-12" />
          <h1 className="text-center mt-4 font-bold text-[#2F3A47E5]">
            {"“BM Matematika” -"}
          </h1>
          <p className="text-[#2F3A47E5]">
            {"olimpiadasiga ro’yxatdan o’tish."}
          </p>
        </div>
        <div className="w-[100%] md:w-[80%] mx-auto mt-10 flex flex-col gap-5">
          <div>
            <label htmlFor="" className="font-light text-sm mb-1 block">
              Ism Familiya
            </label>
            <input
              type="text"
              placeholder="Ism Familiya"
              className="w-full p-2 px-4 rounded-sm bg-gray-300 outline-[#2F3A47E5]"
            />
          </div>
          <div>
            <label htmlFor="" className="font-light text-sm mb-1 block">
              Maktab
            </label>
            <input
              type="text"
              placeholder="Maktab"
              className="w-full p-2 px-4 rounded-sm bg-gray-300 outline-[#2F3A47E5]"
            />
          </div>
          <div>
            <label htmlFor="" className="font-light text-sm mb-1 block">
              Sinf
            </label>
            <select
              className="w-full p-2  rounded-sm bg-gray-300 outline-[#2F3A47E5]"
              name=""
              id=""
            >
              <option value="">Sinfingizni tanlang!</option>
              <option value="">2-sinf</option>
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
            <button className="bg-[#2F3A47E5] text-white w-full rounded-sm py-2 mt-5">
              Jo'natish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
