export default function DynamicMetadataDemo() { 
  const post = {
    title: 'Hello World',
    keywords: 'hello, world, react, demo'
  };
  
  return (
    <article>
      <h1>{post.title}</h1>
      <title>{post.title}</title>
      <meta name="author" content="Josh" />
      <link rel="author" href="https://twitter.com/joshcstory/" />
      <meta name="keywords" content={post.keywords} />
      <p>
        Eee equals em-see-squared...
      </p>
    </article>
  )

}