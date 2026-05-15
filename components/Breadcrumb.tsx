import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-obsidian-graphite border-b border-steel-silver/10 px-4 lg:px-8 py-3"
    >
      <ol className="mx-auto max-w-7xl flex items-center gap-2 text-xs text-steel-silver/60">
        <li>
          <Link href="/" className="hover:text-chrome-highlight transition-colors">
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <span aria-hidden="true" className="text-steel-silver/30">/</span>
            {item.href ? (
              <Link href={item.href} className="hover:text-chrome-highlight transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-steel-silver">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
