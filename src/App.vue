<template>
  <div id="app">
    <div class="alert" v-bind:class="{ 'alert-active': this.$store.state.isActive }">
      <p>Settings have beed changed!</p>
    </div>
    <router-view/>
  </div>
</template>
<script>
import initializePusher from './utils/pusher'
export default {
  name: 'app',
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
  },
  created () {
    // initilazing socket
    initializePusher()
    this.$store.dispatch('getCurrentSettings')
    this.$store.dispatch('getEmojiArray')
    // event triggered in emoticon component that has payload with id of the emoticon user has selected and that should trigger POST request
    this.$root.$on('post', (id) => {
      this.$store.dispatch('postRating', id)
    })
  },
  computed: {
  }
}
</script>
<style lang="scss">
*, *:before, *:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
@font-face {
  font-family: 'Roboto-Bold';
  src: url('assets/fonts/Roboto-Bold.ttf') format('truetype');
}
@font-face {
  font-family: 'Roboto-Medium';
  src: url('assets/fonts/Roboto-Medium.ttf') format('truetype');
}
@font-face {
  font-family: 'Roboto-Regular';
  src: url('assets/fonts/Roboto-Regular.ttf') format('truetype');
}
#app {
  display: flex;
  height: 100%;
  width: 100%;
  background-color: $bg-dark;
  overflow-x: hidden;
}
div  ::-webkit-scrollbar {
  width: 0 !important;
}
/* width */
::-webkit-scrollbar {
  width: 6px;
  background-color: $bg;
}
/* Track */
::-webkit-scrollbar-track {
  background-color: $bg;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: $white-300;
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background-color: $bg;
}
.alert {
  box-sizing: border-box;
  display: block;
  opacity: 0;
  position: fixed;
  top:45px;
  left: 50%;
  transform: translate(-50%);
  background-color: #5db65e;
  z-index: 10;
  border-radius: 15px;
  p {
    font-size: 16px;
    font-family: 'Roboto-Regular',sans-serif;
    text-align: center;
    padding: 1rem;
    color: $white-850;
  }
}
.alert-active {
  animation: alert-active 2s linear 0s 1 normal none;
}
@keyframes alert-active {
    0.0%{
        opacity: 0;
        top: 0px;
    }
    12.3%{
        opacity: 0.4;
        top: 3px;
    }
    24.6%{
        opacity: 0.8;
        top: 6px;
    }
    37%{
        opacity: 1;
        top: 9px;
    }
    40%{
        opacity: 1;
        top: 12px;
    }
    50%{
        opacity: 1;
        top: 12px;
    }
    60%{
        opacity: 1;
        top: 12px;
    }
    62%{
        opacity: 1;
        top: 15px;
    }
    75%{
        opacity: 0.8;
        top: 18px;
    }
    87%{
        opacity: 0.4;
        top: 21px;
    }
    100%{
        opacity: 0;
        top: 24px;
    }
}

</style>
