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
  <Image src={logo} alt="logo" width={128} height={32} priority />
);
StaticImage.googlePlay = (
  <Image src={googlePlay} alt="google-play" width={135} height={40} priority />
);
StaticImage.appStore = (
  <Image src={appStore} alt="app-store" width={135} height={40} priority />
);
StaticImage.mobile = (
  <Image
    src={mobile}
    alt="mobile"
    height="0"
    sizes="100vw"
    className="h-auto w-full"
    priority
  />
);
StaticImage.airbnb = (
  <Image
    src={airbnb}
    alt="airbnb"
    height="0"
    sizes="100vw"
    className="h-auto w-full"
    priority
  />
);
StaticImage.hubSpot = (
  <Image
    src={hubSpot}
    alt="hubSpot"
    height="0"
    sizes="100vw"
    className="h-auto w-full"
    priority
  />
);
StaticImage.google = (
  <Image
    src={google}
    alt="google"
    height="0"
    sizes="100vw"
    className="h-auto w-full"
    priority
  />
);
StaticImage.microsoft = (
  <Image
    src={microsoft}
    alt="microsoft"
    height="0"
    sizes="100vw"
    className="h-auto w-full"
    priority
  />
);
StaticImage.walmart = (
  <Image
    src={walmart}
    alt="walmart"
    height="0"
    sizes="100vw"
    className="h-auto w-full"
    priority
  />
);
StaticImage.fedEx = (
  <Image
    src={fedEx}
    alt="fedEx"
    height="0"
    sizes="100vw"
    className="h-auto w-full"
    priority
  />
);
StaticImage.feature1 = (
  <Image
    src={feature1}
    alt="feature1"
    height="0"
    sizes="100vw"
    className="h-auto w-full"
    priority
  />
);
StaticImage.feature2 = (
  <Image
    src={feature2}
    alt="feature2"
    height="0"
    sizes="100vw"
    className="h-auto w-full"
    priority
  />
);
StaticImage.feature3 = (
  <Image
    src={feature3}
    alt="feature3"
    height="0"
    sizes="100vw"
    className="h-auto w-full"
    priority
  />
);
StaticImage.feature4 = (
  <Image
    src={feature4}
    alt="feature4"
    height="0"
    sizes="100vw"
    className="h-auto w-full"
    priority
  />
);
StaticImage.feature5 = (
  <Image
    src={feature5}
    alt="feature5"
    height="0"
    sizes="100vw"
    className="h-auto w-full"
    priority
  />
);
StaticImage.feature6 = (
  <Image
    src={feature6}
    alt="feature6"
    height="0"
    sizes="100vw"
    className="h-auto w-full"
    priority
  />
);
StaticImage.feature7 = (
  <Image
    src={feature7}
    alt="feature6"
    height="0"
    sizes="100vw"
    className="h-auto w-full"
    priority
  />
);
StaticImage.quoteMark = (
  <Image src={quoteMark} alt="quote-mark" width={142} height={116} priority />
);
StaticImage.smallQuoteMark = (
  <Image src={smallQuoteMark} alt="small-quote-mark" priority />
);
StaticImage.strapi = (
  <Image src={strapi} alt="strapi" className="h-full w-full" priority />
);

StaticImage.tool1 = (
  <Image src={tool1} alt="tool1" className="h-full w-full" priority />
);
StaticImage.tool2 = (
  <Image src={tool2} alt="tool2" className="h-full w-full" priority />
);
StaticImage.tool3 = (
  <Image src={tool3} alt="tool3" className="h-full w-full" priority />
);
StaticImage.tool4 = (
  <Image src={tool4} alt="tool4" className="h-full w-full" priority />
);
StaticImage.tool5 = (
  <Image src={tool5} alt="tool5" className="h-full w-full" priority />
);
StaticImage.tool6 = (
  <Image src={tool6} alt="tool6" className="h-full w-full" priority />
);
StaticImage.tool7 = (
  <Image src={tool7} alt="tool7" className="h-full w-full" priority />
);

StaticImage.mobile2 = <Image src={mobile2} alt="mobile2" priority />;
StaticImage.mobile3 = <Image src={mobile3} alt="mobile3" priority />;

StaticImage.logo2 = <Image src={logo2} alt="logo2" priority />;

export default StaticImage;
