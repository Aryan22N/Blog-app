"use client";

import { useEditor, EditorContent, useEditorState } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Toggle } from "@/components/ui/toggle";
import { Bold } from "lucide-react";
import { Italic } from "lucide-react";
import { Underline } from "lucide-react";
import { Highlighter } from "lucide-react";
import Highlight from "@tiptap/extension-highlight";

function MenuBar({ editor }) {
  const editorState = useEditorState({
    editor,
    selector: (ctx) => {
      if (!ctx.editor) {
        return {
          isBold: false,
          canBold: false,
          isItalic: false,
          canItalic: false,
          isUnderline: false,
          canUnderline: false,
          isHighlight: false,
          canHighlight: false,
        };
      }

      return {
        isBold: ctx.editor.isActive("bold"),
        canBold: ctx.editor.can().chain().focus().toggleBold().run(),
        isItalic: ctx.editor.isActive("italic"),
        canItalic: ctx.editor.can().chain().focus().toggleItalic().run(),
        isUnderline: ctx.editor.isActive("underline"),
        canUnderline: ctx.editor.can().chain().focus().toggleUnderline().run(),
        isHighlight: ctx.editor.isActive("highlight"),
        canHighlight: ctx.editor.can().chain().focus().toggleHighlight().run(),
      };
    },
  });

  return (
    <div className="sticky top-0 z-10 flex items-center gap-1 rounded-t-lg border-b bg-background px-2 py-1 shadow-sm">
      {" "}
      {/* Bold */}
      <Toggle
        aria-label="Toggle bold"
        pressed={editorState.isBold}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
        disabled={!editorState.canBold}
      >
        <Bold />
      </Toggle>
      {/* Italic */}
      <Toggle
        aria-label="Toggle italic"
        pressed={editorState.isItalic}
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editorState.canItalic}
      >
        <Italic />
      </Toggle>
      {/* Underline */}
      <Toggle
        aria-label="Toggle underline"
        pressed={editorState.isUnderline}
        onPressedChange={() => editor.chain().focus().toggleUnderline().run()}
        disabled={!editorState.canUnderline}
      >
        <Underline />
      </Toggle>
      {/* Heighlight */}
      <Toggle
        aria-label="Toggle highlight"
        pressed={editorState.isHighlight}
        onPressedChange={() =>
          editor.chain().focus().toggleHighlight({ color: "#fdeb80" }).run()
        }
        disabled={!editorState.canHighlight}
      >
        <Highlighter />
      </Toggle>
    </div>
  );
}

export default function Tiptap() {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [StarterKit, Highlight.configure({ multicolor: true })],
    content: "<p>Hello World!</p>",
  });

  if (!editor) return null;

  return (
    <>
      <MenuBar editor={editor} />
      <EditorContent
        editor={editor}
        className="min-h-[300px] rounded-b-lg  px-4 py-3 text-base leading-relaxed focus:outline-none"
      />
    </>
  );
}
