import Vue from "vue"
import Router from "vue-router"

import Test from "@/components/test"
import home from "@/components/home"
import help from "@/components/help"
import Login from "@/components/Login"
import Focus from "@/components/focus"
import Forgot from "@/components/Forgot"
import Forgot2 from "@/components/Forgot2"
import General from "@/components/General"
import History from "@/components/history"
import company from "@/components/company"
import releases from "@/components/releases"
import FootTool from "@/components/FootTool"
import Register from "@/components/Register"
import Register2 from "@/components/Register2"
import HelloWorld from "@/components/HelloWorld"
import Collection from "@/components/collection"
import JobFinished from "@/components/JobFinished"
import ApplyForJob from "@/components/ApplyForJob"
import GeneralChange from "@/components/GeneralChange"
import ChangePassword from "@/components/ChangePassword"
import GeneralReleases from "@/components/generalReleases"
import CompanyReleases from "@/components/companyReleases"
import GeneralPostHistory from "@/components/GeneralPostHistory"

import { PaletteButton } from "mint-ui";
import { Search } from "mint-ui";
import { Radio } from "mint-ui";
import { Field } from "mint-ui";

Vue.component(PaletteButton.name, PaletteButton);
Vue.component(Search.name, Search);
Vue.component(Radio.name, Radio);
Vue.component(Field.name, Field);

Vue.use(Router)

export default new Router({
	routes: [{
		path: "/footTool",
		name: "FootTool",
		component: FootTool,
		children: [{
			path: "/home",
			name: "home",
			component: home
		}, {
			path: "/releases",
			name: "releases",
			component: releases
		}, {
			path: "/General",
			name: "General",
			component: General
		}, {
			path: "/company",
			name: "company",
			component: company
		}]
	}, {
		path: "/forgot",
		name: "Forgot",
		component: Forgot
	}, {
		path: "/forgot2",
		name: "Forgot2",
		component: Forgot2
	}, {
		path: "/login",
		name: "Login",
		component: Login
	}, {
		path: "/register2",
		name: "Register2",
		component: Register2
	}, {
		path: "/register",
		name: "Register",
		component: Register
	}, {
		path: "/",
		name: "HelloWorld",
		component: HelloWorld
	}, {
		path: "/test",
		name: "test",
		component: Test
	}, {
		path: "/help",
		name: "help",
		component: help
	}, {
		path: "/collection",
		name: "collection",
		component: Collection
	}, {
		path: "/focus",
		name: "focus",
		component: Focus
	}, {
		path: "/history",
		name: "history",
		component: History
	}, {
		path: "/generalReleases",
		name: "generalReleases",
		component: GeneralReleases
	}, {
		path: "/companyReleases",
		name: "companyReleases",
		component: CompanyReleases
	}, {
		path: "/GeneralChange",
		name: "GeneralChange",
		component: GeneralChange
	}, {
		path: "/ChangePassword",
		name: "ChangePassword",
		component: ChangePassword
	}, {

		path: "/ApplyForJob",
		name: "ApplyForJob",
		component: ApplyForJob
	}, {
		path: "/GeneralPostHistory",
		name: "GeneralPostHistory",
		component: GeneralPostHistory
	}, {
		path: "/ApplyForJob",
		name: "ApplyForJob",
		component: ApplyForJob
	}, {
		path: "/GeneralPostHistory",
		name: "GeneralPostHistory",
		component: GeneralPostHistory
	}, {
		path: "/JobFinished",
		name: "JobFinished",
		component: JobFinished
	}]
});