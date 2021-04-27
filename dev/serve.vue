<script lang="ts">
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { TestSfclibrarySample } from '@/entry.esm';
import { FormElleInput, FormElleMain } from '@/entry.esm';
import { ref } from 'vue';

export default defineComponent({
  name: 'ServeDev',
   components: {
     FormElleInput,
     FormElleMain
    //TestSfclibrarySample,
   },
   setup() {
     const frm = ref<any>({name: 'zupe'})

     return {
       frm
     }

   }
});
</script>

<template>
  <div id="app">
  <FormElleMain
    v-model="frm"
  >
    <FormElleInput
        id="Name"
        type="text"
        v-model="frm.name"
        required
    />
  </FormElleMain>
   
  </div>
</template>
