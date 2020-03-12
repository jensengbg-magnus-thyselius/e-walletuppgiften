<template>
    <div>
        <div v-for="card in selectedCard" :key="card.id">
          <div class="cardDesign" v-bind:style="{ background: card.color }">
                <p class="cardVendor">{{card.vendor}}</p>
                <p class="cardNumber">{{card.cardnumber}}</p>
                <p class="holderTitle">CARDHOLDER NAME</p>
                <p class="cardHolder">{{card.holder}}</p>
                <p class="validTitle">VALID THRU</p>
                <p class="cardValid">{{card.valid}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: ["selectedCard"],
}


</script>

<style scoped>
     
    .cardDesign {
        position: relative;
        display: inline-block;
        vertical-align: middle;
        width: 325px;
        height: 200px;
        text-align: left;
        padding: 30px;
        margin-bottom: 50px;
        color: #fff;
        border-radius: 8px;
        box-sizing: border-box;
        }

    .cardVendor {
        position: absolute;
        right: 10px;
        bottom: 160px;
    }

    .cardNumber {
        font-size: 25px;
        padding: 20px 0 15px;
        text-align: center;
    }

    .cardHolder {
        position: absolute;
        font-size: 18px;
        right: 170px;
        bottom: 10px;
        width: 50%;
        text-align: center;
    }

    .cardValid {
        position: absolute;
        font-size: 18px;
        right: 30px;
        bottom: 10px;
        text-align: center;
    }
    
    .holderTitle {
        position: absolute;
        font-size: 11px;
        right: 200px;
        bottom: 45px;
        text-align: center;
    }

    .validTitle {
        position: absolute;
        font-size: 11px;
        right: 20px;
        bottom: 45px;
        text-align: center;
    }


</style>