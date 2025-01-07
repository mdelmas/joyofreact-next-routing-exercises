import Link from "next/link";
import React from "react";

const COLORS = ["lavender", "slateblue", "hotpink", "white"];

function ScreenSaverIndexPage() {
  return (
    <main>
      <p>Choose your color</p>
      <ul>
        {COLORS.map((color) => (
          <li key={color}>
            <Link href={`./01-screensaver/${color}`}>{color}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default ScreenSaverIndexPage;
