export const NewArrivals = (props: any) => {
  const { to = "RIGHT" } = props;
  if (to === "RIGHT") {
    return (
      <>
        <div className={"myElement"}>{/* Nội dung của bạn */}</div>
        <div className="wrapper-heading-home wrapper-heading-home-new">
          <div className="wrapper-animation flex gap-10">
            <span className="text-animation">
              <span>NEW ARRIVALS</span>
            </span>

            <span className="text-animation">
              <span>NEW ARRIVALS</span>
            </span>

            <span className="text-animation">
              <span>NEW ARRIVALS</span>
            </span>

            <span className="text-animation">
              <span>NEW ARRIVALS</span>
            </span>

            <span className="text-animation">
              <span>NEW ARRIVALS</span>
            </span>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className={"myElement"}>{/* Nội dung của bạn */}</div>
      <div className="wrapper-heading-home wrapper-heading-home-new">
        <div className="wrapper-animation2 flex gap-20">
          <span className="text-animation2">
            <span>streetwear brand limited</span>
          </span>

          <span className="text-animation2">
            <span>streetwear brand limited</span>
          </span>

          <span className="text-animation2">
            <span>streetwear brand limited</span>
          </span>

          <span className="text-animation2">
            <span>streetwear brand limited</span>
          </span>

          <span className="text-animation2">
            <span>streetwear brand limited</span>
          </span>
        </div>
      </div>
    </>
  );
};
