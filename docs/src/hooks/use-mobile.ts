import { useEffect, useState } from "react"

const defaultMediaQuery = "(max-width: 900px)"

export const useIsMobile = (mediaQuery: string = defaultMediaQuery) => {
    const [isMobile, setIsMobile] = useState(() => false)

    useEffect(() => {
        const matchMedia = window.matchMedia(mediaQuery)

        const handleChange = (event: MediaQueryListEvent) => {
            setIsMobile(event.matches)
        }

        matchMedia.addEventListener("change", handleChange)

        setIsMobile(matchMedia.matches)

        return () => matchMedia.removeEventListener("change", handleChange)
    }, [])

    return isMobile
}
