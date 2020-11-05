import React from "react";
import {reduxForm, InjectedFormProps, Field} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect, useSelector} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom"
import styles from "../common/FormsControls/FormsControls.module.css"
import {RootState} from "../../redux/redux-store";


type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string | null
}


const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props: any) => {

    let captcha = useSelector<RootState, string | null>(state => state.auth.captchaUrl)

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input} validate={[required]} type={"password"}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input}/> remember me
            </div>
            {captcha && <img src={captcha}/>}
            {captcha && <Field name={"captcha"} component={Input} validate={[required]}/>}

            {props.error && <div className={styles.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

let LoginReduxForm = reduxForm<FormDataType>({form: "login"})(LoginForm)

export const Login = (props: any) => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if(props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state: any) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);