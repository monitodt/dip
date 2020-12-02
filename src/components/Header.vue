<template>

  <div class="header">
    <div class="logotitle">
      <v-img
        :src="require('../assets/logoTitle.png')"

      />
    </div>


    <div class="navbar">
      <div class="navclick">
        <p class="gillroy" href="">Особенности</p>
      </div>

      <div class="navclick">
        <p class="gillroy" href="">Стейкхолдеры</p>
      </div>

      <div class="navclick">
        <p class="gillroy" href="">Мы ищем</p>
      </div>

      <div class="navclick">
        <p class="gillroy" href="">Контакты</p>
      </div>
    </div>
    
    <div class="num">
      <p class="number">
        +7(950) 501-05-98
      </p>
    </div>

    
  </div>

</template>

<script>
export default {
    
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
@font-face {
font-family: 'Gilroy';
src: url('../fonts/Gilroy-Regular.ttf');
font-weight: normal;
font-style: normal;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}



.header {
  padding: 13px 315px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  background-color:white;
  width: 100%;
  z-index: 1000;
}

.logotitle {
  max-width: 200px;
  max-height: 33.03px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.navbar {
  width: 616px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navclick {
  width: calc(616px/4);
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.num {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.gillroy {
  font-family: 'Gilroy', sans-serif;
  font-weight: 500;
}

.number {
font-family: 'Gilroy';
font-style: normal;
font-weight: bold;
font-size: 25px;
line-height: 30px;
letter-spacing: 0.01em;
}

</style>