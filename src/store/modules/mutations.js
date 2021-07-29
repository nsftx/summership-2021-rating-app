export default {
  setSettings (state, data) {
    state.settings = data
  },
  setEmoticons (state, data) {
    state.emoticons = data
  },
  setRatings (state, data) {
    let i = 0
    for (i = 0; i < data.length; i++) {
      if (data[i].emojiId.id === 1) {
        state.ratings[0]++
      }
      if (data[i].emojiId.id === 2) {
        state.ratings[1]++
      }
      if (data[i].emojiId.id === 3) {
        state.ratings[2]++
      }
      if (data[i].emojiId.id === 4) {
        state.ratings[3]++
      }
      if (data[i].emojiId.id === 5) {
        state.ratings[4]++
      }
    }
  }
}
