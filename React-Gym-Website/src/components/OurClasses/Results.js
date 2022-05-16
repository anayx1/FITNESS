/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import Output from "./Output";
import ClassOneBg from "../Image/classOne.jpg";
import ClassTwoBg from "../Image/classTwo.jpg";
import ClassThreeBg from "../Image/classThree.jpg";
// import ClassFourBg from "../Image/classFour.jpg";

const Results = ({ training }) => (
  <div css={styles} className="results">
    {training === "FirstClass" && (
      <Output
        title="Muscle Gain "
        info="Having a good amount of muscles in your body gives you that strength of living with more energy than before, muscle reduces body fat and increase lean muscle mass. You will feel more energy and confidence and a better metabolism to maintain weight. This program will help you to achieve the body shape you always wanted."
        img={ClassOneBg}
      />
    )}

    {training === "SecondClass" && (
      <Output
        title="Weight Loss"
        info="You really don’t need the fat you stored in your body through your bad eating habits and lack of physical activity, by loosing the excess fats from your belly and overall body you will not only look slim but will also reduce the chances of some future diseases like type 2 diabetes, high blood pressure, heart disease, certain types of cancer and pregnancy problems.."
        img={ClassTwoBg}
      />
    )}
    {training === "ThirdClass" && (
      <Output
        title="Weight Gain"
        info="Let your vascularity visible to the world by this program, if you are done with your gaining or want to be more symmetrical, this program will help your muscles to get that definition and sharpness.

        "
        img={ClassThreeBg}
      />
    )}
  </div>
);

const styles = css`
  width: 100%;
  max-width: 60%;
  .test {
    width: 100%;
    height: 400px;
    background: red;
    &.two {
      background: blue;
    }
  }
  @media(max-width: 900px){
    max-width: 590px;
    padding: 30px 0 0 0;
  }
  @media (min-width: 901px) and (max-width: 1226px){
    max-width: 62%;
  }
`;

export default Results;
