import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export default function ParticlesBackground() {
    console.log("ParticlesBackground mounted");

    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
        console.log("tsparticles engine loaded");
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                background: { color: "#1a1a1a" },
                particles: {
                    number: { value: 100 },
                    shape: {
                        type: "circle",
                    },
                    opacity: {
                        value: 1,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 0.5,
                            opacity_min: 0,
                            sync: false
                        }
                    },
                    size: {
                        value: 3,
                        random: true,
                        anim: {
                            enable: false,
                            speed: 1,
                            size_min: 0.3,
                            sync: false
                        }
                    },
                    move: {
                        enable: true,
                        speed: 0.1,
                        direction: "none",
                        random: true,
                        straight: false,
                        out_mode: "out",
                        bounce: false
                    },
                    color: {
                        value: "#8e2de2"
                    }
                },
                retina_detect: true
            }}
            style={{
                position: "fixed",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                zIndex: -1,
            }}
        />
    );
}