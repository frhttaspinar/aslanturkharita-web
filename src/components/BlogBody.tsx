import Link from "next/link";
import type { BlogSection, InlineNode } from "@/lib/blog";

/** Satır içi metin ve bağlantılar; HTML string kullanılmaz. */
function Inline({ nodes }: { nodes: InlineNode[] }) {
  return (
    <>
      {nodes.map((node, index) => {
        if (typeof node === "string") return <span key={index}>{node}</span>;

        if (node.external) {
          return (
            <a key={index} href={node.href} target="_blank" rel="noopener noreferrer">
              {node.text}
            </a>
          );
        }

        return (
          <Link key={index} href={node.href}>
            {node.text}
          </Link>
        );
      })}
    </>
  );
}

export default function BlogBody({ sections }: { sections: BlogSection[] }) {
  return (
    <div className="prose">
      {sections.map((section, index) => {
        switch (section.type) {
          case "heading":
            return section.level === 2 ? (
              <h2 key={index}>{section.text}</h2>
            ) : (
              <h3 key={index}>{section.text}</h3>
            );

          case "paragraph":
            return (
              <p key={index}>
                <Inline nodes={section.content} />
              </p>
            );

          case "list":
            return section.ordered ? (
              <ol key={index} className="prose__list prose__list--ordered">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Inline nodes={item} />
                  </li>
                ))}
              </ol>
            ) : (
              <ul key={index} className="prose__list">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Inline nodes={item} />
                  </li>
                ))}
              </ul>
            );

          case "note":
            return (
              <aside key={index} className="prose__note">
                <p className="prose__note-title">{section.title}</p>
                <p>
                  <Inline nodes={section.content} />
                </p>
              </aside>
            );

          case "sources":
            return (
              <section key={index} className="prose__sources" aria-labelledby="kaynaklar">
                <h2 id="kaynaklar">Kaynaklar</h2>
                <ul>
                  {section.items.map((item) => (
                    <li key={item.url}>
                      <a href={item.url} target="_blank" rel="noopener noreferrer">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            );
        }
      })}
    </div>
  );
}
