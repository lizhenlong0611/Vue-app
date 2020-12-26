import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 导入
// 首页
import educationRouter from "./routes/education";
// 消息
import informationRouter from "./routes/information";
// 资讯
import newsRouter from "./routes/news";
// 我的
import centerRouter from "./routes/center";
// 404
import notFond from "@/views/404";
//热门活动
import hotactivityRouter from  "./routes/hotActivity";
//
import allschoolRouter from "./routes/allSchool"

import modPhoneNumberRouter from "./routes/modPhoneNumber"
import modPasswordRouter from "./routes/modPassword"
import waitPaidRouter from "./routes/waitPaid"

const routes = [
    ...informationRouter,
    educationRouter,
	newsRouter,
	centerRouter,
	...hotactivityRouter,
	allschoolRouter,
	modPhoneNumberRouter,
	modPasswordRouter,
	...waitPaidRouter,
	{
		path: "/",
		redirect: "/education",
	},
	{
		path: "*",
		component: notFond,
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
