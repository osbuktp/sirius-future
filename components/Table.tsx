import styled from "@emotion/styled";

const ScheduleTable = styled.div`
  overflow: hidden;
  grid-area: stable;
  display: grid;
  position: relative;
  grid-template-columns: 49px 1fr;
  grid-template-rows: 56px 1fr;
  grid-template-areas:
    "time header"
    "time cells";
  border-top: 1px solid var(--color-text-inactive);
`;

const DayTimestamp = styled.div`
  font-size: 12px;
  line-height: 17px;
  height: 17px;
  text-align: center;
  margin-bottom: 29px;
`;
const DayBadge = styled.img`
  width: 16px;
  height: 16px;
  margin-bottom: 12px;
`;
const DayWrapper = styled.div`
  color: var(--color-text-inactive);
  grid-area: time;
  text-align: center;
  padding-top: 15px;
  padding-right: 15px;
  border-right: 1px solid var(--color-text-inactive);
`;

const DayTimeline = () => {
  const date = new Date();
  date.setHours(8, 0, 0, 0);
  const timestamps = [date.toTimeString().substr(0, 5)];
  for (let i = 0; i < 12; ++i) {
    date.setMinutes(date.getMinutes() + 30);
    timestamps.push(date.toTimeString().substr(0, 5));
  }
  return (
    <DayWrapper>
      <DayBadge src="/ic24-alarm.svg" alt="clock" />
      {timestamps.map((st) => (
        <DayTimestamp>{st}</DayTimestamp>
      ))}
    </DayWrapper>
  );
};

const CellsGrid = styled.div`
  display: grid;
  grid-area: cells;
  grid-template-rows: repeat(23, 23px);
  grid-template-columns: repeat(21, 52px);
  background: repeating-linear-gradient(
      90deg,
      transparent,
      transparent 155px,
      var(--color-text-inactive) 155px,
      var(--color-text-inactive) 156px
    ),
    repeating-linear-gradient(
      180deg,
      transparent,
      transparent 22px,
      var(--color-text-inactive) 23px,
      var(--color-text-inactive) 23px
    );
`;

const weekDays = [
  {
    date: "27.07",
    day: "Понедельник",
  },
  {
    date: "28.07",
    day: "Вторник",
  },
  {
    date: "29.07",
    day: "Среда",
  },
  {
    date: "30.07",
    day: "Четверг",
  },
  {
    date: "31.07",
    day: "Пятница",
  },
  {
    date: "01.08",
    day: "Суббота",
  },
  {
    date: "27.07",
    day: "Воскресенье",
  },
];

const WeekWrapper = styled.div`
  grid-area: header;
  display: flex;
  border-bottom: 1px solid var(--color-text-inactive);
`;
const WeekDay = styled.div`
  flex: 1;
  text-align: center;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    color: var(--color-text-inactive);
  }
`;

const WeekTimeline = () => {
  return (
    <WeekWrapper>
      {weekDays.map((wd) => {
        return (
          <WeekDay>
            <span>{wd.date}</span>
            <div>{wd.day}</div>
          </WeekDay>
        );
      })}
    </WeekWrapper>
  );
};

interface TimelineProps {
  column?: number;
  cspan?: number;
  row?: number;
  rspan?: number;
  rgb?: string;
}

const Timeline = styled.div`
  grid-column: ${(props: TimelineProps) => props.column} /
    ${(props) => props.column + props.cspan};
  grid-row: ${(props: TimelineProps) => props.row} /
    ${(props) => props.row + props.rspan};
  border-left-width: 4px;
  margin-left: 1px;
  border-left-style: solid;
  border-color: rgb(${(props: TimelineProps) => props.rgb});
  background-color: rgba(${(props: TimelineProps) => props.rgb}, 0.2);
`;

const Card = styled.div`
  grid-column: ${(props: TimelineProps) => props.column} /
    ${(props) => props.column + props.cspan};
  grid-row: ${(props: TimelineProps) => props.row} /
    ${(props) => props.row + props.rspan};
  margin-left: 3px;
  border-width: 1px;
  border-style: solid;
  background-color: white;
  z-index: 5;
  padding: 7px 5px;
  font-size: 11px;
  border-color: rgb(${(props: TimelineProps) => props.rgb});
  img {
    width: 11px;
    height: 11px;
  }
`;
const CardBox = ({ name, age, ...otherProps }) => {
  return (
    <Card {...otherProps}>
      <img src="/ic24-user.svg" alt="user" />
      <div>
        {name}, {age}
      </div>
    </Card>
  );
};

const CurrentTimeLine = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  width: calc(100% - 15px);
  z-index: 4;
  left: 15px;
  top: 20%;
`;
const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: red;
`;
const Line = styled.div`
  width: 100%;
  background-color: red;
  height: 2px;
`;

export const Table = () => (
  <ScheduleTable>
    <CurrentTimeLine>
      <Dot />
      <Line />
    </CurrentTimeLine>
    <DayTimeline />
    <WeekTimeline />
    <CellsGrid>
      <CardBox
        name="Lucie"
        age="666"
        column={1}
        cspan={3}
        row={4}
        rspan={3}
        rgb="205, 25, 145"
      />
      <CardBox
        name="Lucie"
        age="666"
        column={7}
        cspan={1}
        row={4}
        rspan={3}
        rgb="90, 165, 82"
      />
      <CardBox
        name="Lucie"
        age="666"
        column={8}
        cspan={1}
        row={4}
        rspan={3}
        rgb="205, 25, 145"
      />
      <CardBox
        name="Lucie"
        age="666"
        column={9}
        cspan={1}
        row={4}
        rspan={3}
        rgb="301, 17, 99"
      />
      <CardBox
        name="Lucie"
        age="666"
        column={9}
        cspan={1}
        row={9}
        rspan={3}
        rgb="301, 17, 99"
      />
      <Timeline column={1} cspan={3} row={4} rspan={5} rgb="205, 25, 145" />
      <Timeline column={7} cspan={1} row={2} rspan={21} rgb="90, 165, 82" />
      <Timeline column={8} cspan={1} row={2} rspan={12} rgb="205, 25, 145" />
      <Timeline column={9} cspan={1} row={2} rspan={15} rgb="301, 17, 99" />
    </CellsGrid>
  </ScheduleTable>
);
