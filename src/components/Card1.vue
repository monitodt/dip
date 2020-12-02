<template>
    <div class="contentcenter">
        <div class="content-block1">
            <div class="prevtext">
                <h2 class="fs85 bebas">ПЛАТФОРМА ДОСТАВКИ И РЕАЛИЗАЦИИ ТОВАРОВ</h2>
                <h1 class="fs170 brown bebas">I-SMARTBOX</h1>
                <h4 class="fs30 gilroy">Это личный, интеллектуальный постамат.</h4>
                <h4 class="fs30 gilroy">Интернет вещь.</h4>
                
                    <div class="card">
                        <v-img class="img"
                        :src="require('../assets/center-agent.svg')"/>
                        <p class="cardtext">Антагонист розничной сети</p>
                    </div>

                    <div class="card"> 
                        <v-img class="img"
                        :src="require('../assets/courier.svg')"
                        />
                        <p class="cardtext">Курьерская доставка</p>
                    </div>

                    <div class="card">
                        <v-img class="img"
                        :src="require('../assets/add-to-cart.svg')"
                        />
                        <p class="cardtext">Маркетплейс для самозанятых и малого бизнеса</p>
                    </div>

                    <div class="card">
                        <v-img class="img"
                        :src="require('../assets/safe-box.svg')"
                        />
                        <p class="cardtext">сеть индивидуальных постаматов</p>
                    </div>
            
            </div>

            <div class="postam">
                <v-img
                :src="require('../assets/postam.svg')"

                />
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped lang="scss">
@font-face {
font-family: 'Bebas';
src: url('../fonts/bebas.ttf');
}

@font-face {
font-family: 'Gilroy';
src: url('../fonts/Gilroy-Regular.ttf');
}

.contentcenter {
    display: flex;
    justify-content: center;
    width: 100%;
    background: url(../assets/background.svg) repeat-x;
}

.content-block1 {
    
    padding: 60px 315px 0 315px;
    display: flex;
    justify-content: center;
    text-align: center;
    width: 100%;
}

.content-block2 {
    width: 100%;
    padding: 120px 315px 0 315px;
}

.prevtext {
    width: 950px;
    text-align: left;
    padding: 70px 0 80px 0;
    vertical-align: bottom;
    display: inline-block;
    bottom: 0;
}

.card {
    width: 170px;
    height: 170px;
    background-color:white;
    text-align: center;
    vertical-align: middle;
    display: inline-block;
    padding: 15px 0;
    margin: 50px 50px 0 0;
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
}

.img {
    max-width: 70px;
    max-height: 70px;
    display: inline-block;
}

.cardtext {
    font-family: Gilroy;
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 20px;
    letter-spacing: 0.01em;
    color: #000000;
    width: 100%;
}

.fs18 {
    font-size: 18px;
    line-height: 20px;
    letter-spacing: 0.01em;
}

.fs25 {
    font-size: 25px;
    line-height: 30px;
    letter-spacing: 0.01em;
}

.fs72 {
    font-size: 72px;
    line-height: 72px;
    letter-spacing: 0.01em;
}

.fs85 {
    font-size: 85px;
    line-height: 85px;
    letter-spacing: 0.01em;
}

.fs170 {
    font-size: 170px;
    line-height: 170px;
    letter-spacing: 0.01em;
}

.brown {
    color: #9B6E50;
    display: flex;
    align-items: flex-start;
}

.bold {
    font-weight: bold;
}

.fs30 {
    font-size: 30px;
    line-height: 35px;
    letter-spacing: 0.01em;
    color: #000000;
}

.bebas {
    font-family: 'Bebas';
    font-style: normal;
    font-weight: normal;

}


.gilroy {
    font-family: Gilroy;
    font-style: normal;
    font-weight: 500;

}


.gilroy-bold {
    font-family: Gilroy;
    font-style: normal;
    font-weight: 900;

}

.postam {
    max-width: 262px;
    max-height: 689px;
    display: inline-block;
    padding: 29px 0 0 0;
    text-align: left;
    
}

.textcenter{
    text-align: center;
    vertical-align: middle;
    display: inline-block;
    padding: 0 0 100px 0;
}

.disi{
    display: inline-block;
}

.card2 {
    width: 410px;
    height: 500px;
    background: white;
    text-align: center;
    vertical-align: middle;
    display: inline-block;
}

.card2picture {
    max-height: 250px;
    max-width: 410px;
}

.card2texth3 {
    padding: 40px 60px 20px 60px;

}

.card2text3h3 {
    padding: 40px 99px 20px 99px;

}

.card2texth4 {
    padding: 0 35px 46px 36px;
}

.card2text2h4 {
    padding: 0 35px 67px 36px;
    text-align: center;
}
</style>