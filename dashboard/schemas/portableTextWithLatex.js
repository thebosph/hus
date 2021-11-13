import React from "react";
const mathInlineIcon = () => (
  <span>
    <span style={{ fontWeight: "bold" }}>∑</span>b
  </span>
);
const mathIcon = () => <span style={{ fontWeight: "bold" }}>∑</span>;

export default {
  name: "portableTextWithLatex",
  title: "Body",
  type: "array",

  of: [
    {
      type: "block",
      title: "Block",
      of: [{ type: "latex", icon: mathInlineIcon, title: "Inline math" }],
    },
    { type: "latex", icon: mathIcon, title: "Math block" },
    { type: "image", title: "img in text", options: { hotspot: true } },
  ],
};
