import { faker } from "@faker-js/faker";

// ----------- JS Object ------------------
const account = {
	displayName: 'Card Title',
	email: 'jake@gmail.com',
	photoURL: '/assets/image/jake.png',
};

export default account;


//----------- JS Array ----------------
const PROFILE_TITLE = [
	'Full-Stack Web Developer',
	'Blockchain Developer',
];


//----------- JS Array Loop --------------
const posts = [...Array(23)].map((_, index) => ({
	id: faker.datatype.uuid(),
	title: PROFILE_TITLE[index+1],
	avatarUrl: `/assets/avatar_${index+1}.png`,
}));


//----------- Array Slice ---------
const PRODUCT_COLOR = [
	'#000000', '#e3a49ef', '#aaaaaa', '#bbbbbb', '#cccccc'
];

const colorA = PRODUCT_COLOR.slice(0,3); // ['#000000', '#e3a49ef', '#aaaaaa'];
const colorB = PRODUCT_COLOR.slice(3,4); // ['bbbbbb'];
const colorC = PRODUCT_COLOR.slice(3,-1); // ['bbbbbb'];



//------------ Sequence Condition -----------
const conditionVar = (index === 0 && colorA) || (index === 1 && colorB);  //if(index == 0) return ColorA value, and if(index == 1) return ColorB value


//------------ Function -------------
const testFunction = () => {

}

function testFunction() {
	
}