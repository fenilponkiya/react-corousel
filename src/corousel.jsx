import { Box } from "@mui/material";
import JsonImage from "../mock_data.json";
import { useEffect, useState } from "react";
export const Corousel = () => {
  const JsonImageLastLength = JsonImage.length - 1;
  const [activeIndex, setActiveIndex] = useState(0);
  const [className, setClassName] = useState("");
  const singleImageData = JsonImage[activeIndex];
  useEffect(() => {
    const interval = setInterval(() => {
      setClassName("");
    }, 2000);
    return () => clearInterval(interval);
  }, [className]);

  return (
    <>
      <Box
        sx={{
          overflow: "hidden",
          position: "relative",
          height: "50vh",
          width: "100%",
        }}
      >
        <span
          style={{
            fontSize: "40px",
            position: "absolute",
            zIndex: 1,
            top: "45%",
            left: "0.3%",
            cursor: "pointer",
          }}
          className="prev"
          onClick={() => {
            setActiveIndex((prev) =>
              prev === 0 ? JsonImageLastLength : prev - 1
            );
            setClassName("left");
          }}
        >
          &#10094;
          {singleImageData?.id}
        </span>
        <Box
          sx={{
            fontSize: "40px",
            position: "absolute",
            zIndex: 1,
            top: "45%",
            right: "0%",
            cursor: "pointer",
          }}
          className="next"
          onClick={() => {
            setActiveIndex((prev) =>
              prev === JsonImageLastLength ? 0 : prev + 1
            );
            setClassName("right");
          }}
        >
          {singleImageData?.id}
          &#10095;
        </Box>

        <img
          draggable={true}
          className={className}
          src={singleImageData?.image}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            objectFit: "cover",
          }}
          onDrag={(e) => console.log(e)}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            position: "absolute",
            bottom: "8%",
          }}
        >
          {JsonImage?.map(({ _, image }, index) => {
            return (
              <div
                style={{
                  zIndex: 1,
                  width: "100%",
                  maxWidth: "max-content",

                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <span
                  style={{
                    width: "1.5rem",
                    cursor: "pointer",
                    height: "1.5rem",
                    margin: "0px 3px",
                    borderRadius: "50%",
                    background:
                      index === activeIndex
                        ? "rgba(0,0,0,0.3)"
                        : "rgba(10,0,0,0.1)",
                  }}
                  onClick={() => setActiveIndex(index)}
                />
              </div>
            );
          })}
        </div>
      </Box>
    </>
  );
};
