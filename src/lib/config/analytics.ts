import ReactGA from "react-ga";
export function initializeAnalytics() {
  const ID = process.env.TRACKING_ID;
  if (typeof ID === "undefined") {
    console.error("The tracking ID is undefined!");
    return;
  }
  ReactGA.initialize(ID);
}

export function trackPageView(page: any) {
  ReactGA.pageview(page);
}
