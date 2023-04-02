import { useState, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import { useWindowWidth } from "@react-hook/window-size"
import { Box } from "@mui/material"
import Step0 from "./steps/Step0"
import Step1 from "./steps/Step1"
import Step2 from "./steps/Step2"
import Step3 from "./steps/Step3"
import Step4 from "./steps/Step4"
import Step5 from "./steps/Step5"

function App() {
    const width = useWindowWidth()
    const [windowWidth, setWindowWidth] = useState<number | null>(null)

    useEffect(() => {
        setWindowWidth(width)
    }, [])

    return (
        <>
            {windowWidth! > 500 ? (
                <Box className="w-full min-h-screen flex flex-col justify-center items-center bg-black">
                    <div className="text-white">Please use mobile</div>
                </Box>
            ) : (
                <>
                    <Box className="w-full min-h-screen flex flex-col justify-center items-center">
                        <Routes>
                            <Route path="/" element={<Step0 />} />
                            <Route path="/step-1" element={<Step1 />} />
                            <Route path="/step-2" element={<Step2 />} />
                            <Route path="/step-3" element={<Step3 />} />
                            <Route path="/step-4" element={<Step4 />} />
                            <Route path="/step-5" element={<Step5 />} />
                        </Routes>
                    </Box>
                </>
            )}
        </>
    )
}

export default App
