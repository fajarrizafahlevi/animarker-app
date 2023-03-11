interface Image {
  webp: { large_image_url: string };
}

interface Anime {
  mal_id: string;
  images: Image;
  title: string;
  synopsis: string;
}

interface HomeProps {
  animes: Anime[];
}

function Home(props: HomeProps) {
  return (
    <main className="container-md">
      {props.animes.map((anime: Anime) => (
        <div
          key={anime.mal_id}
          className="card mb-3"
        >
          <img
            src={anime.images.webp.large_image_url}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{anime.title}</h5>
            <p className="card-text">{anime.synopsis}</p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      ))}
    </main>
  );
}

export default Home;
