import React from "react";

const posts = [
  {
    image: "https://cdn.mos.cms.futurecdn.net/qg7zgqqYynueYAgqoPHbsb-1200-80.jpg",
    title: "Opening Day of Boating Season, Seattle WA",
    author: "James",
    date: "August 18, 2022",
  },
  {
    image: "https://cdn.mos.cms.futurecdn.net/qg7zgqqYynueYAgqoPHbsb-1200-80.jpg",
    title: "How To Choose The Right Laptop For Programming",
    author: "Louis Hegrebits",
    date: "July 25, 2022",
  },
  {
    image: "https://cdn.mos.cms.futurecdn.net/qg7zgqqYynueYAgqoPHbsb-1200-80.jpg",
    title: "How We Built The First Real Self-Driving Car",
    author: "Mary",
    date: "July 14, 2022",
  },
  {
    image: "https://cdn.mos.cms.futurecdn.net/qg7zgqqYynueYAgqoPHbsb-1200-80.jpg",
    title: "How To Choose The Right Laptop For Programming",
    author: "Robert",
    date: "July 14, 2022",
  },
  {
    image: "https://cdn.mos.cms.futurecdn.net/qg7zgqqYynueYAgqoPHbsb-1200-80.jpg",
    title: "How To Persuade Your Parents To Buy Fast Food",
    author: "Jon Kantner",
    date: "May 10, 2022",
  },
  {
    image: "https://cdn.mos.cms.futurecdn.net/qg7zgqqYynueYAgqoPHbsb-1200-80.jpg",
    title: "How To Build A Self-Driving Car In One Month",
    author: "Mary",
    date: "July 14, 2022",
  },
  {
    image: "https://cdn.mos.cms.futurecdn.net/qg7zgqqYynueYAgqoPHbsb-1200-80.jpg",
    title: "Self-Improvement Has Become An Extreme Sport",
    author: "James",
    date: "July 14, 2022",
  },
  {
    image: "https://cdn.mos.cms.futurecdn.net/qg7zgqqYynueYAgqoPHbsb-1200-80.jpg",
    title: "Why Buying A New Car Makes More Sense...",
    author: "Mary",
    date: "July 14, 2022",
  },
  {
    image: "https://cdn.mos.cms.futurecdn.net/qg7zgqqYynueYAgqoPHbsb-1200-80.jpg",
    title: "10 Cooking Lessons To Use In Everyday Life",
    author: "Jon Kantner",
    date: "July 14, 2022",
  },
  {
    image: "https://cdn.mos.cms.futurecdn.net/qg7zgqqYynueYAgqoPHbsb-1200-80.jpg",
    title: "Typography Can Make Or Break Your Design...",
    author: "Robert",
    date: "July 14, 2022",
  },
  {
    image: "https://cdn.mos.cms.futurecdn.net/qg7zgqqYynueYAgqoPHbsb-1200-80.jpg",
    title: "House Boating On Lake Shasta",
    author: "James",
    date: "July 14, 2022",
  },
  {
    image: "https://cdn.mos.cms.futurecdn.net/qg7zgqqYynueYAgqoPHbsb-1200-80.jpg",
    title: "Lasagna Is But A Pasta Cake",
    author: "Jon Kantner",
    date: "July 14, 2022",
  },
];

const NewsCard = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-semibold mb-6">Latest Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
            <div className="p-4">
              <h5 className="text-lg font-semibold">{post.title}</h5>
              <div className="flex items-center text-sm text-gray-500 mt-2">
                <span className="mr-2">{post.author}</span>
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default NewsCard;