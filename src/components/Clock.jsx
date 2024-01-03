import { useEffect, useState } from "react";

export default function Clock() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {tick()}, 1000)
    return () => {
      clearInterval(interval);
    }
  }, [])

  const tick = () => {
    setDate(new Date());
  }

  return (
    <h3>{date.toLocaleTimeString()}</h3>
  )
}
