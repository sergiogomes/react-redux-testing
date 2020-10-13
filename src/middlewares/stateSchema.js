export default {
  $id: "http://example.com/root.json",
  type: "object",
  definitions: {},
  $schema: "http://json-schema.org/draft-07/schema#",
  properties: {
    auth: {
      $id: "#/properties/auth",
      type: "boolean",
      title: "Auth",
      default: false,
      examples: [false],
    },
    comments: {
      $id: "#/properties/comments",
      type: "array",
      title: "Comments",
      items: {
        $id: "#/properties/comments/items",
        type: "string",
        title: "The Comments Schema",
        default: "",
        examples: ["Comment #1", "Comment #2"],
      },
    },
  },
};
