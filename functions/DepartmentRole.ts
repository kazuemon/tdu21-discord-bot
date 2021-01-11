import { On, ArgsOf, Client } from "@typeit/discord";
import {
  GuildMember,
  ReactionUserManager,
  Role,
  TextChannel,
  User,
} from "discord.js";
import { Department } from "../@types/department";
import departments from "../departments";

export abstract class DepartmentRole {
  @On("messageReactionAdd")
  async onMessageReactionAdd(
    [reaction, preUser]: ArgsOf<"messageReactionAdd">,
    client: Client
  ) {
    if (reaction.partial) {
      try {
        await reaction.fetch();
      } catch (err) {
        console.error("データ取得に失敗しました");
        return;
      }
    }
    const user = await preUser.fetch();

    // Bot ではないかどうか
    if (user.bot) return;

    // 対象のメッセージかどうか
    if (reaction.message.id !== "797459494061473822") return;

    // リアクションに対応する役職があるかどうか
    const beAddedDep = departments.find(
      (department) => department.emojiId === reaction.emoji.id
    );
    if (beAddedDep === undefined) return;

    // 既にメンバーロールがついている => キャンセル
    const member = reaction.message.guild.member(user);
    const userRoles: Role[] = member.roles.cache.array();
    if (
      userRoles.find((role) => role.id === "797458909300129792") !== undefined
    ) {
      reaction.users.remove(user);
      return;
    }

    // リアクションに対応する役職を付与する
    member.roles.add([
      await reaction.message.guild.roles.fetch("797458909300129792"),
      await reaction.message.guild.roles.fetch(beAddedDep.roleId),
    ]);

    // 自己紹介チャンネルにメンション
    const introChannel = reaction.message.guild.channels.cache.get(
      "796384238885666816"
    ) as TextChannel;
    introChannel.send(
      `<:${beAddedDep.slug}:${beAddedDep.emojiId}> ${beAddedDep.name} の <@${user.id}> さんが参加しました 🎉`
    );

    // 学科チャンネルにメンション
    const depChannel = reaction.message.guild.channels.cache.get(
      beAddedDep.channelId
    ) as TextChannel;
    depChannel.send(`<@${user.id}> さんが参加しました 🎉`);
  }
}
