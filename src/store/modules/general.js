const General = {
  state: {
    activeMenu: false,
  },
  getters: {
    activeMenu(state) {
      return state.activeMenu;
    },
  },
  mutations: {
    setActiveMenu(state, checkMenu) {
      state.activeMenu = checkMenu;
    },
  },
  actions: {
    setActiveMenu({ state, commit }) {
      const checkMenu = state.activeMenu ? false : true;
      commit("setActiveMenu", checkMenu);
    },
  },
};

export default General;
