import React from "react";

import { Button, Img, Line, Text } from "components";
import { TypeAnimation } from 'react-type-animation';

const Home1Page = () => {
  return (
    <>
      <div className="bg-gradient  flex flex-col items-center justify-start mx-auto pb-[915px] w-full">
        <div className="flex flex-col justify-start relative w-full">
          <div className="font-roboto h-[1336px] sm:h-[1449px] md:h-[1944px] md:px-5 relative w-full">
            <Img
              className="h-[1336px] m-auto object-cover w-full"
              src="images/img_image8.png"
              alt="imageEight"
            />
            <div className="absolute bg-gradient1  flex flex-col h-full inset-[0] items-center justify-center m-auto p-[58px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col md:gap-10 gap-[156px] items-center justify-start w-[98%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[99%] md:w-full">
                  <Img
                    className="h-[75px] md:h-auto object-cover"
                    src="images/img_codestam1.png"
                    alt="codestamOne"
                  />
                  <Text
                    className="md:ml-[0] ml-[19px] md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
                    size="txtOutfitBold26"
                  >
                    EFHWAY 
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[272px] md:text-2xl sm:text-[22px] text-[26px] text-white-A700 cursor-pointer"
                    size="txtOutfitMedium26"
                  >
                    Home
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[69px] md:text-2xl sm:text-[22px] text-[26px] text-white-A700 cursor-pointer"
                    size="txtOutfitMedium26"
                  >
                    Services
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[68px] md:text-2xl sm:text-[22px] text-[26px] text-white-A700 cursor-pointer"
                    size="txtOutfitMedium26"
                  >
                    Company
                  </Text>
                  <Button
                    className="cursor-pointer font-medium font-poppins leading-[normal] min-w-[170px] md:ml-[0] ml-[43px] rounded-[12px] text-2xl md:text-[22px] text-center sm:text-xl hover:bg-purple-600 transition-all duration-100 ease-in-out"
                    color="purple_600"
                    size="xs"
                    variant="outline"
                  >
                    Get in touch
                  </Button>
                  <Button
                    className="cursor-pointer font-medium font-poppins leading-[normal] mb-2 min-w-[121px] ml-4 md:ml-[0] md:mt-0 mt-4 rounded-[12px] text-2xl md:text-[22px] text-center sm:text-xl"
                    color="blue_gray_700"
                    size="xs"
                    variant="fill"
                  >
                    Sign-up
                  </Button>
                </div>
                <div className="block flex-col items-start justify-start w-[99%] md:w-full">
                  <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
                    <div className="flex md:flex-1 flex-col gap-[29px] items-start justify-start w-[62%] md:w-full">
                      <div className="font-outfit h-56 md:h-[210px] relative w-full">
                        <Text
                          className="absolute left-[0] md:text-5xl text-[73px] text-indigo-50 top-[0] tracking-[1.09px]"
                          size="txtOutfitBold73"
                        >
                          <>
                            Empowering Your
                            <br />
                            Tech Vision: <TypeAnimation 
                                sequence={[
        
                                      'Innovation',
                                       1000, 
                                      'Succeed',
                                       1000,
                                      'Transform',
                                       1000,
        
                                           ]}
                                       wrapper="span"
                                       style={{color:"purple"}}
                                       speed={50}
                                       repeat={Infinity}
                                       />
                          </>
                        </Text>
                      </div>
                      <Text
                        className="text-4xl sm:text-[32px] md:text-[34px] text-indigo-50_01 tracking-[0.54px]"
                        size="txtRobotoRomanRegular36"
                      >
                        <>
                          Excellent services at affordable prices,
                          <br />
                          explore infinite possibilities.
                        </>
                      </Text>
                    </div>
                    <div className="flex sm:flex-1 flex-col h-[467px] sm:h-auto items-center justify-start w-[467px] sm:w-full">
                      <Img
                        className="h-[467px] md:h-auto rounded-[50%] w-[467px]"
                        src="images/img_image9.png"
                        alt="imageNine"
                      />
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row font-poppins gap-[49px] items-center justify-start w-[34%] md:w-full">
                    <Button
                      className="cursor-pointer font-semibold hover:bg-purple-600 transition-all duration-100 ease-in-out leading-[normal] min-w-[216px] text-3xl sm:text-[26px] md:text-[28px] text-center"
                      shape="round"
                      color="purple_600"
                      size="sm"
                      variant="outline"
                    >
                      Get in touch
                    </Button>
                    <Button
                      className="cursor-pointer font-semibold leading-[normal] min-w-[167px] text-3xl sm:text-[26px] md:text-[28px] text-center"
                      shape="round"
                      color="blue_gray_700"
                      size="sm"
                      variant="fill"
                    >
                      Sign-up
                    </Button>
                  </div>
                  <Text
                    className="flex  items-center justify-center leading-[65.00px] md:ml-[0]  mt-[261px] text-4xl sm:text-[32px] md:text-[34px] text-center text-indigo-50_01 tracking-[0.54px]"
                    size="txtRobotoRomanRegular36"
                  >
                    <>
                      Explore infinite possibilities, we empower organizations
                      to be
                      <br />
                      more advanced stream lined and competitive for the digital
                      era
                      <br />
                      through technology.
                    </>
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Line className="bg-deep_orange-50 flex h-[54px] items-center ml-[760px] justify-center md:ml-[0] mt-[30px] w-[5px]" />
          <div className="h-[304px] md:h-[393px] max-w-[1276px] mt-[89px] mx-auto md:px-5 relative w-full">
            <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[85%]">
              <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly w-full">
                <Line className="bg-blue_gray-700_01 h-[9px]  w-1/2" />
                <Line className="bg-blue_gray-700_01 h-[9px]  w-1/2" />
              </div>
            </div>
            <div className="absolute bg-blue_gray-100 flex flex-col h-max inset-y-[0] items-center justify-start left-[0] my-auto p-10 sm:px-5 rounded-[50%] w-[196px]">
              <div className="bg-purple-600 h-[116px] rounded-[50%] w-[116px]"></div>
            </div>
            <div className="absolute bg-blue_gray-100 flex flex-col h-max inset-y-[0] items-center justify-start my-auto p-[37px] sm:px-5 right-[0] rounded-[50%] w-[196px]">
              <div className="bg-indigo-A700 h-[116px] my-[3px] rounded-[50%] w-[116px]"></div>
            </div>
            <div className="absolute bg-blue_gray-100 flex flex-col h-full inset-[0] items-center justify-center m-auto p-6 sm:px-5 rounded-[50%] w-[304px]">
              <div className="flex flex-col h-60 items-center justify-start mt-4 w-60">
                <Img
                  className="h-60 md:h-auto rounded-[50%] w-60"
                  src="images/img_image10.png"
                  alt="imageTen"
                />
              </div>
            </div>
          </div>
          <Text
            className="md:ml-[0]  flex justify-center items-center mt-[353px] md:text-5xl text-[65px] text-purple-600"
            size="txtOutfitBold65"
          >
            Explore Our Offerings
          </Text>
          <div className="flex md:flex-col flex-row font-outfit md:gap-5 items-start justify-start md:ml-[0] ml-[30px] mt-[193px] md:px-5 w-[90%] md:w-full">
            <div className="flex flex-col h-[59px] items-center justify-start w-[59px]">
              <Img
                className="h-[59px] md:h-auto rounded-[50%] w-[59px]"
                src="images/img_image9_59x59.png"
                alt="imageNine_One"
              />
            </div>
            <div className="flex flex-col gap-3 items-start justify-start ml-7 md:ml-[0] w-[42%] md:w-full">
              <Text
                className="md:text-5xl text-6xl text-white-A700 tracking-[0.90px]"
                size="txtOutfitBold60"
              >
                Technology
              </Text>
              <Line className="bg-indigo-A700 block h-[9px] mt-2.5  w-full" />
            </div>
            <Text
              className="block flex-row items-end justify-around md:ml-[0] ml-[207px] relative md:text-5xl text-6xl text-white-A700 tracking-[0.90px] w-[500px]"
              size="txtOutfitBold60"
            >
              Startup Support
            </Text>
          </div>
          <Text
            className="md:ml-[0] ml-[170px] mt-[92px] sm:text-[35px] md:text-[41px] text-[45px] text-white-A700 tracking-[0.67px]"
            size="txtPoppinsRegular45"
          >
            Web Development
          </Text>
          <Text
            className="md:ml-[0] ml-[170px] mt-[50px] sm:text-[35px] md:text-[41px] text-[45px] text-white-A700 tracking-[0.67px]"
            size="txtPoppinsRegular45"
          >
            Mobile App
          </Text>
          <Text
            className="md:ml-[0] ml-[170px] mt-11 sm:text-[35px] md:text-[41px] text-[45px] text-white-A700 tracking-[0.67px]"
            size="txtPoppinsRegular45"
          >
            UI/UX
          </Text>
          <Text
            className="md:ml-[0] ml-[170px] mt-[51px] sm:text-[35px] md:text-[41px] text-[45px] text-white-A700 tracking-[0.67px]"
            size="txtPoppinsRegular45"
          >
            Cloud Solutions
          </Text>
          <Text
            className="md:ml-[0] ml-[170px] mt-[46px] sm:text-[35px] md:text-[41px] text-[45px] text-white-A700 tracking-[0.67px]"
            size="txtPoppinsRegular45"
          >
            <>
              Software Architecture <br />
              Solutions
            </>
          </Text>
          <Text
            className="font-outfit md:ml-[0] ml-[75px] mt-[933px] text-[22px] sm:text-lg text-purple-600 md:text-xl uppercase"
            size="txtRobotoRomanSemiBold22"
          >
            Why codestam
          </Text>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1340px] mt-[15px] mx-auto md:px-5 w-full">
            <Text
              className="flex-1 md:ml-[0] ml-[-30px] text-5xl sm:text-[38px] md:text-[44px] text-indigo-50_01 w-full"
              size="txtOutfitSemiBold48"
            >
              <>
                Crafting tomorrow&#39;s solutions through <br />
                innovative software development.
              </>
            </Text>
            <Button
              className="cursor-pointer font-poppins font-semibold leading-[normal] min-w-[216px] md:ml-[0] ml-[202px] md:mt-0 mt-3.5 text-3xl sm:text-[26px] md:text-[28px] text-center"
              shape="round"
              color="indigo_A700"
              size="sm"
              variant="outline"
            >
              Contact Us
            </Button>
            <div className="flex flex-col h-[59px] items-center justify-start ml-9 md:ml-[0] md:mt-0 mt-[17px] w-[59px]">
              <Img
                className="h-[59px] md:h-auto rounded-[50%] w-[59px]"
                src="images/img_image9_1.png"
                alt="imageNine_Two"
              />
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[71px] mt-[21px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700 tracking-[0.36px]"
            size="txtPoppinsRegular28"
          >
            <>
              Here at Codestam, we empowering companies with expert tech support
              and <br />
              delivering tailored software development solutions for businesses.
              Unlock <br />
              your venture&#39;s potential with our comprehensive services
              tailored <br />
              to meet your unique technological needs.
            </>
          </Text>
          <Text
            className="font-outfit md:ml-[0] ml-[460px] mt-[280px] text-[22px] sm:text-lg text-purple-600 md:text-xl uppercase"
            size="txtRobotoRomanSemiBold22"
          >
            Special assist to startups
          </Text>
          <div className="flex md:flex-col flex-row font-roboto gap-[43px] items-start justify-start md:ml-[0] ml-[76px] mt-[13px] md:px-5 w-[86%] md:w-full">
            <div className="flex flex-col md:gap-10 gap-[207px] items-start justify-start md:mt-0 mt-3 w-[26%] md:w-full">
              <Img
                className="h-[363px]"
                src="images/img_group3.svg"
                alt="groupThree"
              />
              <Text
                className="text-[22px] sm:text-lg text-purple-600 md:text-xl uppercase"
                size="txtRobotoRomanSemiBold22"
              >
                Our special approach
              </Text>
            </div>
            <div className="flex flex-col gap-[21px] items-start justify-start">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-indigo-50_01"
                size="txtOutfitSemiBold48"
              >
                <>
                  Transforming visions into reality <br />
                  through innovative software solutions.
                </>
              </Text>
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 tracking-[0.36px]"
                size="txtPoppinsRegular28"
              >
                <>
                  Elevate your startup&#39;s potential with our comprehensive
                  tech <br />
                  support and bespoke software development solutions. We <br />
                  understand the unique challenges startups face and offer{" "}
                  <br />
                  tailored assistance to navigate them seamlessly. Partner{" "}
                  <br />
                  with us to unlock innovation, streamline operations, and{" "}
                  <br />
                  propel your company&#39;s growth to new heights.
                </>
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-outfit gap-[11px] items-start justify-start ml-3 md:ml-[0] mt-[15px] md:px-5 w-[86%] md:w-full">
            <div className="flex flex-col h-[59px] items-center justify-start w-[59px]">
              <Img
                className="h-[59px] md:h-auto rounded-[50%] w-[59px]"
                src="images/img_image9_59x59.png"
                alt="imageNine_Three"
              />
            </div>
            <Text
              className="md:mt-0 mt-[5px] text-5xl sm:text-[38px] md:text-[44px] text-indigo-50_01"
              size="txtOutfitSemiBold48"
            >
              Transforming Ideas into Seamless Software Solutions.
            </Text>
          </div>
          <Text
            className="md:ml-[0] ml-[82px] mt-[9px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700 tracking-[0.36px]"
            size="txtPoppinsRegular28"
          >
            <>
              We at Codestam underscores the process of turning abstract
              concepts <br />
              into functional, user-friendly software products. It emphasizes
              the creative <br />
              transformation of ideas into tangible digital solutions through
              careful planning, <br />
              development, and ongoing maintenance, meeting specific needs and
              ensuring <br />a smooth user experience.
            </>
          </Text>
          <div className="bg-indigo-A700_9c flex flex-col font-outfit items-center justify-start mt-[380px] w-full">
            <div className="h-[710px] md:px-5 relative w-full">
              <Img
                className="h-[710px] m-auto object-cover w-full"
                src="images/img_image12.png"
                alt="imageTwelve"
              />
              <Text
                className="absolute h-max inset-y-[0] left-[8%] my-auto sm:text-[41px] md:text-[47px] text-[55px] text-white-A700"
                size="txtOutfitSemiBold55"
              >
                <>
                  Let’s work <br />
                  together
                </>
              </Text>
            </div>
          </div>
          <div className="bg-indigo-A700 h-[11px] mt-[402px] w-full"></div>
        </div>
      </div>
    </>
  );
};

export default Home1Page;
