import Particles from "../components/Particles";
import ReactFullpage from "@fullpage/react-fullpage";
import ContactForm from "../components/ContactForm";
import Link from "next/link";

const Page = (props) => {
  return (
    <div className="section">
      <div className="hero">
        <h1>{props.heading}</h1>
        {props.blurb}
      </div>
    </div>
  );
};

export default function Home() {
  const sectionsColors = [
    "#0912792e",
    "#a30f0f69",
    "#54aa283d",
    "#740fa35c",
    "#0f84a35c",
  ];
  const onLeave = (origin, destination, direction) => {
    console.log("onLeave", { origin, destination, direction });
    // arguments are mapped in order of fullpage.js callback arguments do something
    // with the event
  };

  return (
    <>
      <Particles />
      <ReactFullpage
        navigation
        onLeave={onLeave}
        // scrollHorizontally = {true}
        sectionsColor={sectionsColors}
        render={({ fullpageApi }) =>
          console.log("render prop change") || (
            <ReactFullpage.Wrapper>
              <Page
                heading={"Hi, I'm Tim Hunter"}
                blurb={
                  <>
                    <u onClick={() => fullpageApi.moveTo(2)}>Researcher</u>,{" "}
                    <u onClick={() => fullpageApi.moveTo(3)}>Developer</u>,
                    {" and "}
                    <u onClick={() => fullpageApi.moveTo(4)}>Tutor</u>
                    <br />
                    {"Want to work together? "}
                    <u onClick={() => fullpageApi.moveTo(5)}>contact me!</u>
                  </>
                }
              />
              <Page
                heading={"Research"}
                blurb={
                  <>
                    I am a computational researcher focused on medical
                    applications of high performance computational
                    resources\nCurrently I research the impacts of atrial
                    fibrillation on cerebral blood circulation.
                  </>
                }
              />
              <Page
                heading={"Software Development"}
                blurb={
                  <>
                    I am primarily a web developer. I develop sites for small
                    businesses and individuals.
                    <br />
                    I currently use Javascript, Python, and C++.
                    <br />
                    <Link href={"/development"}>
                      <a>Check out my projects -{">"}</a>
                    </Link>
                  </>
                }
              />

              <Page
                heading={"Tutoring"}
                blurb={
                  <>
                    I offer tutoring for high-school and undergraduate students
                    in math, physics and computer science.
                  </>
                }
              />
              <Page heading={"Contact"} blurb={<ContactForm />} />
            </ReactFullpage.Wrapper>
          )
        }
      />
    </>
  );
}
