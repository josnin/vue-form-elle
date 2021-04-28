<template>

  <div :class="divClass || styling?.FormElleSelect?.divClass || styling?.divClass">
    <label 
      v-if="id && !label" 
      :class="labelClass || styling?.FormElleSelect?.labelClass || styling?.labelClass"
      :for="id"
    >{{id}}</label>

    <label 
      v-if="id && label" 
      :class="labelClass || styling?.FormElleSelect?.labelClass || styling?.labelClass"
      :for="id"
    >{{label}}</label>

    <select 
      :class="selectClass || styling?.FormElleSelect?.selectClass || styling?.elementsClass"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
    >
      <option 
        v-for="(name, value) in options" :value="value"
      >{{name}}</option>
    </select>

    <span :class="validationClass || styling?.FormElleSelect?.validationClass || styling?.validationClass" v-if="valMsg">{{valMsg}}</span>
    <span :class="helpClass || styling?.FormElleSelect?.helpClass || styling?.helpClass" v-if="help && !valMsg">{{help}}</span>
  </div>
  

</template>

<script lang="ts">
  import { useForm, props1 }  from '@/use/useForm';
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: "FormElleSelect",
    props: props1,
    setup(props: any) {
      const { valMsg, styling } = useForm(props);

      return {
        valMsg,
        styling
      };
    };
  });
</script>

