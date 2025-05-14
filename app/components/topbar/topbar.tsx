// import "./Topbar.scss";

import Container from "../container/container";

const Topbar = () => {
  return (
    <section className="topbar bg-secondary-500">
      <Container>
        <div className="flex justify-between p-1 px-4">
          <p className="text-white text-[10px] lg:text-[12px]">
            trekkingMantra@gmail.com
          </p>
          <p className="text-white text-[10px] lg:text-[12px]">
            @trekingmantra
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Topbar;
