# vue-form-elle
## An easy way to create a form in your Vue3 project



## 
```javascript
<template>
  <FormMain 
    v-model="frm"    
    #default="{ isValid }" 
  >
      <FormInput
        id="Name"
        type="text"  
        v-model="frm.name"
        required
      />
      
      <FormTextarea          
         v-model="frm.http_headers"
         id="headers"
         label="HTTP Headers"
         placeholder="Add Multiple HTTP headers in json format"
         help="example: { Authorization: 'Basic AfgasdwQDU1dzByYM==' }"
      />
        
      <button @click.prevent="create()" :disabled="!isValid">
        Save
      </button>
   
  </FormMain>
 </template> 
        
 <script>
  import { ref } from 'vue';
  import { 
      FormInput, 
      FormMain 
  } from '../components/forms';
  export default {
    name: "MyComponent",
    components: {
      FormInput,
      FormMain
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
