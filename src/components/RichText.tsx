import { RichText as RichTextCMS } from "@graphcms/rich-text-react-renderer";
import { ComponentProps } from "react";

type RichTextProps = ComponentProps<typeof RichTextCMS>;

export function RichText({ ...props }: RichTextProps) {
  return (
    <RichTextCMS
      renderers={{
        h1: ({ children }) => (
          <h1 className="text-5xl font-bold mb-4">{children}</h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-4xl font-bold mb-4">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-3xl font-bold mb-4">{children}</h3>
        ),
        h4: ({ children }) => (
          <h4 className="text-2xl font-bold mb-4">{children}</h4>
        ),
        h5: ({ children }) => (
          <h5 className="text-xl font-bold mb-4">{children}</h5>
        ),
        bold: ({ children }) => <strong>{children}</strong>,
        italic: ({ children }) => <span className="italic">{children}</span>,
        underline: ({ children }) => (
          <span className="underline">{children}</span>
        ),
        p: ({ children }) => <p className="text-lg mb-4">{children}</p>,
        ul: ({ children }) => (
          <ul className="flex flex-col gap-2 list-disc list-inside mb-4">
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="flex flex-col gap-2 list-decimal list-inside mb-4">
            {children}
          </ol>
        ),
        code_block: ({ children }) => (
          <p className="border border-gray-300 bg-gray-100 px-4 py-2 mb-4 rounded-md font-mono">
            {children}
          </p>
        ),
      }}
      {...props}
    />
  );
}
