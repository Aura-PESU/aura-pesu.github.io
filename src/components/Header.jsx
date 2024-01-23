import React from "react";

const HeaderLink = ({ href, children }) => {
  return <a href={href}>{children}</a>;
};

const Header = () => {
  const SITE_TITLE = "Your Site Title"; // Define your site title here

  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <h2>
          <a href="/" style={styles.siteTitle}>
            {SITE_TITLE}
          </a>
        </h2>
        <div className="internal-links">
          <HeaderLink href="/" style={styles.link}>
            Home
          </HeaderLink>
          <HeaderLink href="/blog" style={styles.link}>
            Blog
          </HeaderLink>
          <HeaderLink href="/about" style={styles.link}>
            About
          </HeaderLink>
        </div>
        <div className="social-links" style={styles.socialLinks}>
          <a
            href="https://m.webtoo.ls/@astro"
            target="_blank"
            style={styles.socialLink}
          >
            <span className="sr-only">Follow Astro on Mastodon</span>
            {/* SVG for Mastodon */}
          </a>
          <a
            href="https://twitter.com/astrodotbuild"
            target="_blank"
            style={styles.socialLink}
          >
            <span className="sr-only">Follow Astro on Twitter</span>
            {/* SVG for Twitter */}
          </a>
          <a
            href="https://github.com/withastro/astro"
            target="_blank"
            style={styles.socialLink}
          >
            <span className="sr-only">Go to Astro's GitHub repo</span>
            {/* SVG for GitHub */}
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;

const styles = {
  header: {
    margin: 0,
    padding: "0 1em",
    background: "white",
    boxShadow: "0 2px 8px rgba(var(--black), 5%)",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  siteTitle: {
    margin: 0,
    fontSize: "1em",
    textDecoration: "none",
    color: "var(--black)",
  },
  link: {
    padding: "1em 0.5em",
    color: "var(--black)",
    borderBottom: "4px solid transparent",
    textDecoration: "none",
  },
  socialLinks: {
    display: "flex",
  },
  socialLink: {
    display: "flex",
    textDecoration: "none",
  },
  "@media (max-width: 720px)": {
    socialLinks: {
      display: "none",
    },
  },
};
