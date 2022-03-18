import Particles from "../components/Particles";
import ReactFullpage from "@fullpage/react-fullpage";
import ContactForm from "../components/ContactForm";

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
              <div className="section">
                <div className="hero">
                  <h1>Hi, I&apos;m Tim Hunter</h1>
                  <u onClick={() => fullpageApi.moveTo(2)}>Researcher</u>,{" "}
                  <u onClick={() => fullpageApi.moveTo(3)}>developer</u>,
                  {" and "}
                  <u onClick={() => fullpageApi.moveTo(4)}>Tutor</u>
                  <br />
                  {"Want to work together? "}
                  <u onClick={() => fullpageApi.moveTo(5)}>contact me!</u>
                </div>
              </div>
              <div className="section">
                <div className="hero">
                  <h1>Research</h1>
                  <p>
                    I am a computational researcher focused on medical
                    applications of high performance computational resources.
                  </p>
                  <p>
                    Currently I research the impacts of atrial fibrillation on
                    cerebral blood circulation.
                  </p>
                </div>
              </div>
              <div className="section">
                <div className="hero">
                  <h1>Software development</h1>
                  <p>
                    I am primarily a web developer. I develop sites for small
                    businesses and individuals.
                  </p>

                  <p>I currently use Javascript, Python, and C++.</p>
                </div>
              </div>
              <div className="section">
                <div className="hero">
                  <h1>Tutoring</h1>
                  <p>
                    I offer tutoring for high-school and undergraduate students
                    in math, physics and computer science.
                  </p>
                </div>
              </div>
              <div className="section">
                <div className="hero contact">
                  <h1>contact:</h1>
                  <ContactForm />
                </div>
              </div>
            </ReactFullpage.Wrapper>
          )
        }
      />
    </>
  );
}
