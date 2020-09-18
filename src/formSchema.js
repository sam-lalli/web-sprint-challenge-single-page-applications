import * as yup from 'yup'

export default yup.object().shape({
    order_name: yup.string()
      .required('Username is required')
      .min(2, 'Username must be 2 chars or longer'),
    pepperoni: yup.boolean(),
    bacon: yup.boolean(),
    sausage: yup.boolean(),
    onion: yup.boolean(),
    ham: yup.boolean(),
    peppers: yup.boolean(),
    pineapple: yup.boolean(),
    mushrooms: yup.boolean(),
  })