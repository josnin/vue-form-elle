# vue-form-elle
## An easy way to create a form in your Vue3 project



###
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

### Built In Validation

#### code
```javascript
 <FormElleInput
        id="Name"
        type="text"  
        v-model="frm.name"
        required
      />      
```

#### output
![image](https://user-images.githubusercontent.com/3206118/115892200-82fc9c00-a489-11eb-8adc-bf2920cc1d45.png)

