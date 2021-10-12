import React from 'react';
import './Registration.css'
import {Formik} from "formik";
import * as yup from 'yup'
import Button from "../Button/button";
import {connect, useDispatch, useSelector} from "react-redux";
import {TextField} from "@material-ui/core";


const Registration = ({setModalReg, setItemCart}) => {
    const validationSchema = yup.object().shape({
        name: yup.string().typeError('Write Real Name').required('*is required').min(4, 'Write Real Name').max(50, 'Too Long!'),
        secondName: yup.string().typeError('Write Real LastName').required('*is required').min(4, 'Write Real LastName').max(50, 'Too Long!'),
        age: yup.number().typeError('Write Real age').required('*is required').min(18, 'You must be 18+'),
        adress: yup.string().required('*is required').min(10, 'Write Real Adress').max(50, 'Too Long!'),
        telephone: yup.number().typeError('Write Real Phone number').required('*is required'),
        password: yup.string().min(3, 'Enter min 3 characters'),
        email: yup.string().email('please enter valid email')

    })
    const dispatch = useDispatch()
    const ItemCart = useSelector(state => state.ItemCart.data)
    return (
        <div>
            <Formik
                initialValues={{
                    name: '',
                    secondName: '',
                    age: '',
                    adress: '',
                    telephone: '',
                    password: '',
                    email: ''
                }}
                validateOnBlur
                onSubmit={(values) => {
                    console.log("Registration info:",values, "Order details:",ItemCart)
                    localStorage.removeItem("cart")
                    dispatch({type: 'SET_CART', payload: []});
                    setModalReg(false)
                    setItemCart()
                }}
                validationSchema={validationSchema}
            >
                {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                    <div className='form'>
                        <div className='Reg-iputs'>
                            {touched.name && errors.name && <p className='error-form'>{errors.name}</p>}
                                <TextField
                                    helperText="Please enter your name"
                                    id="demo-helper-text-misaligned"
                                    label="Name"
                                    selected
                                    className='TextField'
                                    type={`form`}
                                    name={`name`}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                />
                            {touched.secondName && errors.secondName &&
                            <p className='error-form'>{errors.secondName}</p>}
                                <TextField
                                    helperText="Please enter your Last Name"
                                    id="demo-helper-text-misaligned"
                                    label="Last Name"
                                    selected
                                    className='input Last Name'
                                    type={`form`}
                                    name={`secondName`}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.secondName}
                                />
                            {touched.age && errors.age && <p className='error-form'>{errors.age}</p>}
                                <TextField
                                    helperText="Please enter your age"
                                    id="demo-helper-text-misaligned"
                                    label="AGE"
                                    selected
                                    className='input age'
                                    type={`number`}
                                    name={`age`}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.age}
                                />
                            {touched.adress && errors.adress && <p className='error-form'>{errors.adress}</p>}
                                <TextField
                                    helperText="Please enter Adress"
                                    id="demo-helper-text-misaligned"
                                    label="Adress"
                                    selected
                                    className='input-adress'
                                    name={`adress`}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.adress}
                                    placeholder='Ewer green street'
                                />
                            {touched.telephone && errors.telephone && <p className='error-form'>{errors.telephone}</p>}
                                <TextField
                                    helperText="You phone number"
                                    id="demo-helper-text-misaligned"
                                    label="Phone"
                                    type={`form`}
                                    name={`telephone`}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.telephone}
                                    placeholder='+1(000) 123-45-68'
                                />
                            {touched.password && errors.password && <p className='error-form'>{errors.password}</p>}
                                <TextField
                                    helperText="enter password"
                                    id="demo-helper-text-misaligned"
                                    label="password"
                                    className='input password'
                                    type={`form`}
                                    name={`password`}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    placeholder='Password'
                                />
                            {touched.email && errors.email && <p className='error-form'>{errors.email}</p>}
                                <TextField
                                    helperText="enter email"
                                    id="demo-helper-text-misaligned"
                                    label="enter email"
                                    selected
                                    className='input email'
                                    type={`form`}
                                    name={`email`}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    placeholder='exemple@email.com'
                                />
                        </div>
                        <div className='Control-Form'>
                            <button
                                className='modal__control-btn'
                                disabled={!isValid && !dirty}
                                onClick={handleSubmit}
                                type="submit"
                                // text='CHECKOUT'
                            >CHECKOUT
                            </button>
                            <Button
                                text='Cancel'
                                classN='modal__control-btn'
                                onClick={() => {
                                    setModalReg(false)
                                }}
                            />
                        </div>
                    </div>
                )}
            </Formik>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        setModalReg: (Modal) => dispatch({type: "SET_MODAL_REG", payload: Modal}),
        setItemCart: () => dispatch({type: "DEL_CART"}),


    }
}

export default connect(null, mapDispatchToProps)(Registration);

