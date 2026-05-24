export default function RootPage() {
    return (
      <html lang="en">
        <head>
          <meta httpEquiv="refresh" content="0; url=/en/" />
          <link rel="canonical" href="https://bravixcreative.com/en/" />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.location.replace('/en/');`,
            }}
          />
        </head>
        <body>
          <p>Redirecting...</p>
        </body>
      </html>
    );
  }