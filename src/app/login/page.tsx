import React from "react";
import { FaEnvelope, FaLock, FaGoogle, FaApple } from "react-icons/fa"; // Import React icons


const Login = () => {
  return (
    <>
     <section className="relative top-[100px] h-[1000px]">
      <div className="w-[300px] md:w-[424px] h-[564px] absolute  md:top-[100px] md:left-[530px] left-[50px] bg-white border-[1px] border-gray-300   shadow-2xl shadow-[#E0E0E0]">
        <h1 className="text-[18px] md:text-[20px] font-bold font-helvetica relative top-[35px] left-[35px] text-[#333333]">
          Login
        </h1>
        <div className="relative top-[-48px]">
          <div className="w-[220px] md:w-[360px] h-[44px] flex justify-start items-center gap-[10px] pl-[14px] relative top-[117px] left-[35px] border-[#E0E0E0] border-[1px]">
            <FaEnvelope className="md:h-[24px] md:w-[24px] w-[20px] h-[20px] text-[#735555]" />
            <input
              type="text"
              className="border-none outline-none text-[12px] md:text-[16px] font-normal text-[#4F4F4F] font-helvetica"
              placeholder="Email"
            />
          </div>
          <div className="w-[220px] md:w-[360px] h-[44px] flex justify-start items-center gap-[10px] pl-[14px] relative top-[133px] left-[35px] border-[#E0E0E0] border-[1px]">
            <FaLock className="md:h-[24px] md:w-[24px] w-[20px] h-[20px] text-[#735555]" />
            <input
              type="text"
              className="border-none outline-none text-[12px] md:text-[16px] font-normal text-[#4F4F4F] font-helvetica"
              placeholder="Password"
            />
          </div>
          <div className="h-[22px] flex justify-start items-center gap-[10px] pl-[14px] relative top-[153px] left-[35px] whitespace-nowrap">
            <div className="w-[20px] h-[20px] flex items-center justify-center">
              <input
                type="checkbox"
                className="w-[18px] md:w-[20px] h-[18px] md:h-[20px] cursor-pointer border border-[#735555] rounded-sm bg-white checked:bg-[#735555] checked:border-[#735555] focus:outline-none  relative"
              />
              <span className="absolute w-[6px] md:w-[10px]  h-[6px] md:h-[10px] border-white border-2 border-t-0 border-l-0 transform rotate-45 hidden checked:block"></span>
            </div>
            <p className="text-[12px] md:text-[14px] font-helvetica font-normal text-[#333333]">
              Remember me?
            </p>
          </div>
          <button className="relative top-[180px] left-[35px] w-[220px] md:w-[360px] h-[35px] md:h-[44px] bg-[#735555] text-white hover:bg-[#ffffff] hover:text-[#735555] hover:border-[1px] hover:border-[#735555] transition-all duration-300 ease-in-out font-halvetica text-[14px] md:text-[16px] font-normal flex justify-center items-center">
            Login
          </button>
          <p className="w-[70px] md:w-[113px] text-[12px] md:text-[14px]  font-normal font-helvetica text-[#828282] relative left-[35px]  md:left-[283px] top-[195px] whitespace-nowrap">
            Forget password?
          </p>
          <div className="w-[245px] md:w-[360px] h-[152px] relative left-[35px] top-[220px] flex justify-between flex-col ">
            <div className="w-[245px] md:w-[360px] h-[32px] flex justify-center items-center">
              <span className="border-b-[1px] w-[100px]  md:w-[168px] border-[#E0E0E0]"></span>
              <span className="w-[28px] md:w-[32px] h-[32px] border-[#E0E0E0] border-[1px] text-[12px] md:text-[14px]  font-helvetica font-normal text-[#4F4F4F] flex justify-center items-center">
                OR
              </span>
              <span className="border-b-[1px] w-[100px]  md:w-[168px]  border-[#E0E0E0]"></span>
            </div>
            <div className="w-[220px] md:w-[360px] h-[44px] border-[#E0E0E0] border-[1px] flex justify-start gap-[35px] md:gap-[75px] items-center  pl-[14px]">
              <FaGoogle className="md:h-[24px] md:w-[24px] w-[20px] h-[20px] text-[#735555]" />
              <p className="font-normal text-[14px] md:text-[16px] font-helvetica text-[#4F4F4F] text-center whitespace-nowrap">
                Sign up with Google
              </p>
            </div>
            <div className="w-[220px] md:w-[360px] h-[44px] border-[#E0E0E0] border-[1px] flex justify-start gap-[35px] md:gap-[75px] items-center  pl-[14px]">
              <FaApple className="md:h-[24px] md:w-[24px] w-[20px] h-[20px] text-[#735555]" />
              <p className="font-normal text-[14px] md:text-[16px]  font-helvetica text-[#4F4F4F] text-center">
                Sign up with Apple
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>

     
    </>
  );
};

export default Login;
