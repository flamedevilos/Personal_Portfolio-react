import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
  faCommentAlt,
  faPenAlt,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export const InputProps = [
  {
    id: 1,
    type: "text",
    name: "sender_name",
    placeholder: "Full name",
    errors: "Name is required",
    label: "Name*",
    icon: <FontAwesomeIcon icon={faUser} />,
    required: true,
  },
  {
    id: 2,
    type: "email",
    name: "sender_email",
    placeholder: "example@gmail.com",
    errors: "Email invalid!",
    label: "Email*",
    icon: <FontAwesomeIcon icon={faAt} />,
    required: true,
  },
  {
    id: 3,
    type: "text",
    name: "sender_tel",
    placeholder: "(0)123 01 123456",
    errors: "Phone invalid!",
    label: "Tel.",
    icon: <FontAwesomeIcon icon={faPhone} />,
  },
  {
    id: 4,
    type: "text",
    name: "sender_subject",
    placeholder: "About...",
    errors: "Subject is required",
    label: "Subject*",
    icon: <FontAwesomeIcon icon={faPenAlt} />,
    required: true,
  },
  ,
  {
    id: 5,
    type: "text",
    name: "sender_message",
    placeholder: "Your request...",
    errors: "Request is required",
    label: "Request*",
    icon: <FontAwesomeIcon icon={faCommentAlt} />,
    required: true,
  },
];
