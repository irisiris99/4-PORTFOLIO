const quotes = [
	{
		quote: "고통없인 얻는 것도 없다.",
		author: "✦ Benjamin Franklin",
	},
	{
		quote: "난 혼자 있을 때 가장 외롭지 않았다.",
		author: "✦ Edward Gibbon",
	},
	{
		quote: "인생에서 가장 큰 영광은 넘어지지 않는 것에 있는 것이 아니라 매번 일어선다는 데 있다",
		author: "✦ Nelson Mandela",
	},
	{
		quote: "인생은 내면으로부터 나온다. 당신이 내면을 바꿀 때, 삶은 외부로 바뀐다.",
		author: "✦ Kamal Ravikant",
	},
	{
		quote: "성공은 종점이 아니며, 실패는 치명적이지 않습니다. 중요한 것은 용기이다.",
		author: "✦ Winston S. Churchill",
	},
	{
		quote: "일을 시작하는 방법은 말하는 것을 멈추고 행동으로 옮기는 것이다.",
		author: "✦ Walt Disney",
	},
	{
		quote: "모방에서 성공하기보다는 독창성에서 실패하는 것이 낫다.",
		author: "✦ Herman Melville",
	},
	{
		quote: "만약 네가 리스크를 무릅쓰지 않으려면, 어쩔 수 없이 평범함에 안주할 것이다.",
		author: "✦ Jim Rohn",
	},
	{
		quote: "자신이 세상을 바꿀 수 있다고 생각할 만큼 미친 사람들이 바로 세상을 바꾸는 사람들입니다.",
		author: "✦ Anonymous",
	},
	{
		quote: "모든 진보는 안전 구역 밖에서 이루어집니다.",
		author: "✦ Michael John Bobak",
	},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

quote.style.fontSize = "16px";
author.style.fontSize = "14px";