import * as Yup from "yup";

const validations = Yup.object().shape({
    text: Yup.string().required("text alanı zorunludur"),

});
export default validations;