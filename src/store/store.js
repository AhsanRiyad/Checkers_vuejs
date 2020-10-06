import Vue from 'vue'
import Vuex from 'vuex'
// import VueCookies from 'vue-cookies'

import axios from 'axios'
// Vue.prototype.$axios = axios;

import VueCookies from 'vue-cookies'
// import { type } from 'ramda'
Vue.use(Vuex);

export const store = new Vuex.Store({

	state: {
		apiBase: "http://13.58.205.236:8080/",
		imageUrl: "http://f1.redspice.ae/public/",
		ax: axios.create({
			// baseURL: "https://server.redspice.ae/api/",
			baseURL: "http://13.58.205.236:8080/",
			// withCredentials: true,
			// crossDomain: true
		}),
		upload: axios.create({
			// baseURL: "https://server.redspice.ae/api/",
			baseURL: "http://f1.redspice.ae/public/api/",
			// withCredentials: true,
			// crossDomain: true
		}),
		isLoggedIn: false,
		resume: {},
		biodata: {},
		componentName: "",
		registerAs: "APPLICANTS",
		resumeNextbtn: true,
		resumePrevbtn: true,
		userIp: "",
		jobExpirity: true,
		jobDetails: {},
		jobDetailsSearch: {},
		appliedJobId: ''
	},
	mutations: {
		isLoggedIn(state, payload) { state.isLoggedIn = payload; },
		appliedJobId(state, payload) { state.appliedJobId = payload; },
		biodata(state, payload) { state.biodata = payload; },
		resume(state, payload) { state.resume = { ...state.resume, payload } },
		resumeNextbtn(state, payload) { state.resumeNextbtn = payload },
		resumePrevbtn(state, payload) { state.resumePrevbtn = payload },
		componentName(state, payload) { state.componentName = payload },
		registerAs(state, payload) { state.registerAs = payload },
		jobExpirity(state, payload) { state.jobExpirity = payload },
		userIp(state, payload) { state.userIp = payload },
		jobDetails(state, payload) { state.jobDetails = payload },
		jobDetailsSearch(state, payload) { state.jobDetailsSearch = payload },
	},
	getters: {
		isLoggedIn: state => state.isLoggedIn,
		appliedJobId: state => state.appliedJobId,
		jobExpirity: state => state.jobExpirity,
		biodata: state => state.biodata,
		resume: state => state.resume,
		resumePrevbtn: state => state.resumePrevbtn,
		resumeNextbtn: state => state.resumeNextbtn,
		imageUrl: state => state.imageUrl,
		componentName: state => state.componentName,
		registerAs: state => state.registerAs,
		userIp: state => state.userIp,
		jobDetails: state => state.jobDetails,
		jobDetailsSearch: state => state.jobDetailsSearch,
	},
	actions: {
		callApi: (context, info) => {
			return new Promise((resolve, reject) => {
				const { url, params, data, method } = info;
				// const withCredentials = true;
				let headers = {
					'Authorization': 'Bearer ' + VueCookies.get('accessToken'),
					'Content-Type': "application/json",
					'Accept': "application/json",
				}
				context.state.ax.withCredentials = true;
				context.state.ax.request({ method, url, data, headers, params }).then((response) => {
					console.log('in the success');
					// console.log(response.status);
					resolve(response.data);
				}).catch((error) => {
					console.log('in the error');
					// console.log(error.response.status);
					// if(error.response.status == 401 && router.name != 'signIn') return router.push({ name: "signIn" });
					console.log('error in the store .....', error.response);
					/* if (error.response.status == 401) {
						console.log('in the unauthenticated.... store');
						VueCookies.remove('accessToken');
						context.state.isLoggedIn = false;

					} */
					reject(error);
				})
			})
		},
		update(state, value) {
			state.members[value.index].active = value.value;
		},
		upload: (context, info) => {
			return new Promise((resolve, reject) => {
				const { url, params, data, method } = info;
				// const withCredentials = true;
				let headers = {
					'Authorization': 'Bearer ' + VueCookies.get('accessToken'),
					'Content-Type': "multipart/form-data",
				}
				context.state.upload.withCredentials = true;
				context.state.upload.request({ method, url, data, headers, params }).then((response) => {
					console.log('in the success');
					// console.log(response.status);
					resolve(response.data);
				}).catch((error) => {
					console.log('in the error');
					// console.log(error.response.status);
					// if(error.response.status == 401 && router.name != 'signIn') return router.push({ name: "signIn" });
					console.log('error in the store .....', error.response);
					reject(error);
				})
			})
		}
	}

});
