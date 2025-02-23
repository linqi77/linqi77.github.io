// 获取元素
let yesButton = document.getElementById('yes');
let noButton = document.getElementById('no');
let questionText = document.getElementById('question');
let mainImage = document.getElementById('mainImage');

let username = params.get("name");

//防止'null'变成'null'
if(username)
{questionText.innerText = questionText.innerText + safeUsername;}

let clickCount = 0; // 记录点击 No 的次数
// No 按钮的文字变化
const noTexts = [
    "？",
    "你再选一次",
    "是不是按错了^^ ",
    "你想干啥",
    "不行:(",
    "那你要去喜欢哪个小三",
    "王星如得一直喜欢我",
    "求你了",
];
// No 按钮点击事件
noButton.addEventListener('click', function () {
    clickCount++;
    // 让 Yes 变大，每次放大 2 倍
    let yesSize = 1 + clickCount * 1.2;
    yesButton.style.transform = `scale(${yesSize})`;
    // 挤压 No 按钮，每次右移 30px
    let noOffset = clickCount * 30;
    noButton.style.transform = `translateX(${noOffset}px)`;
    // 让图片和文字往上移动
    let moveUp = clickCount * 25;
    mainImage.style.transform = `translateY(-${moveUp}px)`;
    questionText.style.transform = `translateY(-${moveUp}px)`;
    // No 文案变化（前 8 次变化）
    if (clickCount <= 8) {
        noButton.innerText = noTexts[clickCount - 1];
    }
    // 图片变化（前 8 次变化）
    if (clickCount === 1) mainImage.src = "assets/images/shocked.png"; // 震惊
    if (clickCount === 2) mainImage.src = "assets/images/think.png"; // 思考
    if (clickCount === 3) mainImage.src = "assets/images/angry.png"; // 生气
    if (clickCount === 4) mainImage.src = "assets/images/crying.png"; // 哭
    if (clickCount === 5) mainImage.src = "assets/images/angry.png"; // 生气
    if (clickCount === 6) mainImage.src = "assets/images/crying.png"; // 哭
    if (clickCount === 7) mainImage.src = "assets/images/shocked.png"; // 震惊
    if (clickCount >= 8) mainImage.src = "assets/images/crying.png"; // 之后一直是哭
});

// Yes 按钮点击后，进入表白成功页面
const loveTest = (username) = `！好呀好呀，我也一直喜欢小蛋( >᎑<)♡︎ᐝ  ${username? `${safeusername}  ♡︎ᐝ(>᎑< )` : ""}`;
yesButton.addEventListener('click', function () {
    let username = questionText.innerText.split('吗？')[1].trim();
    // 先创建基础 HTML 结构
    document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text"></h1>
            <img src="assets/images/hug.png" alt="拥抱" class="yes-image">
        </div>
    `;
    // 确保用户名安全地插入
    document.querySelector(".yes-text").innerText = loveTest(username);
    // 禁止滚动，保持页面美观
    document.body.style.overflow = "hidden";
    // 给表白成功页面添加慢慢浮现动画类名
    document.querySelector('.yes-screen').classList.add('fade-in');
});
