<script lang="ts">
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { TestSfclibrarySample } from '@/entry.esm';
import { 
  FormElleInput, 
  FormElleMain,
  FormElleTextArea,
  FormElleSelect
} from '@/entry.esm';
import { ref } from 'vue';

export default defineComponent({
  name: 'ServeDev',
   components: {
     FormElleInput,
     FormElleMain,
     FormElleTextArea,
     FormElleSelect
    //TestSfclibrarySample,
   },
   setup() {
     const frm = ref<any>({
        name: 'zupe',
        http_headers: '',
        polling_unit: ''
     });

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
     <FormElleTextArea
          v-model="frm.http_headers"
          id="Headers"
          label="HTTP Headers"
          placeholder="Add Multiple HTTP headers in json format"
          help="example: { Authorization: 'Basic AfgasdwQDU1dzByYM==' }"
        />

         <FormElleSelect 
              v-model="frm.polling_unit"
              id="unit"
              :options="{ hours : 'hours', minutes: 'minutes', seconds: 'seconds' }"
              help="This is a test"
            />

  </FormElleMain>

   
  </div>
</template>
