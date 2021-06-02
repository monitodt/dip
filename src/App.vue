<template>

      <div id = "app">
        <Header/>
        <Content/>
        <Footer/>
      </div>

</template>

<script>
import Header from '@/components/Header'
import Content from '@/components/Content'
import Footer from '@/components/Footer'
export default {
  components:{
    Header,
    Content,
    Footer
  }
}
</script>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");
@font-face {
  font-family: "Gilroy";
  src: url("./fonts/Gilroy-Regular.ttf");
  font-weight: normal;
  font-style: normal;
}
</style>