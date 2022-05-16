/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import Icon from "../GlobalComponents/Icon";
import GymTitle from "./GymTitle";
import GymSubtitle from "./GymSubtitle";
import GymProgramCard from "./GymProgramCard";
import Container from "../GlobalComponents/Container";

const GymProgram = ({ user }) => (
  <div css={styles} className="gymProgram">
    <GymTitle />
    <Icon />
    <GymSubtitle />
    <Container>
      <GymProgramCard
        title="Basic Fitness"
        desc=" Stretching, flexibility and aerobic exercise to strength training and sports nutrition."
        href="https://www.youtube.com/watch?v=AzV3EA-1-yM"
        user={user}
      />
      <GymProgramCard
        title="Advanced Muscle Course"
        desc="This advanced bodybuilder workout is designed to destroy each muscle group once a week over 5 days! Monday you will hit shoulders, Tuesday for arms, Wednesday for legs, Thursday for back and Friday for Chest."
        href="https://www.youtube.com/watch?v=vYCIqtJ1UiE"
        user={user}
      />
      <GymProgramCard
        title="New Gym Training"
        desc="Many people think they need to hit the gym 6 days per week, dutifully alternating weight training with cardio and bootcamps to get that jacked/toned body they’re after. "
        href="https://www.youtube.com/watch?v=PY6DrbX4W4o"
        user={user}
      />
      <GymProgramCard
        title="Yoga Training"
        desc="Yoga training improves posture and maintains the body’s ability to function over time by increasing body awareness, improving dynamic joint stabilization, and reducing risk of injury."
        href="https://www.youtube.com/watch?v=Eml2xnoLpYE"
        user={user}
      />
      <GymProgramCard
        title="Basic Muscle Course"
        desc="It involves targeting the single muscle per day "
        href="https://www.youtube.com/watch?v=lA-diBuGy6I"
        user={user}
      />
      <GymProgramCard
        title="Body Building Course"
        desc="It involves targeting the two or three muscles per day to improve the progress either to gain or loss the weight"
        href="https://www.youtube.com/watch?v=BbZtvU3u5CE"
        user={user}
      />
    </Container>
  </div>
);

const styles = css`
  width: 100%;
  min-height: 100vh;
  text-align: center;
  padding: 120px 0;
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 40px 0;
  }
  @media (max-width: 700px) {
    .container {
      flex-direction: column;
      justify-content: flex-start;
    }
  }
  @media (min-width: 701px) and (max-width: 1100px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default GymProgram;
