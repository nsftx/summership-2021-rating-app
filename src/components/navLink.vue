<template>
  <router-link tag="li"
               :to="this.data.link">
    <div class="item"
         v-on:click="itemClicked(data.id)">
      <img :src="require('../assets/images/'+ this.data.src)"
           alt="Emoticon">
      <p>{{this.data.text}}</p>
    </div>
  </router-link>
</template>
<script>
export default {
  name: 'NavLink',
  props: {
    data: Object
  },
  methods: {
    itemClicked: function (id) {
      // emiting event that shows settings modal
      if (id === 3) {
        this.$emit('show')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
a{
  text-decoration: none;
}
li{
  list-style: none;
  opacity: 0.5;
  .item {
    width: 100px;
    height: 72px;
    text-align: center;
    img {
      margin-top: 10px;
    }
    p {
      font-family: 'Roboto-Medium',sans-serif;
      text-align: center;
      font-size: 0.75rem;
      word-spacing: 1rem;
      color: $white-850;
      margin: 0;
    }
  }
}

@media only screen and (max-width: 768px) {
  li {
    width: 64px;
    height: 60px;
    display: inline;
    .item {
      width: 64px;
      height: 60px;
      padding-top: 0;
      p {
        font-family: 'Roboto-Medium',sans-serif;
        font-size: 10px;
        word-spacing: 10px;
      }
    }
  }
}

</style>
