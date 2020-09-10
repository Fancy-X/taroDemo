import React, { useEffect, useState } from "react";
import { View, Image } from "@tarojs/components";
import "./index.scss";
import { useShareAppMessage, showShareMenu } from "@tarojs/taro";

// interface IReducer {   counter: Icounter }

const Page: React.FC = () => {
  useShareAppMessage((res) => {
    if (res.from === "button") {
      // 来自页面内转发按钮
      console.log(res.target);
    }
    return {
      title: "test",
      path: "/pages/index/index",
    };
  });
  useEffect(() => {
    showShareMenu({
      withShareTicket: true,
      showShareItems: ["wechatFriends"],
    });
  }, []);
  return <View className="curse-layout">123123123123</View>;
};

export default Page;
