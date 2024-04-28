import React from "react";
import Image from "next/image";

import logo from "../photos/logo.svg";
import googlePlay from "../photos/google-play.svg";
import appStore from "../photos/app-store.svg";
import mobile from "../photos/mobile.svg";
import airbnb from "../photos/airbnb.svg";
import hubSpot from "../photos/hub-spot.svg";
import google from "../photos/google.svg";
import microsoft from "../photos/microsoft.svg";
import walmart from "../photos/walmart.svg";
import fedEx from "../photos/fed-ex.svg";
import strapi from "../photos/strapi.svg";

import feature1 from "../photos/feature1.svg";
import feature2 from "../photos/feature2.svg";
import feature3 from "../photos/feature3.svg";
import feature4 from "../photos/feature4.svg";
import feature5 from "../photos/feature5.svg";
import feature6 from "../photos/feature6.svg";
import feature7 from "../photos/feature7.svg";
import quoteMark from "../photos/quote-mark.svg";
import smallQuoteMark from "../photos/small-quote-mark.svg";

import tool1 from "../photos/tool1.svg";
import tool2 from "../photos/tool2.svg";
import tool3 from "../photos/tool3.svg";
import tool4 from "../photos/tool4.svg";
import tool5 from "../photos/tool5.svg";
import tool6 from "../photos/tool6.svg";
import tool7 from "../photos/tool7.svg";

import mobile2 from "../photos/mobile2.svg";
import mobile3 from "../photos/mobile3.svg";

import logo2 from "../photos/logo2.svg";

const StaticImage = () => {
  return null;
};

StaticImage.logo = (
  <Image src={logo} alt="logo" width={128} height={32} loading="lazy" />
);
StaticImage.googlePlay = (
  <Image
    src={googlePlay}
    alt="google-play"
    width={135}
    height={40}
    loading="lazy"
  />
);
StaticImage.appStore = (
  <Image
    src={appStore}
    alt="app-store"
    width={135}
    height={40}
    loading="lazy"
  />
);
StaticImage.mobile = (
  <Image
    src={mobile}
    alt="mobile"
    width={320}
    height={640}
    loading="lazy"
  />
);
StaticImage.airbnb = (
  <Image src={airbnb} alt="airbnb" width={90} height={28} loading="lazy" />
);
StaticImage.hubSpot = (
  <Image src={hubSpot} alt="hubSpot" width={86} height={24} loading="lazy" />
);
StaticImage.google = (
  <Image src={google} alt="google" width={84} height={28} loading="lazy" />
);
StaticImage.microsoft = (
  <Image
    src={microsoft}
    alt="microsoft"
    width={122}
    height={26}
    loading="lazy"
  />
);
StaticImage.walmart = (
  <Image src={walmart} alt="walmart" width={112} height={26} loading="lazy" />
);
StaticImage.fedEx = (
  <Image src={fedEx} alt="fedEx" width={80} height={24} loading="lazy" />
);
StaticImage.feature1 = (
  <Image
    src={feature1}
    alt="feature1"
    height="0"
    sizes="100vw"
    className="h-auto w-full"
  />
);
StaticImage.feature2 = (
  <Image
    src={feature2}
    alt="feature2"
    height="0"
    sizes="100vw"
    className="h-auto w-full"
  />
);
StaticImage.feature3 = (
  <Image
    src={feature3}
    alt="feature3"
    height="0"
    sizes="100vw"
    className="h-auto w-full"
  />
);
StaticImage.feature4 = (
  <Image
    src={feature4}
    alt="feature4"
    height="0"
    sizes="100vw"
    className="h-auto w-full"
  />
);
StaticImage.feature5 = (
  <Image
    src={feature5}
    alt="feature5"
    height="0"
    sizes="100vw"
    className="h-auto w-full"
  />
);
StaticImage.feature6 = (
  <Image
    src={feature6}
    alt="feature6"
    height="0"
    sizes="100vw"
    className="h-auto w-full"
  />
);
StaticImage.feature7 = (
  <Image
    src={feature7}
    alt="feature6"
    height="0"
    sizes="100vw"
    className="h-auto w-full"
  />
);
StaticImage.quoteMark = (
  <Image
    src={quoteMark}
    alt="quote-mark"
    width={142}
    height={116}
    loading="lazy"
  />
);
StaticImage.smallQuoteMark = (
  <Image
    src={smallQuoteMark}
    alt="small-quote-mark"
    width={16}
    height={13}
    loading="lazy"
  />
);
StaticImage.strapi = (
  <Image src={strapi} alt="strapi" width={112} height={32} loading="lazy" />
);

StaticImage.tool1 = (
  <Image src={tool1} alt="tool1" width={64} height={64} loading="lazy" />
);
StaticImage.tool2 = (
  <Image src={tool2} alt="tool2" width={64} height={64} loading="lazy" />
);
StaticImage.tool3 = (
  <Image src={tool3} alt="tool3" width={64} height={64} loading="lazy" />
);
StaticImage.tool4 = (
  <Image src={tool4} alt="tool4" width={64} height={64} loading="lazy" />
);
StaticImage.tool5 = (
  <Image src={tool5} alt="tool5" width={64} height={64} loading="lazy" />
);
StaticImage.tool6 = (
  <Image src={tool6} alt="tool6" width={64} height={64} loading="lazy" />
);
StaticImage.tool7 = (
  <Image src={tool7} alt="tool7" width={64} height={64} loading="lazy" />
);

StaticImage.mobile2 = (
  <Image src={mobile2} alt="mobile2" width={232} height={464} loading="lazy" />
);
StaticImage.mobile3 = (
  <Image src={mobile3} alt="mobile3" width={232} height={464} loading="lazy" />
);

StaticImage.logo2 = (
  <Image src={logo2} alt="logo2" width={32} height={32} loading="lazy" />
);

export default StaticImage;
