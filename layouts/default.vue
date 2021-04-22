<template>
  <v-app>
      <header>
        <nav>
          <v-app-bar height="100">
            <v-toolbar-title>
              Bandeiras
            </v-toolbar-title>

            <v-spacer/>

            <NuxtLink to="/" id="link">
              <v-btn id="button_return" small outlined tile>
                <v-icon>mdi-keyboard-return</v-icon>
                <span
                class="mr font-weight-regular ml-5"
                v-show="showTextAppBar"
                >
                Voltar</span>
              </v-btn>
            </NuxtLink>
          </v-app-bar>
        </nav>
      </header>
    <v-container>
      <Nuxt />
    </v-container>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      showTextAppBar: true
    }
  },
  mounted () {
    window.addEventListener('load', () => {
      screen.availWidth < 768 ? this.showTextAppBar = false : this.showTextAppBar = true
      window.addEventListener('resize', () => {
        screen.availWidth < 768 ? this.showTextAppBar = false : this.showTextAppBar = true
      })
    })
  }
}
</script>

<style lang='scss' scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500&display=swap");
@import "./assets/variables.scss";

* {
  font-family: "Montserrat", sans-serif;
}
#button_return {
  color: $purple-default;
  @include breakpoint(smallOnly) {
    border: none;
  }
}

#link {
  text-decoration: none;
}
</style>
