const OPEN = "modal/OPEN";
const CLOSE = "modal/CLOSE";

export const openModal = (data) => ({
  type: OPEN,
  payload: data,
});

export const closeModal = () => ({
  type: CLOSE,
});

const initialState = {
  data: null,
};
const modal = (state = initialState, action) => {
  switch (action.type) {
    case OPEN:
      return { data: action.payload };
    case CLOSE:
      return initialState;
    default:
      return state;
  }
};

export default modal;
