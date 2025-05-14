import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Topbar from "~/components/topbar/topbar";
import Header from "~/layouts/header";
import Banner from "~/components/banner/banner";
import Tripcard from "~/components/tripcard/tripcard";
import Container from "~/components/container/container";
import Sectionsubheader from "~/components/sectionsubheader/sectionsubheader";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <section className="topbar">
        <Topbar />
      </section>
      <section className="header trekkingmantra_transparent_bg">
        <Header />
      </section>
      <section className="banner">
        <Banner />
      </section>

      <section className="trips">
        <Container>
          <Sectionsubheader />

          <div className="lg:grid lg:grid-cols-12 gap-8 py-2">
            <div className="lg:col-span-4">
              <Tripcard
                figure="ladhak.png"
                rating={4.2}
                votesBy={252}
                discountedPrice={17895}
                originalPrice={20689}
                saves={3250}
                title="Switzerland Amsterdam Paris | Excursion to DISNEYLAND Paris"
              />
            </div>
            <div className="lg:col-span-4">
              <Tripcard
                figure="port.png"
                rating={4.1}
                votesBy={156}
                discountedPrice={19895}
                originalPrice={20789}
                saves={1250}
                title="Ladakh Adventure Expedition with Turtuk Village"
              />
            </div>
            <div className="lg:col-span-4">
              <Tripcard
                figure="spain.png"
                rating={3.9}
                votesBy={269}
                discountedPrice={19795}
                originalPrice={19789}
                saves={3652}
                title="Leh Ladakh Bike Trip | FREE Excursion to Chang-la Pass"
              />
            </div>
          </div>
        </Container>
      </section>

      <div className="p-20"></div>
    </div>
  );
}
