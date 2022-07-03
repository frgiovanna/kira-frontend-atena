import React from "react";
import HowToGet from "./HowToGet";
import HowToUse from "./HowToUse";

import * as Styles from "./styles";

export default function PointsDashboard() {
  const [value, setValue] = React.useState("howToGet"); 

  return (
    <Styles.Box>
      <div
        style={{ display: "flex", textAlign: "center", marginBottom: "24px" }}
      >
        <Styles.HowToGetSection
          onClick={() => setValue("howToGet")}
          value={value}
        >
          ganhe pontos
        </Styles.HowToGetSection>
        <Styles.HowToUseSection
          onClick={() => setValue("howToUse")}
          value={value}
        >
          saiba como usar
        </Styles.HowToUseSection>
      </div>

      <div style={{ margin: "0px 0px 80px 16px" }}>
        {value === "howToUse" ? <HowToUse /> : <HowToGet />}
      </div>
    </Styles.Box>
  );
}
