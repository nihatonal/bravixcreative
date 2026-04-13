import { Link } from "react-router-dom";

const BlogFooter = () => (
  <footer className="border-t border-border bg-card">
    <div className="editorial-container py-16">
      <div className="flex flex-col items-center gap-6 text-center">
        <Link to="/" className="font-serif text-2xl font-bold text-foreground">
          Atelier<span className="text-primary">.</span>
        </Link>
        <p className="max-w-md text-sm text-muted-foreground leading-relaxed">
          A premium publication exploring the intersection of design systems, typography, and digital craftsmanship.
        </p>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Atelier. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default BlogFooter;
