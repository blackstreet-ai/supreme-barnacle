import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({
                                       searchParams,
                                   }: {
    searchParams: Promise<{ query?: string }>;
}) {
    const query = (await searchParams).query;

    const posts = [
        {
            _createdAt: new Date(),
            views: 100,
            author: { _id: 1, name: "John Doe" },
            id: 1,
            description: "This is a description of the post",
            image: "https://placehold.co/600x400",
            category: "Technology",
            title: "Post Title",
        }
    ];

  return (
      <>
          <section className={'pink_container'}>
              <h1 className={"heading"}>Pitch Your Startup,<br/> Connect With Entrepreneurs</h1>
              <p className={"sub-heading !max-w-3xl"}> Submit Ideas, Vote on Pitches and get noticed in Virtual Competitions.</p>
              <SearchForm query={query} />
          </section>

          <section className={"section_container"}>
              <p className={"text-30-semibold"}>
                  {query ? `Search results for "${query}"` : "All Startups"}
              </p>

              <ul className={"mt-7 card_grid"}>
                  {posts ?.length > 0 ? (
                      posts.map((post:StartupCardType, index:number) => (
                          <StartupCard key={post?._id} post={post}/>
                      ))
                  ) : (
                      <p className={"no-results"}>No Startup Found</p>
                  )}
              </ul>
          </section>
      </>
  );
}
