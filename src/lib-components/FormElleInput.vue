<template>
  <div :class="divClass || styling?.FormElleInput?.divClass || styling?.divClass">
    <label 
      v-if="id && !label" 
      :class="labelClass || styling?.FormElleInput?.labelClass || styling?.labelClass"
      :for="id"
    >{{id}}</label>

    <label 
      v-if="id && label" 
      :class="labelClass || styling?.FormElleInput?.labelClass || styling?.labelClass"
      :for="id"
    >{{label}}</label>

    <input 
      :class="inputClass || styling?.FormElleInput?.inputClass || styling?.elementsClass"
      v-bind="$attrs"
      :id="id" 
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
    <span :class="validationClass || styling?.FormInput?.validationClass || styling?.validationClass" v-if="valMsg">{{valMsg}}</span>
    <span :class="helpClass || styling?.FormElleInput?.helpClass || styling?.helpClass" v-if="help && !valMsg">{{help}}</span>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useForm, props1 } '@/use/useForm';
export default defineComponent({
  name: "FormElleInput",
  props: props1,
  setup(props: any) {
    const { valMsg, styling } = useForm(props);
    return {
      valMsg,
      styling
    }
  }
});
</script>
