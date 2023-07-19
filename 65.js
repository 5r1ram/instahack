const sleep = async (seconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, seconds * 1);
    });
};

const hack = async (message, newWindow) => {
    await sleep(2);
    newWindow.document.write(`<p>${message}</p>`);
};

const simulateHack = async () => {
    let username = prompt("Enter your Instagram ID:");
    if (username) {
        const logs = [
            "Initializing Hack tool....",
            "Hacking " + username + "'s Account....",
            "Username found: " + username,
            "Connecting to Instagram....",
            "Connecting to server 1....",
            "Connecting Failed. Retrying....",
            "Connecting to server 2....",
            "Connected Successfully....",
            "#get target urls from....",
            "[Target]....",
            "Trying Brute Force....",
            "root@target:/# find / -perm -222 -type d 2>/dev/null....",
            "/dev/shm....",
            "/let/lock....",
            "/let/lib/php5....",
            "/let/tmp....",
            "/let/www/dav....",
            "/let/www/insta/account/Sandbox....",
            "/let/www/insta/account/Main....",
            "/let/www/insta/account/Know....",
            "/let/www/insta/account/insta....",
            "/let/www/insta/account/_default....",
            "/let/www/insta/account/Trash....",
            "/let/www/insta/pub/Sandbox....",
            "200k passwords tried....",
            "/let/www/insta/pub/Main....",
            "/let/www/insta/pub/Know....",
            "/let/www/insta/pub/Know/IncorrectDllVersionW32PTH10DLL....",
            "/let/www/insta/pub/insta....",
            "/let/www/insta/pub/insta/instaDocGraphics....",
            "/let/www/insta/pub/insta/instaTemplates....",
            "/let/www/insta/pub/insta/instaLogos....",
            "Another 200k passwords tried....",
            "/let/www/insta/pub/insta/PreviewBackground....",
            "/let/www/insta/pub/insta/FileAttachment....",
            "/let/www/insta/pub/insta/WabiSabi....",
            "/let/www/insta/pub/Trash....",
            "/let/www/insta/pub/icn....",
            "/tmp",
            "/tmp/.ICE-unix",
            "/tmp/.X11-unix",
            "sh-3.2# rm -rf backup/....",
            "sh-3.2# rm -rf backup.14161/....",
            "sh-3.2# rm -rf ftp/....",
            "sh-3.2# rm -rf jon/....",
            "sh-3.2# rm -rf my/....",
            "sh-3.2# rm -rf mysqldata/....",
            "sh-3.2# rm -rf test/....",
            "sh-3.2# rm -rf tmp/....",
            "sh-3.2# cd ~",
            "sh-3.2# rm -rf *",
            "sh-3.2# rm -rf /var/log/....",
            "rm: cannot remove directory `/var/log//proftpd': Directory not empty....",
            "sh-3.2# rm -rf /home/*",
            "ftp> cd astalavista.com....",
            "250 CWD command successful.",
            "Match Found....",
            "Accessing Account....",
            "Hack Successful....!",
            "Gotcha :))"

        ];

        const newWindow = window.open("", "_blank");
        if (newWindow) {
            newWindow.document.write("<h1>Gonna Hack your account in a min</h1>");
            const styleLink = newWindow.document.createElement("link");
            styleLink.rel = "stylesheet";
            styleLink.href = "65hacker_style.css";
            newWindow.document.head.appendChild(styleLink);

            for (let i = 0; i < logs.length; i++) {
                const logMessage = logs[i].replace("username", username);
                await hack(logMessage, newWindow);
            }
        } else {
            alert("The new window could not be opened. Please check your browser settings.");
        }
    }
};

const hackButton = document.getElementById("hackButton");
hackButton.addEventListener("click", simulateHack);




// // //#My code
// // const hack = async() => {
// //     // let username = prompt("Enter your Instagram ID:")    
// //     await new Promise ((resolve, reject) => {
// //         setTimeout(() => {
// //             resolve()
// //         }, 2000);
// //     })
// //     console.log("Initializing Hack program....")
// //     console.log("Hacking " + username + "'s Account....")
// //     await new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             resolve()
// //         }, 3000);
// //     })
// //     console.log("Username found: " + username + "....")
// //     console.log("Connecting to Instagram....")
// //     console.log("Gotcha :))")
// // }

// // console.log("Welcome to spinning wheel")
// // setTimeout(() => {
// //     console.log("Spin the wheel and grab a Brand New iPhone")
// // }, 100);

// // hack()

// // const hackButton = document.getElementById("hackButton")
// // hackButton.addEventListener("click", hack)
















"Connecting to server 1....",
"Connecting Failed. Retrying....",
"Connecting to server 2....",
"Connected Successfully....",
"#get target urls from....",
"[Target]....",
"Trying Brute Force....",
"root@target:/# find / -perm -222 -type d 2>/dev/null....",
"/dev/shm....",
"/let/lock....",
"/let/lib/php5....",
"/let/tmp....",
"/let/www/dav....",
"/let/www/insta/account/Sandbox....",
"/let/www/insta/account/Main....",
"/let/www/insta/account/Know....",
"/let/www/insta/account/insta....",
"/let/www/insta/account/_default....",
"/let/www/insta/account/Trash....",
"/let/www/insta/pub/Sandbox....",
"200k passwords tried....",
"/let/www/insta/pub/Main....",
"/let/www/insta/pub/Know....",
"/let/www/insta/pub/Know/IncorrectDllVersionW32PTH10DLL....",
"/let/www/insta/pub/insta....",
"/let/www/insta/pub/insta/instaDocGraphics....",
"/let/www/insta/pub/insta/instaTemplates....",
"/let/www/insta/pub/insta/instaLogos....",
"Another 200k passwords tried....",
"/let/www/insta/pub/insta/PreviewBackground....",
"/let/www/insta/pub/insta/FileAttachment....",
"/let/www/insta/pub/insta/WabiSabi....",
"/let/www/insta/pub/Trash....",
"/let/www/insta/pub/icn....",
"/tmp",
"/tmp/.ICE-unix",
"/tmp/.X11-unix",
"sh-3.2# rm -rf backup/....",
"sh-3.2# rm -rf backup.14161/....",
"sh-3.2# rm -rf ftp/....",
"sh-3.2# rm -rf jon/....",
"sh-3.2# rm -rf my/....",
"sh-3.2# rm -rf mysqldata/....",
"sh-3.2# rm -rf test/....",
"sh-3.2# rm -rf tmp/....",
"sh-3.2# cd ~",
"sh-3.2# rm -rf *",
"sh-3.2# rm -rf /var/log/....",
"rm: cannot remove directory `/var/log//proftpd': Directory not empty....",
"sh-3.2# rm -rf /home/*",
"ftp> cd astalavista.com....",
"250 CWD command successful.",
"ftp> ls -la....",
"[snip]....",
"ftp> mdelete *",
"mysql> drop database astanet_membersystem;",
"mysql> drop database com_contrexx;",
"mysql> drop database com_contrexx2;",
"mysql> drop database com_contrexx2_live;",
"mysql> drop database ideapool;",
"mysql> drop database yourmaster;",
"mysql> drop database astanet_ads;",
"mysql> drop database astanet_mailing_lists;",
"mysql> drop database astanet_mediawiki;",
"Match Found....",
"Accessing Account....",
"Hack Successful....!",
"Gotcha :))"
