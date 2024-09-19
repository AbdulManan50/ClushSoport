import React, { useState } from "react";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Tool() {
  const [tab, setTab] = useState(1);

  function activateTab(index) {
    setTab(index);
  }

  const [visiable, setVisiable] = useState(false);

  const visibalTab = () => {
    setVisiable((prev) => !prev);
  };

  const [openFaq, setOpenFaq] = useState(null);

  const clickFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const colors = [
    "#FFEBEE",
    "#FFCDD2",
    "#EF9A9A",
    "#E57373",
    "#EF5350",
    "#F44336",
    "#E53935",
    "#D32F2F",
    "#C62828",
    "#B71C1C",
    "#FF8A80",
    "#FF5252",
    "#FF1744",
    "#D50000",
    "#FFEB3B",
    "#FDD835",
    "#FFEA00",
    "#FFD600",
    "#F3E5F5",
    "#E1BEE7",
    "#CE93D8",
    "#BA68C8",
    "#AB47BC",
    "#9C27B0",
    "#8E24AA",
    "#7B1FA2",
    "#6A1B9A",
    "#4A148C",
    "#EA80FC",
    "#E040FB",
    "#D500F9",
    "#AA00FF",
    "#8C9EFF",
    "#536DFE",
    "#3D5AFE",
    "#304FFE",
    "#E8EAF6",
    "#C5CAE9",
    "#9FA8DA",
    "#7986CB",
    "#5C6BC0",
    "#3F51B5",
    "#3949AB",
    "#303F9F",
    "#283593",
    "#1A237E",
    "#B388FF",
    "#7C4DFF",
    "#651FFF",
    "#6200EA",
    "#80D8FF",
    "#40C4FF",
    "#00B0FF",
    "#0091EA",
    "#E1F5FE",
    "#B3E5FC",
    "#81D4FA",
    "#4FC3F7",
    "#29B6F6",
    "#03A9F4",
    "#039BE5",
    "#0288D1",
    "#0277BD",
    "#01579B",
    "#B2FF59",
    "#76FF03",
    "#64DD17",
    "#33691E",
    "#1B5E20",
    "#004D40",
    "#009688",
    "#00796B",
    "#E0F2F1",
    "#B2DFDB",
    "#80CBC4",
    "#4DB6AC",
    "#26A69A",
    "#009688",
    "#00897B",
    "#00796B",
    "#00695C",
    "#004D40",
  ];

  const [opacity, setOpacity] = useState(1);

  const handleOpacityChange = (e) => {
    setOpacity(e.target.value);
  };
  return (
    <>
      <div className="w-[95%] mx-auto">
        <div className="py-10">
          <h1 className="font-Poppins font-extrabold text-7xl text-center uppercase">
            Customize Your Kit
          </h1>
        </div>
        <div className="flex mb-20">
          <div className="w-[25%] border-Green border-[1px] flex">
            <div className="w-[15%] bg-Green py-20">
              <div
                onClick={() => activateTab(1)}
                className={`${
                  tab === 1 ? "bg-white border-l-0" : "bg-none border-[1px]"
                } border-[#00895C] py-4 hover:bg-white group cursor-pointer`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className={`mx-auto text-${
                    tab === 1 ? "Green" : "white"
                  } group-hover:text-Green`}
                  fill="currentColor"
                >
                  <path d="M0 24H6.23333V17.7667H0V24ZM8.9 24H15.1V17.7667H8.9V24ZM17.7667 24H24V17.7667H17.7667V24ZM0 15.1H6.23333V8.9H0V15.1ZM8.9 15.1H15.1V8.9H8.9V15.1ZM17.7667 15.1H24V8.9H17.7667V15.1ZM0 6.23333H6.23333V0H0V6.23333ZM8.9 6.23333H15.1V0H8.9V6.23333ZM17.7667 6.23333H24V0H17.7667V6.23333Z" />
                </svg>
              </div>
              <div
                onClick={() => activateTab(2)}
                className={`${
                  tab === 2 ? "bg-white border-l-0" : "bg-none border-[1px]"
                } border-[#00895C] py-4 hover:bg-white group cursor-pointer`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="21"
                  viewBox="0 0 27 21"
                  className={`mx-auto text-${
                    tab === 2 ? "Green" : "white"
                  } group-hover:text-Green`}
                  fill="currentColor"
                >
                  <path d="M3.90994 7.46156C1.30331 6.41944 0 5.89837 0 5.25C0 4.60163 1.30331 4.08188 3.90994 3.03844L7.59544 1.5645C10.2021 0.521062 11.5067 0 13.125 0C14.7446 0 16.0479 0.521062 18.6546 1.5645L22.3401 3.03844C24.9467 4.08056 26.25 4.60163 26.25 5.25C26.25 5.89837 24.9467 6.41813 22.3401 7.46156L18.6546 8.9355C16.0479 9.98025 14.7433 10.5 13.125 10.5C11.5054 10.5 10.2021 9.97894 7.59544 8.93681L3.91125 7.46025L3.90994 7.46156Z" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 5.25C0 5.89837 1.30331 6.41813 3.90994 7.46156L7.59544 8.9355C10.2021 9.98025 11.5067 10.5 13.125 10.5C14.7446 10.5 16.0479 9.97894 18.6546 8.93681L22.3401 7.46156C24.9467 6.41944 26.25 5.89837 26.25 5.25C26.25 4.60163 24.9467 4.08188 22.3401 3.03844L18.6546 1.5645C16.0479 0.521062 14.7433 0 13.125 0C11.5054 0 10.2021 0.521062 7.59544 1.5645L3.91125 3.03844C1.30331 4.08056 0 4.60163 0 5.25Z"
                  />
                  <path
                    opacity="0.7"
                    d="M4.94287 7.87502L3.90994 8.28845C1.30331 9.33058 0 9.85295 0 10.5C0 11.1471 1.30331 11.6681 3.90994 12.7116L7.59544 14.1855C10.2021 15.2303 11.5067 15.75 13.125 15.75C14.7446 15.75 16.0479 15.229 18.6546 14.1868L22.3401 12.7116C24.9467 11.6695 26.25 11.1471 26.25 10.5C26.25 9.85295 24.9467 9.33189 22.3401 8.28845L21.3071 7.87502L18.6546 8.93683C16.0479 9.97895 14.7433 10.5 13.125 10.5C11.5054 10.5 10.2021 9.97895 7.59544 8.93683L4.94419 7.87502H4.94287Z"
                  />
                  <path
                    opacity="0.4"
                    d="M4.94287 13.125L3.90994 13.5384C1.30331 14.5806 0 15.1029 0 15.75C0 16.3984 1.30331 16.9181 3.90994 17.9616L7.59544 19.4355C10.2021 20.4803 11.5067 21 13.125 21C14.7446 21 16.0479 20.4789 18.6546 19.4355L22.3401 17.9616C24.9467 16.9194 26.25 16.3984 26.25 15.75C26.25 15.1029 24.9467 14.5819 22.3401 13.5384L21.3071 13.125L18.6546 14.1868C16.0479 15.2289 14.7433 15.75 13.125 15.75C11.5054 15.75 10.2021 15.2289 7.59544 14.1868L4.94419 13.125H4.94287Z"
                  />
                </svg>
              </div>
              <div
                onClick={() => activateTab(3)}
                className={`${
                  tab === 3 ? "bg-white border-l-0" : "bg-none border-[1px]"
                } border-[#00895C] py-4 hover:bg-white group cursor-pointer`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="22"
                  viewBox="0 0 24 22"
                  className={`mx-auto text-${
                    tab === 3 ? "Green" : "white"
                  } group-hover:text-Green`}
                  fill="currentColor"
                >
                  <path d="M10.6972 10.9281H5.77339L8.23605 4.10191L10.6972 10.9281ZM11.4861 13.1137L11.981 14.4891L13.7478 12.7742L9.43739 0.829416C9.03844 -0.276472 7.42916 -0.276472 7.03172 0.829416L1.54847 16.0321C1.44982 16.3057 1.46709 16.6061 1.59647 16.8674C1.72585 17.1286 1.95675 17.3292 2.23837 17.425C2.51999 17.5209 2.82927 17.5041 3.09816 17.3784C3.36705 17.2527 3.57353 17.0284 3.67217 16.7548L4.983 13.1137H11.4846H11.4861ZM19.1951 9.54101L11.9525 16.5785C11.5303 16.9884 11.2307 17.5021 11.0857 18.0647L10.5247 20.2473C10.5073 20.3143 10.4953 20.3825 10.4887 20.4513C9.93002 20.4743 9.3705 20.4312 8.82247 20.3231C8.71299 20.2983 8.67249 20.1628 8.72348 20.0637C8.99345 19.5567 9.07294 18.5003 8.11757 18.1258C6.82774 17.6232 5.15097 18.308 3.82515 18.8515C3.27623 19.0758 2.7873 19.274 2.40935 19.3556C1.82893 19.4809 1.13752 19.2609 0.585597 18.9928C0.267641 18.8383 -0.137304 19.1123 0.0456711 19.4095C0.374126 19.9428 0.966545 20.4833 2.0344 20.6115C3.26423 20.7602 4.12061 20.3901 4.99649 20.0142C5.59641 19.7548 6.20383 19.4925 6.94623 19.3906C7.07521 19.3731 7.1637 19.5217 7.1142 19.6383C6.88624 20.1584 6.91473 20.9408 7.58814 21.4508C8.36503 22.0409 10.8742 22.1953 12.557 21.7174L14.3882 21.273C14.9686 21.1317 15.4981 20.8418 15.9195 20.4309L23.1635 13.3934C23.4272 13.1411 23.6369 12.8405 23.7804 12.5091C23.924 12.1777 23.9986 11.8219 24 11.4623C24.0013 11.1027 23.9294 10.7465 23.7884 10.414C23.6473 10.0816 23.44 9.77952 23.1782 9.5253C22.9164 9.27109 22.6054 9.06973 22.2632 8.93283C21.9209 8.79593 21.5541 8.7262 21.184 8.72766C20.8139 8.72912 20.4477 8.80174 20.1066 8.94134C19.7655 9.08093 19.4562 9.28474 19.1966 9.54101H19.1951Z" />
                </svg>
              </div>
              <div
                onClick={() => activateTab(4)}
                className={`${
                  tab === 4 ? "bg-white border-l-0" : "bg-none border-[1px]"
                } border-[#00895C] py-4 hover:bg-white group cursor-pointer`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="23"
                  viewBox="0 0 21 23"
                  className={`mx-auto text-${
                    tab === 4 ? "Green" : "white"
                  } group-hover:text-Green`}
                  fill="currentColor"
                >
                  <path
                    d="M12.625 19.7857H15.8125V11.2143H12.625V19.7857ZM9.4375 23V8H19V23H9.4375ZM4.125 23V11.2143H2V8H7.3125V23H4.125Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M4.83 5H3.633L1.631 1.969V5H0.434V0.0859998H1.631L3.633 3.131V0.0859998H4.83V5ZM8.75667 4.132H6.92267L6.62867 5H5.37567L7.15367 0.0859998H8.53967L10.3177 5H9.05067L8.75667 4.132ZM8.44867 3.208L7.83967 1.409L7.23767 3.208H8.44867ZM16.4238 0.0859998V5H15.2268V2.053L14.1278 5H13.1618L12.0558 2.046V5H10.8588V0.0859998H12.2728L13.6518 3.488L15.0168 0.0859998H16.4238ZM18.4816 1.045V2.039H20.0846V2.963H18.4816V4.041H20.2946V5H17.2846V0.0859998H20.2946V1.045H18.4816Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div
                onClick={() => activateTab(5)}
                className={`${
                  tab === 5 ? "bg-white border-l-0" : "bg-Green border-[1px]"
                } border-[#00895C] py-4 hover:bg-white group cursor-pointer`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className={`mx-auto text-${
                    tab === 5 ? "Green" : "white"
                  } group-hover:text-Green`}
                  fill="currentColor"
                >
                  <path
                    opacity="0.5"
                    d="M20.4 0H3.6C2.6461 0.00284891 1.73208 0.383048 1.05756 1.05756C0.383048 1.73208 0.00284891 2.6461 0 3.6V14.232L4.656 9.576C5.34204 8.92303 6.25289 8.55886 7.2 8.55886C8.14711 8.55886 9.05796 8.92303 9.744 9.576L13.1892 13.0404L14.2548 11.9748C14.9311 11.3022 15.8462 10.9247 16.8 10.9247C17.7538 10.9247 18.6689 11.3022 19.3452 11.9748L24 16.632V3.6C23.9972 2.6461 23.617 1.73208 22.9424 1.05756C22.2679 0.383048 21.3539 0.00284891 20.4 0Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M9.744 9.57598C9.05796 8.92301 8.14711 8.55884 7.2 8.55884C6.25289 8.55884 5.34204 8.92301 4.656 9.57598L0 14.232V20.4C0.00284891 21.3539 0.383048 22.2679 1.05756 22.9424C1.73208 23.6169 2.6461 23.9971 3.6 24H20.4C20.8841 23.9997 21.3631 23.9018 21.8085 23.7121C22.2538 23.5224 22.6564 23.2448 22.992 22.896L9.744 9.57598Z"
                    fill="currentColor"
                  ></path>
                  <path
                    opacity="0.25"
                    d="M23.9998 16.6296L19.345 11.9748C18.6686 11.3023 17.7536 10.9247 16.7998 10.9247C15.8459 10.9247 14.9309 11.3023 14.2546 11.9748L13.189 13.0404L22.987 22.8912C23.6374 22.2252 24.001 21.3312 23.9998 20.4V16.6296Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div
                onClick={() => activateTab(6)}
                className={`${
                  tab === 6 ? "bg-white border-l-0" : "bg-Green border-[1px]"
                } border-[#00895C] py-4 hover:bg-white group cursor-pointer`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="27"
                  height="27"
                  viewBox="0 0 100 100"
                  className={`mx-auto text-${
                    tab === 6 ? "Green" : "white"
                  } group-hover:text-Green`}
                  fill="currentColor"
                >
                  <path
                    d="M73.1347 38.7349C49.1279 83.5927 50.2783 83.8614 45.4423 83.8614H14.1923C13.1346 83.8614 12.2692 82.8713 12.2692 81.6612C12.2692 80.451 13.1346 79.461 14.1923 79.461H45.4423C46.8583 79.461 47.9423 78.1607 47.9423 76.6006C47.9423 75.8306 47.6923 75.1265 47.2308 74.5985C46.75 74.0264 46.1346 73.7403 45.4423 73.7403H39.6538C39.6538 73.7403 39.6538 73.7403 39.6346 73.7403H7.07691C3.17312 73.7624 0 77.3928 0 81.8592C0 86.3476 3.19237 90 7.09616 90H75.2693L100 38.7349H73.1347ZM39.6346 54.5984H4.94232C3.61539 54.5984 2.40385 55.2145 1.51919 56.2046C0.594076 57.3691 0 58.5685 0 60.253V63.6853C0 66.8097 2.23083 69.3399 4.94232 69.3399H7.05766C7.07691 69.3399 7.09616 69.3399 7.09616 69.3399H39.6538C42.3654 69.3399 44.5769 66.8097 44.5769 63.6853V60.253C44.5769 57.1507 42.3654 54.5984 39.6346 54.5984ZM36.4038 64.1694H8.19233C7.13466 64.1694 6.26925 63.2013 6.26925 61.9692C6.26925 60.7591 7.13466 59.769 8.19233 59.769H36.4038C37.4615 59.769 38.3269 60.7591 38.3269 61.9692C38.3269 63.2013 37.4615 64.1694 36.4038 64.1694ZM67.0192 10H41C39.2795 10 37.6314 11.1956 37.3077 11.9362L37.1346 12.1342C37.11 12.1905 6.40278 50.1517 6.36538 50.1979H39.6346C44.1346 50.1979 47.8269 54.1144 48.3269 59.109L71.0385 18.9329C71.0577 18.9109 71.0577 18.8888 71.077 18.8448L71.2307 18.5808C71.6924 17.7227 71.9424 16.7106 71.9424 15.6546C71.9424 12.5302 69.7308 10 67.0192 10ZM72.9039 28.9218C72.7693 28.6578 72.3654 27.9978 71.5192 27.9978H70.5001C70.0232 28.841 48.0872 67.9212 47.3846 68.3498C47.1923 68.7458 47 69.142 46.7885 69.5159C47.9808 69.802 49.0962 70.462 49.9615 71.4961C50.2115 71.7602 50.4231 72.0682 50.6154 72.3982L72.8847 30.814C73.3269 29.9779 73.0577 29.2079 72.9039 28.9218Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div
                onClick={() => activateTab(7)}
                className={`${
                  tab === 7 ? "bg-white border-l-0" : "bg-Green border-[1px]"
                } border-[#00895C] py-4 hover:bg-white group cursor-pointer`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="24"
                  height="24"
                  viewBox="0 0 100 100"
                  className={`mx-auto ${
                    tab === 7
                      ? "text-Green"
                      : "text-white group-hover:text-Green"
                  }`}
                  fill="currentColor"
                >
                  <g clipPath="url(#clip0_323_95)" fill="currentColor">
                    <path
                      d="M8.62109 37.9333L16.6655 50L24.7099 37.9333L16.6655 25.8677L8.62109 37.9333Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M24.7099 12.0667L16.6655 0L8.62109 12.0667L16.6655 24.1322L24.7099 12.0667Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M16.0877 25L8.04442 12.9333L0 25L8.04442 37.0667L16.0877 25Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M25.2886 12.9333L17.2441 25L25.2886 37.0667L33.333 25L25.2886 12.9333Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M58.0439 12.0667L49.9995 0L41.9551 12.0667L49.9995 24.1322L58.0439 12.0667Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M41.3784 12.9333L33.334 25L41.3784 37.0667L49.4217 25L41.3784 12.9333Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M58.6206 12.9333L50.5762 25L58.6206 37.0667L66.665 25L58.6206 12.9333Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M41.9551 37.9333L49.9995 50L58.0439 37.9333L49.9995 25.8677L41.9551 37.9333Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M91.3779 12.0667L83.3335 0L75.2891 12.0667L83.3335 24.1322L91.3779 12.0667Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M75.2891 37.9333L83.3335 50L91.3779 37.9333L83.3335 25.8677L75.2891 37.9333Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M74.7104 12.9333L66.666 25L74.7104 37.0667L82.7537 25L74.7104 12.9333Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M83.9102 25L91.9546 37.0667L99.999 25L91.9546 12.9333L83.9102 25Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M99.9992 0V0.867778L91.9547 12.9333L91.377 12.0667L99.4203 0H99.9992Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M0.577776 0L8.6222 12.0667L8.04442 12.9333L0 0.867778V0H0.577776Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M32.7542 0L24.7109 12.0667L25.2887 12.9333L33.3331 0.867778L41.3776 12.9333L41.9553 12.0667L33.9109 0H32.7542Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M67.2449 0L75.2893 12.0667L74.7115 12.9333L66.6671 0.867778L58.6227 12.9333L58.0449 12.0667L66.0882 0H67.2449Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M8.62109 87.9333L16.6655 100L24.7099 87.9333L16.6655 75.8677L8.62109 87.9333Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M24.7099 62.0667L16.6655 50L8.62109 62.0667L16.6655 74.1322L24.7099 62.0667Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M16.0877 75L8.04442 62.9333L0 75L8.04442 87.0667L16.0877 75Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M25.2886 62.9333L17.2441 75L25.2886 87.0667L33.333 75L25.2886 62.9333Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M58.0439 62.0667L49.9995 50L41.9551 62.0667L49.9995 74.1322L58.0439 62.0667Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M41.3784 62.9333L33.334 75L41.3784 87.0667L49.4217 75L41.3784 62.9333Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M58.6206 62.9333L50.5762 75L58.6206 87.0667L66.665 75L58.6206 62.9333Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M41.9551 87.9333L49.9995 100L58.0439 87.9333L49.9995 75.8677L41.9551 87.9333Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M91.3779 62.0667L83.3335 50L75.2891 62.0667L83.3335 74.1322L91.3779 62.0667Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M75.2891 87.9333L83.3335 100L91.3779 87.9333L83.3335 75.8677L75.2891 87.9333Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M74.7104 62.9333L66.666 75L74.7104 87.0667L82.7537 75L74.7104 62.9333Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M83.9102 75L91.9546 87.0667L99.999 75L91.9546 62.9333L83.9102 75Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M99.9992 100V99.1322L91.9547 87.0667L91.377 87.9333L99.4203 100H99.9992Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M0.577776 100L8.6222 87.9333L8.04442 87.0667L0 99.1322V100H0.577776Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M32.7542 100L24.7109 87.9333L25.2887 87.0667L33.3331 99.1322L41.3776 87.0667L41.9553 87.9333L33.9109 100H32.7542Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M67.2449 100L75.2893 87.9333L74.7115 87.0667L66.6671 99.1322L58.6227 87.0667L58.0449 87.9333L66.0882 100H67.2449Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M91.9547 37.0667L91.377 37.9333L99.4203 50L91.377 62.0667L91.9547 62.9333L99.9992 50.8678V50V49.1322L91.9547 37.0667Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M8.6222 37.9333L8.04442 37.0667L0 49.1322V50V50.8678L8.04442 62.9333L8.6222 62.0667L0.577776 50L8.6222 37.9333Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M41.9553 37.9333L41.3776 37.0667L33.3331 49.1322L25.2887 37.0667L24.7109 37.9333L32.7542 50L24.7109 62.0667L25.2887 62.9333L33.3331 50.8678L41.3776 62.9333L41.9553 62.0667L33.9109 50L41.9553 37.9333Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M75.2893 37.9333L74.7115 37.0667L66.6671 49.1322L58.6227 37.0667L58.0449 37.9333L66.0882 50L58.0449 62.0667L58.6227 62.9333L66.6671 50.8678L74.7115 62.9333L75.2893 62.0667L67.2449 50L75.2893 37.9333Z"
                      fill="currentColor"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_323_95">
                      <rect width="100" height="100" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="w-[85%] flex justify-center items-center">
              {tab === 1 && (
                <div className="w-full">
                  <h1 className="font-Poppins font-bold text-lg pb-3 px-1">
                    Content for Tab 1
                  </h1>
                </div>
              )}
              {tab === 2 && (
                <div className="w-full">
                  <h1 className="font-Poppins font-bold text-lg pb-3 px-1">
                    Select the desired area to change color
                  </h1>
                  <div className="flex gap-2 py-2 border-[#EAE8E8] hover:border-Green border-t-[1px] border-b-[1px] px-3">
                    <div className="w-6 h-6 bg-[#1795BD] border-black border-[1px]"></div>
                    <h1 className="font-Poppins">Front</h1>
                  </div>
                  <div className="flex gap-2 py-2 border-[#EAE8E8] hover:border-Green border-t-[1px] border-b-[1px] px-3">
                    <div className="w-6 h-6 bg-[#050E5A] border-black border-[1px]"></div>
                    <h1 className="font-Poppins">Back</h1>
                  </div>
                  <div className="flex gap-2 py-2 border-[#EAE8E8] hover:border-Green border-t-[1px] border-b-[1px] px-3">
                    <div className="w-6 h-6 bg-[#1795BD] border-black border-[1px]"></div>
                    <h1 className="font-Poppins">Front Design 1</h1>
                  </div>
                  <div className="flex gap-2 py-2 border-[#EAE8E8] hover:border-Green border-t-[1px] border-b-[1px] px-3">
                    <div className="w-6 h-6 bg-[#050E5A] border-black border-[1px]"></div>
                    <h1 className="font-Poppins">Back Design 1</h1>
                  </div>
                </div>
              )}
              {tab === 3 && (
                <div className="w-full mx-2">
                  <h1 className="font-Poppins font-bold text-lg pb-3 px-1">
                    Please select the name
                  </h1>
                  <div className="flex flex-col bg-[#F3F4F6] py-2 px-3">
                    <h1 className="font-Poppins">Do you want to add Name?</h1>
                    <button
                      onClick={visibalTab}
                      className="bg-Green py-1 px-2 flex gap-1 justify-center items-center mt-1 text-sm text-white"
                    >
                      <HiOutlinePlusCircle />
                      Name
                    </button>
                  </div>
                  {visiable && (
                    <div className="mt-3">
                      <h1 className="font-Poppins">
                        <b>Note:</b> Drag the name where you it to be printed
                      </h1>
                      <div className="flex flex-col mt-3">
                        <h1 className="font-Poppins">Select a Font Size:</h1>
                        <div className="mt-2">
                          <input
                            type="number"
                            className="bg-[#F3F4F6] w-[100%] py-1 font-Poppins"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col mt-3">
                        <h1 className="font-Poppins">Select a Font Family:</h1>
                        <div className="mt-2">
                          <select
                            id="option3"
                            name="option3"
                            className="bg-[#F3F4F6] w-[100%] py-1 font-Poppins"
                          >
                            <option value="arial">Arial, sans-serif</option>
                            <option value="verdana">Verdana, sans-serif</option>
                            <option value="georgia">Georgia, serif</option>
                            <option value="times-new-roman">
                              Times New Roman, serif
                            </option>
                            <option value="courier-new">
                              Courier New, monospace
                            </option>
                            <option value="agdasima">Agdasima</option>
                            <option value="anton">Anton</option>
                            <option value="arvo">Arvo</option>
                            <option value="bangers">Bangers</option>
                            <option value="bebas-neue">Bebas Neue</option>
                            <option value="bevan">Bevan</option>
                            <option value="black-ops-one">Black Ops One</option>
                            <option value="bungee">Bungee</option>
                            <option value="bungee-inline">Bungee Inline</option>
                            <option value="bungee-outline">
                              Bungee Outline
                            </option>
                            <option value="changa">Changa</option>
                            <option value="chewy">Chewy</option>
                            <option value="concert-one">Concert One</option>
                            <option value="contrail-one">Contrail One</option>
                            <option value="creepster">Creepster</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
              {tab === 4 && (
                <div className="w-full mx-2">
                  <h1 className="font-Poppins font-bold text-lg pb-3 px-1">
                    Please select the name
                  </h1>
                  <div className="flex flex-col bg-[#F3F4F6] py-2 px-3">
                    <h1 className="font-Poppins">Do you want to add Name?</h1>
                    <button
                      onClick={visibalTab}
                      className="bg-Green py-1 px-2 flex gap-1 justify-center items-center mt-1 text-sm text-white"
                    >
                      <HiOutlinePlusCircle />
                      Name
                    </button>
                  </div>
                  {visiable && (
                    <div className="mt-3">
                      <h1 className="font-Poppins">
                        <b>Note:</b> Drag the name where you it to be printed
                      </h1>
                      <div className="flex flex-col mt-3">
                        <h1 className="font-Poppins">Select a Font Size:</h1>
                        <div className="mt-2">
                          <input
                            type="number"
                            className="bg-[#F3F4F6] w-[100%] py-1 font-Poppins"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col mt-3">
                        <h1 className="font-Poppins">Select a Font Family:</h1>
                        <div className="mt-2">
                          <select
                            id="option3"
                            name="option3"
                            className="bg-[#F3F4F6] w-[100%] py-1 font-Poppins"
                          >
                            <option value="arial">Arial, sans-serif</option>
                            <option value="verdana">Verdana, sans-serif</option>
                            <option value="georgia">Georgia, serif</option>
                            <option value="times-new-roman">
                              Times New Roman, serif
                            </option>
                            <option value="courier-new">
                              Courier New, monospace
                            </option>
                            <option value="agdasima">Agdasima</option>
                            <option value="anton">Anton</option>
                            <option value="arvo">Arvo</option>
                            <option value="bangers">Bangers</option>
                            <option value="bebas-neue">Bebas Neue</option>
                            <option value="bevan">Bevan</option>
                            <option value="black-ops-one">Black Ops One</option>
                            <option value="bungee">Bungee</option>
                            <option value="bungee-inline">Bungee Inline</option>
                            <option value="bungee-outline">
                              Bungee Outline
                            </option>
                            <option value="changa">Changa</option>
                            <option value="chewy">Chewy</option>
                            <option value="concert-one">Concert One</option>
                            <option value="contrail-one">Contrail One</option>
                            <option value="creepster">Creepster</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
              {tab === 5 && (
                <div className="w-full">
                  <h1 className="font-Poppins font-bold text-lg pb-3 px-3">
                    Please Upload the logo
                  </h1>
                  <div>
                    <div>
                      <div
                        onClick={() => clickFaq(1)}
                        className="bg-[#CCECE2] py-2"
                      >
                        <h1 className="flex items-center font-Poppins font-medium px-2 cursor-pointer">
                          <MdKeyboardArrowRight className="text-2xl" />
                          Select Printing Style for the company logo
                        </h1>
                      </div>
                      {openFaq === 1 && (
                        <div className="pb-4">
                          <h1 className="font-Poppins px-3 py-4">
                            <b>Note:</b> Drag the logo where you want it to be
                            printed
                          </h1>
                          <div className="px-3 flex gap-10">
                            <div className="border-[1px] border-black hover:border-green cursor-pointer">
                              <img
                                src="./public/image/Embroidery.webp"
                                alt="Embroidery"
                              />
                              <h1>Embroidery</h1>
                            </div>
                            <div className="border-[1px] border-black hover:border-green cursor-pointer">
                              <img
                                src="./public/image/Sublimation.webp"
                                alt="Sublimation"
                              />
                              <h1>Sublimation</h1>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div>
                      <div
                        onClick={() => clickFaq(2)}
                        className="bg-[#CCECE2] py-2"
                      >
                        <h1 className="flex items-center font-Poppins font-medium px-2 cursor-pointer">
                          <MdKeyboardArrowRight className="text-2xl" />
                          Do you need to add the sponsor logo?
                        </h1>
                      </div>
                      {openFaq === 2 && (
                        <div className="px-3 pb-3">
                          <h1 className="font-Poppins px-3 py-4">
                            Please Select the image
                          </h1>
                          <div>
                            <input
                              type="file"
                              id="fileUpload"
                              name="fileUpload"
                              className="border-[1px] border-slate-200 px-2 py-2"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                    <div>
                      <div
                        onClick={() => clickFaq(3)}
                        className="bg-[#CCECE2] py-2"
                      >
                        <h1 className="flex items-center font-Poppins font-medium px-2 cursor-pointer">
                          <MdKeyboardArrowRight className="text-2xl" />
                          Do you need to add the club logo?
                        </h1>
                      </div>
                      {openFaq === 3 && (
                        <div className="px-3 pb-3">
                          <h1 className="font-Poppins px-3 py-4">
                            Please Select the image
                          </h1>
                          <div>
                            <input
                              type="file"
                              id="fileUpload"
                              name="fileUpload"
                              className="border-[1px] border-slate-200 px-2 py-2"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
              {tab === 6 && (
                <div className="w-full">
                  <h1 className="font-Poppins font-bold text-lg pb-3 px-1">
                    Please select the material
                  </h1>
                  <div className="px-3 flex gap-5">
                    <div className="border-[1px] border-black hover:border-Green cursor-pointer w-1/2 flex flex-col">
                      <img
                        src="./public/image/Polyester.webp"
                        alt="Embroidery"
                      />
                      <h1 className="text-center font-Poppins">Polyester</h1>
                    </div>
                    <div className="border-[1px] border-black hover:border-Green cursor-pointer w-1/2 flex flex-col">
                      <img src="./public/image/Cotton.webp" alt="Sublimation" />
                      <h1 className="text-center font-Poppins">
                        Cotton (+ $2)
                      </h1>
                    </div>
                  </div>
                </div>
              )}
              {tab === 7 && (
                <div className="w-full px-4">
                  <h1 className="font-Poppins font-bold text-lg pb-3 px-1">
                    Please select the design patterns
                  </h1>
                  <div className=" cursor-pointer">
                    <img
                      className="w-[80px] border-[1px] border-black hover:border-Green"
                      src="./public/image/star-shirt.webp"
                      alt="Embroidery"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="w-[50%] bg-[#F3F3F3]">
            
          </div>
          <div className="w-[25%] border-[#F3F3F3] border-[2px]">
            {tab === 2 && (
              <div className="p-4">
                <h1 className="font-Poppins font-bold text-lg pb-3 px-1">
                  Change the selected layer color.
                </h1>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={opacity}
                  onChange={handleOpacityChange}
                  className="w-full h-2  cursor-pointer"
                />
                <div className="grid grid-cols-10 gap-2 mt-4">
                  {colors.map((color, index) => (
                    <div
                      key={index}
                      style={{ backgroundColor: color }}
                      className="w-8 h-8 rounded cursor-pointer"
                    />
                  ))}
                </div>
              </div>
            )}
            {tab === 3 && (
              <div className="p-4">
                <h1 className="font-Poppins font-bold text-lg pb-3 px-1">
                  Change the name color.
                </h1>
                <div className="grid grid-cols-10 gap-2 mt-4">
                  {colors.map((color, index) => (
                    <div
                      key={index}
                      style={{ backgroundColor: color }}
                      // style={{ backgroundColor: color, opacity: opacity }}
                      className="w-8 h-8 rounded cursor-pointer"
                    />
                  ))}
                </div>
              </div>
            )}
            {tab === 4 && (
              <div className="p-4">
                <h1 className="font-Poppins font-bold text-lg pb-3 px-1">
                  Change the name color.
                </h1>
                <div className="grid grid-cols-10 gap-2 mt-4">
                  {colors.map((color, index) => (
                    <div
                      key={index}
                      style={{ backgroundColor: color }}
                      // style={{ backgroundColor: color, opacity: opacity }}
                      className="w-8 h-8 rounded cursor-pointer"
                    />
                  ))}
                </div>
              </div>
            )}
            {tab === 7 && (
              <div className="p-4">
                <h1 className="font-Poppins font-bold text-lg pb-3 px-1">
                  Change the name color.
                </h1>
                <div className="grid grid-cols-10 gap-2 mt-4">
                  {colors.map((color, index) => (
                    <div
                      key={index}
                      style={{ backgroundColor: color }}
                      // style={{ backgroundColor: color, opacity: opacity }}
                      className="w-8 h-8 rounded cursor-pointer"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
