import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface CircularProgressChartProps {
  progress: number;
}

const CircularProgressChart: React.FC<CircularProgressChartProps> = ({
  progress,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Get the total scrollable height of the document
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      // Calculate the scroll percentage
      const scrollPosition = window.scrollY;
      const scrollPercentage = (scrollPosition / scrollHeight) * 100;

      // Update the state with the scroll progress value (between 0 and 100)
      setScrollProgress(Math.min(100, scrollPercentage)); // Ensure it doesn't go above 100
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ width: 120, height: 120, position: "relative" }}>
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <defs>
          <linearGradient
            id="progressGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="17.71%" stopColor="rgba(98, 60, 234, 0.06)" />
            <stop offset="86.86%" stopColor="#623CEA" />
          </linearGradient>
        </defs>
      </svg>

      <CircularProgressbar
        value={scrollProgress} // Use the dynamic scroll progress
        text={`${Math.round(scrollProgress)}%`} // Display the percentage text
        styles={buildStyles({
          textColor: "#1C2A53",
          pathColor: "url(#progressGradient)",
          trailColor: "#EAEAEA",
          textSize: "24px",
        })}
      />
    </div>
  );
};

export default CircularProgressChart;
