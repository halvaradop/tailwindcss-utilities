import { useEffect, useState } from "react"

export const useMouse = () => {
    const [isMoving, setIsMoving] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setPosition({ x: event.clientX, y: event.clientY })
            setIsMoving(true)
        }

        const handleMouseLeave = () => {
            setIsMoving(false)
        }

        window.addEventListener("mousemove", handleMouseMove)
        window.addEventListener("mouseleave", handleMouseLeave)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            window.removeEventListener("mouseleave", handleMouseLeave)
        }
    }, [])
    return { isMoving, position }
}
