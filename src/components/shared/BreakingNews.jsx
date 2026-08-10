"use client";
const breakingNews = [
  {
    id: 1,
    title: "Major Storm Hits Coastal Areas",
  },
  {
    id: 2,
    title: "Global Markets Rise After Positive Economic Data",
  },
  {
    id: 3,
    title: "Bangladesh Announces New Digital Economy Measures",
  },
  {
    id: 4,
    title: "National Cricket Team Secures Important Victory",
  },
  {
    id: 5,
    title: "Scientists Announce Renewable Energy Breakthrough",
  },
  {
    id: 6,
    title: "New AI Technology Promises Faster Medical Analysis",
  },
  {
    id: 7,
    title: "World Leaders Meet for Emergency Climate Summit",
  },
  {
    id: 8,
    title: "Major City Launches New Public Transportation Project",
  },
];

const BreakingNews = () => {
  return (
    <div className="flex items-center gap-3 shadow-sm p-3">
      <button className="btn btn-error">Latest</button>
      <marquee
        onMouseEnter={(e) => e.currentTarget.stop()}
        onMouseLeave={(e) => e.currentTarget.start()}
        direction="left"
      >
        {breakingNews.map((bnews) => (
          <span key={bnews.id}>{bnews.title}. </span>
        ))}
      </marquee>
    </div>
  );
};

export default BreakingNews;
