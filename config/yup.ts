import * as yup from "yup";

import printValue from "yup/lib/util/printValue";
// There's a bug in yup's type definitions that causes this to fail so we had to implement it ourselves.
// Based on https://github.com/diegoulloao/yup-es/blob/master/src/lib/es.js
const es = {
  mixed: {
    default: "${path} no es válido.",
    required: "${path} es un campo obligatorio",
    oneOf: "${path} debe ser uno de los siguientes valores: ${values}",
    notOneOf: "${path} no debe ser uno de los siguientes valores: ${values}",
    notType: ({ path, type, value, originalValue }) => {
      const isCast = originalValue != null && originalValue !== value;
      let msg =
        `${path} debe ser un \`${type}\` Tipo, ` +
        `pero el valor final fue: \`${printValue(value, true)}\`` +
        (isCast ? ` (Reparto del valor \`${printValue(originalValue, true)}\`).` : ".");
      if (value === null) {
        msg += `\n Si "nulo" pretende ser un valor vacío, asegúrese de marcar el esquema como` + " `.nullable()`";
      }
      return msg;
    }
  },
  string: {
    length: "${path} debe ser exactamente ${length} caracteres",
    min: "${path} debe ser de al menos ${min} caracteres",
    max: "${path} debe ser como máximo ${max} caracteres",
    matches: '${path} debe coincidir con el siguiente: "${regex}"',
    email: "${path} debe ser un correo electrónico válido",
    url: "${path} debe ser una URL válida",
    trim: "${path} debe ser una cadena recortada",
    lowercase: "${path} debe ser una cadena en minúsculas",
    uppercase: "${path} debe ser una cadena en mayúsculas"
  },
  number: {
    min: "${path} debe ser mayor que o igual a ${min}",
    max: "${path} debe ser menor que o igual a ${max}",
    lessThan: "${path} debe ser inferior a ${less}",
    moreThan: "${path} debe ser mayor que ${more}",
    positive: "${path} debe ser un número positivo",
    negative: "${path} debe ser un número negativo",
    integer: "${path} debe ser un entero"
  },
  date: {
    min: "${path} campo debe ser posterior a ${min}",
    max: "${path} campo debe ser anterior a ${max}"
  },
  boolean: {},
  object: {
    noUnknown: "${path} campo no puede tener llaves no especificados en la forma del objeto"
  },
  array: {
    min: "${path} campo debe tener al menos ${min} elementos",
    max: "${path} campo debe tener menos de o igual a ${max} elementos"
  }
};

yup.setLocale(es);
