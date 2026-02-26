import variables from '@/styles/element-variables.scss'
import defaultSettings from '@/settings'

const { showSettings, tagsView, fixedHeader, sidebarLogo } = defaultSettings

const storedDarkMode = localStorage.getItem('darkMode')

const state = {
  theme: variables.theme,
  showSettings: showSettings,
  tagsView: tagsView,
  fixedHeader: fixedHeader,
  sidebarLogo: sidebarLogo,
  darkMode: storedDarkMode === null ? false : storedDarkMode === 'true'
}

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    // eslint-disable-next-line no-prototype-builtins
    if (state.hasOwnProperty(key)) {
      state[key] = value
    }
  }
}

const actions = {
  changeSetting({ commit }, data) {
    commit('CHANGE_SETTING', data)
    if (data.key === 'darkMode') {
      localStorage.setItem('darkMode', data.value)
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

