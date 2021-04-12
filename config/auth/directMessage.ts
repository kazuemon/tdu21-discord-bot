const messages = [
    {
        name: "join",
        contents: [
            {
                body:
                    "TDU21 Discordキャンパス (非公式) へのご参加ありがとうございます！\nこちらのメッセージは参加していただいた方に自動でお送りしております。\n\n当サーバーで交流していただく前に、電大21期生かの確認のために**学籍番号の入力と学校メールアドレスでの認証**をお願いしております。\n**学籍番号だけをこのダイレクトメッセージの返信に送信してください**。\n\n===\n\n 送信例: `21EC000`\n※学科の英語表記は大文字でも小文字でも構いません。\n\n===\n\nなお、ご入力いただいた学籍番号は認証用データベースのみにハッシュ化されて保存され、認証と認証時の不具合対応以外の用途には使用致しません。\n\nプライバシーに関する情報は以下サイトにてご確認頂けます。\nhttps://tdu21-discord.org/privacy-policy"
            }
        ]
    },
    {
        name: "rejoin",
        contents: [
            {
                body:
                    ""
            }
        ]
    },
    {
        name: "join_unauth",
        contents: [
            {
                body:
                    "TDU21 Discordキャンパス (非公式) への再参加ありがとうございます！\nこちらのメッセージは参加していただいた方に自動でお送りしております。\n\n当サーバーで交流していただく前に、電大21期生かの確認のために**学籍番号の入力と学校メールアドレスでの認証**をお願いしております。\n**再参加のため認証番号の再発行と学校メールアドレス宛に認証番号の通知メールの送信を行いました。\n学籍番号の入力は完了していますので、通知メールに記載の認証番号を送信してください**。\n\n===\n\n送信例: `0000`\n\n===\n\nなお、ご入力いただいた学籍番号は認証用データベースのみにハッシュ化されて保存され、認証と認証時の不具合対応以外の用途には使用致しません。\n\nプライバシーに関する情報は以下サイトにてご確認頂けます。\nhttps://tdu21-discord.org/privacy-policy"
            }
        ]
    },
    {
        name: "join_auth",
        contents: [
            {
                body:
                    "TDU21 Discordキャンパス (非公式) への再参加ありがとうございます！\nこちらのメッセージは参加していただいた方に自動でお送りしております。\n\n**すでに学籍番号の入力と学校メールアドレスでの認証が完了しているため、サーバー内にて自動的に役職を付与しました。**\nチャンネルが見れるようになっていますのでご確認ください。\n\nなお、ご入力いただいた学籍番号は認証用データベースのみにハッシュ化されて保存され、認証と認証時の不具合対応以外の用途には使用致しません。\n\nプライバシーに関する情報は以下サイトにてご確認頂けます。\nhttps://tdu21-discord.org/privacy-policy"
            }
        ]
    },
    {
        name: "error_student_id",
        contents: [
            {
                body:
                    "入力していただいた学籍番号は受付できません。\n入力に間違いがないかどうか確認してください。\n\n===\n\n 送信例: `21EC000` \n\n===\n\n 間違いがないのに受付されない場合は、サーバーの #4101_事務部受付 チャンネルまでお問い合わせください。\n\n▼ お問い合わせ方法 ▼ \n https://tdu21-discord.org/support"
            }
        ]
    },
];

export default messages;