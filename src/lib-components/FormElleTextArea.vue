<template>

  <div :class="divClass || styling?.FormElleTextArea?.divClass || styling?.divClass">
    <label 
      v-if="id && !label" 
      :class="labelClass || styling?.FormElleTextArea?.labelClass || styling?.labelClass"
      :for="id"
    >{{id}}</label>

    <label 
      v-if="id && label" 
      :class="labelClass || styling?.FormElleTextArea?.labelClass || styling?.labelClass"
      :for="id"
    >{{label}}</label>

    <textarea 
      :class="textareaClass || styling?.FormElleTextarea?.textareaClass || styling?.elementsClass"
      v-bind="$attrs"
      :id="id"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    ></textarea>
    <span :class="validationClass || styling?.FormElleTextarea?.validationClass || styling?.validationClass" v-if="valMsg">{{valMsg}}</span>
    <span :class="helpClass || styling?.FormElleTextArea?.helpClass || styling?.helpClass" v-if="help && !valMsg">{{help}}</span>
  </div>

</template>

<script lang="ts">
  import { useForm, props1 }  from '@/use/useForm';
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: "FormElleTextArea",
    props: props1,
    setup(props: any) {
      const { valMsg, styling } = useForm(props);
      console.log(props.divClass)
      return {
        valMsg,
        styling
      }
    }
  });
</script>
