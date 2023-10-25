import { useEffect, useState } from 'react'

function useScrolledDown(yValue?: number): boolean {
  const [scrolledDown, setScrolledDown] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > (yValue || 10)) {
        setScrolledDown(true)
      } else {
        setScrolledDown(false)
      }
    }

    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll)

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [yValue]) // Empty dependency array means this effect runs once when the component mounts

  return scrolledDown
}

export default useScrolledDown
