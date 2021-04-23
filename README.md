# vue-form-elle
## An easy way to create a form in your Vue3 project



## 
```javascript
<template>
  <FormElleMain 
    v-model="frm"    
    #default="{ isValid }" 
  >
      <FormElleInput
        id="Name"
        type="text"  
        v-model="frm.name"
        required
      />
      
      <FormElleTextArea          
         v-model="frm.http_headers"
         id="headers"
         label="HTTP Headers"
         placeholder="Add Multiple HTTP headers in json format"
         help="example: { Authorization: 'Basic AfgasdwQDU1dzByYM==' }"
      />
        
      <button @click.prevent="create()" :disabled="!isValid">
        Save
      </button>
   
  </FormElleMain>
 </template> 
        
 <script>
  import { ref } from 'vue';
  import { 
      FormElleInput, 
      FormElleMain 
  } from '../components/forms';
  export default {
    name: "MyComponent",
    components: {
      FormElleInput,
      FormElleMain
    },
    async setup() {
      const frm = ref({
        name: "",
      })

      return {
        frm,
      }
    }
  }
</script>       

```
