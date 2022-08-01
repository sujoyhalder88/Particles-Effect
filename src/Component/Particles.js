import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";

const ParticlesComponent = () => {
    const options = useMemo(() => {
        return {
            // background: {
            //     color: "#000",
            // },
            // fullScreen: {
            //     enable: false,
            //     zindex: -1,
            // },
            // interactivity: {
            //     events: {
            //         onclick: {
            //             enable: true,
            //             mode: "push",
            //         },
            //         onhover: {
            //             enable: true,
            //             mode: "repulse",
            //         },
            //     },
            //     modes: {
            //         push: {
            //             quantity: 1,
            //         },
            //         repulse: {
            //             distance: 150,
            //         },
            //     },
            // },
            // particles: {
            //     shape: {
            //         type: "circle",
            //         stroke: {
            //             width: 5,
            //             color: "#FFFFFF",
            //         },
            //     },
            //     links: {
            //         enable: true,
            //         distance: 100,
            //     },
            //     move: {
            //         enable: true,
            //         speed: { min: 1, max: 3 },
            //     },
            //     opacity: {
            //         value: { min: 0.3, max: 0.8 },
            //     },
            //     size: {
            //         value: { min: 1, max: 2 },
            //     },
            // },

            //Another Particles=================
            particles: {
                number: {
                    value: 218,
                    density: {
                        enable: true,
                        value_area: 800,
                    },
                },
                color: {
                    value: "#000",
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000",
                    },
                    polygon: {
                        nb_sides: 5,
                    },
                    // image: {
                    //     src: "img/github.svg",
                    //     width: 100,
                    //     height: 100,
                    // },
                },
                opacity: {
                    value: 1,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0,
                        sync: false,
                    },
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 4,
                        size_min: 0.3,
                        sync: false,
                    },
                },
                line_linked: {
                    enable: false,
                    distance: 150,
                    color: "#FF0000",
                    opacity: 0.4,
                    width: 1,
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 600,
                    },
                },
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "bubble",
                    },
                    onclick: {
                        enable: true,
                        mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1,
                        },
                    },
                    bubble: {
                        distance: 250,
                        size: 0,
                        duration: 2,
                        opacity: 0,
                        speed: 3,
                    },
                    repulse: {
                        distance: 400,
                        duration: 0.4,
                    },
                    push: {
                        particles_nb: 4,
                    },
                    remove: {
                        particles_nb: 2,
                    },
                },
            },
            retina_detect: true,
        };
    }, []);

    const particlesInit = useCallback((engine) => {
        loadSlim(engine);
    }, []);
    return (
        <div>
            <Particles
                style={{
                    minHeight: "100vh",
                }}
                init={particlesInit}
                options={options}
            />
        </div>
    );
};

export default ParticlesComponent;
