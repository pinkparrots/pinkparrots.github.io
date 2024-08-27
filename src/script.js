const toDiscord = document.querySelectorAll('.discordlogo');
const copyServer = document.querySelectorAll('button-connect-server');

// 각 텍스트를 클릭할 때마다 다른 alert 메시지를 표시
toDiscord.forEach(toDiscord => {
    toDiscord.addEventListener('click', () => {
        window.location.href = "https://discord.gg/sJ8eKW8r6s";
    });
});