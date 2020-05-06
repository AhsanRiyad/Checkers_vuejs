<template>
    <div class="registration">
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
                        <ValidationObserver ref="loginform" v-slot="{ handleSubmit }">
                            <form @submit.prevent="handleSubmit(onSubmit)">

                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email ID / Username</label>
                                    <ValidationProvider
                                            vid="email"
                                            name="E-mail"
                                            :rules="{ required: true, email: true }"
                                            v-slot="{ errors }"
                                    >
                                        <input
                                                v-model="loginForm.email"
                                                placeholder="Enter your email ID / Username"
                                                type="email"
                                                class="form-control"
                                                id="exampleInputEmail1"
                                                aria-describedby="emailHelp"
                                        />
                                        <span class="error-text">{{ errors[0] }}</span>
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
                                                v-model="loginForm.password"
                                        />

                                        <span class="error-text">{{ errors[0] }}</span>
                                    </ValidationProvider>

                                    <small id="passlHelp" class="form-text text-muted forgot-pass"
                                    ><a href="#">Forgot Password?</a></small
                                    >
                                </div>

                                <button type="submit" class="btn btn-primary btn-block">
                                    Login
                                </button>

                            </form>
                        </ValidationObserver>


                        <div class="or-divider">or</div>

                        <div class="social_login">
                            <a href="#"><i class="fa fa-facebook"></i></a>
                            <a href="#"><i class="fa fa-google"></i></a>
                        </div>
                        <div class="privacy_text text-muted">
                            All your activity will remain private
                        </div>

                        <div class="bottom_text">
                            By signing in to your account, you agree to JOB ALERT’s
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
        data: () => ({
            loginForm: {
                email: 'jahurul1@gmail.com',
                password: '123456'
            },
        }),
        methods: {
            onSubmit() {
                fetch(`https://1idoi.sse.codesandbox.io/login`, {
                    method: "post",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify({
                        email: this.loginForm.email,
                        password: this.loginForm.password
                    })
                })
                    .then(res => res.json())
                    .then(json => {
                        if (json.errors) {
                            console.log(json.errors);
                            this.$refs.loginform.setErrors(json.errors);
                            return;
                        }

                        alert(json.message);
                    });

                const headers = {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer 87bc9364a7434415babdf8733eb914ba|8e9030afad044621a276b3c82cd5a3cb'
                };

                axios.post('http://13.58.205.236:8080/resume/biodata', JSON.stringify(this.loginForm), {
                    headers: headers
                })
                    .then(function (response) {
                        console.log(response.status);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });


            }
        },
        created() {
            console.log('loaded');
            const headers = {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            };

            // axios.post('http://13.58.205.236:8080/resume/biodata', JSON.stringify(this.loginForm), {
            //     headers: headers
            // })
            //     .then(function (response) {
            //         console.log(response.status);
            //     })
            //     .catch(function (error) {
            //         console.log(error);
            //     });

            axios({
                method: 'post',
                url: 'http://13.58.205.236:8080/users/login',
                data: JSON.stringify(this.loginForm),
                headers: headers,

            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
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