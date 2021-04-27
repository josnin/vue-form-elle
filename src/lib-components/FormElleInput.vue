<template>

  <div :class="divClass || styling?.FormElleInput?.divClass || styling?.divClass || null">
    <label 
      v-if="id && !label" 
      :class="labelClass || styling?.FormElleInput?.labelClass || styling?.labelClass || null"
      :for="id"
    >{{id}}</label>

    <label 
      v-if="id && label" 
      :class="labelClass || styling?.FormElleInput?.labelClass || styling?.labelClass || null"
      :for="id"
    >{{label}}</label>

    <input 
      :class="inputClass || styling?.FormElleInput?.inputClass || styling?.elementsClass || null"
      v-bind="$attrs"
      :id="id" 
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
    <span :class="validationClass || styling?.FormInput?.validationClass || styling?.validationClass || null" v-if="valMsg">{{valMsg}}</span>
    <span :class="helpClass || styling?.FormElleInput?.helpClass || styling?.helpClass || null" v-if="help && !valMsg">{{help}}</span>
  </div>

</template>

<script lang="ts">
import { inject, defineComponent, PropType, watch, computed, toRefs, ref } from 'vue';
export default /*#__PURE__*/defineComponent({
  name: "FormElleInput",
  props: {
      modelValue: {
        type: [String, Number] as PropType<string|number>
      },
      id: {
        type: String as PropType<string>,
        required: true,
      },
      label: {
        type: String as PropType<string>
      },
      help: {
        type: String as PropType<string>,
        required: false
      },
      selectClass: {
        type: String as PropType<string>
      },
      labelClass: {
        type: String as PropType<string>
      },
      inputClass: {
        type: String as PropType<string>
      },
      divClass: {
        type: String as PropType<string>
      },
      validationClass: {
        type: String as PropType<string>
      },
      helpClass: {
        type: String as PropType<string>
      },
      validationCustom: {
        type: Object as PropType<any>
      },
      validationMessage: {
        type: Object as PropType<any>
      }
  }
  setup(props: any) {
    const frm = inject('__frmMain') as any;
    let valMsg = ref<any>('');
    const styling = computed(() => frm.styling)
    const { modelValue } = toRefs(props)

    const setCustomRulesAndValMsg = (newVal: any): void => {
      // only apply for individual custom validation msg
      if (props.validationCustom) {
        for (const [k, v] of Object.entries(props.validationMessage)) {
          if (props.validationCustom[k](newVal)) {
            valMsg.value = v
          }
        }
      }
    }

    const setValMsg = () => {
      valMsg.value = '';
      if (props.validationMessage && !props.validationCustom) {
        Array.prototype.forEach.call(frm.frm._value.elements, function(element) {
          for (const [k, v] of Object.entries(props.validationMessage)) {
            if (element.validity[k]) {
              //console.log(element.validity[k], k, v)
              valMsg.value = v
              return;
            }
          }
        })
      }
      if (!valMsg.value) {
        //console.log(props.id, frm.validity.value[props.id], props.modelValue)
        valMsg.value = frm.validity.value[props.id];
      }
    }

    watch(frm.validity, (): void => {
      setValMsg()
    }) 

    watch(modelValue, (newVal: string): void => {
      setCustomRulesAndValMsg(newVal);
    })


    return {
      valMsg,
      styling
    }
  }
});
</script>
