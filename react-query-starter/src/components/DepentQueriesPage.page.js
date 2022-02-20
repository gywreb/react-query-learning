import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const getUserByEmail = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`);
};

const getCourseByChannelId = (channelId) => {
  return axios.get(`http://localhost:4000/channels/${channelId}`);
};

const DepentqueriespagePage = ({ email }) => {
  const { data: user } = useQuery(["user", email], () => getUserByEmail(email));

  const channelId = user?.data.channelId;

  const { data: channel } = useQuery(
    ["channel", channelId],
    () => getCourseByChannelId(channelId),
    { enabled: !!channelId }
  );

  return <div>Depent Queries Page</div>;
};

export default DepentqueriespagePage;
