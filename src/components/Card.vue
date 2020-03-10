<template>
    <div class="cardDesign">
        <div v-for="card in selectedCard" :key="card.id">
          <div class="cardGrid" v-bind:style="{ background: card.color }">
                <p class="cardNumber">{{card.cardnumber}}</p>
                <p class="cardValid">{{card.valid}}</p>
                <p class="cardHolder">{{card.holder}}</p>
                <p class="cardVendor">{{card.vendor}}</p>
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
        height: 100%;
        border: 1px black solid;
        border-radius: 3px;
        
    }

    .cardGrid {
        display: grid;
        width: 100%;
    }

    .cardNumber {
        grid-row: 2;
        margin: 0.2rem;
    }

    .cardValid {
        grid-row: 3;
        margin: 0.2rem;
    }

    .cardHolder {
        grid-row: 4;
        margin: 0.2rem;
    }

    .cardVendor {
        grid-row: 1;
        text-align: right;
        margin-right: 5px;
        margin-top: 0.2rem;
        margin-bottom: 0.2rem;
    }

</style>