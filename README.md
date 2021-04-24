# vue-form-elle
## An easy way to create a form in your Vue3 project



### Usage
```javascript
<template>
  <FormElleMain 
    v-model="frm"    
    #default="{ isValid }" 
  >
      <FormElleInput       
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

### Builtin Validation using the Javascript Validation API

#### code
```javascript
 <FormElleInput   
        type="text"  
        v-model="frm.name"
        required
      />      
```

#### output
![image](https://user-images.githubusercontent.com/3206118/115892982-47ae9d00-a48a-11eb-8b32-fc122ac16a23.png)



### Custom Validation & Message
#### code
```javascript
        <FormElleInput     
          type="text"       
          v-model="frm.name"        
          :validation-custom="{
            foundElle: (value) => ['elle'].includes(value)
          }"
          :validation-message="{
            foundElle: 'Oh no! message contains Elle??'
          }" 
        />
```

#### output
![image](https://user-images.githubusercontent.com/3206118/115893816-331ed480-a48b-11eb-90a3-0ad8ebfb7252.png)


