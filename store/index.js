export const state = () => ({
    stakeAPR: null
  })

  export const mutations = {
    defineAPR(state, apr) {
      state.stakeAPR = apr;
      return apr;
    }
  }