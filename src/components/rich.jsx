import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Box, Button, Typography } from "@mui/material";

const RichTextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleEditorChange = (state) => {
    setEditorState(state);
  };

  const handleSave = () => {
    const contentHtml = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    localStorage.setItem("savedContent", contentHtml);
    alert("Content saved successfully!");
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h5" gutterBottom>
        Rich Text Editor
      </Typography>
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        toolbar={{
          options: ["inline", "blockType", "list", "textAlign", "history"],
        }}
      />
      <Button variant="contained" sx={{ mt: 2 }} onClick={handleSave}>
        Save Content
      </Button>
    </Box>
  );
};

export default RichTextEditor;
