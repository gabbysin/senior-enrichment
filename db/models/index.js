'use strict';
const User = require('./user')
const Student = require('./student')
const Campus = require('./campus')

Student.belongsTo(Campus);


// Require all the models
	// Running each model (i.e. table) module (i.e. file) registers each model into our sequelize db so any other part of the application could call db.model('user') OR db.models.user to get access to the `user` model.
	// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/index.js`)
	// This is an acceptable pattern but it does have limitations in that if you change the name of the model you will have to change every time it is requeired everywhere 

	// let data = {
	// 	student: [
	// 		{name: "Issa Rae"},
	// 		{name: "Rachel Comey"},
	// 		{name: "Aubrey Plaza"},
	// 		{name: "Frida Kahlo" },
	// 		{name: "Alexa Chung"},
	// 		{name: "Kamala Harris"},
	// 		{name: "Jane Kim"},
	// 		{name: "Grace Hopper"},
	// 	],
	// 	campus: [
	// 		{name: "Obama Law Campus", img: 'https://img0.etsystatic.com/172/0/13285959/il_570xN.1079845342_31ay.jpg'},
	// 		{name: "Lenny Liberal Arts Campus", img: 'http://ell.h-cdn.co/assets/15/42/768x722/gallery-1444662501-lenny.png'},
	// 		{name: "Kawakubo Design Campus", img: 'https://static1.squarespace.com/static/54694a1ce4b0d4b1037fddae/t/577c3c33bebafbe36df98669/1467759726568/'},
	// 		{name: "‘Yonce Being Nothing But Amazing Campus ", img: 'https://68.media.tumblr.com/6e9ec0a98df13cf41d1b95b4c8b114a5/tumblr_ola5kguFIt1th0iaso1_1280.jpg'}
	// 	],
	// };

	// data.campus.map( campus =>{
	// 	Campus.create(campus)
	// }); 

	// data.student.map( student => {
	// 	Student.create(student)
	// 	.then(student => {
	// 		let randIdx = (Math.ceil(Math.random() * data.campus.length-1) + 1);
	// 		return student.setCampus(randIdx);
	// 	})
	// })




module.exports = {User, Student, Campus}
