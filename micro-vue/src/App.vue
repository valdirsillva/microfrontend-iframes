<template>
    <div id="app" class="card">
      <img src="./assets/logo.png" width="60" />
 
      <button v-on:click="getProduct()" type="button">Ver produto</button>
       <span v-if="product">
       <img src="./assets/a57c1ab14765ab0b7ca87de98ba94b94.png" width="100%"  />
          <span> {{ product.name }} </span>

          <h2>{{ product.price }}</h2>
        </span>
    </div>

</template>

<script>
import { IframeMessageProxy } from 'iframe-message-proxy';

export default {
    name: 'App',
    data() {
        return {
            product: undefined,
        }
    },
    methods: {
        async getProduct() {
            const { response } = await IframeMessageProxy.sendMessage({
                action: 'getProduct',
            });

            this.product = response;

        }
    }
};
</script>
