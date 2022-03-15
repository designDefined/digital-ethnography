const SUMMARY = "tap/SUMMARY";
const TIME = "tap/TIME";
const STATS = "tap/STATS";

export const setSummaryTap = () => ({
  type: SUMMARY,
});

export const setTimeTap = () => ({
  type: TIME,
});
export const setStatsTap = () => ({
  type: STATS,
});

const initialState = {
  currentTap: "time",
};

const tap = (state = initialState, action) => {
  switch (action.type) {
    case SUMMARY:
      return { currentTap: "summary" };
    case TIME:
      return { currentTap: "time" };
    case STATS:
      return { currentTap: "stats" };
    default:
      return state;
  }
};

export default tap;
