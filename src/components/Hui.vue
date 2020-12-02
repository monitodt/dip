<template>
    <div class="App">


      <div class="block">
        <h1 class="dblock gilroy fs72"><h1 class="dblock gilroy brown fs72">СТЕЙКХОЛДЕР </h1>«ЖИТЕЛЬ»</h1>
      </div>


      <div class="card3">
      <div class="box1">
        <img class="ultra1" src="../assets/img.jpg" alt="Bullshit"/>
      </div>
      <div class="box2">
        <div class="cardbox1">
          <img class="ultra2" src="../assets/002-paint-palette.svg" alt="Bullshit"/>
          <h4>Цените своё время. Понимаете что вместо похода за посылкой можно насладиться своим любимым делом.</h4>
        </div>
        <div class="cardbox">
          <img class="ultra2" src="../assets/003-gift-box.svg" alt="Bullshit"/>
          <h4>Хотите сделать подарок человеку. Теперь можно не волноваться, что курьер испортит сюрприз.
          </h4>
        </div>
        <div class="cardbox">
          <img class="ultra2" src="../assets/001-food-delivery.svg" alt="Bullshit"/>
          <h4>Душевное спокойствие. Не нужно отвлекаться на разговоры и ожидание курьера.</h4>
        </div>
        <div class="cardbox">
          <img class="ultra2" src="../assets/004-key.svg" alt="Bullshit"/>
          <h4 class="exc">Вы срочно уезжаете и нужно оставить ключи от машины или дома родственникам.</h4>
        </div>
      </div>
      </div>

      <div class="block1">
       <h1 class="dblock gilroy fs72"><h1 class="w dblock gilroy brown fs72">Стейкхолдер</h1> «Транспортные и курьерские компании»</h1>
      </div>

      <div class="card4">
        <div class="box3">
          <div class="cardbox21">
            <img class="ultra6" src="../assets/001-24-hours.svg" alt="Bullshit"/>
            <h4 class="textcardbox2">Увеличение производительности труда. Доставка 24 часа в сутки. Доставка в ночное время когда нет пробок и машин.</h4>
          </div>
          <div class="cardbox2">
            <img class="ultra6" src="../assets/002-group.svg" alt="Bullshit"/>
            <h4 class="textcardbox2">Лояльность клиентов. Довольный клиент, который сохраняет преданность компании.</h4>
          </div>
        </div>
        <div class="box4">
          <img class="ultra5" src="../assets/image3.svg" alt="Bullshit"/>
        </div>
      </div>

      <div class="block1">
        <h1 class="dblock gilroy fs72"><h1 class="w dblock gilroy brown fs72">Стейкхолдер</h1>«Микро и Малый бизнес и не только»</h1>
      </div>
      <div class="card5">
        <div>
          
        <div>
          <img src="../assets/Group23.svg" alt=""/>
        </div>
        <div>
          <img src="../assets/Group24.svg" alt=""/>
        </div>
        <div>
          <img src="/images/005-box.svg" alt=""/>
        </div>
        <div>
          <img src="/images/Group22.svg" alt=""/>
        </div>
        <div></div>
        </div>
      </div>
    </div>
</template>

<style scoped lang="css">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@font-face {
font-family: 'Bebas';
src: url('../fonts/bebas.ttf');
}

@font-face {
font-family: 'Gilroy';
src: url('../fonts/Gilroy-Regular.ttf');
}
.App {
}

.card3 {
  display: flex;
  justify-content: center;
}

.card4 {
  display: flex;
  justify-content: center;
  align-items: center;
}

.box1 {
  max-width: 835px;
  max-height: 640px;
}

.box2 {
  width: 1085px;
  padding: 30px 336px 30px 146.75px;
}

.box4 {
  max-width: 835px;
  max-height: 640px;
}

.box3 {
  width: 1085px;
  padding: 30px 146.75px 30px 336px;
}

.ultra2 {
    max-width: 100px;
    max-height: 100px;
}

.ultra3 {
    max-width: 100px;
    max-height: 100px;
}

.ultra4 {
    max-width: 100px;
    max-height: 100px;
}



.ultra6 {
  display: inline-block;
  vertical-align: top;
  max-width: 100px;
  max-height: 100px;
}

img {
  display: inline-block;
  vertical-align: middle;
}

h4 {
  font-family: Gilroy;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0.01em;
  display: inline-block;
  vertical-align: middle;
  width: 479px;
  padding: 0 0 0 30px;
}

.cardbox {
  padding: 60px 0 0 0;
  width: 718px;
  display: inline-block;
}

.cardbox2 {
  padding: 145px 0 0 0;
  width: 718px;
  display: inline-block;
}

.cardbox1 {
  width: 718px;
  display: inline-block;
}

.exc {
  font-family: Gilroy;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0.01em;
  display: inline-block;
  vertical-align: middle;
  width: 400px;
  padding: 0 0 0 30px;
}

.textcardbox21 {
  font-family: Gilroy;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0.01em;
  display: inline-block;
  width: 450px;
  padding: 25px 0 0 30px;
}

.textcardbox2 {
  font-family: Gilroy;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0.01em;
  display: inline-block;
  width: 450px;
  padding: 15.5px 0 0 30px;
}

.gilroy {
  font-family: Gilroy;
  font-style: normal;
}

.brown {
  color: saddlebrown;
}

.fs72 {
  font-size: 72px;
}

.dblock {
  display: inline-block;
  letter-spacing: 0.01em;
  white-space: pre;
}

.block {
  width: 100%;
  text-align: center;
  padding: 200px 0 150px 0;
}

.block1 {
  width: 100%;
  text-align: center;
  padding: 200px 0 150px 0;
}

.w {
  display: block;
}
</style>