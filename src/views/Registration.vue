<template>
    <div class="login">
        <div class="loading"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-12 login-logo">
                    <router-link to="/">
                        <img
                                class="img-responsive"
                                alt="job alert logo"
                                src="../assets/logo.png"
                        />
                    </router-link>
                </div>

                <div class="col-md-6 offset-md-3">
                    <div class="login-box">
                        <ValidationObserver ref="signupform" v-slot="{ handleSubmit }">
                            <form @submit.stop.prevent="handleSubmit(onSubmit)">

                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email ID / Username</label>
                                    <ValidationProvider
                                            vid="email"
                                            name="E-mail"
                                            :rules="{ required: true, email: true }"
                                            v-slot="{ errors }"
                                    >
                                        <input
                                                v-model="signUpForm.email"
                                                placeholder="Enter your email ID / Username"
                                                type="email"
                                                class="form-control"
                                                id="exampleInputEmail1"
                                                aria-describedby="emailHelp"
                                        />
                                        <span class="error-text">{{ errors[0] }}</span>
                                        <span v-if="info" class="error-text">{{info}}</span>
                                    </ValidationProvider>
                                    <small id="emailHelp" class="form-text text-muted"
                                    >We'll never share your email with anyone else.</small
                                    >
                                </div>

                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>

                                    <ValidationProvider
                                            vid="password"
                                            name="Password"
                                            :rules="{ required: true, min: 6 }"
                                            v-slot="{ errors }"
                                    >
                                        <input
                                                placeholder="Enter your password"
                                                type="password"
                                                class="form-control"
                                                id="exampleInputPassword1"
                                                v-model="signUpForm.password"
                                        />

                                        <span class="error-text">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>

                                <button type="submit" class="btn btn-primary btn-block">
                                    Sign Up
                                </button>

                            </form>
                        </ValidationObserver>

                        <div class="privacy_text text-muted">
                            All your activity will remain private
                        </div>

                        <div class="bottom_text">
                            By registering a new account, you agree to JOB ALERT’s
                            <a href="#">Terms of Service</a> and consent to our
                            <a href="#">Cookie Policy</a> and <a href="#">Privacy Policy</a>.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: "Registration",
        data() {
            return{
                signUpForm: {
                    email: '',
                    password: '',
                },
                successMessage: '',
                info: ''
            }
        },
        methods: {

            onSubmit() {

                axios({
                    method: 'post',
                    url: 'http://13.58.205.236:8080/users',
                    data: JSON.stringify(this.signUpForm),
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                    },

                })
                    .then(res => {
                        this.info = '';
                        this.successMessage = res.data;
                        this.$router.push('/login');
                    })
                    .catch(err => (this.info = err.response.data.message));

                // console.log(JSON.stringify(this.signUpForm));

            },

            onReset() {
                console.log('reset');
                this.signUpForm.email = '';
                this.signUpForm.password = '';
                this.$nextTick(() => {
                    this.$refs.signupform.reset();
                });
            }
        }
    }
</script>

<style scoped lang="scss">
    .btn-primary {
        background: #00204e;
        border-color: #00204e;
    }

    .login {
        min-height: 100vh;
        padding: 20px 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .login-logo {
        text-align: center;
        img {
            margin-bottom: 15px;
            max-height: 35px;
        }
    }

    .login-box {
        padding: 30px 50px;
        box-shadow: 0 0 15px 2px rgba(0, 0, 0, 0.45);
    }

    .or-divider {
        text-align: center;
        font-size: 18px;
        position: relative;
        color: #00204e;
        font-weight: 700;
        margin: 10px 0;
        &:before,
        &:after {
            content: "";
            display: block;
            height: 2px;
            width: 45%;
            position: absolute;
            top: 13px;
            background: #ddd;
        }
        &:before {
            left: 0;
        }
        &:after {
            right: 0;
        }
    }

    .social_login {
        text-align: center;
        a {
            display: inline-block;
            border: 1px solid;
            height: 30px;
            width: 30px;
            text-align: center;
            line-height: 30px;
            font-size: 18px;
            margin: 0 10px;
            border-radius: 5px;
        }
    }

    .privacy_text {
        font-size: 12px;
        color: #ddd;
        margin: 10px 0;
    }
    .bottom_text {
        font-size: 16px;
        font-weight: 700;
        a,
        a:-webkit-any-link {
            color: #0000ff;
        }
    }

    a:-webkit-any-link,
    .forgot-pass {
        color: #002b68;
    }
    .forgot-pass {
        text-align: right;
        text-decoration: none;
    }

    .error-text{
        color: red;
        font-size: 12px;
    }

</style>