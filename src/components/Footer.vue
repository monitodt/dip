<template>
<div>
  <div class="footer">
    <div class="footercontent">
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
    <div class="logofooter">
    <div class="logotitle">
      <v-img
        :src="require('../assets/logoTitle.png')"

      />
    </div>
    </div>

    


   
    
    <div class="num">
      <p class="number">
        +7(950) 501-05-98
      </p>
      <p class="number">
        bambar@mail.ru
      </p>
      <p class="number1">
        Татьянкин Виталий Михайлович
      </p>
    </div>

    </div>
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

.footer {

  padding: 146px 315px;
  background-color:black ;
  height: 400px;
  display: flex;
  justify-content: center;
  
}

.footercontent {
  width: 1290px;
  display: flex;
  justify-content: space-between;
  
}

.logofooter {
  width: calc(1290px/3);
  display: flex;
  justify-content: center;
}

.logotitle {
  width: 410px;
  height: 69px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navbar {
    width: calc(1290px/3);
    justify-content: flex-start;
}

.navclick {
  display: inline-flex;
  align-items: center;
  color: white;
  justify-content: flex-start;
  width: 100%;
}

.num {
  width: calc(1290px/3);
  display: inline-block;
  justify-content: flex-end;
  text-align: right;
}

.gillroy {
  font-family: 'Gilroy', sans-serif;
  font-weight: 500;
  display: inline-flex;

}

.number {
font-family: 'Gilroy';
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 24px;
text-align: center;
color: white;
letter-spacing: 0.01em;
width: calc(1290px/3);
display: inline-block;
text-align: right;
}

.number1 {
font-family: 'Gilroy';
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 130%;
color: white;
display: inline-block;
text-align: right;
width: 200px;
}

</style>