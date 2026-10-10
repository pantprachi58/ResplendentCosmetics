"use client";

import { useRef, useState } from "react";
import { EditorContent, useEditor, useEditorState, type Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import { CharacterCount, Placeholder } from "@tiptap/extensions";
import Icon from "@/components/Icon";
import { uploadImage } from "./upload";
import styles from "./RichTextEditor.module.css";

type Props = {
  id?: string;
  initialHtml: string;
  onChange: (html: string) => void;
  invalid?: boolean;
  describedBy?: string;
};

/** Links may be absolute http(s), mailto:, tel: or a path on this site. */
const normaliseHref = (raw: string) => {
  const href = raw.trim();
  if (!href) return "";
  if (/^(https?:|mailto:|tel:|\/|#)/i.test(href)) return href;
  if (/^[\w-]+(\.[\w-]+)+/.test(href)) return `https://${href}`;
  return null;
};

/**
 * WYSIWYG article editor (TipTap / ProseMirror). Emits HTML limited to what the site renders and the
 * server sanitiser allows: H2–H4, paragraphs, bold/italic/underline/strike, lists, quotes, links, images, rules.
 */
export default function RichTextEditor({ id, initialHtml, onChange, invalid, describedBy }: Props) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3, 4] },
        code: false,
        codeBlock: false,
        link: { openOnClick: false, autolink: true, defaultProtocol: "https", HTMLAttributes: { rel: null, target: null } },
      }),
      Image,
      Placeholder.configure({ placeholder: "Start writing the article. Use “Heading 2” for each main section; they become the table of contents." }),
      CharacterCount,
    ],
    content: initialHtml,
    editorProps: {
      attributes: {
        class: styles.content,
        ...(id ? { id } : {}),
        role: "textbox",
        "aria-multiline": "true",
        "aria-label": "Article body",
        ...(invalid ? { "aria-invalid": "true" } : {}),
        ...(describedBy ? { "aria-describedby": describedBy } : {}),
      },
    },
    onUpdate: ({ editor }) => onChange(editor.isEmpty ? "" : editor.getHTML()),
  });

  return (
    <div className={`${styles.editor} ${invalid ? styles.invalid : ""}`}>
      {editor ? <Toolbar editor={editor} /> : <div className={styles.toolbar} aria-hidden="true" />}
      <EditorContent editor={editor} className={styles.surface} />
      {editor && <Footer editor={editor} />}
    </div>
  );
}

function Toolbar({ editor }: { editor: Editor }) {
  const state = useEditorState({
    editor,
    selector: ({ editor: e }) => ({
      block: e.isActive("heading", { level: 2 })
        ? "h2"
        : e.isActive("heading", { level: 3 })
          ? "h3"
          : e.isActive("heading", { level: 4 })
            ? "h4"
            : "p",
      bold: e.isActive("bold"),
      italic: e.isActive("italic"),
      underline: e.isActive("underline"),
      strike: e.isActive("strike"),
      bulletList: e.isActive("bulletList"),
      orderedList: e.isActive("orderedList"),
      blockquote: e.isActive("blockquote"),
      link: e.isActive("link"),
      canUndo: e.can().undo(),
      canRedo: e.can().redo(),
    }),
  });

  const [panel, setPanel] = useState<"link" | "image" | null>(null);
  const chain = () => editor.chain().focus();

  const setBlock = (value: string) => {
    if (value === "p") chain().setParagraph().run();
    else chain().toggleHeading({ level: Number(value.slice(1)) as 2 | 3 | 4 }).run();
  };

  const buttons: { icon: string; label: string; active?: boolean; run: () => void; disabled?: boolean }[][] = [
    [
      { icon: "undo", label: "Undo (Ctrl+Z)", run: () => chain().undo().run(), disabled: !state.canUndo },
      { icon: "redo", label: "Redo (Ctrl+Shift+Z)", run: () => chain().redo().run(), disabled: !state.canRedo },
    ],
    [
      { icon: "format_bold", label: "Bold (Ctrl+B)", active: state.bold, run: () => chain().toggleBold().run() },
      { icon: "format_italic", label: "Italic (Ctrl+I)", active: state.italic, run: () => chain().toggleItalic().run() },
      { icon: "format_underlined", label: "Underline (Ctrl+U)", active: state.underline, run: () => chain().toggleUnderline().run() },
      { icon: "strikethrough_s", label: "Strikethrough", active: state.strike, run: () => chain().toggleStrike().run() },
    ],
    [
      { icon: "format_list_bulleted", label: "Bulleted list", active: state.bulletList, run: () => chain().toggleBulletList().run() },
      { icon: "format_list_numbered", label: "Numbered list", active: state.orderedList, run: () => chain().toggleOrderedList().run() },
      { icon: "format_quote", label: "Quote", active: state.blockquote, run: () => chain().toggleBlockquote().run() },
      { icon: "horizontal_rule", label: "Divider", run: () => chain().setHorizontalRule().run() },
    ],
    [
      { icon: "link", label: "Link", active: state.link || panel === "link", run: () => setPanel(panel === "link" ? null : "link") },
      { icon: "image", label: "Insert image", active: panel === "image", run: () => setPanel(panel === "image" ? null : "image") },
      { icon: "format_clear", label: "Clear formatting", run: () => chain().unsetAllMarks().clearNodes().run() },
    ],
  ];

  return (
    <div className={styles.toolbarWrap}>
      <div className={styles.toolbar} role="toolbar" aria-label="Formatting">
        <select className={styles.blockSelect} value={state.block} onChange={(e) => setBlock(e.target.value)} aria-label="Text style">
          <option value="p">Paragraph</option>
          <option value="h2">Heading 2 (section)</option>
          <option value="h3">Heading 3</option>
          <option value="h4">Heading 4</option>
        </select>
        {buttons.map((group, i) => (
          <div key={i} className={styles.group}>
            {group.map((b) => (
              <button
                key={b.icon}
                type="button"
                className={`${styles.tool} ${b.active ? styles.toolActive : ""}`}
                onClick={b.run}
                disabled={b.disabled}
                title={b.label}
                aria-label={b.label}
                aria-pressed={b.active ?? undefined}
              >
                <Icon name={b.icon} />
              </button>
            ))}
          </div>
        ))}
      </div>
      {panel === "link" && <LinkPanel editor={editor} onClose={() => setPanel(null)} />}
      {panel === "image" && <ImagePanel editor={editor} onClose={() => setPanel(null)} />}
    </div>
  );
}

function LinkPanel({ editor, onClose }: { editor: Editor; onClose: () => void }) {
  const [href, setHref] = useState<string>(editor.getAttributes("link").href ?? "");
  const [error, setError] = useState("");

  const apply = () => {
    const value = normaliseHref(href);
    if (value === null) return setError("Enter a web address, an email (mailto:) or a page path like /treatments/botox");
    if (!value) editor.chain().focus().extendMarkRange("link").unsetLink().run();
    else editor.chain().focus().extendMarkRange("link").setLink({ href: value }).run();
    onClose();
  };

  return (
    <div className={styles.panel}>
      <Icon name="link" />
      <input
        className={styles.panelInput}
        type="text"
        value={href}
        onChange={(e) => {
          setHref(e.target.value);
          setError("");
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            apply();
          } else if (e.key === "Escape") onClose();
        }}
        placeholder="https://… or /treatments/rhinoplasty"
        aria-label="Link address"
        autoFocus
      />
      <button type="button" className={styles.panelButton} onClick={apply}>
        Apply
      </button>
      {editor.isActive("link") && (
        <button
          type="button"
          className={styles.panelButtonGhost}
          onClick={() => {
            editor.chain().focus().extendMarkRange("link").unsetLink().run();
            onClose();
          }}
        >
          Remove
        </button>
      )}
      {error && <p className={styles.panelError}>{error}</p>}
    </div>
  );
}

function ImagePanel({ editor, onClose }: { editor: Editor; onClose: () => void }) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [alt, setAlt] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const upload = async (file: File | undefined) => {
    if (!file) return;
    if (!alt.trim()) return setError("Describe the image first (used by screen readers and search engines)");
    setBusy(true);
    setError("");
    try {
      const src = await uploadImage(file);
      editor.chain().focus().setImage({ src, alt: alt.trim() }).run();
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setBusy(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  };

  return (
    <div className={styles.panel}>
      <Icon name="image" />
      <input
        className={styles.panelInput}
        type="text"
        value={alt}
        onChange={(e) => {
          setAlt(e.target.value);
          setError("");
        }}
        placeholder="Image description, e.g. Surgical markings before a tummy tuck"
        aria-label="Image description"
        maxLength={200}
        autoFocus
      />
      <input ref={fileRef} type="file" accept="image/jpeg,image/png,image/webp,image/avif,image/gif" hidden onChange={(e) => upload(e.target.files?.[0])} />
      <button type="button" className={styles.panelButton} onClick={() => fileRef.current?.click()} disabled={busy}>
        {busy ? "Uploading…" : "Choose image"}
      </button>
      <button type="button" className={styles.panelButtonGhost} onClick={onClose} disabled={busy}>
        Cancel
      </button>
      {error && <p className={styles.panelError}>{error}</p>}
    </div>
  );
}

function Footer({ editor }: { editor: Editor }) {
  const words = useEditorState({ editor, selector: ({ editor: e }) => e.storage.characterCount.words() as number });
  return (
    <div className={styles.footer}>
      <span>
        {words} words · about {Math.max(1, Math.ceil(words / 200))} min read
      </span>
      <span className={styles.hint}>Tip: paste from Word or Google Docs keeps headings, lists and links.</span>
    </div>
  );
}
