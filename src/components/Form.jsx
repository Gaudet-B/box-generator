import { useState } from "react"

const Form = (props) => {
    const { boxes, setBox } = props


    const newBox = e => {
        e.preventDefault()
        // console.log(props.boxes.color)
        props.addBox(props.boxes.color)
        // resetInput()
    }

    // const resetInput = () => {
    //     setBox("")
    // }

    const colorTracker = e => {
        setBox({
            ...boxes,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <form className="form" onSubmit={ newBox }>
                <div className="d-flex flex-row">
                    <label className="form-label m-2" htmlFor="color">Color:</label>
                    <input className="form-control m-2" name="color" type="text" onChange={ colorTracker } />
                    <input className="btn btn-outline-dark m-2 px-4" type="submit" value="Add" />
                </div>
            </form>
        </div>
    )
}

export default Form
