import React, { useState } from "react";

const Newsfeed = () => {
  const [posts, setPosts] = useState([]);
  const [postContent, setPostContent] = useState("");
  const [commentContent, setCommentContent] = useState({});

  const handlePostSubmit = () => {
    if (postContent.trim()) {
      const newPost = {
        id: Date.now(),
        userImage:
          "https://image.tensorartassets.com/cdn-cgi/image/anim=true,plain=false,w=500,q=85/workflow_template_showcase/743100793567249843/af54e545-263c-ea58-95fd-5003773d6825.png", // Placeholder user image URL
        userName: "Yoel Adamson-Brown",
        activity1: "Activity happened on 4th Dec 2023",
        activity2: "First posted at 15:55 on 1st December 2025",
        activity3: "Last edited at 15:35 on 5th Dec 2025",
        content: postContent,
        timestamp: new Date().toLocaleString(),
        reactions: 0,
        comments: [],
      };
      setPosts([newPost, ...posts]);
      setPostContent("");
    }
  };

  const handleLike = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, reactions: post.reactions + 1 } : post
      )
    );
  };

  const handleCommentChange = (id, value) => {
    setCommentContent({ ...commentContent, [id]: value });
  };

  const handleCommentSubmit = (id) => {
    if (commentContent[id]?.trim()) {
      const updatedPosts = posts.map((post) => {
        if (post.id === id) {
          return {
            ...post,
            comments: [...post.comments, commentContent[id]],
          };
        }
        return post;
      });
      setPosts(updatedPosts);
      setCommentContent({ ...commentContent, [id]: "" });
    }
  };

  return (
    <div>
      {/* Create Post Input */}
      <div className="mb-4 bg-white p-4 rounded-lg shadow-md">
        <div className="flex">
          <input
            type="text"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            placeholder="What's on your mind?"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button
            onClick={handlePostSubmit}
            className="ml-2 px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-colors"
          >
            Post
          </button>
        </div>
      </div>

      <h3 className="text-start ml-20">Newsfeed</h3>
      <hr />

      <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40">
        {posts.length === 0 ? (
          <p className="text-center text-gray-500">
            No posts yet. Be the first to share something!
          </p>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="mt-5">
              <div className="flex flex-col sm:flex-row justify-around">
                <section className="flex flex-col sm:flex-row gap-2">
                  <div>
                    <img
                      width="30"
                      height="30"
                      src={post.userImage}
                      alt="icon"
                    />
                  </div>
                  <div className="text-start text-xs text-slate-400">
                    <p className="font-serif text-blue-400">{post.userName}</p>
                    <p>{post.activity1}</p>
                    <p>{post.activity2}</p>
                    <p>{post.activity3}</p>
                    <p className="bg-sky-400 text-white p-1 rounded-2xl flex items-center my-2">
                      <img
                        src="https://cdn-icons-png.freepik.com/512/16923/16923087.png"
                        alt="icon"
                        className="w-3 h-3 mr-1"
                      />
                      stories-spreadsheet-import-at-10-43-on-11th-december-2023
                    </p>
                  </div>
                </section>
                <p className="mt-4 sm:mt-10 text-xs">Edited 1 day ago</p>
                <svg
                  className="text-sky-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a1 1 0 0 1 .993.883L9 2v1.07a5.987 5.987 0 0 1 2.755 1.074l.708-.708a1 1 0 0 1 1.414 0l1.1 1.1a1 1 0 0 1 0 1.414l-.708.708A5.978 5.978 0 0 1 14 8a5.978 5.978 0 0 1-.636 2.556l.708.708a1 1 0 0 1 0 1.414l-1.1 1.1a1 1 0 0 1-1.414 0l-.708-.708A5.987 5.987 0 0 1 9 13.93V15a1 1 0 0 1-1.993.117L7 15v-1.07a5.987 5.987 0 0 1-2.755-1.074l-.708.708a1 1 0 0 1-1.414 0l-1.1-1.1a1 1 0 0 1 0-1.414l.708-.708A5.978 5.978 0 0 1 2 8a5.978 5.978 0 0 1 .636-2.556l-.708-.708a1 1 0 0 1 0-1.414l1.1-1.1A1 1 0 0 1 4.414 1.5l.708.708A5.987 5.987 0 0 1 7 1.07V1a1 1 0 0 1 1-1zM8 3.5a4.5 4.5 0 0 0 0 9 4.5 4.5 0 0 0 0-9z" />
                </svg>
              </div>

              <div className="flex justify-center mt-4">
                <button className="bg-green-500 text-white rounded-md px-3 py-1 hover:bg-green-600 transition-colors">
                  Expand story
                </button>
              </div>

              <div className="text-slate-400 text-xs sm:text-sm mt-2 px-4">
                <div className="flex items-center justify-between mt-2">
                  {/* Add Like Button */}
                  <button
                    onClick={() => handleLike(post.id)} // Add like functionality
                    className="flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6 text-red-500 mr-1" 
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                        fill="none" 
                        stroke="currentColor" // Uses the current color for the stroke
                      />
                    </svg>
                    {post.reactions} {/* Display the number of likes */}
                  </button>
                </div>

                <p className="text-end">
                  <span>{post.comments.length} comments</span>{" "}
                  <span>{post.reactions} favourites</span>
                </p>
              </div>

              <hr className="mt-2 text-black" />

              <div className="flex items-center mt-3 px-4">
                <img
                  className="mr-2"
                  width="30"
                  height="30"
                  src={post.userImage}
                  alt="icon"
                />
                <input
                  type="text"
                  value={commentContent[post.id] || ""}
                  onChange={(e) => handleCommentChange(post.id, e.target.value)}
                  placeholder="Add a comment..."
                  className="border rounded-lg p-1 flex-grow mx-2"
                />
                <button
                  onClick={() => handleCommentSubmit(post.id)}
                  className="ml-2 px-4 py-1 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-colors"
                >
                  Post
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Newsfeed;
