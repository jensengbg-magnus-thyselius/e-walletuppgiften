<template>
    <div class="wrapper">
        <div>
            <h1>Add new card</h1>
            <form id="form">
                <label>Card Holders Name</label><br>
                <input type="text" id="holderName" name="holderName"><br>
                <label>Bank Name</label><br>
                <input type="text" id="vendorName" name="vendorName"><br>
                <label>Card number</label><br>
                <input type="number" id="cardNumber" name="cardNumber"><br>
                <label>Valid Thru</label><br>
                <input type="number" id="validDate" name="validDate"><br>
                <router-link to="/">
                    <button class="btn" value="Add card" v-on:click="createCard(cards)">KLICKA MIG</button>
                </router-link>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "AddCard",
    props: ["cards"],
    methods: {  
            createCard: function (cards) {
                cards.push({
                        "id":5,
                        "holder":document.getElementById("holderName").value,
                        "vendor":document.getElementById("vendorName").value,
                        "cardnumber":document.getElementById("cardNumber").value,
                        "valid":document.getElementById("validDate").value,
                        "isActive": false,
                        "color": "#4FC08D"
                  })
                alert(cards)
            }       
    }
}  

</script>

<style scoped>
.wrapper {
    margin: 0;
    padding: 0;
}

.btn {
    margin: 5px;
}

</style>