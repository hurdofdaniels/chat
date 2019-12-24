import React from 'react';

import './Message.css';

import ReactEmoji from 'react-emoji';

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  var MultiMediaMessageImg = text.includes(".jpg");;

  let isImgByCurrentUser = false;

  if(user === trimmedName) {
    isSentByCurrentUser = true;
    console.log(MultiMediaMessageImg);
  }

  if(MultiMediaMessageImg === true) {
    isImgByCurrentUser = true;
    console.log("Worked")
  }

  return (
    isSentByCurrentUser && isImgByCurrentUser
      ? (
        <div className="messageContainer justifyEnd">
          <p className="sentText pr-10">{trimmedName}</p>
          <div className="messageBox backgroundBlue">
            <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
            <p className="messageText colorWhite">{MultiMediaMessageImg}</p>
          </div>
        </div>
        )
        : (
          <div className="messageContainer justifyStart">
            <div className="messageBox backgroundLight">
              <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
            </div>
            <p className="sentText pl-10 ">{user}</p>
          </div>
        )
  );
}

export default Message;
