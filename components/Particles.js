import Particles from "react-tsparticles";

const ParticleBackground = () => {
  const particleOptions = {
    background: {
      color: {
        value: "#000",
      },
      opacity: 1,
    },
    fullScreen: true,
    particles: {
      color: {
        value: "#ffffff",
      },
      opacity: {
        value: 0,
        random: false,
      },
      shape: {
        type: "polygon",
        polygon: {
          sides: 4,
          fill: false,
          closed: true,
        },
      },
      number: {
        value: 80,
        density: {
          enable: true,
          area: 800,
        },
      },
      stroke: {
        width: 1,
        color: "#ffffff",
        opacity: 0.4,
      },
      size: {
        value: 6,
        random: true,
      },
      lineLinked: {
        enable: true,
        distance: 100,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        outMode: "out",
        bounce: false,
        gravity: {
          enable: false,
          acceleration: 9.0,
          maxSpeed: 50,
        },
        attract: {
          enable: true,
          rotate: {
            x: 600,
            y: 600,
          },
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false,
          mode: "grab",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          lineLinked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particlesNb: 4,
        },
        remove: {
          particlesNb: 2,
        },
      },
    },
    retinaDetect: false,
  };
  return <Particles className="particles" options={particleOptions} />;
};

export default ParticleBackground;
