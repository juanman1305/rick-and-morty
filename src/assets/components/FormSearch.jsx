import { useRef } from "react"
import './styles/FormSearch.css'

const FormSearch = ( {valorInputSetter} ) => {

    const valorInput = useRef()

    const handleSubmit = e => {
        e.preventDefault()
        valorInputSetter(valorInput?.current.value.trim())
        valorInput.current.value = ''
    }

    return (
        <form className="form" onSubmit = {handleSubmit}>
            <input placeholder="type a number between 1 - 126" className="form__input" ref={valorInput} type="text" />
            <button className="form__btn">Submit</button>
        </form>
    )
}

export default FormSearch