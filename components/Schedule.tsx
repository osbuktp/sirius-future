import styled from "@emotion/styled";
import { Button } from "./Button";
import { Table } from './Table'

const ScheduleWrapper = styled.main`
  padding: 0px 30px 0px 30px;
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--padding-s);
`;

const DateControls = () => (
  <div>
    <Button variant="primary">Неделя</Button>
    <Button variant="inactive">День</Button>
  </div>
);

const ViewControls = () => (
  <div>
    <Button round variant="alternate">
      Добавить
    </Button>
    <Button round variant="primary">
      Фильтр
    </Button>
    <Button round variant="inactive">
      Табы
    </Button>
  </div>
);

const ScheduleGrid = styled.section`
  display: grid;
  padding: var(--padding-s);
  grid-template-rows: 26px 16px 1fr;
  grid-row-gap: var(--padding-s);
  grid-template-columns: 85px 1fr 85px;
  grid-template-areas:
    "empty weekinfo weekcontrols"
    "coaches coaches coaches"
    "stable stable stable";
  background-color: var(--color-primary);
  border-radius: var(--border-radius);
`;

const WeekInfo = styled.h2`
  margin: 0;
  text-align: center;
  grid-area: weekinfo;
  font-size: 18px;
  font-weight: normal;
`;

const WeekControls = styled.div`
  grid-area: weekcontrols;
  display: flex;
  align-items: center;
  color: #979797;
  text-decoration: underline;
  text-transform: uppercase;
  font-size: 11px;
`;
const CoachBadge = styled.div`
  display: inline-block;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  background-color: ${(props) => props.color || "black"};
`;
const Coach = styled.span`
  font-size: 11px;
  line-height: 11px;
  display: flex;
  align-items: center;
  span {
    margin-left: 6px;
  }
  &:not(:last-child) {
    margin-right: 15px;
  }
`;

const Coaches = styled.div`
  grid-area: coaches;
  display: flex;
  justify-self: center;
`;



const coachList = [
  {
    name: "Высоцкая Элеонора",
    color: "#DF1B7D",
  },
  {
    name: "Гайсина Гузель",
    color: "#52AD5B",
  },
  {
    name: "Гиголо Анна",
    color: "#FE8900",
  },
  {
    name: "Горбукова Юлия",
    color: "#00459B",
  },
  {
    name: "Марков Руслан",
    color: "#2E71F3",
  },
];




export const Schedule = () => (
  <ScheduleWrapper>
    <Controls>
      <DateControls />
      <ViewControls />
    </Controls>
    <ScheduleGrid>
      <WeekInfo>27 июля – 2 августа 2020 г.</WeekInfo>
      <WeekControls>Сегодня</WeekControls>
      <Coaches>
        {coachList.map((coach, id) => (
          <Coach key={id}>
            <CoachBadge color={coach.color} />
            <span>{coach.name}</span>
          </Coach>
        ))}
      </Coaches>
      <Table />
    </ScheduleGrid>
  </ScheduleWrapper>
);
