export const state = () => ({
  point: 0,
});

export const mutations = {
  increment(state, value) {
    state.point += value;
  },
};
