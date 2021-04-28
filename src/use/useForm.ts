//import { PropType, watch, onMounted, inject,  toRefs, ref, computed } from 'vue'
import { inject, PropType, watch, computed, toRefs, ref } from 'vue';

export function useForm(props: any) {
  const frm = inject<any>('__frmMain');
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

  const setValMsg = (): void => {
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

export const props1 = {
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
  rows: {
    type: Number as PropType<number>,
    default: 4
  },
  cols: {
    type: Number as PropType<number>,
    default: 30
  },
  textareaClass: {
    type: String as PropType<string>
  },
  options: {
    type: Object as PropType<any>
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

  export default { props1, useForm }