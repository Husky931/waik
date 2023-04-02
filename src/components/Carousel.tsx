import { useEffect, useRef, useState } from "react"
import Hammer from "react-hammerjs"

const testList = ["text1", "text2", "text3", "text4", "text5", "text6"]

const Carousel = () => {
    const velocityRef = useRef(0)
    const xRef = useRef(-800)
    const [refresh, setRefresh] = useState({})

    useEffect(() => {
        let unmounted = false
        const animationLoop = () => {
            if (unmounted) return
            requestAnimationFrame(animationLoop)
            velocityRef.current *= 0.9
            xRef.current += velocityRef.current
            setRefresh({})
        }
        animationLoop()
        return () => {
            unmounted = true
        }
    }, [])

    return (
        <Hammer
            onPan={(e) => {
                velocityRef.current = e.velocityX * 10
            }}
        >
            <div className="overflow-hidden w-screen">
                <div
                    className="flex"
                    style={{
                        transform: `translateX(${xRef.current}px)`,
                        gap: 30
                    }}
                >
                    {testList.map((text, i) => (
                        <div
                            style={{ width: 50, background: "yellow" }}
                            key={i}
                        >
                            {text}
                        </div>
                    ))}
                    {testList.map((text, i) => (
                        <div
                            style={{ width: 50, background: "yellow" }}
                            key={i}
                        >
                            {text}
                        </div>
                    ))}
                    {testList.map((text, i) => (
                        <div
                            style={{ width: 70, background: "yellow" }}
                            key={i}
                        >
                            {text}
                        </div>
                    ))}
                </div>
            </div>
        </Hammer>
    )
}

export default Carousel
