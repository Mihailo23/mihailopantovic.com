export const state = () => ({
  page: "index",
  locale: "en"
});
export const mutations = {
  UPDATE_PAGE(state, pageName) {
    state.page = pageName;
  },
  UPDATE_LOCALE(state, localeName) {
    state.locale = localeName;
  }
};
