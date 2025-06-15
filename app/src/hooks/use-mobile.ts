import { useEffect, useState } from "react"

const defaultMediaQuery = "(min-width: 900px)"

export const useMobile = (mediaQuery: string = defaultMediaQuery) => {
    const [isMobile, setIsMobile] = useState(() => window.matchMedia(mediaQuery).matches)

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
