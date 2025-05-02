import { useEffect } from "react";

const Calendly = () => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url={"https://calendly.com/mjdhsn2804/30min"}
      style={{ height: "100%", width: "100%" }}
    ></div>
  );
};

export default Calendly;
